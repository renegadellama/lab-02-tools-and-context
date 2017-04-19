'use strict';

const assert = require('assert');
const dev = require('../lib/developer.js');

describe('developer.js constuctor functions', function() {
  describe('CompanyDeveloper call testing', function() {
    let sakurai = new dev.CompanyDeveloper('Masahiro Sakurai', 'Nintendo');
    it('should make a valid object', function() {
      assert.equal(typeof sakurai, 'object');
    });
    it('should have a name', function() {
      assert.equal(sakurai.name, 'Masahiro Sakurai');
    });
    it('should work for a company', function() {
      assert.equal(sakurai.worksFor, 'Nintendo');
    });
  });
  describe('Developer\'s games', function() {
    let sakurai = new dev.CompanyDeveloper('Masahiro Sakurai', 'Nintendo');
    sakurai.made(['Kirby', 'Smash Brothers', 'Kid Icarus']);
    console.log(sakurai.games);
    it('should be a valid array', function() {
      assert.equal(Array.isArray(sakurai.games), true);
    });
    it('should have a length of more than 0', function() {
      assert.notEqual(sakurai.games.length, 0);
    });
  });
});
