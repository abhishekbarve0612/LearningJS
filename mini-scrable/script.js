const input = document.querySelector("#evaluatedText");
const countText = document.querySelector("#letterCount");
var length = 0;
var maxLength = 0;
var inputValue = 0;
count = (e) => {
  length = 0;
  inputValue = input.value;
  // if (inputValue.length <= maxLength){
  //   if (inputValue[inputValue.length-1] == " ") return;
  //   length--;
  // } else if (inputValue[inputValue.length-1] == " ") return;
  // else length++;
  // maxLength = inputValue.length;
  countText.innerText = inputValue.length;
}