/*
2.
Date: 19/09/2020
Sucess: True
Challenge: Reverse each word in this string, 'Welcome to this Javascript Guide!'
Goal: 'emocleW ot siht tpircsavaJ !ediuG'

Code:
*/
const stringReversed = 'Welcome to this Javascript Guide!';
const goal = 'emocleW ot siht tpircsavaJ !ediuG';

let stirngArray = stringReversed.split(' ');

let stringWordArray1 = []
let stringWordArray2 = []
let stringWordArray3 = []
let stringWordArray4 = []
let stringWordArray5 = []

let finished = [];

for(let j = 0; j < stirngArray.length; j++) {
for(let i = 0; i < stirngArray[j].length; i++) {
if(j === 0) {
   stringWordArray1.push(stirngArray[j].charAt(i));
} else if(j === 1) {
   stringWordArray2.push(stirngArray[j].charAt(i));
} else if(j === 2) {
   stringWordArray3.push(stirngArray[j].charAt(i));
} else if(j === 3) {
   stringWordArray4.push(stirngArray[j].charAt(i));
} else if(j === 4) {
   stringWordArray5.push(stirngArray[j].charAt(i));
}
}
}

finished.push(stringWordArray1.reverse().join(''), stringWordArray2.reverse().join(''), stringWordArray3.reverse().join(''), stringWordArray4.reverse().join(''), stringWordArray5.reverse().join(''));

console.log(finished.map(x => x).join(" "));

// Output: 'emocleW ot siht tpircsavaJ !ediuG'
