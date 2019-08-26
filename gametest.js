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
	r.innerHTML="RANDOM No: "+ randomNo;
	var s = document.getElementById("score2");
	s.innerHTML="COMPUTER: "+ sequence;
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
	
	var on = false;
//flashes in queue for every array item
	for (let i=0; i<sequence.length; i++) {
    setTimeout( function timer(){
	flashButton(sequence[i]);
	var message = document.getElementById("score3");
	message.innerHTML = "RANDOM No: " + sequence[i];
    }, i*1000);
	}//for
	
	// ON Timer
	//Buttons OPTIONS: click with flashing
	
	setTimeout( function(){
	on = true;
	var sage = document.getElementById("score10");
	sage.innerHTML = "ON mode 3: " + on;
	if(on){	
	var buttonGreen = document.getElementById("btnG");
	buttonGreen.addEventListener("click", function(){
	z = 1;
	sequencePlayer.push(z);
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = "PLAYER: " + sequencePlayer + " ||| last index: " +  sequencePlayer.lastIndexOf(z);
	buttonGreen.classList.add("green");
	setTimeout(function(){
	buttonGreen.classList.remove("green");
	}, 500);
	});

	var buttonRed = document.getElementById("btnR");
	buttonRed.addEventListener("click", function(){
	z = 2;
	sequencePlayer.push(z);
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = "PLAYER: " + sequencePlayer + " ||| last index: " +  sequencePlayer.lastIndexOf(z);
	buttonRed.classList.add("red");
	setTimeout(function(){
	buttonRed.classList.remove("red");
	}, 500);
	});

	var buttonBlue = document.getElementById("btnB");
	buttonBlue.addEventListener("click", function(){
	z = 3;
	sequencePlayer.push(z);
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = "PLAYER: " + sequencePlayer + " ||| last index: " +  sequencePlayer.lastIndexOf(z);
	buttonBlue.classList.add("blue");
	setTimeout(function(){
	buttonBlue.classList.remove("blue");
	}, 500);
	});
	
	var buttonYellow = document.getElementById("btnY");
	buttonYellow.addEventListener("click", function(){
	z = 4;
	sequencePlayer.push(z);
	var Plseq = document.getElementById("score4");
	Plseq.innerHTML = "Player array: "+ sequencePlayer + " the last index: " +  sequencePlayer.lastIndexOf(z);
	buttonYellow.classList.add("yellow");
	setTimeout(function(){
	buttonYellow.classList.remove("yellow");
	}, 500);
	});
    }//if
	
	}, 1000*sequence.length);
//asa flashing sequence is finished, player can pick
	var sage = document.getElementById("score9");
	sage.innerHTML = "ON mode 3: " + on;
}//flashSeq	
    
//check the both sequences
function seqPlayer(){
	
	var computerIndexZ = sequence.indexOf(z);
	var playerIndexZ = sequencePlayer.indexOf(z);
	 
	for(var i = 0; i < sequencePlayer.length; i++){
	
	if (sequencePlayer[i] == sequence[i]){
		
		var me= document.getElementById("score6");
		me.innerHTML = "GOOOD!";
		
			var Plseq = document.getElementById("score9");
			Plseq.innerHTML = "PLAYER: " + sequencePlayer[i] + " |||  index: " +  sequencePlayer.indexOf(z) + 
			" <br>COMPUTER: " + sequence[i]   + " |||  index: " + computerIndexZ;
	}else {
		var me= document.getElementById("score6");
		me.innerHTML = "NO!";
		
			var Plseq = document.getElementById("score9");
			Plseq.innerHTML = "PLAYER: " + sequencePlayer[i] + " |||  index: " +  sequencePlayer.indexOf(z) + 
			" <br>COMPUTER: " + sequence[i]   + " |||  index: " + computerIndexZ;
	break;		
			/*var Plse = document.getElementById("score10");
			Plse.innerHTML = "Array item: " + sequencePlayer[playerIndexZ] + " |||  Index of player z: " +  sequencePlayer.indexOf(z) + " <br>COMPUTER array item: " + sequence[computerIndexZ]   + " |||  COMPUTER index Z: " + computerIndexZ;*/
	}
	}//for
}//seqPlayer
