// Function Declaration: you are creating a function WITH a name
// Function Declarations will be hoisted, meaning you can call the 
// function before it appears in the code, and it will still execute properly
function someFunc(arr){
    var newArray = [];
  
    for(let i = 0; i < arr.length; i++){
     newArray.push(arr[i].toUpperCase());
    }
    return newArray
  }
  
  let arr = ["a", "b", "c"]
  someFunc(arr)
  
  
  
  // Function Expression: you create a variable and you assign an anonymous function to it (unnamed function). THIS makes reference to the function WITHIN an object.
  var someFunc = function(){
    var newestArray = [];
  
    for(let i = 0; i < arr.length; i++){
     newestArray.push(arr[i].toLowerCase());
    }
    return newestArray
  }
  
  let arr = ["A", "B", "C"]
  someFunc(arr)
  

  // Arrow Function (Function Expression): THIS makes reference to GLOBAL object
  var someFunc = (arr) => {
    var newestArray = [];
  
    for(let i = 0; i < arr.length; i++){
     newestArray.push(arr[i].toLowerCase());
    }
    return newestArray
  }
  
  let arr = ["A", "B", "C"]
  someFunc(arr)