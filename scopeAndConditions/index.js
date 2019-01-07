// Ex. Function Declaration
function foo() {
  console.log("Function foo is called");
}
foo()


// Ex. of Function Expression (First class function in JS)
var bar = function() {
  console.log("Function bar is called");
}
bar()

// Scope: a scope dictates a portion of the program where a particular 
// variable is accessible. If the variable is accessed outside of the scope, 
// the variable does not exist. 
//Scopes have a hierarchy, a scope inside of a scope.

// ex. of BLOCK scope in languages like Java or C++ NOT in Javascript
// {
// var a = "This is a simple way to create a scope" 
// }

// ex. of BLOCK scope in Javascript: does not perform the same way as above like in Java or C++
var name = "Rachel";

if(name === "Rachel"){
  var department = "Engineering"
}

console.log(name) // === Rachel
console.log(department) // === Engineering (JS is not a BLOCK scope, it is functional scope)

// ex. of Functional Scope: THIS is what Javascript has*
var name = "Rachel";

function allocateDepartment(){
  if(name === "Rachel"){
  var department = "Engineering"
}
}

console.log(name) // === Rachel
console.log(department) // === ERROR: department is declared INSIDE the function, therefore not accessible outside of that function.