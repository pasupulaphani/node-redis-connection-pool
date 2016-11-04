var Pool = require("generic-pool").Pool;
var redis = require("./redis");
var logger = require("./logger");

var debug = require("debug")("lib:redisPool");

function RedisPool (name, redisOptions={}, poolOptions={}) {

  this._redisDb = redisOptions.db || 0;

  let _pool = null;
  var _redisOptions = redisOptions;
  var _poolOptions = Object.assign(poolOptions, {name: name});

  // Build new Redis database clients.
  _poolOptions.create = function (cb) {
    var client =  redis.createClient(_redisOptions);

    if (["undefined", null, ""].indexOf(this._redisDb) !== -1) {
      logger.info("Selected Redis DB: ", this._redisDb);
      debug("Selected Redis DB: ", this._redisDb);
      client.select(this._redisDb);
    }

    // Handle client connection errors.
    client.on("error", function (err) {
      logger.error("Redis pool: ", name, err);
      throw err;
    });

    // Register the authentication password if needed.
    if (_redisOptions.auth_pass) {
      client.auth(_redisOptions.auth_pass);
    }

    cb(null, client);
  };

  // The destroy function is called when client connection needs to be closed.
  _poolOptions.destroy = function (client) {
    try {
      // Flush when closing.
      client.end(true);
      logger.info(`Checking pool info after client destroyed. Available count : ${_pool.availableObjectsCount()}. Pool size: ${_pool.getPoolSize()}`);

    } catch (err) {
      throw new Error("error", "Error destroying redis client.");
    }
  };

  // Now that the pool settings are ready create a pool instance.
  _pool = new Pool(_poolOptions);

  // Acquire a database connection and use an optional priority.
  this.acquire = function (cb, priority) {
    _pool.acquire(cb, priority);
  };

  this.acquireDb = function (cb, db, priority) {
    _pool.acquire(function (err, client) {
      if (!err && client._db_selected !== db) {
        client["_db_selected"] = db;
        client.select(db);
      }
      debug("DB selected: ", client._db_selected);

      return cb(err, client);
    }, priority);
  };

  // Release a database connection to the pool.
  this.release = function (client) {
    // Always reset the DB to the default. This prevents issues
    // if a user used the select command to change the DB.

    if (client._db_selected !== this._redisDb) {
      debug("Releasing client. Reset the DB to the given: ", this._redisDb);
      client.select(this._redisDb);
    }
    _pool.release(client);
  };

  // Drains the connection pool and call the callback id provided.
  this.drain = function (cb) {
    _pool.drain(() => {
      _pool.destroyAllNow();
      if (cb) {
        cb();
      }
    });
  };

  // Returns factory.name for this pool
  this.getName = function () {
    return _pool.getName();
  };

  this.getDB = function () {
    return this._redisDb;
  };

  this.getPoolSize = function () {
    return _pool.getPoolSize();
  };

  this.availableObjectsCount = function () {
    return _pool.availableObjectsCount();
  };

  this.waitingClientsCount = function () {
    return _pool.waitingClientsCount();
  };

  this.status = function () {
    return {
      name: _pool.getName(),
      size: _pool.getPoolSize(),
      db: this._redisDb,
      avail: _pool.availableObjectsCount(),
      waiting: _pool.waitingClientsCount()
    };
  };
}

module.exports = RedisPool;
