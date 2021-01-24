const div = document.querySelector("#root");
const newElement = document.createElement("p");
newElement.innerText = "My name is Monkey D. Luffy!!";
div.appendChild(newElement);
const btn = document.createElement("button");
const textNode = document.createTextNode("Insert Line");
btn.appendChild(textNode);
btn.addEventListener("click", (e) => {
  const div = document.querySelector("#root");
  const newElement = document.createElement("p");
  newElement.innerText = "I am going to be a Pirate King!!";
  div.appendChild(newElement);
});
div.appendChild(btn);






const myName = "Abhishek";
var es6Example = `My name is ${myName}!`;

console.log(`
    ${es6Example}
    ${es6Example.charAt(4)}
    ${es6Example.endsWith("!")}
    ${es6Example.includes("Abhishek")}
    Apart form these, es6 provides lots of features and flexibility
`);

const a = new Map();

a.set("fname", "Abhishek");
a.set("lname", "Barve");

for (var [key, value] of a) {
  console.log(` ${key} --> ${value} `);
}

a.forEach((value, key) => {
  console.log(` ${value} <-- ${key} `);
})

console.log(a);


var myArray = ["AAAA", "BBB", "CCCC", "DDDD", "EEE"]
var [f, b, c, d, e] = myArray;

const myObject = {
  fname: "Abhishek",
  lname: "Barve"
}

const {fname, lname} = myObject;
console.log(`Destructuring
    var myArray = ["AAAA", "BBB", "CCCC", "DDDD", "EEE"]
    var [a, b, c, d, e] = myArray;
    ${f} -- ${b} -- ${c} -- ${d} -- ${e}

    ${fname} --------- ${lname}
`);

console.log(`
      Spread Operator
`);


(function(...object){
  console.log(`
    Spread Operator ===> ${object};
  `);
})(myObject);

function sum(...values) {
  let sum = 0;
  for (const val of values) {
    sum += val;
  }
  return sum;
}

console.log(`
      Sum of (23, 3,4 ,5,7,7) ==> ${sum(23, 3,4 ,5,7,7)}
`);


class Person{
  fname = "";   // # Denotes Private Attributes can't be accessed outside function calls of Class
  lname = "";
  age = 0;
  constructor(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  getFullName(){
    return this.fname + this.lname;
  }
  getAge(){
    return this.age;
  }
}

const person1 = new Person("Abhishek", "Barve", 21);

console.log(`
    Full NAme: ${person1.getFullName()}
    Age:       ${person1.getAge()}
  
`);