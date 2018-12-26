// Instructions:

// console.log numbers 1 - 100
// console.log fizz if number is multiple of 3
// cosole.log buzz if the number is multiple of 5
// cosole.log fizzbuzz if the number is multiple of 3 AND 5


// My Answer:

function allNumbers(num){
    for(let i = 1; i <= 100; i++){
      i % 3 === 0 && i % 5 === 0 ? console.log('fizzbuzz') :
       i % 3 === 0 ? console.log('fizz') :
        i % 5 === 0 ? console.log('buzz') :
         console.log(i) 
    }
  }
  
  allNumbers(100)