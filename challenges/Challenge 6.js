/*
6.
Date: 21/09/2020
Sucess: True
Challenge: Get the difference between the min and max of this array, [125, 63, 236, 632, 432, 98, 109, 552]
Goal: Min: 63 | Max: 632 | Difference: 569

Code:
*/
const minMaxDifferent = [125, 63, 236, 632, 432, 98, 109, 552];

let min;
let max = 0;
let difference = 0;

minMaxDifferent.forEach((item, i) => {
    if(!min) {
        min = item;
    }
    if(min > item) {
        min = item;
    } 
    if(max < item) {
        max = item;
    }
});

difference = max - min;

console.log(`Min: ${min} | Max: ${max} | Difference: ${difference}`);

// Output: Min: 63 | Max: 632 | Difference: 569