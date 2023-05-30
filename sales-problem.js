"use strict";
const productProfitArray = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 29 },
];

let productMax = { name: "", profit: "" };
let productMin = { name: "", profit: "" };
let productCloseToZero = { name: "", profit: "" };
let productGreaterThanZero = { name: "", profit: "" };

let empty = new Array();

function topProduct(input) {
  if (input === empty) {
    console.log("No Data");
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i].profit > productMax.profit) {
        productMax = input[i];
        console.log(productMax.name);
      }
    }
  }
}
function bottomProduct(input) {
  if (input === empty) {
    console.log("No Data");
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i].profit < productMin.profit) {
        productMin = input[i];
        console.log(productMin.name);
      }
    }
  }
}

function zeroProfitProduct(input) {
  if (input === empty) {
    console.log("No Data");
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i].profit <= Math.abs(productCloseToZero.profit)) {
        productCloseToZero = input[i];
      }
    }
    console.log(productCloseToZero.name);
  }
}

topProduct(productProfitArray);
bottomProduct(productProfitArray);
zeroProfitProduct(productProfitArray);
