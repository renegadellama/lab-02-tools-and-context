'use strict';

const assert = require('assert');
const lab = require('../lib/lab-02.js');

describe('lab-02.js', function() {
  describe('#call Dog Object', function(){
    it('should return, Spot is a Beagle. S/he is 4 years old and is from Seattle.', function() {
      assert.equal(lab.WinningDog('Spot', 'Beagle', 4, 'Seattle'), 'Spot is a Beagle. S/he is 4 years old and is from Seattle.');
    });
    it('should return a string', function() {
      assert.equal(typeof lab.WinningDog('Spot', 'Beagle', 4, 'Seattle'), 'string');
    });
  });
});

describe('lab-02.js', function() {
  describe('#apply Dog Object', function(){
    it('should return a string', function() {
      assert.equal(typeof lab.WinningDogApply('Kathy', 'Dalmation', 3 , 'Denver'), 'string');
    });

    it('should return, Congrats to Kathy! S/he is a Dalmation, 3 years old, and is from Denver.', function() {
      assert.equal(lab.WinningDogApply('Kathy', 'Dalmation', 3 , 'Denver'), 'Congrats to Kathy! S/he is a Dalmation, 3 years old, and is from Denver.');
    });
  });
});
