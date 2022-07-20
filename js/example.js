// console.log("hello from external file.");
// console.log(s);
// s = "byebye";
// console.log(s);
// console.log(r);
// var x = 3;
// x = "ciccio";
// x = true;
// y = false;
// function f(){
//     var z = 3;
//     console.log(z);
//     w = "ciccio";
// }
// f();
// //console.log(z);
// console.log(w);
// var s = "ciao";
const b = document.getElementById("myButton");
const b2 = document.getElementById("myButton2");
const b3 = document.getElementById("myButton3");
b.onclick = function(evt){
    console.log(this);
}
function handleClick(evt){
    console.log(evt);
}

b2.onclick = handleClick;
b2.addEventListener("click", (evt)=>console.log("Added event listener"));

b3.onclick = ()=>{
    console.log(this);
}
console.log(this);

function createAnotherFunction(num){
    let x = 10;
    return (z)=>z*x*num;
}
const myFunction = createAnotherFunction(5);
const result = myFunction(2);
console.log(result);
var myVar = 3;
let myLet = 3;
console.log(Window.myVar);
console.log(Window.myLet);
function ff(){};
console.log(Window.ff);
console.log(this);