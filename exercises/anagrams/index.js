// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let objA = adjusted(stringA);
  let objB = adjusted(stringB);

  if(Object.keys(objA).length !== Object.keys(objB).length){
    return false
  }

  for(let x in objA){
    if(objA[x]!==objB[x]){
      return false
    }
  }
  
  return true
}

function adjusted(str){

  let obj = {}
  for(let x of str){
    obj[x] = obj[x]+1 || 1
  }

  return obj;

}



// function anagrams(stringA, stringB) {
//     let a = adjustString(stringA)
//     let b = adjustString(stringB)
    
//     return a ===b
//     }
    
//     function adjustString(str){
//       return str.replace(/[^\w]/g, '').toLowerCase().split('').sort((a,b)=>a.localeCompare(b)).join('')
//     }


// function anagrams(stringA, stringB) {
//   let objA = adjustString(stringA)
//   let objB = adjustString(stringB)
  
//   if(Object.keys(objA).length !== Object.keys(objB).length){
//       return false
//   }
  
//   for(let key in objA){
//       if(objA[key]!==objB[key]){
//           return false
//       }
//   }
  
//   return true
//   }
  
//   function adjustString(str){
//       let obj = {};
//       let newStr = str.replace(/[^\w]/g, '')
  
//     for(let el of newStr){
//       obj[el]=obj[el]+1||1
//     }
  
//     return obj;
//   }

module.exports = anagrams;
