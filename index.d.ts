import { RedisClient, ClientOpts as RedisOptions } from "redis";
import { Pool, Options as PoolOptions} from "generic-pool";


declare class RedisPool
{
  constructor(options?: {
    name?: string;
    redisOptions?: RedisOptions;
    poolOptions?: PoolOptions;
    logger?: any;
  })

  pool: Pool<RedisClient>;
  sendCommand: <T = any>(command: string, args: any) => Promise<T>;
  acquire: (priority?: number) => PromiseLike<RedisClient>;
  release: (resource: RedisClient) => PromiseLike<void>;
  destroy: (resource: RedisClient) => PromiseLike<void>;
  drain: () => PromiseLike<void>;
  getName: () => string;
  getRedisOptions: () => RedisOptions;
  getPoolOptions: () => PoolOptions;
  getPoolSize: () => number;
  availableCount: () => number;
  pendingCount: () => number;
  status: () => {name: string, size: number, available: number, pending: number};
}

export = RedisPool;
