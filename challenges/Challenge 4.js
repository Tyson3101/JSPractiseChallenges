/*
4.
Date: 20/09/20
Sucess: True
Challenge: Duplicate this array, [1, 5, 2, 6, 3, 9, 7]
Goal: [1, 5, 2, 6, 3, 9, 7, 1, 5, 2, 6, 3, 9, 7]
Link: https://code.sololearn.com/c29Gdc0nqhKN/#node

Code:
*/
let toDuplicate = [1, 5, 2, 6, 3, 9, 7]

toDuplicate.forEach((item, i) => {
    toDuplicate.push(item)
})

console.log(toDuplicate)

//Output: [1, 5, 2, 6, 3, 9, 7, 1, 5, 2, 6, 3, 9, 7]
