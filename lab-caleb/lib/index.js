'use strict';

let assert = require('assert');

function Product(name, price){
  products = [];
  addToHistory = function(){
    Array.prototype.Push.apply(this.history, arguments);
  };
  this.product = name;
  this.pricePoint = price;
  this.logProduct = function(){
    console.log(this.product);
    console.log(this.pricePoint);
    // Product.addToHistory(this);
  };
}

function Card(name, price, architecture){
  Product.call(this, name, price);
  this.architecture = architecture;
  this.historyItem = function(){
    Product.addToHistory(this);
  };
}

let tenEightyTi = new Card('1080ti', '$699', 'Pascal');
let tenEighty = new Card('1080', '$399', 'Pascal');
let tenSeventy = new Card('1070', '$299', 'Pascal');
let tenSixty = new Card('1060', '$199', 'Pascal');
let tenFiftyTi = new Card('1050ti', '$149', 'Pascal');
