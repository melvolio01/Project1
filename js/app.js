$(function(){

var count = 0;
var playerScore = 0;
var lastGroupFound = 0;
var timeLeft=180;
var time=setInterval(timer, 1000);
var allAnswers = [
  [
    ["Raphael","Donatello","Leonardo","April"], 
    ["Michaelangelo","Boticelli","Titian","Giorgone"],
    ["June","August","September","January"],
    ["May","Gove","Osborne","Hammond"]
  ],
  [
    ["Kerry","Clare","Tyrone","Cork"], 
    ["Ryu","Guile","Sagat","E-Honda"],
    ["Ken","Rita","Sally","Norris"],
    ["Vega","Pollux","Sirius","Polaris"]
  ],
  [
    ["Virgin","Prayer","Hurricane","Rolling Stone"], 
    ["Earthquake","Typhoon","Tsunami","Cyclone"],
    ["Hello!","Vogue","Empire","Good Housekeeping"],
    ["Airways","Museum","Red Cross","American Tobacco"]
  ]
];

var answers;
var grid;

function setupBoard() {
  playerScore = 0;
  count = 0;
  score = 0;
  lastGroupFound = 0;
  answers = allAnswers[Math.floor(Math.random() * 3)];
  grid = getGrid();

  shuffle(grid);


  $('.box').each(function(index, box) {
    var $box = $(box);
    $box.text(grid[index]);
    $box.attr("class", "box");
  });
};

function getGrid() {
  return answers.reduce(function(prev, current) {
    return prev.concat(current);
  }, []);
};

setupBoard();
 

$('#newGrid').on('click', function() {
  setupBoard();
  count = 0;
  score = 0;
  playerScore = 0;
  timeLeft = 181;
});


var selectedAnswers = [];

$('.box').on('click', function() {
  console.log("CLICKED", count);
  if(!$(this).hasClass('found')) {
    var idOfBox = $(this).text();
    var answerRow;

    selectedAnswers.push(idOfBox);
    $(this).toggleClass('clicked'); 
    count++;

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

var timeLeft=181;
// var time=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  timeLeft=timeLeft-1;
  if (timeLeft <= 0)
  {
    clearInterval(time);
    $('#playerScore').text("Computer wins! You scored " + playerScore + " points");
    $('.timer').text("Time up!");  
     return;
  }
   

  else if (playerScore == 4) {
    $('#playerScore').text("Well done, you solved the wall!");
    $('.timer').text("Player Wins!");
    return;
  }

  else {
     $('.timer').text("Time left: " + timeLeft);
     return;
  }

}



});