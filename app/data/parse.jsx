'use strict';
import champions from './champion.json';
import items from './item.json';
import summoner from './summoner.json';
import runes from './runesReforged.json';

const findChampion = (id) => {
  for (let key in champions.data) {
    if (id === champions.data[key].id) {
      return champions.data[key];
    }
  }
};

const findItems = (stats) => {
  const ids = [stats.item0, stats.item1, stats.item2, stats.item3, stats.item4, stats.item5, stats.item6];
  const gameItems = [];
  ids.forEach(id => {
    if (items.data[id]) gameItems.push(items.data[id]);
  });
  return gameItems;
};

const findRunes = (stats) => {
  const gameRunes = [];
  let primStyle = stats.perkPrimaryStyle;
  if (!primStyle) return gameRunes;
  const primRunes = [stats.perk0, stats.perk1, stats.perk2, stats.perk3];
  let subStyle =  stats.perkSubStyle;
  const subRunes = [stats.perk4, stats.perk5];
  runes.forEach(group => {
    if (group.id === primStyle) {
      primStyle = group.slots;
    } else if (group.id === subStyle) {
      subStyle = group.slots;
    }
  });
  for (let i = 0; i < primRunes.length; i++) {
    let primRune = primStyle[i].runes.find(rune => rune.id === primRunes[i]);
    if (primRune) gameRunes.push(primRune);
  }
  for (let i = 0; i < subStyle.length; i++) {
    let subRune = subStyle[i].runes.find(rune => {
      if (rune.id === subRunes[0]) return rune;
      if (rune.id === subRunes[1]) return rune;
    });
    if (subRune) gameRunes.push(subRune);
  }
  return gameRunes;
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

export { findChampion, findItems, findRunes, findSpells };
