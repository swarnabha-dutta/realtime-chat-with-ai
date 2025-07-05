import Redis from 'ioredis';

const redisClient = new Redis({
    host:process.env.REDIS
})