// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
// vowels("Why do you ask?"); //--> 4
// vowels("Why?"); //--> 0

function vowels(str) {}

// function vowels(str) {
//     let matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
//   }

// function vowels(str) {
//     let chars = ["a", "e", "i", "o", "u"];
//     let number = 0;

//     for (let x of str.toLowerCase()) {
//       if (chars.includes(x)) {
//         number += 1;
//       }
//     }

//     return number;
//   }
module.exports = vowels;
