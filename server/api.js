'use strict';
const api = require('express').Router();
process.env.LEAGUE_API_PLATFORM_ID = 'na1';
const LeagueJs = require('leaguejs');
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);

api.get('/summoner/:name', (req, res, next) => {
  const options = {
      beginIndex: 0,
      endIndex: 2
  };
  leagueJs.Summoner
    .gettingByName(req.params.name)
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
        for (var i = 0; i < matches.length; i++) {
          console.log(matches[i].gameId);
          promises.push(leagueJs.Match.gettingById(matches[i].gameId));
        }
        Promise.all(promises)
        .then(data => {
          res.json(data);
        });
      });
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = api;
