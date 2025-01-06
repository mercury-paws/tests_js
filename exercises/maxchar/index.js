// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// The key ('h') is added dynamically to the object charMap when you assign a value to it for the first time.


function maxChar(str) {
        let obj = {}
        let maxChar = "";
        let maxValue = 0;

        for(let x of str){
                obj[x] = obj[x]+1 || 1
        }

        for(let char in obj){
                if(obj[char]>maxValue){
                        maxChar = char;
                        maxValue = obj[char]
                }
        }

        return maxChar;
}


// function maxChar(str) {
//     let charMap = {};
// let maxValue = 0;
// let maxKey = '';

//     for(let char of str){
//         charMap[char] = charMap[char]+1 || 1 
//     }

//     for(let key in charMap){
//         if (charMap[key] > maxValue){
//             maxValue = charMap[key];
//             maxKey = key;
//         }
//     }
// return maxKey;
// }

// if(!obj[char]){
        //     obj[char]=1
        // }else{
        //     obj[char]++
        // }

module.exports = maxChar;
