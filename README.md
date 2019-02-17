# Classic Arcade Game Clone Project

## Table of Contents

- [How the Game is played](#howthegameisplayed)
- [Instructions](#instructions)
- [Contributing](#contributing)

## How the Game is played

To play the game you change the position of the player by using the keys `up`, `down`, `left`, `right` on your keyboard. Your goal is to cross the enemies´ area without getting to close to them. You win, if you reach the water area. Then there will be a surprise just for you. 

## Instructions

To run the game three different types of methods to create an object are implemented:
- player
- enemy
- winner.

In this variation of the game then one player, 3 enemies and 3 winner objects are created, whereof the 3 winner objects first get into seen action, when the game is won. 

The player´s position is changed through an event listener. The Enemy´s position is changing through calculating a new position relative to time changing. The winner´s position is changed through the same procedure, but will first start, when they are pushed in their array. They will be pushed into their array, when player.x reaches the top of the game board, e.g. the water area. Player will the be set back to the beginning position.

When the player´s and enemies´ positions are too close, then player is set back to first position of the game. They are too close under three conditions. 
- First: When their y-coordinate is the same and 
- Second: when the enemy´s x-coordinate plus the player´s stepwidth to the left resp. right (divided by two - as it was to early in the beginning) is bigger than the player´s x-coordinate and 
- Third: when the enemy´s x-coordinate is less than the player´s x-coordinate plus its stepwidth to the left resp. right(divide by two). 

## Contributing

Contributing to the starter code, the videos during the lectures and knowledge, Student Hub Area and as I was completely stuck with the collision method I adapted step-method from [Matthew Cranford](https://matthewcranford.com/category/blog-posts/walkthrough/arcade-game/). With the help given in these sources the code was extended and changed to fit this game by Johanna Merbach, [Frog on a Cello webdesign](https://www.frog-on-a-cello.com).

