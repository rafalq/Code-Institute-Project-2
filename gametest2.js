
var sequence = [];
var sequencePlayer = [];
var z; 
var turn = 1;
var score;
var on;

//BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");
var buttonStart = document.getElementById("start");

function random(){
	on = false;
	if(sequence==0){turn = 1;}
	drawColor();
	flashSeq();
	console.log(on);
}
//drawing a random color and adding to the array
function drawColor(){
	var noMessage= document.getElementById("score2");
				noMessage.innerHTML = "";
	randomNo = Math.floor(Math.random()*4+1);
	sequence.push(randomNo);
	
	var computerArray = document.getElementById("score1");
	computerArray.innerHTML="TURN: " + turn + "<br>COMPUTER: "+ sequence;
}

//picking the button to flash		
function flash(z){	
	switch(z){
		case 1:
			buttonGreen.classList.add("green");
				setTimeout(function(){
				buttonGreen.classList.remove("green");
				}, 400);
		break;
		case 2:
			buttonRed.classList.add("red");
				setTimeout(function(){
				buttonRed.classList.remove("red");
				}, 400);
		break;
		case 3:
			buttonBlue.classList.add("blue");
				setTimeout(function(){
				buttonBlue.classList.remove("blue");
				}, 400);
		break;		
		case 4:
			buttonYellow.classList.add("yellow");
				setTimeout(function(){
				buttonYellow.classList.remove("yellow");
				}, 400);
		break;	
	}//switch
}//flashButton

//flashing colors by computer
function flashSeq(){	
	sequencePlayer = [];
//flashes in queue for every array item
		for (let i=0; i<sequence.length; i++) {
		setTimeout( function timer(){
		flash(sequence[i]);
		if(i==sequence.length-1){on=true}
		}, i*800);
		}//for
}//flashSeq	



	
	buttonStart.addEventListener("click", function(){
				on = true;
				console.log(on);
			});
		
			console.log(on);	
			
			//****GREEN ****	
			buttonGreen.addEventListener("click", function(){
				if(on){
				z = 1;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
				}//if
			});
			
			//****RED****
			buttonRed.addEventListener("click", function(){
				if(on){
				z = 2;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
				}//if
			});
			
			//****BLUE****
			buttonBlue.addEventListener("click", function(){
				if(on){
				z = 3;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
				}//if
			});
			
			//****YELLOW****
			buttonYellow.addEventListener("click", function(){
				if(on){
				z = 4;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
				}//if
			});
		console.log(on);


		function seqPlayer(){
		console.log(sequencePlayer);
		console.log(on);
		var correct = 0;
		for(var i = 0; i < sequencePlayer.length; i++){
			
			if (sequencePlayer[i] == sequence[i]){
				var goodMessage = document.getElementById("score2");
				goodMessage.innerHTML = "...";
				correct++;		
			}else {
				var noMessage= document.getElementById("score2");
				noMessage.innerHTML = "WRONG!"
				on = false;
				sequence = [];
				sequencePlayer = [];
				score = document.getElementById("score");
				score.innerHTML = "HIGH SCORE: " + turn;
				turn = ""
				break;
			}//else
			if(correct == sequence.length){
				var noMessage= document.getElementById("score2");
				noMessage.innerHTML = "CORRECT!"
				sequencePlayer = [];
				on = false;
				turn++;
				console.log(on);
			}//if2
		}//for
}//seqPlayer	

	


//check the both sequences
function resetGame(){
	sequence = [];
	sequencePlayer = [];
	turn = 1;
	highScore = 0;
	on = false;	
	
	var computerArray = document.getElementById("score1");
	computerArray.innerHTML="TURN: " + turn + "<br>COMPUTER: "+ sequence;
	
	var noMessage= document.getElementById("score2");
	noMessage.innerHTML = "-";
}//resetGame
//you can play as long as you want
//after loosing, you can keep playing and  hold the bnumber of turns or reset the counter. 