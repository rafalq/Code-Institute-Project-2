# Project 2 - Memory Game

Interactive Frontend Development - Code Institute

Rafal Kruszewski 

Project Idea:  A Memory Game

This is my memory game which is the second Milestone Project in the Fullstack Web Developer course.

I chose bulding a game because the idea seemed to be fun and challenging at the same time and I am myself a big fun of computer games.

The game is based on an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates. 

The device creates a series of tones and lights and requires a user to repeat the sequence.
 
If the user succeeds, the series becomes progressively longer and more complex. 
Once the user fails or the time limit runs out, the game is over. 

To find out more about the original [Simon game](https://en.wikipedia.org/wiki/Simon_(game))

## UX

### User Stories

Player 1 wants to play a standard Simon Game online.

Player 2 is new to memory games or very young and wants to play Simon Game but needs some advantages.

Player 3 needs a challenge or is preparing to set a new Guiness record in Simon Game. 

### Strategy

My goal was to create an upgraded online version of the game. I tried to design the game in the user-friendly way, a little different than the orginal version because I added a few new buttons and wanted it to be available on mobile as well.

### Scope

Player 1. I wanted to enable them to play Simon Game online with the standard rules which is a regular version game.

Player 2. I added 3 life advantange points which enable the player to repeat a sequence.

Player 3. I created a button which gives the player a possibility to set the length of a sequence so that the difficulty can be changed manually. Additionally they can follow their highest score which is displayed in a small top window on the screen.  

### Structure

I wanted to place all buttons and counters in the most efficient way on the screen so that i.e. the reset button will not be pressed by accident during any part of a game.

1.	Rules button

The button is placed in the top left corner so that the game instruction can be reffered to anytime.   

2.	Reset button

You can find this one at the bottom or in the top right corner (mobiles). The button stops and resets the game so its location on the screen was crucial for it not to collide with other buttons.

3. High score screen

The screen is at the top. It keeps your highest score which is constantly updated during a game. 

4. Current sequence length screen

The small window in the middle of the screen. The number in it is the length of a color sequence which can be modified by the Plus button during a player's turn.

5. Color play button

The color buttons are placed in the center of the board, close to each other. They flash when they are displaying a sequence. They are unblocked during a player's turn. 

6. Plus button

The button with a plus sign is used for modifying a sequence. 

7. Play button

The button starts the set sequence. It displays a small number near its icon, which is the life points. You can find it on the left side on the horizontal line on the screen. 

### Surface

I used a sky image for the background and dark colors for the set buttons to create a pleasant feel. The buttons are transparent that gives smooth effect in my opinion. The color of the buttons are the same as in the original Simon Game.  

### Skeleton

[Game wireframe](https://rafalq.github.io/Code-Institute-Project-2/blob/master/wireframes/game.jpg)

## Technologies

1.	HTML
2.	CSS
3.	Javascript

## Features

The highest score is kept locally as a variable `var highScore` and displays in the top little window. After each player's turn, it is updated if the round is won or the previous one is hold until setting a new record. I used a conditional statement which compares the current sequence length number `var counter` with the value of the variable.

			```javascript
			if(counter > highScore){
				highScore = counter;
			}
			```

A player starts the game by pressing the plus sign button and setting a number that is the sequence length. The code for this uses a random number(from 1 to 4) method that is added to the array `sequence[]` everytime when it is pressed .
 
After pushing the Play button, the plus one is blocked to prevent from modifying the sequence during displaying it and during the player's turn `plusOn = false;`

The color buttons change their colors subsequently by replacing their `background-color` classes in javascript. I used a `for` loop and `setTimeOut` function to create a flashing effect.

The sequence happens in time `setTimeOut` function after which the color buttons are unlocked `var on = true`

The player's turn starts and they need to repeat the sequence to continue the game. My idea was to create a method (`function check()`) that compares two arrays - the player's and the sequence.
 
When the player presses one of the color buttons, they add one of the numbers, assigned to them, to `sequencePlayer[]` that is checked immediately

	```javascript
	function whichButton(z){...check();
	}
	```
	
whether it is the same as the sequence number in the same position(the index number) in the array.

	```javascript
	function check(){
		var correct = 0;
		for(var i = 0; i < sequencePlayer.length; i++){
			if(sequencePlayer[i] == sequence[i]){
				correct++;				
			}...
	```
	
If all player's numbers are the same as these in the sequence `if((correct > 0) && (correct == sequence.length))`, the player's array is emptied and the high score is updated if it is changed, the counter keeps the last sequence number, the color buttons are blocked and the plus button is unblocked. Players can continue the game until they lose.

During the player's turn (only then), the life points `var click = 3` can be used `var useLife = true` to see the sequence again.

The reset method is used when the player presses an incorrect button or presses the reset.
The function `reset()` empties both arrays, blocks the color buttons, and the Play one, zeroes the counter.

### Features Left to Implement

There are a lot of possibilities to increase complexity of the game. 

The difficulty could be increased by creating the color buttons with the one color, decreasing the time of displaying the sequence, limiting the time for repeating a sequence.

I would create a multi-players mode. One of the way to play would be the ladder game:
the first player repeats the sequence if they are correct, the game goes on and the second player does the same, the third player and so on. If the player is wrong, they get out of the game. The winner is the one who remains. 
Another way would be to win with the highest score. A player plays until failure, then another one and so on. The computer compares their scores to select the winner.   

## Testing 

All tests for the game were run manually. 

When I start the game all counter screens (the highest score and the sequence length)are empty. 
All buttons, except the Plus, the Reset and the Rules button, are blocked. 
I press the Plus button and the middle screen displays 1, each click adds 1.
After clicking the Play button, the sequence starts to run. 
All buttons are blocked excluding the Reset and the Rules that always work.
When the colors stop flashing, I press the Play and get the sequence to display again.
1 point is subtracted from the life points number. When it is O, pressing the Play during my turn does nothing. 
The same as pushing the Plus until I press one of the Color buttons.
If I repeat the sequence correctly, the highest score screen diplays the tick sign and my score is recorded.
The Play is blocked, the Plus - unblocked.
I check the Rules again. I press all the buttons - just the Plus and the Reset are active.
I go on.
I press the Reset. The sequence counter zeroes. My highest score is kept.
When I am inncorect with my sequence, the top screen displays the x sign and resets immediately.
Everything is like from the beginning except the saved score.

The website can be open with the browsers:  Firefox (Version 70.0.1), Opera (Version 63.0.3), Internet Explorer (Version 11.0.9), Google Chrome (Version 77.0.3 ); responsive on mobiles, tablets, kindels.
There were some issue in the Internet Explorer browser, the game neither work nor play the sounds. I could only use the Plus button. I needed to create a different "for" loop with the IIFE for the browser only:
			```javascript
			(function(index) {
				setTimeout( function(){
					flash(sequence[index]);
					if(index == sequence.length-1){
							on = true;...
			``` 
For the sounds, I needed to use mp3 files. 

## Deployment

The hosting platform for the site is Github Pages, deployed directly from the master branch.

The landing page is `index.html`

You can run the website locally by cloning the repository or using this command in your terminal `git clone https://github.com/rafalq/Code-Institute-Project-2`
  
## Credits

### Content

I resolved the IE browser issue using this code snippet:
		```javascript
		for (var i = 1; i <= 10; i++){
			(function(index) {
				setTimeout(function() { alert(index); }, i*1000);
			})(i);
		}
		```
from [this](https://wsvincent.com/javascript-closure-settimeout-for-loop/) website.

The modal code was copied from [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp)

The rest I corrected using Stack Overflow, however they were significantly modified for the use of this project.
 
### Media

The picture used in this site were obtained from [PEXELS](https://www.pexels.com/).

### Acknowledgements

The game was inspired by the original game. All additional options are my own ideas.
I created my own code from the very beginning. 
