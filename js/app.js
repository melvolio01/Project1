$(function(){
//notes for presentation - difficulty in getting array items to console.log and to add event listeners to each

var answers = [
  ["Oak","Cedar","Fir","Pine"], // grid[0][0], grid[0][1]
  ["Red","Blue","Green","Yellow"],// grid[1][0], grid[1][1]
  ["Villa","Spurs","City","United"],
  ["Table","Chair","Door","Stool"]
];

var grid = answers.reduce(function(prev, current) {
  return prev.concat(current);
}, []);

$('.box').on('click', function() {
  var idOfBox = $(this).text();
  console.log(idOfBox);
  // $(this).html(value)
});

shuffle(grid);

// for (var i = 0, j = grid.length; i < j; i++);{
//   console.log ($(this).index + $(this).length);

// $.each(function(){
//   $(this).  
// }

  // if ('box').on('click')<4{
  //   console.log("Player 1's turn");
  // }
  // else{
  //   console.log("Player 2's turn")
  // }




$('.box').on('click', function(){
  $(this).toggleClass('groupA'); 
});

// var grid = [
//   ['oak', 'cedar', 'fir', 'pine'],
//   ['red', 'blue', 'green', 'yellow'],
//   ['villa', 'spurs', 'city', 'united'],
//   ['table', 'chair', 'door', 'stool']
// ];

// var copy = grid.slice().join(" ").replace(/,/g, " ").split(" ");
// var res = [];
// while (copy.length) {
//   var arr = [];
//   while (arr.length < 4) {
//     var j = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];
//     arr.push(j)
//   };
//   res.push(arr)
// }
$('#resetGrid').on('click', function(){
  shuffle(grid);
});

$('.box').each(function(index, box) {
  var $box = $(box);

  $box.text(grid[index]);

});

function shuffle(grid){
  var i = grid.length;
  var j;
  var temp;

  while(--i>0){
    j = Math.floor(Math.random()*(i+1));
    temp = grid[j];
    grid[j] = grid[i];
    grid[i] = temp;
  }
  return grid;
};

});

  