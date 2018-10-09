'use strict';
const express = require('express');
const {resolve} = require('path');
const api = express.Router();
process.env.LEAGUE_API_PLATFORM_ID = 'na1';
const LeagueJs = require('leaguejs');
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);
const parseData = require('./parse');
// const DataDragonHelper = require('leaguejs/lib/DataDragon/DataDragonHelper');
// DataDragonHelper.storageRoot = [__dirname, '..', 'public/cdn'];

// DataDragonHelper.gettingItemList();

api.get('/summoner/:name', (req, res, next) => {
  const name = req.params.name;
  const options = {
      beginIndex: 0,
      endIndex: 5
  };
  leagueJs.Summoner
    .gettingByName(name)
    .then(data => {
        return data.accountId;
    })
    .then(accountId => {
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
          res.json(games);
        });
      });
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = api;
