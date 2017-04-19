'use strict';

module.exports = exports = {};

exports.Dog = function(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
};

//Call
exports.WinningDog = function(name, breed, age) {
  exports.Dog.call(this, name, breed, age);
};

exports.winner = new exports.WinningDog('Judy', 'beagle', 20);
console.log(exports.winner);

//Apply
exports.WinningDogApply = function(name, breed, age) {
  exports.Dog.apply(this, [name, breed, age]);
};

exports.winnerApply = new exports.WinningDogApply('Kathy', 'dalmation', 15);
console.log(exports.winnerApply);
