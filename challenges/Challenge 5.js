/*
5.
Date: 21/09/20
Sucess: True
Challenge: Count the capital letters in this string, 'JMZWCneOTFLWYwBWxyFw'
Goal: 14
Link: https://code.sololearn.com/cHoO3OxC0S2L/#node

Code:
*/
let countCapitalLetter = 'JMZWCneOTFLWYwBWxyFw';
let countedCapitalLetter = [];

for(let i = 0; i < countCapitalLetter.length; i++) {
    let letter = countCapitalLetter.charAt(i);
    let capArray = countedCapitalLetter;
    let upperCaseCheck = letter.toUpperCase()
    if(upperCaseCheck === letter) {
        capArray.push(letter);
    }
}

console.log(countedCapitalLetter.length)

// Output: 14
