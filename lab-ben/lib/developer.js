'use strict';

module.exports = exports = {};

exports.Developer = function(name) {
  this.name = name;
};

exports.CompanyDeveloper = function(name, company) {
  exports.Developer.call(this, name);
  this.worksFor = company;
  this.games = [];
};

exports.CompanyDeveloper.prototype.made = function (arg) {
  Array.prototype.push.apply(this.games, arg);
};
