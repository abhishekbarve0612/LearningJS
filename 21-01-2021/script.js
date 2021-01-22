console.log(`Slice and Splice!!!`);

var countries = ["India", "Japan", "Korea", "USA", "Russia", "Australia", "Canada" ]

console.log(countries.slice(1, 4));
console.log(`

    .slice(Initial Position(Included), End Position(Excluded))

`);

var countries = ["India", "Japan", "Korea", "USA", "Russia", "Australia", "Canada" ]
countries.splice(1, 5, "London", "China");
console.log(countries);
console.log(`

    .splice(Initial Position(Included), count from initial position, Array of values to be inserted in place of them)

`);

console.log("this Operator");


var counter = document.querySelector(".counter");
var title = document.querySelector(".title");

let count = 0;
setInterval(() => {
  if (count < 2000){
    count++;
    counter.innerHTML = count;
  }
}, 0.01);

setTimeout(() => {
  title.innerHTML = "Counting Stopped!!"
}, 9000);


counter.addEventListener("mouseenter", () => {
  title.innerHTML = "Mouse in scope!!"
})

counter.addEventListener("mouseleave", () => {
  title.innerHTML = "Mouse out of scope!!"
})

