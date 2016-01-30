
$ (function(){
//notes for presentation - difficulty in getting array items to console.log and to add event listeners to each
var grid = [
  ["oak","cedar","fir","pine"], // grid[0][0], grid[0][1]
  ["red","blue","green","yellow"],// grid[1][0], grid[1][1]
  ["villa","spurs","city","united"],
  ["table","chair","door","stool"]
];

$('.box').on('click', function() {
  var idOfBox = $(this).text();
  console.log(idOfBox);
  // $(this).html(value)
});


// var grid = [
//   ['oak', 'cedar', 'fir', 'pine'],
//   ['red', 'blue', 'green', 'yellow'],
//   ['villa', 'spurs', 'city', 'united'],
//   ['table', 'chair', 'door', 'stool']
// ];

var copy = grid.slice().join(" ").replace(/,/g, " ").split(" ");
var res = [];
while (copy.length) {
  var arr = [];
  while (arr.length < 4) {
    var j = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];
    arr.push(j)
  };
  res.push(arr)
}
shuffle(grid);
shuffle(grid[0]);
shuffle(grid[1]);
shuffle(grid[2]);
shuffle(grid[3]);


var row = 0;
var item = 0;
$('.box').each(function(index, box) {
  var $box = $(box);

  $(this).text(grid[row][item]);
  item++;

  if(item > 3) {
    item = 0;
    row++;
  }
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
}
})


  