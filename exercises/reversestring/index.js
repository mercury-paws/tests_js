// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// function reverse(str) {
//  let reverse = '';

//  for(let el of str){
//   reverse = el+reverse;
//  }

//  return reverse
// }


// function reverse(str) {
//     return str.split('').reduce((acc, e)=> e+acc, '')
// }



// function reverse(str) {
//     let reversed = '';

//     for (let char of str){
//         reversed = char+reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     const arr = str.split('').reverse().join('')
//     return arr;
// }

module.exports = reverse;
