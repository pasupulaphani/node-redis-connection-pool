[![Build Status](https://travis-ci.org/pasupulaphani/angular-gist-embed.svg?branch=master)](https://travis-ci.org/pasupulaphani/angular-gist-embed) [![npm version](https://badge.fury.io/js/simple-redis-pool.svg)](https://badge.fury.io/js/simple-redis-pool) [![Test Coverage](https://codeclimate.com/github/pasupulaphani/simple-redis-pool/badges/coverage.svg)](https://codeclimate.com/github/pasupulaphani/simple-redis-pool/coverage) [![Code Climate](https://codeclimate.com/github/pasupulaphani/simple-redis-pool/badges/gpa.svg)](https://codeclimate.com/github/pasupulaphani/simple-redis-pool)

# simple-redis-pool
Redis store ready to scale with node-pool support

> Note: This lib is still in alpha

### Getting started

    npm install simple-redis-pool

    var RedisPool = require("simple-redis-pool");
    var pool = new RedisPool();

    // set
    pool.acquire(function (err, conn) {
      if (err) {
        throw err;
      }
      return conn;
    });
