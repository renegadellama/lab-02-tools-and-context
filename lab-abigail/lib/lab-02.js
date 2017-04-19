'use strict';

module.exports = exports = {};

exports.Dog = function(name, age) {
  this.name = name;
  this.age = age;
};

//Call
exports.WinningDog = function(name, age) {
  exports.Dog.call(this, name, age);
};

exports.winner = new exports.WinningDog('Judy', 20);
console.log(exports.winner);

//Apply
exports.WinningDog1 = function(name, age) {
  exports.Dog.apply(this, [name], [age]);
};

exports.winner1 = new exports.WinningDog1('Kathy', 15);
console.log(exports.winner1);
