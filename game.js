//type no for number of numbers to guess
//if you press start button fast!!
var sequence = [];
var sequencePlayer = [];
var z; 
var counter = 0;
var on;
var score;
var click = 0;

//BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");

//COUNTER button
function addNo(){
	on = false;
	
	if(sequence == 0){
		counter = 0;
	}
	counter++;
	counterNo = document.getElementById("counter");
	counterNo.innerHTML = "COUNTER: " + counter;
	drawColor();
}


//START button
function start(){
	on = false;
	
	if(click < 4){
		flashSeq();
		click++;
	}
	if(sequence == 0){
		counter = 0;
	}
	if(click == 4){
		resetGame();
	}
}//startS
	


//RESET button
function resetGame(){
	sequence = [];
	sequencePlayer = [];
	click = 0;
	counter = 0;
	on = false; 
	console.log(sequence = []);
	
	score = document.getElementById("score");
	score.innerHTML = "";
	counterNo = document.getElementById("counter");
	counterNo.innerHTML = "COUNTER: " + counter;
	noMessage= document.getElementById("check");
	noMessage.innerHTML = "";
}//resetGame

//drawing a random color and adding to the array
function drawColor(){
	var noMessage= document.getElementById("check");
	noMessage.innerHTML = "";
	
	randomNo = Math.floor(Math.random()*4+1);
	sequence.push(randomNo);
	
	var counterNo = document.getElementById("counter");
	counterNo.innerHTML = "COUNTER: " + counter;
}

//picking the button to flash		
function flash(z){	
	switch(z){
		case 1:
			buttonGreen.classList.add("green");
				setTimeout(function(){
				buttonGreen.classList.remove("green");
				}, 300);
		break;
		case 2:
			buttonRed.classList.add("red");
				setTimeout(function(){
				buttonRed.classList.remove("red");
				}, 300);
		break;
		case 3:
			buttonBlue.classList.add("blue");
				setTimeout(function(){
				buttonBlue.classList.remove("blue");
				}, 300);
		break;		
		case 4:
			buttonYellow.classList.add("yellow");
				setTimeout(function(){
				buttonYellow.classList.remove("yellow");
				}, 300);
		break;	
	}//switch
}//flashButton

//flashing colors by computer
function flashSeq(){	
	sequencePlayer = [];
		//flashes in queue for every array item
		for (let i=0; i < sequence.length; i++) {
			setTimeout( function timer(){
				flash(sequence[i]);
					if(i == sequence.length-1){
						on = true
					}//if
			}, i*800);//setTimeout
		}//for
}//flashSeq	

			//****GREEN ****	
			buttonGreen.addEventListener("click", function(){
				if(on){
					z = 1;
					flash(z);
					sequencePlayer.push(z);
					check();
				}//if
			});
			
			//****RED****
			buttonRed.addEventListener("click", function(){
				if(on){
					z = 2;
					flash(z);
					sequencePlayer.push(z);
					check();
				}//if
			});
			
			//****BLUE****
			buttonBlue.addEventListener("click", function(){
				if(on){
					z = 3;
					flash(z);
					sequencePlayer.push(z);
					check();
				}//if
			});
			
			//****YELLOW****
			buttonYellow.addEventListener("click", function(){
				if(on){
					z = 4;
					flash(z);
					sequencePlayer.push(z);
					check();
				}//if
			});
		
		function check(){
		var correct = 0;
		for(var i = 0; i < sequencePlayer.length; i++){
			
			if (sequencePlayer[i] == sequence[i]){
				var goodMessage = document.getElementById("check");
				goodMessage.innerHTML = "...";
				correct++;		
			}else {
				var noMessage= document.getElementById("check");
				noMessage.innerHTML = "WRONG!";
				on = false;
				sequence = [];
				sequencePlayer = [];
				score = document.getElementById("score");
				score.innerHTML = "HIGH SCORE: " + (counter-1);
				click = 0;
				break;
			}//else
			if(correct == sequence.length){
				var noMessage= document.getElementById("check");
				noMessage.innerHTML = "CORRECT!";
				sequencePlayer = [];
				click = 0;
				on = false;
			}//if2
		}//for
}//check()
