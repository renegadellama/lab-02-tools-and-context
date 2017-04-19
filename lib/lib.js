'use strict';

module.exports = exports = {}

function Serpent(name, length, poisonous, continent){
  this.name = name,
  this.length = length,
  this.poisonous = poisonous,
  this.continent = continent
}

function Snake(name, length, poisonous, continent){
  Serpent.call(this, name, length, poisonous, continent);
  this.isReptile = true;
}

exports.rattleSnake = new Snake('rattlesnake', 6, true, 'North America');
console.log(exports.rattleSnake);

exports.king = new Snake('king', 7, false, 'North America');
console.log(exports.king);

exports.blackMamba = new Snake('black mamba', 5, true, 'Africa');
console.log(exports.blackMamba);

exports.rattleSnake;
console.log(exports.rattleSnake);
