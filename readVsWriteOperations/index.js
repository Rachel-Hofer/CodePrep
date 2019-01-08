// Read vs Write Operations

var a = 10; //write operation
console.log(a) //read operation

// example:

var a = 10;
var b;

b = a;
// b is LHS, which is a write
// a is a RHS which is a read


//Ex. // you cannot do a read operation on a non-defined variable
var foo; //declared a function, but did not define
console.log(foo) //will print undefined

//Ex. // you can do write operations on a non-declared variable, you cannot do read operations on a non-declared variable
foo = 10; // defines but does not declare the variable //write operation
console.log(foo); // will print 10
//the difference is the nature of the operation