//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

const colorCopy = faveColors.slice(0, 3)  // to copy, only take 2 arguments (starting index #, last element# or last index # +1)
                                          
// to remove, it takes 3 arguments (starting index #, how many items to remove, any values to replace at teh index)

// console.log("colorCopy =", colorCopy);  // ==> colorCopy = ['red', 'green', 'black']

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
const colorCopy = ['red', 'green', 'black'];

colorCopy.push('pink');

// console.log(colorCopy);                // ['red', 'green', 'black', 'pink']
                                          // console.log(corlorCopy.push('pink')) // ==> 4, as it is the 4th elements
// 


//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]
const middleNums = numbers.slice(-4, -1)
console.log(middleNums)

//CODE HERE


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

// CODE HERE
const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

const answers = bigOrSmallArray[]

for (let i = 0; i < bigOrSmallArray.length; i++)
  if(i > 100){
    answers.push('Big')
 } else if (i <= 100){
    answers.push('small')
 } else {
    answers.push(answers)
 }