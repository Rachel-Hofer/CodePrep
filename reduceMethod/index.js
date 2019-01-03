// JavaScript Array Reduce

const numbers = [1, 2, 3, 4, 5];

// accum = 0, curr = 1 => accum = 1
// accum = 1, curr = 2 => accum = 3
// accum = 3, curr = 3 => accum = 6
// accum = 6, curr = 4 => accum = 10
// accum = 10, curr = 5 => accum = 15

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0);

console.log(sum)


// OR 


// accum = 1, curr = 2 => accum = 3
// accum = 3, curr = 3 => accum = 6
// accum = 6, curr = 4 => accum = 10
// accum = 10, curr = 5 => accum = 15

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});
// (if you don't put in an "initial value", accumulator will default to index 0, and current value will default to index 1)

console.log(sum)