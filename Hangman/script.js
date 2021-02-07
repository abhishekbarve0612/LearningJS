let bodyParts = [false, false, false, false, false, false];
const allAnswers = ['application', 'programming', 'interface', 'wizard', 'frizar']; 
var takeOne = Math.floor(Math.random() * (allAnswers.length - 0) + 0);
console.log(allAnswers[takeOne]);
const answer = [...allAnswers[takeOne]];
let pressedLetters = [];
let gameOver = false;
for (let index = 1; index < 7; index++) {
  const element = document.getElementById(index);
  element.style.display = "none";
}
let answerCount = 0;
let result = "";
const answerContainer = document.querySelector(".answer-container");
const mistypedContainer = document.querySelector(".mistyped");
for (const i of answer) {
  const node = document.createElement("div");
  node.setAttribute("class", "answer");
  const ans = document.createElement("span");
  ans.setAttribute("val", i);
  ans.className = "answer-span";
  node.appendChild(ans);
  answerContainer.appendChild(node);
}
let counter = 0;
window.addEventListener('keydown', (e) => {
    if (gameOver) return;
    console.log(e.key);
    const keyPressed = e.key;
    if (answer.includes(keyPressed)){
      revealLetter(keyPressed);
    } else {
      counter++;
      bodyParts[counter] = true;
      const node1 = document.getElementById(counter);
      node1.style.display = "block";

      const node = document.createElement("div");
      node.setAttribute("class", "wrong");
      const ans = document.createElement("span");
      ans.innerText = keyPressed;
      ans.className = "wrong-answer-span";
      ans.setAttribute("data-ns-test", "wrong-letter");
      node.appendChild(ans);
      mistypedContainer.appendChild(node);
    }
    if (counter == 6){
      gameOver = true;
      result = "Game is Over. You Lost!!";
      overTheGame();
    }
    if (answerCount == answer.length){
      result = "You Won!!!";
      gameOver = true;
      overTheGame();
    }
 }) 

 revealLetter = (letter) => {
    if (pressedLetters.includes(letter) == true) return;
    const nodes = document.querySelectorAll(".answer-span");
    for (const i of nodes) {
      if (i.getAttribute("val") == letter){
        i.innerHTML = "";
        const node = document.createTextNode(letter);
        i.appendChild(node);
        pressedLetters.push(letter);
        answerCount++;
        console.log(i);
      }
    }
 }

 overTheGame = () => {
   const node = document.querySelector(".result");
   node.innerText = result;
 }

 reset = () => {
  bodyParts = [false, false, false, false, false, false];
  pressedLetters = [];
  gameOver = false;
  for (let index = 1; index < 7; index++) {
    const element = document.getElementById(index);
    element.style.display = "none";
  }
  answerCount = 0;
  counter = 0;
  result = "";
  const nodes123 = document.querySelectorAll(".answer-span");
  for (const i of nodes123) {
      i.innerHTML = "";
  }
  mistypedContainer.innerHTML = "";
  const nodeResult = document.querySelector(".result");
  nodeResult.innerText = "";
  result = "";
 }