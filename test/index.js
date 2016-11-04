require("should");
var RedisPool = require("../lib/redis_pool");

describe("redisPool", function () {

  var redisPool = new RedisPool("testPool");

  describe("acquire", function () {

    it("get", function (done) {

      redisPool.acquire(function (err, conn) {
        if (err) {
          throw err;
        }
        conn.should.be.ok();
        done();
      });
    });
  });
});
