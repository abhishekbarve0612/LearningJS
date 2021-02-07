
let number = "";
let result = "";
let operation = "";
const display = document.querySelector("#input");
display.value = "";
let symbolFlag = false;
let firstNumTaken = false;

function numberClick(e) {
  console.log(number + "<-num-------result-->" + result + "---op->" + operation);
  let num = e.innerText;
  number += num;
  display.value = result + " " + operation + " " + number;
  console.log(number + "<-num-------result-->" + result + "---op->" + operation);
}

function symbolClicked(e){
  console.log(e);
  console.log(number + "<-num-------result-->" + result + "---op->" + operation);
  var symbol = e.innerText;
  if (symbolFlag == false){
    if (number == ""){
      if (symbol == "+" || symbol == "-"){
        number = symbol;
      } else{
        return;
      }
    }
    else {
      console.log("Inside first else");
      operation = symbol;
      result = number;
      display.value = result + " " + operation;
      symbolFlag = true;
      firstNumTaken = true;
      number = "";
    } 
  }else{
    console.log("Inside Else");
    if (firstNumTaken){
      
    }
      compute(number);
      operation = symbol;
      number = "";
  }
  console.log(number + "<-num-------result-->" + result + "---op->" + operation);
}

function compute(num){
  console.log(number + "<-num---computing----result-->" + result + "---op->" + operation);
  result = parseFloat(result);
  switch(operation){
    case "+":
      result += parseFloat(number);
      break;
    case "-":
      result -= parseFloat(number);
      break;
    case "*":
      result *= parseFloat(number);
      break;
    case "/":
      result /= parseFloat(number);
      break;
    case "%":
      result = parseInt(result) % parseInt(number);
      break;
    default:
      console.log(operation);
      result = "Invalid Operation";
  }
  console.log(number + "<-num----computed---result-->" + result + "---op->" + operation);
  number = "";
}

function showResult(e) {
  console.log("Show result");
  console.log(result);
  compute(number);
  console.log(result);
  display.value = result.toString();
  number = "";
  isComputed = true;
}

function reset(e){
  number = ""
  display.value = "";
  result = "";
}