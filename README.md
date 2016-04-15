# Project1


Connecting Wall game

Background

My game is a connecting wall game "loosely based" on the connecting wall round in 'Only Connect'.

The aim of the game is to sort 16 clues into connected groups of 4 by selecting boxes on the screen. Once a correct group is selected it will be highlighted in a different colour leaving 3 (or 2 or 1) further groups to find.

The game is player vs computer, the player has 3 minutes to solve the wall and win. If the wall is not solved in time the computer wins.

How it works

Banks of 'Answers' are held within arrays which randomise using a shuffleGrid function, based in part on the Fisher-Yates Shuffle. This shuffle proved to be problematic because answers would shuffle within the Answer arrays but not between them. This was resolved using .concat to reduce the 'answers' array down to a single 'grid' array containing all index positions. (line 53 of code)

Randomized answers are displayed on-screen and can be selected in groups of four. CSS classes were created for 'clicked' (to highlight boxes which have been selected), and then for each of 4 groups (group1, group2, group3, group4).

A timer function was added to create a countdown timer (from 181 to 0) whilst a count variable, incrementing from 0 to 4, was used for win logic/

I added a New Grid button, which was challenging - it does not yet reset the score counter if someone has scored points on a previous grid.

What I learned

Lots about jQuery! I had a lot of help in putting this project together and will hopefully be able to do more myself on the next project. I feel more comfortable using the syntax of jQuery and also am happier using CSS (though this site is not responsive at present).
