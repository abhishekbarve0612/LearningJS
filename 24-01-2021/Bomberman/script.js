const container = document.querySelector("#main-container");
var array = new Array(36);
var visited = new Array();
var bombs = new Array();
function randomArray(){
  for (let i = 0; i < 10; i++) {
    var num = Math.floor(Math.random() * (35 - 0) + 0);
    array[num] = 1;
    bombs.push(num);
  }
}

function setContainer(){
  for (let count = 0; count < 6*6; count++) {
    let div = document.createElement("div");
    div.setAttribute("data-index", count);
    div.setAttribute("class", "cell");
    div.addEventListener("click", (e) => {
      var ele = parseInt(e.target.getAttribute("data-index"));
      if (visited.includes(ele) == false){
        if (array[ele] == 1) {
          gameOver("You Lost!!!");
          return;
        }
        e.target.classList.add("visited");
        visited.push(ele);
        if (visited.length > 10){
          gameOver("You Won!");
          return;
        }
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
  revealBombs();
  status.appendChild(newNode);
}

function revealBombs() {
  var nodes = document.getElementsByClassName("cell");
  for (const node of nodes) {
    var num = parseInt(node.getAttribute("data-index"));
    if (bombs.includes(num) == true){
      node.classList.add("bombed");
    }
    node.addEventListener("click", (e) => {
      alert("Game Over!!!!")
    });
  }
}

function startGame() {
  visited = [];
  array.fill(-1);
  randomArray();
  container.innerHTML = "";
  var status = document.querySelector("#game-status");
  status.innerHTML = "";
  setContainer();
}

startGame();