// Algorithms:

// 1) Modulus Operator
    // gives remainder (%) of a number after division
    // Examples:
    // 7 % 3
    // modulus is 1

    // 100 % 30
    // modulus is 10

// FizzBuzz: 
function fizzBuzz(num) {
    for(let i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
      }
      else if(i % 5 === 0){
        console.log('buzz')
      }
      else if(i % 3 === 0){
        console.log('fizz')
      }
      else {
        console.log(i)
      }
    }
  }
  fizzBuzz(30);
  
  // OR
  
  function fizzBuzz(num) {
    for(let i = 1; i <= num; i++){
      if(i % 15 === 0) console.log('fizzbuzz');
      else if(i % 5 === 0) console.log('buzz');
      else if(i % 3 === 0) console.log('fizz');
      else console.log(i)
    }
  }
  fizzBuzz(30);