// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ')
    let newArr = [];

    for(let x of arr){
        newArr.push(x[0].toUpperCase()+x.slice(1))
    }

    return newArr.join(' ')
}

// function capitalize(str) {
//     let arr = str.split(' ')
//     let newArr = []
    
//     for(let el of arr){
//         newArr.push(el[0].toUpperCase()+el.slice(1))
//     }
    
//     return newArr.join(' ')
    
//     }

// function capitalize(str) {
//     let newStr = str[0].toUpperCase();
    
//     for(let i = 1; i<str.length; i++){
//         if(str[i-1]=== " "){
//             newStr+=str[i].toUpperCase() 
//         }else{
//             newStr+=str[i]
//         } 
//     }
    
//     return newStr;
//     }

module.exports = capitalize;
