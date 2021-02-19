// Array.prototype
Array.prototype.includesOneof = function(arr){
  console.log(arr);
  if (Array.isArray(arr[0])){
    for(var i = 0; i<this.length; i++){
      let checker = false;
      for(var j = 0; j<this[i].length; j++){
        console.log(this[i][j] + "  " + arr[j] );
          if(this[i][j] === arr[i][j]){
              checker = true;
          } else {
              checker = false
              break;
          }
      }
      if (checker === true){
          return true
      }
      return false;
    }
  } else if (arr[0] === 'obj'){
    // let keys = arr[0].keys;
    // for(var i = 0; i<this.length; i++){
    //   if (this[i].some(ar => ar[keys[i]] === arr[i][keys[i]] )){
    //     return true;
    //   }
    // }
    //   return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (this.includes(arr[i])) return true;      
    }
    return false;
  }
  
}

const arr=[{name:'James Bond',code:'OO7'},{name:"Edward Donne",code:"OO1"}];
let a =  document.getElementById('root');


let res = arr.includesOneof([{name:'James Bond',code:'OO7'}]);

a.innerHTML = res;