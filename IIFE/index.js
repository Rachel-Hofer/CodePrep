//ex. of how to NOT have global variables or global functions- 
// anonymous function (IIFE: Immediately Invoked Function Expression)

(function() {
  var a = 10;
  var b = 10;
  console.log(a + b)
})();