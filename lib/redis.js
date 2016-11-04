var redis = require("redis");
var Bluebird = require("bluebird");

Bluebird.promisifyAll(redis.RedisClient.prototype);
Bluebird.promisifyAll(redis.Multi.prototype);

module.exports = redis;
