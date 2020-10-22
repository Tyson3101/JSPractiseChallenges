/*
1.
Date: 19/09/2020
Sucess:  True
Challenge: Remove duplicates from this array, [1, 4, 2, 1, 5, 2, 6, 4]
Goal: [1, 4, 2, 5, 6]
Link: https://code.sololearn.com/cSti0TE37uXD/#node

Code:
*/

let toRemoveDup = [1, 4, 2, 1, 5, 2, 6, 4];
const goal = [1, 4, 2, 5, 6];
let removedDup = [];

toRemoveDup.forEach((item, i) => {
    if(!removedDup.includes(item)) {
        removedDup.push(item);
    }
});

console.log(removedDup);

// Output: [1, 4, 2, 5, 6]
