// Instructions:
// Given two integers, write a function to sum the numbers without using any arithmetic operators.


// My Answer:
function additionOfTwoNumbers(num1, num2) {
    if (num1 === 0) {
        return num2;
    } else if (num2 === 0) {
        return num1
    } else {
        return additionOfTwoNumbers(num1 ^ num2, (num1 & num2) << 1)
    }

}

let num1 = 0;
let num2 = 3;
additionOfTwoNumbers(num1, num2);