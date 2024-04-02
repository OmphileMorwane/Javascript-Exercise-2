###  Theory Question: Describe the concept of scope in JavaScript, including the differences between global scope, function scope, and block scope.

Scope refers to the accessibility and visibility of variables and functions within diffferent parts of the code. Understanding scope is crucial for writing efficient and bug-free Javascript programs.

There are three main types of scopes in Javascript: global scope, function scope and block scope


# Global scope:

Variable are declared ouside of any function or block to have global scope.

Global variables are accessible from anywhere in the code, including within functions and blocks.

GGThey are defines using 'var', 'let', or 'const' keywords outside of any function or block/


Example:

let globalVar = 20;

functiion callFunc() {
        console.log(globalVar);
}

callFun();


# Function scope:

Variables declared within a fucntion have function scope, they are only accesible within a function in which they are declared. 

Example

function callFunc() {
        let localVar = 20;
        console.log (localVar);
}

callFunc();
console.log(localVar); // This will give an error as localVar is not defined.



# Block Scope

Block scopes refers tothe visibility of variables within a block of code, typically defined by '{}'

variables declared with 'let' and 'const' have block scope.

Block scope variables are accessible only within the block in which they ae declared.


example: 

if (true) {
    let blockVar = 30;
    console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined

Another example: 

for (let i = 0; i < 3; i++) {
    let blockVar = i * 10;
    console.log("Inside the block:", blockVar); // Accessible inside the block
}

// Outside the block, the variable is not accessible
// console.log(blockVar); // Error: blockVar is not defined.

