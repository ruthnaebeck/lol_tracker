'use strict';
const api = require('express').Router();
process.env.LEAGUE_API_PLATFORM_ID = 'na1'
const LeagueJs = require('leaguejs');
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);

api.get('/summoner/:name', (req, res, next) => {
  leagueJs.Summoner
    .gettingByName(req.params.name)
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = api;
