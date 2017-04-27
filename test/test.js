'use strict';

const snakesandninjas = require('../lib/lib.js');
const assert = require('assert');

describe('module', function(){
  describe('person', function(){
    it('snakes should have a string as their name', function(){
      assert.equal(typeof snakesandninjas.rattleSnake.name, 'string')
    })
    it('snakes should have a number for its length', function(){
      assert.equal(typeof snakesandninjas.rattleSnake.length, 'number')
    })
    it('the ninja clan should be a string', function(){
      assert.equal(typeof snakesandninjas.harold.clan, 'string')
    })
    it('the ninja weapons should not be an array', function(){
      assert.notEqual(typeof snakesandninjas.harold.weapons, [])
    })
  })
})
