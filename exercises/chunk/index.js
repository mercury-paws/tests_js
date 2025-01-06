// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let miniArr = [];

    for(let x of array){
        miniArr.push(x);
        if(miniArr.length===size){
            chunked.push(miniArr)
            miniArr=[]
        }
    }
    if(miniArr.length>0){
        chunked.push(miniArr)
    }

    return chunked;
}

// function chunk(array, size) {
//     let chuncked = [];
//     let index = 0;

//     while(index<array.length){
//         chuncked.push(array.slice(index, index+size))
//         index+=size
//     }

//     return chuncked;
// }

// function chunk(array, size) {
//     let arr = []
//     let a = []
//     for(let x = 0; x<array.length; x++){
//         a.push(array[x]);
//             if(a.length===size){
//                 arr.push(a);
//                 a=[]
//             }
//     }

//     if(a.length>0){
//         arr.push(a)
//     }
    
// return arr
// }

// function chunk(array, size) {
//     let chunked = [];
//     let miniArr=[];

//     for(let x of array){
//         miniArr.push(x)
//         if(miniArr.length === size){
//             chunked.push(miniArr)
//         miniArr = []
//         }
//     }

//     if (miniArr.length >0){
//         chunked.push(miniArr)
//     }

// return chunked
// }

module.exports = chunk;
