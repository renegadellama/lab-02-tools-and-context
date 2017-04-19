'use strict';

let assert = require('assert');

let products = {};
products.gfxcard = [];
products.keyboards = [];


function Product(name, price, sku){
  this.addToProducts = function(){
    products[this.category].push;
  };
  this.product = name;
  this.pricePoint = price;
  this.sku = sku;
  this.logProduct = function(){
    console.log(this.product);
    console.log(this.pricePoint);
  };
}

function Card(name, price, sku, architecture, category){
  Product.call(this, name, price, sku);
  this.architecture = architecture;
  this.product = function(){
    Product.addToProducts(this);
  };
  this.productType = category;
}
//to test call find a way to describe it, and verify that it has the properties that the product constructor gives.
let tenEightyTi = new Card('1080ti', '$699', 'Pascal', 'gfxcard');
let tenEighty = new Card('1080', '$399', 'Pascal', 'gfxcard');
let tenSeventy = new Card('1070', '$299', 'Pascal', 'gfxcard');
let tenSixty = new Card('1060', '$199', 'Pascal', 'gfxcard');
let tenFiftyTi = new Card('1050ti', '$149', 'Pascal', 'gfxcard');
