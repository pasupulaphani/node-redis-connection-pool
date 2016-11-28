[![npm version](http://img.shields.io/npm/v/simple-redis-pool.svg?style=flat-square)](https://npmjs.org/package/simple-redis-pool)
[![Build Status](https://travis-ci.org/pasupulaphani/simple-redis-pool.svg?branch=master)](https://travis-ci.org/pasupulaphani/simple-redis-pool)
[![Coverage Status](https://coveralls.io/repos/github/pasupulaphani/simple-redis-pool/badge.svg?branch=master)](https://coveralls.io/github/pasupulaphani/simple-redis-pool?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/583c0c58d2d44d004530834c/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/583c0c58d2d44d004530834c)
[![Gratipay donate button](https://img.shields.io/badge/gratipay-donate-yellow.svg?style=flat-square)](https://gratipay.com/simple-redis-store/)

# simple-redis-pool
Redis pool ready to scale with node-pool support

## Prerequisites

This module requires nodejs v4 or above as it has dependencies on constious es6 components such as Map, Set, Promise etc.

### Getting started

    npm install simple-redis-pool

    var RedisPool = require("simple-redis-pool");
    var pool = new RedisPool();

    pool.acquire()
      .then(conn => {

          // Do some work

          // At the end release the conn back to the pool
          pool.release(conn)
        });

#### API

- RedisPool([options])

#### `options` object properties

| Property  | Default   | Description |
|-----------|-----------|-------------|
| name      | Random unique string | Name your pool |
| redisOptions      | ```{url: redis://127.0.0.1:6379}```      | opts from  https://github.com/NodeRedis/node_redis#options-object-properties |
| poolOptions      | null      | opts from https://github.com/coopernurse/node-pool#createpool |
| logger       | null      | Inject your custom logger |

### Run tests

    bash test.sh
