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

// longestDynasty () to return the name of the dynasty which reigns the longest in an array of key-value pair dynastyReign

function longestDynasty(yearReigns) {
  let topYear = 0;
  let topDynasty = "";

  if (yearReigns.length === 0) {
    return "No Data";
  } else {
    for (let i = 0; i < yearReigns.length; i++) {
      let dynastyRoman = Object.values(yearReigns[i])[0];
      let romanYear = convertYear(dynastyRoman);

      if (romanYear === "Invalid") {
        yearReigns.splice(i, 1);
        i--;
      } else if (romanYear >= topYear) {
        topYear = romanYear;
        topDynasty = Object.keys(yearReigns[i])[0];
      }
    }
    return topDynasty;
  }
}

// convertYear() to translate given year in roman numerals to integer
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
      numInteger -= romanNumeral[romanNumber[i]];
    } else {
      numInteger += romanNumeral[romanNumber[i]];
    }
  }
  console.log(romanNumber, numInteger);
  return numInteger;
}

console.log(longestDynasty(dynastyReign));
// console.log(dynastyReign);
