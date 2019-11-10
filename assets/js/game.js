var sequence = [];
var sequencePlayer = [];
var z; 

var counter = 0;    //sequence length. 

var click = 3;	   //number of life points
var choices;		

var useLife = false;	  //unblock possibillity to repeat the sequence(life points)
var playOn = false;		 //unblock play button 
var on;                 //unblock color buttons only for player turn
var plusOn = true;	   //blocking plus button during flashSeq(), prevent from crashing the game if player press the button by mistake 


var highScore = 0;							   //highest score	
var score = document.getElementById("score"); //current score the same as number of colors in the sequence

//SOUNDS
//IE11
if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
	var soundColor = document.getElementById("mp3-color");
	var soundPlus = document.getElementById("mp3-plus");
	var soundPlay = document.getElementById("mp3-start");
	var soundGood = document.getElementById("mp3-good");
	var soundLost = document.getElementById("mp3-wrong");
	var soundReset = document.getElementById("mp3-restart");
//Chrome, Firefox, Opera	
}else{
	var soundColor = document.getElementById("color");
	var soundPlus = document.getElementById("plus");
	var soundPlay = document.getElementById("start");
	var soundGood = document.getElementById("good");
	var soundLost = document.getElementById("wrong");
	var soundReset = document.getElementById("restart");
}

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

//MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

		//SOUND
function sound(x){
	x.play();
}

		//PLUS button
function addNo(){
	//needs to be unblocked first
	if(plusOn){

		if(counter == 99){
			resetGame();
		}
		//block color buttons and unblock the play button that fires the sequence
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


			//PLAY button
buttonStart.addEventListener("click", function(){
	start();});
	
function start(){	
	if(playOn){
		//block the play and the plus buttons, preventing from pressing them accidentally 
		plusOn = false;
		playOn = false;
			//button works if you are still in play, having at least 1 life point
			if((click > 0 && counter > 0) || (click == 0 && noLifemode)){
				//block the color buttons during displaying the sequence
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

//random color is being added to the array
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
	
//IE11
if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
	
	sequencePlayer = [];

		//flashes in queue for every array item
		for(var i=0; i < sequence.length; i++){
		
			(function(index) {
				setTimeout( function(){
					flash(sequence[index]);
					if(index == sequence.length-1){
							on = true;
							playOn = true;
							if(click > 0){
								useLife = true;
							}//inner if	
						}//if
				}, i*700);//setTimeout
				})(i);	
		}//for	
//Chrome, Firefox, Opera		
}else{
	
	sequencePlayer = [];
	
		//flashes subsequently for each array item
		for (let i=0; i < sequence.length; i++){
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
}//else
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

//checking if the clicked button (number) is correct	
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

//V and X icons
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