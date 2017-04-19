'use strict';

module.exports = exports = {};

exports.Developer = function(name) {
  this.name = name;
  this.hasMade = [];
};

exports.CompanyDeveloper = function(name, company) {
  exports.Developer.call(this, name);
  this.worksFor = company;
  this.hasMade = [];
};

// exports.Developer.prototype.made = function () {
//   this.hasMade = Array.prototype.push.apply(this, arguments);
// };

exports.CompanyDeveloper.prototype.made = function () {
  this.hasMade = this.hasMade.apply(this.hasMade, arguments);
};
