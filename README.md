[![npm version](http://img.shields.io/npm/v/simple-redis-pool.svg)](https://npmjs.org/package/simple-redis-pool)
[![Build Status](https://travis-ci.org/pasupulaphani/simple-redis-pool.svg?branch=master)](https://travis-ci.org/pasupulaphani/simple-redis-pool)
[![Coverage Status](https://coveralls.io/repos/github/pasupulaphani/simple-redis-pool/badge.svg?branch=master)](https://coveralls.io/github/pasupulaphani/simple-redis-pool?branch=master)
[![dependencies Status](https://david-dm.org/pasupulaphani/simple-redis-pool/status.svg)](https://david-dm.org/pasupulaphani/simple-redis-pool)
[![Gratipay donate button](https://img.shields.io/badge/gratipay-donate-yellow.svg)](https://gratipay.com/simple-redis-store/)

# simple-redis-pool
Redis store ready to scale with node-pool support

> Note: This lib is in beta

## Prerequisites

This module requires nodejs v4 or above as it has dependencies on constious es6 components such as Map, Set, Promise etc.

### Getting started

    npm install simple-redis-pool

    var RedisPool = require("simple-redis-pool");
    var pool = new RedisPool();

    // set
    pool.acquire()
      .then(conn = {
          // Go get 'em tiger!
        });

### Run tests

    bash test.sh
