import {createClient} from "redis";

const redisClient  = createClient({
    url: process.env.REDIS_URL,

});

redisClient.on('error', err => console.log('Redis Client error',err));

await redisClient.connect();

export default redisClient; 