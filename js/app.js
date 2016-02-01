$(function(){
//notes for presentation - initial difficulty in getting array items to console.log and to add event listeners to each.
var count = 0;
var playerScore = 0;
var lastGroupFound = 0;


var answers = [
  ["Oak","Cedar","Fir","Pine"], // grid[0][0], grid[0][1]
  ["Red","Blue","Green","Yellow"],// grid[1][0], grid[1][1]
  ["Villa","Spurs","City","United"],
  ["Table","Chair","Door","Stool"]
];

var grid = answers.reduce(function(prev, current) {
  return prev.concat(current);
}, []);

//selectedAnswers array helped to isolate a group of 4 selected answers so that these can then be used for group classification.

var selectedAnswers = [];

$('.box').on('click', function() {

  if(!$(this).hasClass('found')) {
    var idOfBox = $(this).text();
    var answerRow;

    selectedAnswers.push(idOfBox);
    $(this).toggleClass('clicked'); 
    count ++;

    if (count > 3) {
      // checkCorrect
      answers.forEach(function(row, i) {
        if(row.indexOf(idOfBox) !== -1) {
          answerRow = row;
        }
      });

      var match = answerRow.every(function(currentValue) {
        return selectedAnswers.indexOf(currentValue) !== -1;
      });

      var $selectedBoxes = $('.box.clicked');
      $selectedBoxes.removeClass('clicked');



      if(match) {
        playerScore++;
        console.log(playerScore);
        lastGroupFound++;
        $selectedBoxes.addClass("group" + lastGroupFound);
        $selectedBoxes.addClass("found");

        //Couldn't quite get syntax right here, solved by adding a <p> tag into the html file
        $('#playerScore').text(playerScore);
      }

      count = 0;
      selectedAnswers = [];

      
    
    }
  }
  // $(this).html(value)
});


//Grid shuffle solution using the Fisher-Yates algorithm - worked with answers in as much as I could shuffle whole rows up and down, and could shuffle within the rows. Problem was that the answers would not shuffle between groups. This was resolved using .concat to reduce the 'answers' array down to a single 'grid' array containing all index positions.

shuffle(grid);


  
$('#newGrid').on('click', function(){
  console.log("working");
  var count = 0;
  shuffle(grid);

})


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

//Timer needed to make game player v computer - seems more straightforward to implement in short time than turn-based 1 and 2 player logic

var count=180;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
    console.log(count);
    $('#countdown').text(count);
  //Do code for showing the number of seconds here
}





});

// [
//   ["London","Paris","Moscow","Washington"], 
//   ["Hatchback","Sedan","Estate","Coupe"],
//   ["Michaelangelo","Leonardo","Raphael","Donatello"],
//   ["Michelle","Yesterday","Hello, Goodbye","Help!"]
// ];

// [
//   ["Bears","Redskins","Fir","Pine"], 
//   ["Red","Blue","Green","Yellow"],
//   ["Villa","Spurs","City","United"],
//   ["Table","Chair","Door","Stool"]
// ];

// [
//   ["Oak","Cedar","Fir","Pine"], 
//   ["Red","Blue","Green","Yellow"],
//   ["Villa","Spurs","City","United"],
//   ["Table","Chair","Door","Stool"]
// ];





