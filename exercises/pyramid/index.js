// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let midpoint = Math.floor((2n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column <= 2n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
      }
    }
  }
}

module.exports = pyramid;
