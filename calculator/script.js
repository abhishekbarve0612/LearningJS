
let number = "";
let result = "";
let operation = "";
var flag = false;
isComputed = false;
const display = document.querySelector("#input");
display.value = "";

function numberClick(e) {
  var num = e.innerText;
  number += num;
  if (isComputed == true){
    display.value = num;
    isComputed = false;
  } 
  else display.value += num;
}

function symbolClicked(e){
  console.log(e);
  var symbol = e.innerText;
  if (isComputed == true){
    operation = symbol;
    display.value = display.value + " " + operation + " ";
    isComputed = false;
  }
  if (number == ""){
    if (symbol == "+" || symbol == "-"){
 
      display.value = symbol;
      return;
    } 
  }
  else {
    console.log("AAAAAAA");
    operation = symbol;
    n = parseFloat(number);
    console.log(display.value);
    display.value = display.value + " " + operation + " ";
    console.log(display.value);
    console.log(result);
    compute(number);
    console.log(result);
    number = "";
  }
}

function compute(num){
  switch(operation){
    case "+":
      if (result == "") result = 0;
      result += parseFloat(number);
      break;
    case "-":
      if (result == "") result = 0;
      result -= parseFloat(number);
      break;
    case "*":
      if (result == "") result = 1;
      result *= parseFloat(number);
      break;
    case "/":
      if (result == "") return number;
      result /= parseFloat(number);
      break;
    case "%":
      if (result == "") return number;
      result = parseInt(result) % parseInt(number);
      break;
    default:
      console.log(operation);
      result = "Invalid Operation";
  }
  return result;
}

function showResult(e) {
  console.log("Show esult");
  console.log(result);
  compute(number);
  console.log(result);
  display.value = result;
  number = "";
  isComputed = true;
}

function reset(e){
  number = ""
  display.value = "";
  result = "";
}