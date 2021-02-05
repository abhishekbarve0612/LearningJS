const textBox = document.querySelector("#evaluatedText");
const resultNode = document.querySelector("#wordCount");
let count = 1;
textBox.value = "";
resultNode.innerText = count;
textBox.addEventListener("input", () => {
  console.log("Entered!");
  var val = textBox.value;
  count = stringToArray(val);
  if (val.charAt(val.length-1) == " ") 
  resultNode.innerText = count;
  else resultNode.innerText = count+1; 
})

function stringToArray(str) {
  var count = 0;
  var spaceFlag = false;
  for (let i = 0; i < str.length; i++) {
    if (spaceFlag == false && str.charAt(i) == " ") count++;
    if (str.charAt(i) == " "){
      spaceFlag = true;
    } else {
      spaceFlag = false;
    }
  }
  return count;
}
