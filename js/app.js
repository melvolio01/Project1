
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






























})




