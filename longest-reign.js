"use strict";
const dynastyReign = [
  { "San Dynasty": "MXLI" },
  { "Viloria Dynasty": "MCCCIIII" },
  { "Tan Dynasty": "MCCCXCVIII" },
  { "Bon Dynasty": "MCDXLV" },
  { "Maiko Dynasty": "MDCLXIV" },
  { "Paul Dynasty": "MCMXLIX" },
  { "Andre Dynasty": "MMMXICX" },
  { "Moses Dynasty": "MMMMMMMM" },
];

// longestDynasty () to return the name of the dynasty which reigns the longest in an array of key-value pair dynastyReign
let topYear = 0;
let topDynasty = "";
function longestDynasty(yearReigns) {
  for (let i = 0; i < yearReigns.length; i++) {
    let dynastyRoman = Object.values(yearReigns[i])[0];
    let romanYear = convertYear(dynastyRoman);
    if (topYear <= romanYear) {
      topYear = romanYear;
      topDynasty = Object.keys(yearReigns[i])[0];
    }
  }
  console.log(topYear);
  console.log(topDynasty);
}

// convertYear() to translate given year in roman numerals to integer
function convertYear(romanLetter) {
  let numInteger = 0;
  for (let i = 0; i < romanLetter.length; i++) {
    if (romanLetter[i] === "M") {
      numInteger += 1000;
    }
    if (romanLetter[i] === "D") {
      numInteger += 500;
    }
    if (romanLetter[i] === "C") {
      numInteger += 100;
    }
    if (romanLetter[i] === "L") {
      numInteger += 50;
    }
    if (romanLetter[i] === "X") {
      numInteger += 10;
    }
    if (romanLetter[i] === "V") {
      numInteger += 5;
    }
    if (romanLetter[i] === "I") {
      numInteger += 1;
    }
  }
  return numInteger;
}

longestDynasty(dynastyReign);
