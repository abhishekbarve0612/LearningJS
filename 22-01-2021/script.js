console.log(`Self Executing Anonymous Functions!!`);

(function(){
  console.log(`
      My name is Abhishek
      I am learningg Self Executing Anonymous Functions
  `);
})()

console.log("Closure");

function add(x) {
  return function (y){
    console.log(`x is ${x} and y is ${y}`);
    return x - y;
  }
  
}

var f = add(10);
f(20);
console.log(add(25)(35));

var person = {
  fname: "Abhishek",
  lname: "Barve",
  getName: function(){
    console.log(`
      My name is ${this.fname} ${this.lname}!!
    `)
  }
}

var guest = {
  fname: "Lucifer",
  lname: "Morningstar"
}

person.getName();
var guestReference = person.getName.bind(guest);
guestReference();