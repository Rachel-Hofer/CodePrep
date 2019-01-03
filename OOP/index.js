// 4 Pillars of Object-Oriented Programming

// 1. Encapsulation: in OOP, we group related variables and functions that 
// operate on them as objects. This reduces complexity.

// object-oriented example:
let employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    getWage: function() {
      return this.baseSalary + (this.overTime * this.rate);
    }
  };
  employee.getWage();
  
  // procedural-programming example:
  // let baseSalary = 30_000;
  // let overTime = 10;
  // let rate = 20;
  // function getWage(baseSalary, overtime, rate){
  //   return baseSalary + (overTime * rate)
  // }
  
  
  // 2. Abstraction: Hide the details/complexity and shows only the essentials. 
  // Reduces complexity and isolates impact of changes.
  
  
  // 3. Inheritance: eliminates redundant code. When an object acquires all the 
  // properties and behavior of a parent object.
  
  
  // 4. Polymorphism: many forms, a technique that allows you to get rid of long 
  // if/else or swtch/case statments. One name and many forms and it works on 
  // parent and child relationship. A task is performed in different ways.