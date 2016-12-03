[![npm version](http://img.shields.io/npm/v/simple-redis-pool.svg?style=flat-square)](https://npmjs.org/package/simple-redis-pool)
[![Build Status](https://travis-ci.org/pasupulaphani/simple-redis-pool.svg?branch=master)](https://travis-ci.org/pasupulaphani/simple-redis-pool)
[![Coverage Status](https://coveralls.io/repos/github/pasupulaphani/simple-redis-pool/badge.svg?branch=master)](https://coveralls.io/github/pasupulaphani/simple-redis-pool?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/583c0c58d2d44d004530834c/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/583c0c58d2d44d004530834c)
[![Gratipay donate button](https://img.shields.io/badge/gratipay-donate-yellow.svg?style=flat-square)](https://gratipay.com/simple-redis-store/)

# simple-redis-pool ![https://github.com/pasupulaphani/simple-redis-pool](https://github.com/themes/tactile/images/octocat-icon.png)

Redis pool ready to scale with node-pool support


## Prerequisites

```node >= 4``` This module requires nodejs v4 or above as it has dependencies on es6 components such as Map, Set, Promise etc.

### Getting started

```
    npm install simple-redis-pool
```

#### Usage
```
    var RedisPool = require("simple-redis-pool");
    var pool = new RedisPool();

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

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/pasupulaphani/simple-redis-pool/blob/master/CONTRIBUTING.md)

## Backers

### Maintainers

These amazing people are maintaining this project:

*   [Phani](https://github.com/pasupulaphani) — [view contributions](https://github.com/pasupulaphani/simple-redis-pool/commits?author=pasupulaphani)

### Sponsors

No sponsors yet! Will you be the first?

[![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](http://patreon.com/phaninder "Donate to this project using Patreon")
[![Gratipay donate button](https://img.shields.io/badge/gratipay-donate-yellow.svg)](https://gratipay.com/~pasupulaphani/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/pasupulaphani "Donate to this project using Flattr")
<!-- [![PayPal donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://phaninder.com/paypal "Donate to this project using Paypal") -->
<!-- [![Bitcoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://phaninder.com/bitcoin "Donate once-off to this project using Bitcoin") -->
<!-- [![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://phaninder.com/wishlist "Buy an item on our wishlist for us") -->

### Contributors

These amazing people have contributed to/reviewed this project:

*   [Oliver Brooks](https://github.com/oliverbrooks)

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/pasupulaphani/simple-redis-pool/blob/master/CONTRIBUTING.md)

<br />

---
