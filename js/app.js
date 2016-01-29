// console.log("Aye aye captain");

// function startGame(){
//   if (Math.random()<0.5){
//     document.turn = "Player 1";  
//   }
//   else{
//     document.turn = "Player 2"; 
//   }
//   document.winner = null;
//   messageBox(document.turn + " goes next");
// }
// function messageBox(msg){
//   document.getElementById("messages").innerHTML = msg;
// }
$ (function(){

var row1 = [1,2,3,4];
var row2 = [5,6,7,8];
var row3 = [9,10,11,12];
var row4 = [13,14,15,16];
var grid = [row1, row2, row3, row4];

$("1").click(function(){
  console.log("You clicked box 1")
});

var elements = $('.grid').children();

// console.log(elements)

var row1 = elements.splice(0,4);
var row2 = elements.splice(0,4);
var row3 = elements.splice(0,4);
var row4 = elements.splice(0,4);
console.log(row1, row2, row3, row4)





























})




