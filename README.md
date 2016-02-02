# Project1
Connecting Wall game

//notes for presentation - initial difficulty in getting array items to console.log and to add event listeners to each.

//Grid shuffle solution using the Fisher-Yates algorithm - worked with answers in as much as I could shuffle whole rows up and down, and could shuffle within the rows. Problem was that the answers would not shuffle between groups. This was resolved using .concat to reduce the 'answers' array down to a single 'grid' array containing all index positions.

//New Grid button was a pain - if a single group had been selected on initial board the same boxes would be highlighted on the New Grid. Resolved by

//selectedAnswers array helped to isolate a group of 4 selected answers so that these can then be used for group classification.