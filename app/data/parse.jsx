'use strict';
import champions from '../data/champion.json';
import items from '../data/item.json';
import summoner from '../data/summoner.json';

const findChampion = (id) => {
  for (let key in champions.data) {
    if (id === champions.data[key].id) {
      return champions.data[key];
    }
  }
};

const findItems = (ids) => {
  const gameItems = [];
  ids.forEach(id => {
    if (items.data[id]) gameItems.push(items.data[id]);
  });
  return gameItems;
};

const findSpells = (ids) => {
  const spells = [];
  for (let key in summoner.data) {
    if (ids[0] === summoner.data[key].id || ids[1] === summoner.data[key].id) {
      if (summoner.data[key]) spells.push(summoner.data[key]);
    }
  }
  return spells;
};

export { findChampion, findItems, findSpells };
