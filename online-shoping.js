"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProducts = function (product) {
  this.products.push(product);
};

Cart.prototype.removeProducts = function (product) {
  let index = this.products.indexOf(product);
  if (index !== -1) {
    this.products.splice(index, 1);
  }
};

Cart.prototype.getTotalPrice = function () {
  let totalPrice = 0;
  for (let i = 0; i < this.products.length; i++) {
    totalPrice = totalPrice + this.products[i].price;
  }
  return totalPrice;
};

function DiscountedProduct(name, price, discount) {
  Product.call(this, name, price);
  this.discount = discount;
  this.priceAfterDiscount = this.price - this.price * this.discount;
}

DiscountedProduct.prototype = Object.create(Product.prototype);

DiscountedProduct.prototype.newPrice = function () {
  this.price = this.price - this.price * this.discount;
  return this.price;
};

const phone = new Product("Phone", 1200);
const tv = new Product("TV", 1700);
const computer = new Product("Computer", 2300);

const cart = new Cart();

cart.addProducts(phone);
cart.addProducts(tv);
cart.addProducts(computer);
console.log(cart.products);

console.log(`The total price of the cart is : ${cart.getTotalPrice()} $`);

const discountedHeadphones = new DiscountedProduct("Headphones", 860, 0.3);

console.log(discountedHeadphones);
