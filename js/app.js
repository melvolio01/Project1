$(function(){
//notes for presentation - initial difficulty in getting array items to console.log and to add event listeners to each.
var count = 0;

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
  var idOfBox = $(this).text();
  var answerRow;
  console.log(idOfBox);
  selectedAnswers.push(idOfBox);
  $(this).toggleClass('clicked'); 
  count ++;
  console.log(count);
  if (count > 3) {
    // checkCorrect
    answers.forEach(function(row, i) {
      if(row.indexOf(idOfBox) !== -1) {
        answerRow = row;
      }
    });
    console.log(answerRow, selectedAnswers);
    console.log(answerRow.every(function(currentValue) {
      return selectedAnswers.indexOf(currentValue) !== -1;
    }));
    
    //bit confused here re how to get boxes re-colouring
  if (selectedAnswers == answers[-1]) 
      {$(this).toggleClass('box');
      console.log("no match")
        }
    else if (selectedAnswers == answers[0])
      {$(this).toggleClass('groupA');
      console.log("You got Group A!")
      }
    else if (selectedAnswers == answers[1])
      {$(this).toggleClass('groupB');
      console.log("You got Group B!")
      }
    else if (selectedAnswers == answers[2])
      {$(this).toggleClass('groupC');
      console.log("You got Group C!")
      }
    else if (selectedAnswers == answers[3])
      {$(this).toggleClass('groupD');
      console.log("You got Group D!")
      }
    // $.each('click', index){

    //}  
    // };
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

function timer(){
   setInterval(UpdateTime(), 1000);
 };

 var interval = 3*60; // 3 minutes
 function updateTime(){
   interval --;
   if(interval == 0)
   {
       $(countdown).val("Time up - Computer Wins!");
    }
    else
    {
       $(countdown).text(interval + " seconds left");
    }
}

});

// [
//   ["Oak","Cedar","Fir","Pine"], 
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

// [
//   ["Oak","Cedar","Fir","Pine"], 
//   ["Red","Blue","Green","Yellow"],
//   ["Villa","Spurs","City","United"],
//   ["Table","Chair","Door","Stool"]
// ];





