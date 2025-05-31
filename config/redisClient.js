
import Redis from 'ioredis'

const redis = new Redis({
  host: 'redis-15345.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',
  port: 15345,
  password: 'YBJREpxw46kio9jZkpd4IkvejPapVZNg',

});


redis.set('message', 'Hello from Redis Cloud');
redis.get('message').then(console.log); 
export default redis