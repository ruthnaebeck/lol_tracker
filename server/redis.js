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
  client.set(summoner, accountId);
};

const getAccountId = (summoner) => {
  return client.getAsync(summoner)
    .then(id => id);
};

const setGames = (accountId, allGames, riotGames) => {
  client.set(accountId, JSON.stringify(allGames), 'EX', 120);
  for (let i = 0; i < riotGames.length; i++) {
    let gameId = riotGames[i].gameId;
    client.set(gameId, JSON.stringify(riotGames[i]));
  }
};

const getGames = (id) => {
  return client.getAsync(id)
    .then(games => JSON.parse(games));
};

module.exports = { setAccountId, getAccountId, setGames, getGames };
