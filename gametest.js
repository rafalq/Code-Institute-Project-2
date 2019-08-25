var sequence = [];
var sequencePlayer = [];
var index = 0;
var myPick = 1;
var randomNo;
var z;
var indexPlayer = 0;
var indexComputer = 0;

//BUTTONS
var buttonGreen = document.getElementById("btnG");
var buttonRed = document.getElementById("btnR");
var buttonBlue = document.getElementById("btnB");
var buttonYellow = document.getElementById("btnY");

//drawing a random color and adding to the array
function drawColor(){
	on = false;
	randomNo = Math.floor(Math.random()*4+1);
	sequence.push(randomNo);
	indexComputer++;
	var r = document.getElementById("score");
	r.innerHTML="Number: "+ randomNo;
	var s = document.getElementById("score2");
	s.innerHTML="Array: "+ sequence;
	flashButton(randomNo);
}

//picking the button to flash
var x;		
function flashButton(x){
	
	switch(x){
		case 1:
		buttonGreen.classList.add("green");
		setTimeout(function(){
		buttonGreen.classList.remove("green");
		}, 500);
		break;
		case 2:
		buttonRed.classList.add("red");
		setTimeout(function(){
		buttonRed.classList.remove("red");
		}, 500);
		break;
		case 3:
		buttonBlue.classList.add("blue");
		setTimeout(function(){
		buttonBlue.classList.remove("blue");
		}, 500);
		break;		
		case 4:
		buttonYellow.classList.add("yellow");
		setTimeout(function(){
		buttonYellow.classList.remove("yellow");
		}, 500);
		break;	
	}//switch
}//flashButton

//flashing colors by computer
function flashSeq(){
	var on;
	for (let i=0; i<sequence.length; i++) {
    setTimeout( function timer(){
	flashButton(sequence[i]);
	var message = document.getElementById("score3");
	message.innerHTML = "sequence i: " + sequence[i];
    }, i*1000);
	setTimeout( function(){
	on = true;
	var sage = document.getElementById("score10");
	sage.innerHTML = "ON mode 3: " + on;
    }, 1000*sequence.length);
	
	}//for
	
//asa flashing sequence is finished, player can pick
	var sage = document.getElementById("score9");
	sage.innerHTML = "ON mode 3: " + on;
}//flashSeq	
    
//Buttons OPTIONS: click with flashing
//if(on){
	var buttonGreen = document.getElementById("btnG");
	buttonGreen.addEventListener("click", function(){
	z = 1;
	//chyba nie musze push, bo nie potrzebuje array dla gracza
	sequencePlayer.push(z);
	indexPlayer++;
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = sequencePlayer + "index: " +  sequencePlayer.lastIndexOf(z);
	buttonGreen.classList.add("green");
	setTimeout(function(){
	buttonGreen.classList.remove("green");
	}, 500);
	});

	var buttonRed = document.getElementById("btnR");
	buttonRed.addEventListener("click", function(){
	z = 2;
	sequencePlayer.push(z);
	indexPlayer++;
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = sequencePlayer + "index: " +  sequencePlayer.lastIndexOf(z);
	buttonRed.classList.add("red");
	setTimeout(function(){
	buttonRed.classList.remove("red");
	}, 500);
	});

	var buttonBlue = document.getElementById("btnB");
	buttonBlue.addEventListener("click", function(){
	z = 3;
	sequencePlayer.push(z);
	indexPlayer++;
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = sequencePlayer + "index: " +  sequencePlayer.lastIndexOf(z);
	buttonBlue.classList.add("blue");
	setTimeout(function(){
	buttonBlue.classList.remove("blue");
	}, 500);
	});

	var buttonYellow = document.getElementById("btnY");
	buttonYellow.addEventListener("click", function(){
	z = 4;
	sequencePlayer.push(z);
	indexPlayer++;
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = sequencePlayer + "index: " +  sequencePlayer.lastIndexOf(z);
	buttonYellow.classList.add("yellow");
	setTimeout(function(){
	buttonYellow.classList.remove("yellow");
	}, 500);
	});
//}//on

//check the both sequences
function seqPlayer(){
	if ((sequencePlayer.indexOf(z) && indexPlayer) == (sequence.indexOf(z) && indexComputer)){
		var me= document.getElementById("score6");
		me.innerHTML = "GOOOD!";
		var Plseq = document.getElementById("score4");
Plseq.innerHTML = sequencePlayer + "index: " +  sequencePlayer.lastIndexOf(z) + " COMPUTER: " + sequence.lastIndexOf(z);
	}else{
		var me= document.getElementById("score6");
		me.innerHTML = "NO!";
	}
}//seqPlayer
