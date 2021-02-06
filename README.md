[![npm version](https://badge.fury.io/js/node-redis-connection-pool.svg)](https://badge.fury.io/js/node-redis-connection-pool)
[![Build Status](https://travis-ci.org/pasupulaphani/node-redis-connection-pool.svg?branch=master)](https://travis-ci.org/pasupulaphani/node-redis-connection-pool)
[![Coverage Status](https://coveralls.io/repos/github/pasupulaphani/node-redis-connection-pool/badge.svg?branch=master)](https://coveralls.io/github/pasupulaphani/node-redis-connection-pool?branch=master)
[![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](http://patreon.com/phaninder 'Donate to this project using Patreon')

# node-redis-connection-pool [![See on Github](https://github.com/themes/tactile/images/octocat-icon.png)](https://github.com/pasupulaphani/node-redis-connection-pool)

Simplistic node redis connection pool ready can scale with generic-pool support

### Documentation

- [TSDOC pages](https://pasupulaphani.github.io/node-redis-connection-pool/index.html)

## Prerequisites

- `node >= 8` This module requires nodejs v8 or later
- `redis >= 4` This module requires redis v4 or above as it has dependencies on `UNLINK` and `redis.replicate_commands()` for pattern deletion.

### Getting started

```
    npm install node-redis-connection-pool
```

#### Usage

- Seemless execution of commands.

```
    var RedisPool = require("node-redis-connection-pool");
    var pool = new RedisPool();

    pool.sendCommand("set", ["key", "value"])
```

- Want redis raw connection? you got it

```
    pool.acquire()
      .then(conn => {

        // Do some work

        // At the end release the conn back to the pool
        pool.release(conn)
      });
```

#### API

- RedisPool([options])

##### `options` object properties

<table class="params">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th class="last">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="name"><code>name</code></td>
      <td class="type">
        <span class="param-type">string</span>
      </td>
      <td class="description last">
        <p>Name your pool</p>
      </td>
    </tr>
    <tr>
      <td class="name"><code>redisOptions</code></td>
      <td class="type">
        <span class="param-type">object</span>
      </td>
      <td class="description last">
        <p>opts from <a href="https://github.com/NodeRedis/node_redis#options-object-properties">node_redis#options-object-properties</a></p>
      </td>
    </tr>
    <tr>
      <td class="name"><code>poolOptions</code></td>
      <td class="type">
        <span class="param-type">object</span>
      </td>
      <td class="description last">
        <p>opts from <a href="https://github.com/coopernurse/node-pool#createpool">node-pool#createpool</a></p>
      </td>
    </tr>
    <tr>
      <td class="name"><code>logger</code></td>
      <td class="type">
        <span class="param-type">object</span>
      </td>
      <td class="description last">
        <p>Inject your custom logger</p>
      </td>
    </tr>
  </tbody>
</table>

### Run tests

    bash test.sh

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/pasupulaphani/node-redis-connection-pool/blob/master/CONTRIBUTING.md)

## Backers

### Maintainers

These amazing people are maintaining this project:

- [Phani](https://github.com/pasupulaphani) — [view contributions](https://github.com/pasupulaphani/node-redis-connection-pool/commits?author=pasupulaphani)

### Sponsors

No sponsors yet! Will you be the first?

[![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](http://patreon.com/phaninder 'Donate to this project using Patreon')
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/pasupulaphani 'Donate to this project using Flattr')

<!-- [![PayPal donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://phaninder.com/paypal "Donate to this project using Paypal") -->
<!-- [![Bitcoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://phaninder.com/bitcoin "Donate once-off to this project using Bitcoin") -->
<!-- [![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://phaninder.com/wishlist "Buy an item on our wishlist for us") -->

### Contributors

These amazing people have contributed to/reviewed this project:

- [Oliver Brooks](https://github.com/oliverbrooks)

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/pasupulaphani/node-redis-connection-pool/blob/master/CONTRIBUTING.md)
