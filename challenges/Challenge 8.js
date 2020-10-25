/*
8.
Date: 25/10/20
Sucess: True
Challenge: With this array, ["Tyson", "Rocket", "Fish", "Chicken"], Join and seperate by "," but last element by seperated by "and"
Goal: Tyson, Rocket, Fish and Chicken
Link: https://code.sololearn.com/c9eTgDt2rdXK/#node

Code:
*/

let toJoinArray = ["Tyson", "Rocket", "Fish", "Chicken"];
let lastEle = toJoinArray.pop();

toJoinArray.forEach((_, i) => {
  if (i === toJoinArray.length - 1) return;
  toJoinArray[i] += ",";
});

console.log(toJoinArray.join(" ") + " and " + lastEle);

// Output: Tyson, Rocket, Fish and Chicken
