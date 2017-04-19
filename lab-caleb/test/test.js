'use strict';

let assert = require('assert');
const indexJS = require('../lib/index.js');

console.log(indexJS.products);
console.log(indexJS.Card);
console.log(indexJS.Product);

describe('index.js', function(){
  describe('products.gfxcard', function(){
    it('should have the same property as the main products constructor, which is name', function(){
      assert.equal(indexJS.products.gfxcard[0].name, '1080ti');
    });
    it('should show that products.gfxcard has indices', function(){
      assert.equal(typeof indexJS.products.gfxcard[0].addToProducts, 'function');
    });
  });
});
