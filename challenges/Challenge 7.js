/*
7.
Date: 21/10/20
Sucess: True
Challenge: Find the missing number in this array of numbers going up by 3, [2, 5, 8, 11, 14, 20, 23]
Goal: 17

Code:
*/

let toFindMiss = [2, 5, 8, 11, 14, 20, 23];
let missingNum = 0;

toFindMiss.forEach((num, i) => {
     let nextNum = num + 3
     if(i < toFindMiss.length -1 && nextNum !== toFindMiss[i+1]) {
          missingNum = nextNum;
     }
})

console.log(missingNum)

// Output: 17