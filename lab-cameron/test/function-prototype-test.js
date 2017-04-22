'use strict';

const assert = require('assert');
const funcPro = require('../lib/function-prototype.js');

describe('funcPro', function() {
  describe('.call()', function() {
    var charizard = new funcPro.FirePokemon('Charizard', 100);
    it('should return an object', function() {
      assert.equal(typeof charizard, 'object');
    });
    it('should return a length of 2 arguments', function() {
      assert.equal(charizard.args.length, 2);
    });
  });
});

describe('funcPro', function() {
  describe('.apply()', function() {
    let blastoise = new funcPro.WaterPokemon('Blastoise', 100);
    it('should return an object', function() {
      assert.equal(typeof blastoise, 'object');
    });
    it('should return a length of 2 arguments', function() {
      assert.equal(blastoise.args.length, 2);
    });
    it('should return typeof blastoise.args == \'object\' for args', function() {
      assert.equal(typeof blastoise.args, 'object');
    });
  });
});

describe('funcPro', function() {
  describe('.bind()', function() {
    let dragonair = new funcPro.DragonPokemon('Dragonair', 100);
    it('should return an object for typeof dragonair', function() {
      assert.equal(typeof dragonair, 'object');
    });
    it('should return "Dragonite"', function() {
      assert.equal(dragonair.name, 'Dragonite');
    });
  });
});
