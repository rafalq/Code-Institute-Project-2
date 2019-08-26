//on = false after win no work!
//PC multiplies player array items if click more than once
// RESET dziala oprocz on = false, klawisze sa ciagle odblokowane

var sequence = [];
var sequencePlayer = [];
var z; 
var turn = 1;
var highScore = 0;
var on = false;	
//BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");

//drawing a random color and adding to the array
function drawColor(){
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
	
//flashes in queue for every array item
		for (let i=0; i<sequence.length; i++) {
		setTimeout( function timer(){
		flash(sequence[i]);
		}, i*800);
		}//for
	
	// ON Timer, turning on after the sequence
	//Buttons OPTIONS: click with flashing	
	setTimeout( function(){
		on = true;	
		if(on){

			//****GREEN ****	
			var buttonGreen = document.getElementById("btnG");
			buttonGreen.addEventListener("click", function(){
				z = 1;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
			});
			
			//****RED****
			var buttonRed = document.getElementById("btnR");
			buttonRed.addEventListener("click", function(){
				z = 2;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
			});
			
			//****BLUE****
			var buttonBlue = document.getElementById("btnB");
			buttonBlue.addEventListener("click", function(){
				z = 3;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
			});
			
			//****YELLOW****
			var buttonYellow = document.getElementById("btnY");
			buttonYellow.addEventListener("click", function(){
				z = 4;
				flash(z);
				sequencePlayer.push(z);
				seqPlayer();
			});
		}//if		
	}, 800*sequence.length);
}//flashSeq	
    
//check the both sequences
function seqPlayer(){
	var correct = 0;
		for(var i = 0; i < sequencePlayer.length; i++){
			
			if (sequencePlayer[i] == sequence[i]){
				var goodMessage = document.getElementById("score2");
				goodMessage.innerHTML = "GOOD!";
				correct++;
					if(correct == sequence.length){
						var noMessage= document.getElementById("score2");
						noMessage.innerHTML = "WIN!"
						sequencePlayer = [];
						turn++;
						drawColor();
						on = false;
					}
			}else {
				var noMessage= document.getElementById("score2");
				noMessage.innerHTML = "NO!"
				sequence = [];
			break;		
			}//else
		}//for
}//seqPlayer

function resetGame(){
	sequence = [];
	sequencePlayer = [];
	turn = 1;
	highScore = 0;
	on = false;	
	
	var computerArray = document.getElementById("score1");
	computerArray.innerHTML="TURN: " + turn + "<br>COMPUTER: "+ sequence;
	
	var noMessage= document.getElementById("score2");
	noMessage.innerHTML = "-"
}