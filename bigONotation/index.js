// CONSTANT runtime: regardless of how the input changes, the output will always remain the same, so the time to execute the function will never change, regardless of input.
// Big O Notation: O(1)

function log(array){
    conosle.log(array[0])
    consol.log(array[1])
  }
  
  log([1, 2, 3, 4]);
  log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  
  // LINEAR runtime: the time to execute the function increases proportionally with the increase of the input
  // Big O Notation: O(n)
  
  function logAll(array){
    for(var i = 0; i < array.length; i++){
      console.log(array[i])
    }
  }
  
  logAll([1, 2, 3, 4]);
  logAll([1, 2, 3, 4, 5, 6]);
  logAll([1, 2, 3, 4, 5, 6, 7, 8]);
  logAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  
  // EXPONENTIAL runtime: the output increases at an exponential rate compared to the increase in input (not proportional)
  // Big O Notation: O(n^2)
  
  function addAndLog(array){
    for(var = i, i < array.length; i++){
      for(var = j, j < array.length; j++){
        console.log(array[i] + array[j]);
      }
    }
  }
  
  addAndLog(["A", "B", "C"]) // 9 pairs logged out
  addAndLog(["A", "B", "C", "D"]) // 16 pairs logged out
  addAndLog(["A", "B", "C", "D", "E"]) // 25 pairs logged out
  
  
  // LOGARITHMIC runtime: runtime increases based on input, but not at a proportionate rate, fastest and most efficient runtime
  // Big O Notation: O(log n)
  
  function binarySearch(array, key){
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;
  
    while(low <= high){
      mid = Match.floor((low + high) / 2, 10);
      element = array[mid];
      if(element < key){
        low = mid + 1;
      } else if(element > key){
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }