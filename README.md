[![npm version](http://img.shields.io/npm/v/simple-redis-pool.svg)](https://npmjs.org/package/simple-redis-pool)
[![Build Status](https://travis-ci.org/pasupulaphani/simple-redis-pool.svg?branch=master)](https://travis-ci.org/pasupulaphani/simple-redis-pool)
[![Coverage Status](https://coveralls.io/repos/github/pasupulaphani/simple-redis-pool/badge.svg?branch=master)](https://coveralls.io/github/pasupulaphani/simple-redis-pool?branch=master)
[![dependencies Status](https://david-dm.org/pasupulaphani/simple-redis-pool/status.svg)](https://david-dm.org/pasupulaphani/simple-redis-pool)
[![Gratipay donate button](https://img.shields.io/badge/gratipay-donate-yellow.svg)](https://gratipay.com/simple-redis-store/)

# simple-redis-pool
Redis cache ready to scale with node-pool support

## Prerequisites

This module requires nodejs v4 or above as it has dependencies on constious es6 components such as Map, Set, Promise etc.

### Getting started

    npm install simple-redis-pool

    var RedisPool = require("simple-redis-pool");
    var pool = new RedisPool("myPool");

    pool.acquire()
      .then(conn => {
          // Go get 'em tiger!
        });

#### API

- RedisPool(name, redisOptions, poolOptions)

arguments:

1. name(String): name your pool
2. redisOptions(Object): opts from https://github.com/NodeRedis/node_redis#options-object-properties
3. poolOptions(Object): opts from https://github.com/coopernurse/node-pool#createpool

### Run tests

    bash test.sh
