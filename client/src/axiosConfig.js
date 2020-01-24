import axios from 'axios';

const env = process.env.NODE_ENV;

export default axios.create({
  baseUrl:
    env === 'production'
      ? 'http://taskdiary.anjay.work'
      : 'http://localhost:3001',
})
