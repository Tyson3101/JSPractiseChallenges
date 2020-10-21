/*
3.
Date: 20/09/20
Sucess: True
Challenge: Empty this array, [1, 5, 7, 1, 6, 2, 6, 7, 2, 7, 24, 72, 72]
Goal: []

Code:
*/

const toEmptyArray = [1, 5, 7, 1, 6, 2, 6, 7, 2, 7, 24, 72, 72];

toEmptyArray.splice(0, toEmptyArray.length);

console.log(toEmptyArray);

// Output: []
