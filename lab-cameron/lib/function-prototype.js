'use strict';

module.exports = exports = {};

exports.Pokemon = function(name, level) {
  this.name = name;
  this.level = level;
  this.args = [].slice.call(arguments);
};

exports.FirePokemon = function(name, level) {
  exports.Pokemon.call(this, name, level);
  this.primaryType = 'Fire';
};

exports.WaterPokemon = function(name, level) {
  exports.Pokemon.apply(this, [name, level]);
  this.primaryType = 'Water';
};

exports.DragonPokemon = function(name, level) {
  exports.Pokemon.bind(this, name, level);
  this.name = 'Dragonite';
  this.level = 100;
  this.primaryType = 'Dragon';
};
