const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var zeroes = new Array();
var crosses = new Array();
var visited = new Array();

var container = document.getElementById("main-container");
var status = document.querySelector("#game-status");
let turn = true;
// var container = document.getElementById("main-container");
// var zeroes = new Array();
// var crosses = new Array();
// var visited = new Array();
// let turn = true;


function resetGame(){
  zeroes = [];
  crosses = [];
  visited = [];
  container.innerHTML = "";
  var status = document.querySelector("#game-status");
  status.innerHTML = "";
  startGame();
}

function startGame(){
  setContainer();
  
}

function setContainer(){
  for (let count = 0; count < 9; count++) {
    let div = document.createElement("div");
    div.setAttribute("data-index", count);
    div.setAttribute("class", "cell");
    div.addEventListener("click", (e) => {
      var ele = parseInt(e.target.getAttribute("data-index"));
        
        console.log("Inside SEtContainer");
        if (visited.length == 8) {
          gameOver("Game Over!! Draw");
          return;
        }
        if (visited.includes(ele) == false){
          if (turn == true) {
            zeroes.push(ele);
            e.target.classList.add("zero");
            var newNode = document.createTextNode("0");
            e.target.appendChild(newNode);
            for (const arr of winningConditions) {
              res = arr.every(function(val) { 
                return zeroes.indexOf(val) >= 0; 
              });
              if (res == true){
                gameOver("Player Zero Won!!");
                return;
              }
            }
            turn = false;
          }
          else {
            crosses.push(ele);
            e.target.classList.add("cross");
            var newNode = document.createTextNode("X");
            e.target.appendChild(newNode);
            for (const arr of winningConditions) {
              res = arr.every(function(val) { 
                return crosses.indexOf(val) >= 0; 
              }); 
              if (res == true){
                gameOver("Player Cross Won!!");
                return;
              }
            }
            turn = true;
          }
          visited.push(ele);
        }
    });
    container.appendChild(div);
  }
}

function gameOver(msg){
  var newNode = document.createElement("h3");
  newNode.innerText = msg;
  var status = document.querySelector("#game-status");
  status.innerHTML = "";
  status.appendChild(newNode);
}

startGame();

