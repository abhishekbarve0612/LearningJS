console.log("Hello!!")

var firstName = "Abhishek";
var lastName = "Barve";
var age = 21;
var doingNow = "Coding";

console.log("Using ES6 to print");

console.log(`

  My name is ${firstName} ${lastName} and I am ${age}.
  I am doing ${doingNow} right now!

`);

console.log(typeof age, typeof firstName);

// Falsy Values

// undefined
// null
// 0
// ''
// NaN

// Functions

function hello(name){
  console.log(`Hello ${name}`);
}

hello("Abhhishek");

var hola = function (name){
  console.log(`Hola my friend ${name}`);
}

hola("Abhi");

var helloCopy = hello;

helloCopy("Abhishek Barve");