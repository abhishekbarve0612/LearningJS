console.log(`LEarning Hoisting Today`);

console.log(`
    
      Initially declared variables are assigned as undefined
      but functions are available even before their declaration
      `)

myName("Abhi");
console.log(name);
var name = "Abhishek";

console.log(name);
myName(name);
function myName(name){
  console.log(`My name is ${name}`);
}

myName("Barve");

console.log(`Array Declaration`);

var array = ['abhi', 'barve']
console.log(array);

var newArray = new Array("abhi", "barve");

console.log(newArray);
newArray.push("abhsihek");
console.log(newArray);
newArray.pop();
console.log(newArray);
array.shift();  //Delete Leftmost (Expensive Operation)
console.log(array);
array.unshift("abhishek"); // Add at the left (Expensive Operation)
console.log(array);

console.log(Array.from("barve"));

console.log(array.indexOf("ab"));
console.log(array.indexOf("abhishek"));

console.log(`Arrow Functions`);

var isEven = (number) => {
  return number % 2 === 0;
}

console.log(isEven(2), isEven(7));

console.log(`
      Call back function syntax
      () => {}  // When we use {}, return statement becomes mandatory
      () => () // Return Not required better for one line code
`);

var anotherArray = new Array(2, 3, 4, 5,6,7, 8, 9);
var result = anotherArray.every((e) => (e%2 === 0));
console.log(result);
var result = anotherArray.every((e) => {e%2 === 0});
console.log(result);

console.log(`
      array.fill(value, start index/position, end index);
      fills the array wit value from the given index till the end
      start and end index are optional
`);

anotherArray.fill(5, 6);
console.log(anotherArray);


var result = anotherArray.filter((e) => e < 6);
console.log(result);

console.log("Objects");

var newObject = {
  firstName: "Abhishek",
  lastName: "Barve",
  age: 21,
  getAge: function () {
    return this.age;
  },
  changeName: function (name) {
    this.firstName = name;
  }
}

console.log(`
  My name is ${newObject.firstName} ${newObject.lastName}!
  ${newObject.getAge()}
`);

anotherArray.forEach((ele) => (console.log(ele)));

for (const i of anotherArray) {
  console.log(i);
}

for (const key in newObject) {
  if (newObject.hasOwnProperty(key)) {
    const element = newObject[key];
    console.log(element);
  }
}