'use strict';

module.exports = exports = {};

exports.Dog = function(name, breed, age, city) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.city = city;
};

//Call
exports.WinningDog = function(name, breed, age, city) {
  exports.Dog.call(this, name, breed, age, city);
  console.log(`${name} is a ${breed}. S/he is ${age} years old and is from ${city}.`);
  return `${name} is a ${breed}. S/he is ${age} years old and is from ${city}.`;
};

exports.winner = new exports.WinningDog('Spot', 'Beagle', 4, 'Seattle');

//Apply
exports.WinningDogApply = function(name, breed, age, city) {
  exports.Dog.apply(this, [name, breed, age, city]);
  console.log(`Congrats to ${name}! S/he is a ${breed}, ${age} years old, and is from ${city}.`);
  return `Congrats to ${name}! S/he is a ${breed}, ${age} years old, and is from ${city}.`;
};

exports.winnerApply = new exports.WinningDogApply('Kathy', 'Dalmation', 3 , 'Denver');
