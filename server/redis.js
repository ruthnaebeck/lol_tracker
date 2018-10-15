'use strict';
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', err => {
  console.log('Redis client ERROR ' + err);
});

const setAccountId = (summoner, accountId) => {
  client.set(summoner, accountId, 'EX', 86400);
};

const getAccountId = (summoner) => {
  return client.getAsync(summoner)
    .then(id => id);
};

const setGames = (accountId, games) => {
  client.set(accountId, JSON.stringify(games), 'EX', 300);
};

const getGames = (accountId) => {
  return client.getAsync(accountId)
    .then(games => JSON.parse(games));
};

module.exports = { setAccountId, getAccountId, setGames, getGames };
