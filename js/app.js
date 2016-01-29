
$ (function(){
//notes for presentation - difficulty in getting array items to console.log and to add event listeners to each
var grid = [
  ['oak','cedar','fir','pine'], // grid[0][0], grid[0][1]
  ['red','blue','green','yellow'], // grid[1][0], grid[1][1]
  ['villa','spurs','city','united'],
  ['table','chair','door','stool']
];

$('.box').on('click', function() {
  var idOfBox = $(this).text();
  console.log(idOfBox);
  // $(this).html(value)
});

shuffle(grid);

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

// var grid;
// shuffle(arr);
// console.log(arr);

function shuffle(arr){

var arr = grid;
var i = arr.length;
var j;
var temp;

while(--i>0){
  j = Math.floor(Math.random()*(i+1));
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  }
  return arr;
}


})


  // var m = grid.length, t, i;
  // while (m){
  //   i = Math.floor(Math.random() * m--);

  //   t = grid[m];
  //   grid[m] = grid[i];
  //   grid[i] = t;
//   // }
//   row = Math.random;
//   item = Math.random;


//    return grid; 
// }


// $.randomize = function(arr){
//   for grid = arr.length; grid = parseInt(Math.random())
//     return array;
// };

// $ .each(grid, function(){
//   (this).append($(".box"));
// });
// row1.forEach(funtion());{
//   console.log(item, index);
// }


// $(row1['1']).click(function(){
//   console.log("You clicked box 1")
// });

// var elements = $('.grid').children();

// // console.log(elements)

// var row1 = elements.splice(0,4);
// var row2 = elements.splice(0,4);
// var row3 = elements.splice(0,4);
// var row4 = elements.splice(0,4);
// console.log(row1, row2, row3, row4)






