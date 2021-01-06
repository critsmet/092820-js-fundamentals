//- - - - -
//VARIABLES
//- - - - -

// let name = "Chris" lets you define a variable name, you don't have to set it immediately, and set the value as many times as you want
// const name = "Chris" lets you define a variable name and set the value only once
// var name = "Chris" lets you define a variable name, you don't have to set it immediately, and you can change it whenever you want

//let name = "Chris"
//'var' and 'let' allow you to declare a variable without assigning it a value.

//but we can change let and var

//basically never use var, it gives you too much freedom:
//1. It never throws an error if you declare the same variable twice
//2. Linters and most JS pros just say it's bad practice
//3. var can be referenced before the value is set (I think this is possible with let too but I need to double check further down when we get to hoisting)

//'let' allows you to change the value of a declared variable, and does not let you re-assign the variable name later
//best for iterators or for rare times when you have values that you expect to reassign several times in your application

//'const' does not allow you to declare a variable without assigning a value AND you can never change the value

//You are encouraged to use 'const' as often as possible, although some big JS developers say const was a mistake:
//https://twitter.com/dan_abramov/status/1208369896880558080?lang=en

//Set multiple variables at once, works with 'let' or 'const'

//- - - - -
//DATATYPES
//- - - - -

//---Strings---

let string = "Hi"
string.concat = "! My name is Chris" //Will return a new string but leave the original unchanged
//string variable is still just "hi"
string += "! My name is Chris" //The plus equals operator will add onto the original string AND permanntly change it

//---Numbers----

//Can be whole numbers or decimals

5
5.5

//arithmetic
//+, -, *, /


//increment operator

//decrement operator


//---Booleans----

true
false
//To JS, empty strings (""), 0 equate to false, (null and undefined can be coerced to false). Everything else is true.

//The difference between undefined and null
//undefined means that you declared something but never added a value to it
//null is a value that we assign to something

//---Arrays & Objects----

// let arr = [1, "String", false, [], {}, null]
// arr[1]
//
// let obj = {'key': "value"}

//values on keys can be accessed using dot notation (object.key), or bracket notation (object['key'])

//Remember that Arrays and Objects ARE passed by reference, not by value.
//What does this mean?

//Comparison Operator and Coercion

//- - - - - - - - - - -
//FUNCTIONS AND METHODS
//- - - - - - - - - - -

//Regular JS functionS - LEARN THIS WAY FIRST
function sayName(name){
  console.log(`Hi my name is ${name}!`)
  return name
}

//anonymous functions don't have names. When to use them? As callback functions for example in iterators

let func = function(name){
  console.log(`Hi my name is ${name}!`)
  return name
}


//Arrow function - ES6, will be very important in a few weeks
//Always anoymous so if you want to save them for later use we MUST assign them to a variable

const arrowFunc = (name) => {
  console.log(`Hi my name is ${name}!`)
  return name
}

//One line arrow functions don't need curly braces and have implied returns
//One line functions with implicit returns

//Pass in an argument

//Difference between a function definition/declaration, reference, and execution

//Definition/declaration:

function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function double(num){
  return num * 2
}

//Reference:

add

//Invocation/Execution:

add(1, 3)


//Functions are first-class citizens, meaning that they can be saved to variables and in arrays and objects. They can be passed as arguments or set as return values.

function runFunction(func, args){
  func(args)
}

// let arith = [add, subtract]
//
// arith[0](1,3)
// arith[1](3, 2)

let arith = {add: add, subtract: subtract, double: double}

arith.add(3, 1)
arith.subtract(5, 2)

runFunction(arith.double, 3)

function multiplicationConstructorFunction(numberToMultiplyBy){
  return function(num){
    return num * numberToMultiplyBy
  }
}

//Use as argument for functions that requires callbacks, like iterators, see below

//an anonymous function is generally written when it will only be used in a specific circumstance,
//generally as a callback function


//Iteration


//Iterate over each of these numbers and return a new array with the same amount of elements as the original, however I want all of the elements of the original to be multiplied by 2 in the new

let numArray = [1, 2, 3]

//callback function is a function argument that the method will use to determine the execution logic

//.map is an iterator that we use when we want to make a transformation on every element in an array. The new array will always have the same amount of elements as the original.

function multiplyByTwo(num){
  return num * 2
}

multiplyByTwo(2)

numArray.map(function(num){
  return num * 2
})

//.forEach is how we iterate over Arrays, but we cannot use .forEach with objects.
//forEach, like in Ruby, always returns the original collection

//to iterate over objects, we use for...in loop

//.reduce

//.filter

//.find

//- - - - - - - - - - - - - -
//SCOPES, CLOSURES, HOISTING
//- - - - - - - - - - - - - -

//PHASES//

//COMPILATION PHASE

//The first pass is the compilation phase, in which the engine steps through our code line-by-line:

//It ignores all function executions

//When it reaches a variable declaration, the engine allocates memory and sets up a reference to the variable's identifier, e.g., myVar.
//With var, the variable name is declared but the value is not set until the execution phase.
//With let and const, the names are reserved but the values aren't set NOR does the program allow the variables to be called until they've been assigned variables
//See hoisting below

//When the engine encounters a function declaration, it does three things:

//1. Allocates memory and sets up a reference to the function's identifier, or the variable name we gave it if there is one e.g., `myFunc`.

//2. Determines execution context with a new scope.

let num = 5

function multiplyByNum(anotherNum){
  anotherNum * num
  let thirdNumber = 10
}

function anotherFunction(){
  //thirdNumber is not accessible because it is defined in another function ie different scope
  num //yes is accessible
  let someOtherVariable = "another value"
  // does not have access to yetAnother
  function aNestedFunction(){
    someOtherVariable //yes, is accessible
    num //yes, is accessible
    let yetAnother = "yet another value"
  }
}

//anotherFunction can call multiplyByNum inside of it, and vice versa

// thirdNumber is not accessible

//3. Adds a reference to the parent scope (the outer environment) to the scope chain, making variables and functions declared in the outer environment available in the new function's scope.

//EXECUTION PHASE - the code is executed, and functions execute

//------------------
//DEFINITIONS//
//------------------
//CLOSURE - A function within a function; a scope within another scope

//SCOPE CHAIN - Functions declared within functions; scopes being made within other scopes, but the ability to inherit values from scopes above

//LEXICAL SCOPE - Referencing functions declared elsewhere inside another function

//HOISTING

let spenser

spenser = "Spenser"

sayGoodMorning()

function sayGoodMorning(){
  console.log(`Good Morning, ${spenser}!`)
}



















//what is the value of an argument inside of a function if, when the function is executed, we never pass in the variable

//difference between 'undefined' as return value and undefined error
