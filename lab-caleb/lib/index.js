'use strict';

module.exports = exports = {};

exports.products = {};
exports.products.gfxcard = [];
exports.products.keyboard = [];


exports.Product = function(name, price, sku){
  this.addToProducts = function(){
    exports.products[this.category].push(this);
  };
  this.name = name;
  this.price = price;
  this.sku = sku;
};

exports.Card = function(name, price, sku, architecture, category){
  exports.Product.call(this, name, price, sku);
  this.architecture = architecture;
  this.category = category;
};

exports.Keyboard = function(name, price, sku, backlighting, category){
  exports.Product.call(this, name, price, sku);
  this.backlighting = backlighting;
  this.category = category;
};

//to test call find a way to describe it, and verify that it has the properties that the product constructor gives.
//gfxcard
let tenEightyTi = new exports.Card('1080ti', '$699', 'NV1081', 'Pascal', 'gfxcard');
let tenEighty = new exports.Card('1080', '$399', 'NV1080', 'Pascal', 'gfxcard');
let tenSeventy = new exports.Card('1070', '$299', 'NV1070', 'Pascal', 'gfxcard');
let tenSixty = new exports.Card('1060', '$199', 'NV1060', 'Pascal', 'gfxcard');
let tenFiftyTi = new exports.Card('1050ti', '$149', 'NV1051', 'Pascal', 'gfxcard');

//keyboard
let razrBlackWidow = new exports.Keyboard('Black Widow', '$99', 'RZRBW', 'Green', 'keyboard');
let razrBlackWidowRGB = new exports.Keyboard('Black Widow RGB', '$149', 'BWRGB', 'RGB', 'keyboard');
let corsairK95 = new exports.Keyboard('Corsair K95', '$199', 'RGB', 'CRSK95', 'keyboard' );

razrBlackWidow.addToProducts();
razrBlackWidowRGB.addToProducts();
corsairK95.addToProducts();
tenEightyTi.addToProducts();
tenEighty.addToProducts();
tenSeventy.addToProducts();
tenSixty.addToProducts();
tenFiftyTi.addToProducts();
