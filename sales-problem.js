"use strict";
const productProfitArray = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 29 },
  { name: "Product G", profit: 1 },
  { name: "Product H", profit: -1 },
];

let productMax = { name: "", profit: "" };
let productMin = { name: "", profit: "" };
let closestProfit = Infinity;
let closestProduct = "";

function topProduct(input) {
  if (input.length === 0) {
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
  if (input.length === 0) {
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
  if (input.length === 0) {
    console.log("No Data");
  } else {
    for (let i = 0; i < input.length; i++) {
      const profit = input[i].profit;

      if (profit >= 0) {
        if (profit <= Math.abs(closestProfit)) {
          closestProfit = profit;
          closestProduct = input[i].name;
        }
      }
    }

    console.log(closestProduct);
  }
}

topProduct(productProfitArray);
bottomProduct(productProfitArray);
zeroProfitProduct(productProfitArray);
