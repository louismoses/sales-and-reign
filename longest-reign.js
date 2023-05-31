"use strict";
const dynastyReign = [
  { "San Dynasty": "MXLI" },
  { "Viloria Dynasty": "MCCCIIII" },
  { "Tan Dynasty": "MCCCXCVIII" },
  { "Bon Dynasty": "MCDXLV" },
  { "Maiko Dynasty": "MDCLXIV" },
  { "Paul Dynasty": "MCMXLIX" },
  { "Andre Dynasty": "MMMXICX" },
  { "Moses Dynasty": "pMMMMMM" },
  { "Louis Dynasty": "MpMMMMM" },
];

function longestDynasty(yearReigns) {
  let topYear = 0;
  let topDynasty = "";

  if (yearReigns.length === 0) {
    return "No Data";
  } else {
    for (let i = 0; i < yearReigns.length; i++) {
      let dynastyRoman = Object.values(yearReigns[i])[0];
      let romanYear = convertYear(dynastyRoman);

      if (romanYear >= topYear) {
        topYear = romanYear;
        topDynasty = Object.keys(yearReigns[i])[0];
      }
    }

    return topDynasty;
  }
}

const romanNumeral = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

function convertYear(romanNumber) {
  let numInteger = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (!Object.keys(romanNumeral).includes(romanNumber[i])) {
      return "Invalid";
    }

    if (
      i < romanNumber.length - 1 &&
      romanNumeral[romanNumber[i]] < romanNumeral[romanNumber[i + 1]]
    ) {
      if (
        (romanNumber[i] === "I" && ["V", "X"].includes(romanNumber[i + 1])) ||
        (romanNumber[i] === "X" && ["L", "C"].includes(romanNumber[i + 1])) ||
        (romanNumber[i] === "C" && ["D", "M"].includes(romanNumber[i + 1]))
      ) {
        numInteger -= romanNumeral[romanNumber[i]];
      } else {
        return "Invalid";
      }
    } else {
      numInteger += romanNumeral[romanNumber[i]];
    }
  }

  return numInteger;
}

console.log(longestDynasty(dynastyReign));
console.log(convertYear("CMXIX"));
console.log(dynastyReign);
