//if inncorect displays correct done
//if press play button quickly - play all pressed sequences at once!!
//zacina sie po przegranej
var sequence = [];
var sequencePlayer = [];
var z; 
var counter = 0;
var on;
var score;
var highScore = 0;
var click = 0;
var choices = 0;

//BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");

//PLUS button
function addNo(){
	on = false;
	
	if(sequence == 0){
		counter = 0;
	}
	counter++;
	counterNo = document.getElementById("counter");
	counterNo.innerHTML = counter;
	drawColor();
}


//START button
function start(){
	on = false;
	
	if(click < 4 && counter > 0){
		flashSeq();
		click++;
	}
	if(sequence == 0){
		counter = 0;
	}
	if(click == 4){
		resetGame();
	}
	
	if(counter > 0){
	choices = document.getElementById("No");
	choices.innerHTML = click;
	}
}//startS

//RESET button
function resetGame(){
	sequence = [];
	sequencePlayer = [];
	click = 0;
	counter = 0;
	on = false; 
	choices = document.getElementById("No");
	choices.innerHTML = click;
	
	score = document.getElementById("score");
	score.innerHTML = highScore;
	counterNo = document.getElementById("counter");
	counterNo.innerHTML = counter;
	noMessage= document.getElementById("check");
	noMessage.innerHTML = "";
}//resetGame

//picking a random color and adding to the array
function drawColor(){
	var noMessage= document.getElementById("check");
	noMessage.innerHTML = "";
	
	randomNo = Math.floor(Math.random()*4+1);
	sequence.push(randomNo);
	
	var counterNo = document.getElementById("counter");
	counterNo.innerHTML = counter;
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

//buttons and their functions
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

//checking if the clicked number is correct	
function check(){
	var correct = 0;
		for(var i = 0; i < sequencePlayer.length; i++){
			
			if (sequencePlayer[i] == sequence[i]){
				var goodMessage = document.getElementById("check");
				goodMessage.innerHTML = "...";
				correct++;	
				
			}else {
				iconTimes();
				setTimeout(function(){
				resetGame();	
			}, 1000);
			}//else
				
			if((correct > 0) && (correct == sequence.length)){
				iconCheck();
				var noMessage= document.getElementById("check");
				noMessage.innerHTML = "CORRECT!";
				sequencePlayer = [];
				click = 0;
				choices = document.getElementById("No");
				choices.innerHTML = click;
				on = false;
				
				if(counter > highScore){
				highScore = counter;
				}
			}//if2
		}//for
}//check()
function iconCheck(){
  var checkIcon = document.querySelector(".fa-check");
  checkIcon.style.display="inline";
  setTimeout(function(){
		checkIcon.style.display="none";	
			}, 1000);
 }
function iconTimes(){
  var timesIcon = document.querySelector(".fa-times");
  timesIcon.style.display="inline";
  setTimeout(function(){
		timesIcon.style.display="none";	
			}, 1000);
}
