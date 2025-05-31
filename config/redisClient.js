
import Redis from 'ioredis'

const redis = new Redis({
  host: 'redis-15345.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',
  port: process.env.REDIS_PORT,
  password:process.env.REDIS_PASS ,

});


redis.set('message', 'Hello from Redis Cloud');
redis.get('message').then(console.log); 
export default redis