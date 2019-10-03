var sequence = [];
var sequencePlayer = [];
var z; 

var counter = 0;    //the sequence no. 

var click = 3;	   //number of lives
var choices;		

var useLife = false;	  //unblock possibillity to repeat the sequence one more time
var playOn = false;		 //unblock play button 
var on;                 //unblock color buttons only for player turn
var noLifemode = true; //enabling player to play with no life 
var plusOn = true;	  //blocking plus button during flashSeq(), prevent from crashing the game 
					//if player press the button by mistake 	

var highScore = 0;							   //the highest score	
var score = document.getElementById("score"); //current score the same as number of colors in the sequence

//SOUNDS
var soundColor = document.getElementById("color");
var soundPlus = document.getElementById("plus");
var soundPlay = document.getElementById("start");
var soundGood = document.getElementById("good");
var soundLost = document.getElementById("wrong");
var soundReset = document.getElementById("restart");

//COLOR BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");
var buttonPlay = document.getElementsByClassName("button-play");

//SET BUTTONS
var buttonPlus = document.getElementById("addNo");
var buttonStart = document.getElementById("play");
var buttonReset = document.getElementById("reset");

//PLUS button
function addNo(){
	//needs to be unblock first
	if(plusOn){

		if(counter == 99){
			resetGame();
		}
		//block color buttons and unblock play button that start the sequence
		on = false;
		playOn = true;
		sound(soundPlus);
		
		if(sequence == 0){
			counter = 0;
		}
		
		counter++;
		counterNo = document.getElementById("counter");
		counterNo.innerHTML = counter;
		drawColor();
		
		//update the highest score
		score.innerHTML = highScore;
		counterNo = document.getElementById("counter");
		counterNo.innerHTML = counter;
	}//plusOn
}
buttonPlus.addEventListener("click", function(){
	addNo();
});


//START button
function start(){	
	if(playOn){
		//block play and plus buttons  
		plusOn = false;
		playOn = false;
			//button works if you are still in play having enough life or haven't lost
			if((click > 0 && counter > 0) || (click == 0 && noLifemode)){
				//block color buttons
				on = false;
				noLifemode = false;
				flashSeq();
					if(useLife){
						click--;
					}
			}
			if(sequence == 0){
				counter = 0;
			}
			if(counter > 0){
				choices = document.getElementById("No");
				choices.innerHTML = click;
			}
	}//if playOn
}//start
buttonStart.addEventListener("click", function(){
	start();
});

//RESET button
function resetGame(){
	sound(soundReset);
	
	sequence = [];
	sequencePlayer = [];
	
	click = 3;
	counter = 0;
	
	on = false;
	useLife = false;
	plusOn = true;
	playOn = false;
	
	choices = document.getElementById("No");
	choices.innerHTML = click;
	
	score.innerHTML = highScore;
	counterNo = document.getElementById("counter");
	counterNo.innerHTML = counter;
}//resetGame
buttonReset.addEventListener("click", function(){
	resetGame();
});

//picking a random color and adding to the array
function drawColor(){
	randomNo = Math.floor(Math.random()*4+1);
	sequence.push(randomNo);
	
	var counterNo = document.getElementById("counter");
	counterNo.innerHTML = counter;
}

//picking the button to flash		
function flash(z){	
	switch(z){
		case 1:
			sound(soundColor);
			buttonGreen.classList.add("green");
				setTimeout(function(){
				buttonGreen.classList.remove("green");
				}, 300);
		break;
		case 2:
			sound(soundColor);
			buttonRed.classList.add("red");
				setTimeout(function(){
				buttonRed.classList.remove("red");
				}, 300);
		break;
		case 3:
			sound(soundColor);
			buttonBlue.classList.add("blue");
				setTimeout(function(){
				buttonBlue.classList.remove("blue");
				}, 300);
		break;		
		case 4:
			sound(soundColor);
			buttonYellow.classList.add("yellow");
				setTimeout(function(){
				buttonYellow.classList.remove("yellow");
				}, 300);
		break;	
	}//switch
}//flashButton

for (var i in buttonPlay) {
  buttonPlay[i].onclick = function() {
    flash();
  };
}


//flashing colors by computer
function flashSeq(){	
	sequencePlayer = [];
		//flashes in queue for every array item
		for (let i=0; i < sequence.length; i++) {
			setTimeout( function timer(){
				flash(sequence[i]);
					if(i == sequence.length-1){
						on = true;
						playOn = true;
						if(click > 0){
							useLife = true;
						}//inner if	
					}//if
			}, i*700);//setTimeout
		}//for
}//flashSeq	

//buttons and their functions
function whichButton(z){
	sound(soundColor);
	flash(z);
	sequencePlayer.push(z);
	check();
}
		
//****GREEN ****	
	buttonGreen.addEventListener("click", function(){
		if(on){
			whichButton(1);	
		}//if
	});
			
//****RED****
	buttonRed.addEventListener("click", function(){
		if(on){
			whichButton(2);
		}//if
	});
			
//****BLUE****
	buttonBlue.addEventListener("click", function(){
		if(on){
			whichButton(3);		
		}//if
	});
			
//****YELLOW****
	buttonYellow.addEventListener("click", function(){
		if(on){
			whichButton(4);
		}//if
	});

//checking if the clicked number is correct	
function check(){
	var correct = 0;
		for(var i = 0; i < sequencePlayer.length; i++){
			
			if(sequencePlayer[i] == sequence[i]){
				correct++;				
			}else{
				sound(soundLost);
				iconTimes();
				plusOn = true;
			}//else
				
			if((correct > 0) && (correct == sequence.length)){
				sound(soundGood);
				iconCheck();
				sequencePlayer = [];
				useLife = false;
				choices = document.getElementById("No");
				choices.innerHTML = click;
				
				on = false;
				playOn = false;
				plusOn = true;
				noLifemode = true;
				
				if(counter > highScore){
				highScore = counter;
				}
			}//if2
		}//for
}//check()

//1 function
function iconCheck(){
  var checkIcon = document.querySelector(".fa-check");
  checkIcon.style.display="inline";
  score.style.display="none";	
  setTimeout(function(){
		checkIcon.style.display="none";	
		score.style.display="inline";	
			}, 1000);
 }
function iconTimes(){
	on = false;
	var timesIcon = document.querySelector(".fa-times");
	score.style.display="none";	
	timesIcon.style.display="inline";
	setTimeout(function(){
		resetGame();
		timesIcon.style.display="none";
		score.style.display="inline";
				}, 1000);
}
function sound(x){
	x.play();
}