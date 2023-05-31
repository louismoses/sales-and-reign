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
  { "zer Dynasty": "MMMMMMc" },
];

// longestDynasty () to return the name of the dynasty which reigns the longest in an array of key-value pair dynastyReign

function longestDynasty(yearReigns) {
  let topYear = 0;
  let topDynasty = "";
  if (yearReigns.length === 0) {
    console.log("No Data");
  } else {
    for (let i = 0; i < yearReigns.length; i++) {
      let dynastyRoman = Object.values(yearReigns[i])[0];
      let romanYear = convertYear(dynastyRoman);

      if (topYear <= romanYear) {
        topYear = romanYear;
        topDynasty = Object.keys(yearReigns[i])[0];
      }
      if (romanYear === "Invalid") {
        dynastyReign.splice(i, 1);
        i--;
      }
    }

    console.log(topYear);
    console.log(topDynasty);
    console.log(dynastyReign);
  }
}

const romanNumeral = ["M", "D", "C", "L", "X", "V", "I"];
// convertYear() to translate given year in roman numerals to integer
function convertYear(romanNumber) {
  // ++++++++++++++++++++
  if (romanNumber[0] !== "M") {
    return "Invalid";
  }
  // ++++++++++++++++++++

  let numInteger = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanNumber[i] === "M") {
      numInteger += 1000;
    }
    if (romanNumber[i] === "D") {
      numInteger += 500;
    }
    if (romanNumber[i] === "C") {
      numInteger += 100;
    }
    if (romanNumber[i] === "L") {
      numInteger += 50;
    }
    if (romanNumber[i] === "X") {
      numInteger += 10;
    }
    if (romanNumber[i] === "V") {
      numInteger += 5;
    }
    if (romanNumber[i] === "I") {
      numInteger += 1;
    }
  }
  return numInteger;
}

longestDynasty(dynastyReign);
