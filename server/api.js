'use strict';
const api = require('express').Router();
process.env.LEAGUE_API_PLATFORM_ID = 'na1';
const LeagueJs = require('leaguejs');
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);

const getParticipantId = (participants, accountId) => {
  const participant = participants.find(el => {
    return el.player.accountId === accountId;
  });
  return participant.participantId;
};

const parseData = (data, accountId, name) => {
  const games = [];
  data.forEach(el => {
    const participantId = getParticipantId(el.participantIdentities, accountId);
    const game = {
      gameDuration: el.gameDuration,
      summonerName: name,
      game: []
    };
    if (participantId) game.game.push(el.participants[participantId - 1]);
    games.push(game);
    console.log(participantId);
  });
  return games;
};

api.get('/summoner/:name', (req, res, next) => {
  const name = req.params.name;
  const options = {
      beginIndex: 0,
      endIndex: 2
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
        for (var i = 0; i < matches.length; i++) {
          console.log(matches[i].gameId);
          promises.push(leagueJs.Match.gettingById(matches[i].gameId));
        }
        Promise.all(promises)
        .then(data => {
          const games = parseData(data, accountId, name);
          console.log(games[0].game);
          res.json(games);
        });
      });
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = api;
