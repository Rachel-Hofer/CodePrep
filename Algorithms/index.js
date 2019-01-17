// Algorithms: An algorithm is a set of instructions designed to perform a specific task.
// In computer programming, algorithms are often created as functions

// 1) Modulus Operator:
    // gives remainder (%) of a number after division
    // Examples:
    // 7 % 3
    // modulus is 1

    // 100 % 30
    // modulus is 10

// Algorithm - FizzBuzz: 
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



// 2) Hash Table: 
// In computing, a hash table is a data structure that implements 
// an associative array abstract data type, a structure that can 
// map keys to values. A hash table uses a hash function to compute 
// an index into an array of buckets or slots, from which the desired 
// value can be found

// Algorithm - Harmless Ransom Note (using HashTable)
function harmlessRansomNote(noteText, magazineText) {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};
  
    magazineArr.forEach(word => {
      if(!magazineObj[word]) magazineObj[word] = 0;
      magazineObj[word]++;
    });
  
    let noteIsPossible = true;
    noteArr.forEach(word => {
      if(magazineObj[word]) {
        magazineObj[word]--;
          if(magazineObj[word] < 0) noteIsPossible = false;
      }
      else noteIsPossible = false;
    });
  
    return noteIsPossible
  }
  
  let noteText = 'This is a secret note for your from a secret person';
  let magazineText = 'This is a secret note for your from a secret person';
  harmlessRansomNote(noteText, magazineText)