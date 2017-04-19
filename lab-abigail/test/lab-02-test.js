'use strict';

const assert = require('assert');
const lab = require('../lib/lab-02.js');

describe('lab-02.js', function() {
  describe('#call Dog Object', function(){
    it('should return, Spot is a Beagle. S/he is 4 years old and is from Seattle. Woof!', function() {
      assert.equal(lab.WinningDog('Spot', 'Beagle', 4, 'Seattle', 'Woof'), 'Spot is a Beagle. S/he is 4 years old and is from Seattle. Woof!');
    });
    it('should return a string', function() {
      assert.equal(typeof lab.WinningDog('Spot', 'Beagle', 4, 'Seattle', 'Woof'), 'string');
    });
  });
});

describe('lab-02.js', function() {
  describe('#apply Cat Object', function(){
    it('should return a string', function() {
      assert.equal(typeof lab.WinningCat('Kathy', 'Black Cat', 3 , 'Denver', 'Purrr'), 'string');
    });

    it('should return, Congrats to Kathy! S/he is a Black Cat, 3 years old, and is from Denver. Purrr!', function() {
      assert.equal(lab.WinningCat('Kathy', 'Black Cat', 3 , 'Denver', 'Purrr'), 'Congrats to Kathy! S/he is a Black Cat, 3 years old, and is from Denver. Purrr!');
    });
  });
});

describe('lab-02.js', function() {
  describe('#bind Turtle Object', function(){
    it('should return a string', function() {
      assert.equal(typeof lab.WinningTurtle('Grover', 'Green Turtle', 5 , 'San Diego', '1.5'), 'string');
    });

    it('should return, Grover is a Green Turtle. S/he is 5 years old, from San Diego, and it travelling at a speed of 1.5 mph.', function() {
      assert.equal(lab.WinningTurtle('Grover', 'Green Turtle', 5 , 'San Diego', '1.5'), 'Grover is a Green Turtle. S/he is 5 years old, from San Diego, and is travelling at a speed of 1.5 mph.');
    });
  });
});
