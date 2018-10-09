'use strict';

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
      gameId: el.gameId,
      gameDuration: el.gameDuration,
      summonerName: name,
      game: null
    };
    if (participantId) game.game = el.participants[participantId - 1];
    games.push(game);
  });
  return games;
};

module.exports = parseData;
