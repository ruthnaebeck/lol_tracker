'use strict';
const express = require('express');
const api = express.Router();

const LeagueJs = require('leaguejs');
process.env.LEAGUE_API_PLATFORM_ID = 'na1';
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);

const parseData = require('./parse');
const { setAccountId, getAccountId, setGames, getGames } = require('./redis');

const riotGames = (res, name, accountId, options) => {
  leagueJs.Match
    .gettingListByAccount(accountId, options)
    .then(data => {
        return data.matches;
    })
    .then(matches => {
      const promises = [];
      for (let i = 0; i < matches.length; i++) {
        promises.push(leagueJs.Match.gettingById(matches[i].gameId));
      }
      Promise.all(promises)
      .then(data => {
        const games = parseData(data, accountId, name);
        setGames(accountId, games);
        res.json(games);
      });
    })
    .catch(err => res.status(err.statusCode).send(err.error));
};

const getMatchData = (res, name, accountId, options) => {
  getGames(accountId)
  .then(games => {
    if (games) res.json(games);
    else riotGames(res, name, accountId, options);
  })
  .catch(err => res.status(err.statusCode).send(err.error));
};

const riotAccountId = (res, name, options) => {
  leagueJs.Summoner
    .gettingByName(name)
    .then(data => {
        setAccountId(name.toLowerCase(), data.accountId);
        return data.accountId;
    })
    .then(accountId => {
      getMatchData(res, name, accountId, options);
    })
    .catch(err => res.status(err.statusCode).send(err.error));
};

api.get('/summoner/:name', (req, res, next) => {
  const name = req.params.name;
  const options = {
      beginIndex: 0,
      endIndex: 5
  };
  getAccountId(name.toLowerCase())
  .then(accountId => {
    if (accountId) getMatchData(res, name, Number(accountId), options);
    else riotAccountId(res, name, options);
  })
  .catch(err => res.status(err.statusCode).send(err.error));
});

module.exports = api;
