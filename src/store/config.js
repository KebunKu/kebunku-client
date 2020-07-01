import axios from 'axios';

let server = axios.create({
  baseURL: 'http://192.168.0.111:3000'
});

module.exports = server;