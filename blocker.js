//on = false after win no work!
//START multiplies player array items if click more than once
// RESET dziala oprocz on = false, klawisze sa ciagle odblokowane

var sequence = [];
var sequencePlayer = [];
var z; 
var turn = 1;
var highScore = 0;
var on;

//BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");

function onMode(){
	var onM = document.getElementById("on");
	onM.innerHTML="ON: " + on;
}//onMode

onMode();

function drawColor(){
	on = 
	randomNo = Math.floor(Math.random()*4+1);
	sequence.push(randomNo);
	
	var computerArray = document.getElementById("score1");
	computerArray.innerHTML="TURN: " + turn + "<br>COMPUTER: "+ sequence;
}