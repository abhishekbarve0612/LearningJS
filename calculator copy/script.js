let numberClicked = false;
let number = "";
let result = "";
let operation = "";
let computed = false;
const display = document.querySelector("#input");
function numberClick(e) {
  console.log(e);
  var num = e.innerText;
  if (computed == true && number == ""){
    number = display.value + num;
  }
  else number += num;
  display.value = number;
  if (numberClicked == false) numberClicked = true;
}

function symbolClicked(e){
  var symbol = e.innerText;
  if (number == ""){
    if ((symbol == "+" || symbol == "-") && numberClicked == false){
      number += symbol;
      display.value = number;
      return;
    } else {
      return;
    }
  }
  else {
    
    operation = symbol;
    console.log(result);
    compute(number);
    console.log(result);
    //result = parseFloat(number);
    display.value = result + " " + operation + " ";
    number = "";
  }
}

function compute(num){
  switch(operation){
    case "+":
      if (result == "") result = 0;
      result += parseFloat(num);
      break;
    case "-":
      if (result == ""){
        result = num;
        break;
      }
      result -= parseFloat(num);
      break;
    case "*":
      if (result == "") result = 1;
      result *= parseFloat(num);
      break;
    case "/":
      if (result == ""){
        result = num;
        break;
      };
      result /= parseFloat(num);
      break;
    case "%":
      result = parseInt(result) % parseInt(num);
      break;
    default:
      console.log(operation);
      result = "Invalid Operation";
  }
  // display.value = result;
  // result = "";
  // number = "";
  computed = true;
  numberClicked = false;
}

function reset(e){
  number = ""
  display.value = "";
  numberClicked = false;
  computed = false;
  result = "";
}

function equalTo() {
  compute(number);
  display.value = result;
  return;

}