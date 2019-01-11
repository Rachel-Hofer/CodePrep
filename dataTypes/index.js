// JS Data Types:
  // Javascript: weak typing- no need to declare variable type, any variable can hold any data type, no error will occur. 
    // (The opposite is called strong typing, meaning you cannot assign a different data type to a variable, and you have to declare what type that variable will hold)
  // Javascript: There is no scoping information in variable declarations. 
  // Javascript: you can "interrogate" variables using typeOf.
      // Example:
        // var a = 10;
        // console.log(typeOf a) // number
        // var b = true;
        // console.log(typeOf b) // boolean
        //c = null; // this turns out as a BUG in JS, rather than returning null
        // console.log(typeOf c) // object

// 1. Boolean: True OR False; true === 1 OR false === 0

// 2. Number: double-precision 64-bit format IEEE 754 values. NOT an integer. 

// 3. String: sequences of unicode characters (16-bit). no such thing as "character", it is a string with the length of 1.

// 4. Undefined: only one value = undefined. This will appear if you decalre a variable, but do not define it.

// 5. Null: only one value = null; "not applicable"

// Undefined vs Null: 
    // undefined === empty form field, hasn't been filled out yet
    // null === "not applicable"
      //Example: If "Middle Name" is on a form field, and the person filling it out does not have a middle name, they would put "null", 
        // so the reader would know they didn't have a middle name rather than wondering if they just missed the question, and accidentally left it blank.

// 6. Symbol: ES6 - a primitive data type having the quality that, values of this type can be used to make object properties that are anonymous. 
    // This data type is used as the key for an object property when the property is intended to be private, for the internal use of a class or an object type