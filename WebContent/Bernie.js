
var money;
var Bernie;
var BernieSideways = 10;
var BernieUpAndDown = 10;
var totalScore=0;
var levelScore=0;
var levelTimer;
var time;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var moneyArray = [];
var trumpArray = [];
var level;
var moneyInterval;
var trumpInterval;


window.onload = function() {
	// create 10 dollar bills
	for(var i = 0; i < 10; i++) {
	createMoney();
	}
	// create a bernie
	createBernie();
	console.log(moneyArray);

	totalScore = 0;
	levelScore = 4000;
	document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
	document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;

 addEventListener('keydown',function(e){
		console.log("down")
		//move Bernie down
		   if ( e.keyCode === 32) {
		   	startGame();
		}	
	
	})

};

function startGame() {
	moveBernie();
	beginLevelOne();
}

function beginLevelOne() {
	document.getElementById("levelOn").textContent = "Level 1: Community College";
	 startTimer();
	 time = 30;
	 
	 setMoneyInterval(1000);
	 timer = setInterval(function() {
		   for (var i = 0; i < moneyArray.length; i++) {
		   	console.log("equal to the money in the array" + moneyArray[i]);
			   if(Bernie.collide(moneyArray[i])) {
			   	moneyArray[i].clear();
			   	totalScore += 300;
			   	levelScore -= 300;
	document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
	document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;
			   	
			   }
			}
			if(levelScore <= 0 && time >= 0) {

				document.getElementById("winOrLose").textContent = "Bernie ate all your debt and you won this level - on to your 4 year degree!";
				clearLevel();
				beginLevelTwo();

			} 

			if(time === 0 && levelScore > 0) {
					document.getElementById("winOrLose").textContent = "You lost. Bernie was not able to eat all of your student debt.";
					//clearLevel();
					endGame();
					addScore();
					
				} 

		}, 1000);

}



function beginLevelTwo() {
	document.getElementById("levelOn").textContent = "Level 2: 4-year university";
	levelScore = 40000;
	time = 30;
	 startTimer();
	 setMoneyInterval(3000);
	 timer = setInterval(function() {
		   for (var i = 0; i < moneyArray.length; i++) {

		  	moveArrayItem(i);
		   	// test collisions 
		   	
			   if(Bernie.collide(moneyArray[i])) {
			   	moneyArray[i].clear();
			   	totalScore += 1500;
			   	levelScore -= 1500;
	document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
	document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;
			   	
			   }
			}
			if(levelScore <= 0 && time >= 0) {
				console.log("you won level 2");

				document.getElementById("winOrLose").textContent = "The Bern was felt - go get a masters degree! But avoid the Trumps - they'll add to your student debt";
				clearLevel();
				beginLevelThree();

			} 

			if(time === 0 && levelScore > 0) {
					document.getElementById("winOrLose").textContent = "You lost level 2. Bernie was not able to eat all of your student debt. Get ready for 20 years of student loans.";
					endGame();
					addScore();
				} 

		}, 750);

}



function beginLevelThree() {
	document.getElementById("levelOn").textContent = "Level 3: Master's Degree";
	levelScore = 70000;
	time = 60;
	 startTimer();
	 setMoneyInterval(1000);
	 setTrumpInterval(2000);
	 timer = setInterval(function() {
	 	// if Bernie collides with money 
		   for (var i = 0; i < moneyArray.length; i++) {
		   		moveArrayItem(i);
			   if(Bernie.collide(moneyArray[i])) {
			   	moneyArray[i].clear();
			   	totalScore += 1000;
			   	levelScore -= 1000;
				document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
				document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;
			   	
			   }
			}
		// if Bernie collides with Trump 
			for (var i = 0; i < trumpArray.length; i++) {
		   
			   if(Bernie.collide(trumpArray[i])) {
				   	trumpArray[i].clear();
				   	totalScore -= 500;
				   	levelScore += 500;
					document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
					document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;
			   	
			   }
			}
		// checking the score 
			if(levelScore <= 0 && time >= 0) {
				console.log("you won level 2");

				document.getElementById("winOrLose").textContent = "You got that master's degree! But Bernie's getting pretty full - can you get a phd? Don't touch Trump - he'll kill you this time.";
				clearLevel();
				beginLevelFour();

			} 

			if(time === 0 && levelScore > 0) {
					document.getElementById("winOrLose").textContent = "You lost level 3. Bernie was not able to eat all of your student debt.";
					endGame();
					addScore();
				} 

		}, 750);

}

function beginLevelFour() {
	document.getElementById("levelOn").textContent = "Level 4: PhD";
	levelScore = 20000;
	time = 45;
	 startTimer();
	 setMoneyInterval(1000);
	 timer = setInterval(function() {
		   	 	// if Bernie collides with money 
		   for (var i = 0; i < moneyArray.length; i++) {
		   		moveArrayItem(i);
			   if(Bernie.collide(moneyArray[i])) {
			   	moneyArray[i].clear();
			   	totalScore += 500;
			   	levelScore -= 500;
				document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
				document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;
			   	
			   }
			}
		// if Bernie collides with Trump 
			for (var i = 0; i < trumpArray.length; i++) {
		   		moveTrumpItem(i);
			   if(Bernie.collide(trumpArray[i])) {
			   	trumpArray[i].clear();
			   document.getElementById("winOrLose").textContent = "It was the hair that killed you. Good luck getting a job with half a phd and a pile of student debt!";
					endGame();
					addScore();
			   	
			   }
			}
			if(levelScore <= 0 && time >= 0) {
				console.log("you won level 2");

				document.getElementById("winOrLose").textContent = "You won the game and got your phd! Now to the bonus round. Boost your total score by eating as much as you can in 30 seconds without touching Trump.";
				clearLevel();
				beginLevelFive();
				

			} 

			if(time === 0 && levelScore > 0) {
					document.getElementById("winOrLose").textContent = "You lost level 4. Good luck getting a job with half a phd and a pile of student debt!";
					endGame();
					addScore();
				} 

		}, 750);

}

function beginLevelFive() {
	document.getElementById("levelOn").textContent = "Level 5: Save for retirement.";

	levelScore = 500000;
	time = 30;
	 startTimer();
	 setMoneyInterval(1000);
	 timer = setInterval(function() {
		   	 	// if Bernie collides with money 
		   for (var i = 0; i < moneyArray.length; i++) {
		   		moveArrayItem(i);
			   if(Bernie.collide(moneyArray[i])) {
			   	moneyArray[i].clear();
			   	totalScore += 500;
			   	levelScore -= 500;
				document.getElementById("totalScore").textContent = "Total debt Bernie has eaten: " + totalScore;
				document.getElementById("levelScore").textContent = "Your student debt this level: " + levelScore;
			   	
			   }
			}
		// if Bernie collides with Trump 
			for (var i = 0; i < trumpArray.length; i++) {
		   		moveTrumpItem(i);
			   if(Bernie.collide(trumpArray[i])) {
			   	trumpArray[i].clear();
			   	document.getElementById("winOrLose").textContent = "Trump got ya! Total score: " + totalScore;
					endGame();
					addScore();
			   	
			   }
			}
			// if(levelScore <= 0 && time >= 0) {
				

			// 	document.getElementById("winOrLose").textContent = "You won the game and got your phd! Now off to become a teacher.";
			// 	clearLevel();
				

			// } 

			if(time === 0 && levelScore > 0) {
					document.getElementById("winOrLose").textContent = "Nice job! Total score: " + totalScore;
					endGame();
					addScore();
				} 

		}, 750);

}

function clearLevel(){
	clearInterval(moneyInterval);
	 clearInterval(timer);
	 clearInterval(levelTimer);
	 clearInterval(trumpInterval);
	 
	
}

function endGame() {
	clearInterval(moneyInterval);
	clearInterval(timer);
	clearInterval(levelTimer);
	clearInterval(trumpInterval);
}



function createBernie() {

	Bernie = new component(25, 25, "blue", BernieSideways, BernieUpAndDown);
	Bernie.update();

}

function moveBernie() {
		   addEventListener('keydown',function(e){
		console.log("down")
		//move Bernie up
		   if ( e.keyCode === 87) {
		   	console.log("trying to move Bernie up");
		   	Bernie.clear();
		   	Bernie.y -= 10;
		   	console.log("Bernie y" + Bernie.y);
		   	Bernie.update();
		}
		//move Bernie down
		if (e.keyCode === 83) {
			Bernie.clear();
			Bernie.y += 10;
		   	console.log("Bernie y" + Bernie.y);
		   	Bernie.update();
		}
		// move Bernie left
		if (e.keyCode === 65) {
			Bernie.clear();
			Bernie.x -= 10;
		   	console.log("Bernie x" + Bernie.x);
		   	Bernie.update();
		}
		// move Bernie right 
		if (e.keyCode === 68) {
			Bernie.clear();
			Bernie.x += 10;
		   	console.log("Bernie x" + Bernie.x);
		   	Bernie.update();
		}
	})
	
}

// start the timer 

function startTimer() {
	levelTimer = setInterval(function() {
		console.log('interval');
		//var p = document.createElement('p');
		time = time - 1;
				//p.textContent = time;
				document.getElementById("timer").textContent = "Time Left: " + time;
				//document.body.appendChild(p);

	}, 1000);
}


function createTrump() {

	 var randomX = Math.floor(Math.random() * 280) + 1;
	 var randomY = Math.floor(Math.random() * 175) + 1;
console.log("I'm creating a trump");
	trump = new component(15, 25, "red", randomX, randomY);
	trump.update();
	trumpArray.push(trump);

	}

function setTrumpInterval(seconds) {
		//add a trump every two seconds 
	   trumpInterval = setInterval(function() {
		createTrump();
	}, seconds);
}

// create a dollar bill component 

function createMoney() {

	 var randomX = Math.floor(Math.random() * 280) + 1;
	 var randomY = Math.floor(Math.random() * 175) + 1;

	money = new component(10, 5, "green", randomX, randomY);
	money.update();
	moneyArray.push(money);

	}


// set how often money arrives in your level 

function setMoneyInterval(seconds) {
		//add a new dollar bill every two seconds 
	   moneyInterval = setInterval(function() {
		createMoney();
	}, seconds);
}

function moveArrayItem(i) {
	 	var direction = Math.floor(Math.random() * 4) + 1;
		   	console.log(direction);
		   	if (direction == 1) {
		   		
		   		moneyArray[i].clear();
		   		moneyArray[i].x += 10;
		   		moneyArray[i].update();
		   	}
		   	if (direction == 2) {
		   		moneyArray[i].clear();
		   		moneyArray[i].x -= 10;
		   		moneyArray[i].update();
		   		
		   	}
		   	if (direction == 3) {
		   		moneyArray[i].clear();
		   		moneyArray[i].y -= 10;
		   		moneyArray[i].update();


		   	}
		   	if (direction == 4) {
		   		moneyArray[i].clear();
		   		moneyArray[i].y += 10;
		   		moneyArray[i].update();

		   	}

}

function moveTrumpItem(i) {
	 	var direction = Math.floor(Math.random() * 4) + 1;
		   	console.log(direction);
		   	if (direction == 1) {
		   		
		   		trumpArray[i].clear();
		   		trumpArray[i].x += 10;
		   		trumpArray[i].update();
		   	}
		   	if (direction == 2) {
		   		trumpArray[i].clear();
		   		trumpArray[i].x -= 10;
		   		trumpArray[i].update();
		   		
		   	}
		   	if (direction == 3) {
		   		trumpArray[i].clear();
		   		trumpArray[i].y -= 10;
		   		trumpArray[i].update();


		   	}
		   	if (direction == 4) {
		   		trumpArray[i].clear();
		   		trumpArray[i].y += 10;
		   		trumpArray[i].update();

		   	}

}

// component constructor

function component(width, height, color, x, y) {
	console.log("In the component with: " + width + height + color + x + y);
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.color = color;
	this.update = function() {
			if (this.color === "red") {
				console.log("In the constructor trying to build a trump");
			var img = document.getElementById("trumpFace");
			ctx.drawImage(img, this.x, this.y, this.width, this.height);

		}
		//ctx = canvas.context
			if (this.color === "green") {
			var img = document.getElementById("dollarBill");
			ctx.drawImage(img, this.x, this.y, this.width, this.height);
		} 
		if (this.color === "blue") {
			var img = document.getElementById("bernieFace");
			ctx.drawImage(img, this.x, this.y, this.width, this.height);

		}
		

	}



	 this.clear = function() {
		ctx.clearRect(this.x, this.y, this.width, this.height);
	 }

	 this.collide = function(obj) {
            var myLeft = this.x;
            var myRight = this.x + this.width;
            var myTop = this.y;
            var myBottom = this.y + this.height;

            var otherLeft = obj.x;
            var otherRight = obj.x + obj.width;
            var otherTop = obj.y;
            var otherBottom = obj.y + obj.height;

            var crash = true;

            if (
                    (myBottom < otherTop) ||
                    (myTop > otherBottom) ||
                    (myRight < otherLeft) ||
                    (myLeft > otherRight)
                ) {
                crash = false;
            }
            return crash;
        }	

}

// clear the whole canvas 

    function clear(canvas) {
        canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
    }

///////////////////////////////////////////////////////////////////////////////////////////

// add a score to your table 
var addScore = function() {
	var formDiv = document.getElementById("finalForm");
	
	var form = document.createElement('form');
	
	form.style.marginBottom = '10px';
	form.style.marginTop = '10px';
	var nameInput = document.createElement('input');
	var scoreInput = document.createElement('input');
	nameInput.style.marginRight = '10px';
	scoreInput.style.marginRight = '10px';
	var submit = document.createElement('button');
	submit.textContent = "add score";
	nameInput.placeholder = "your name";
	nameInput.name = "nameInput";
	scoreInput.name = "scoreInput";
	scoreInput.value = totalScore;
	
	
	
	form.appendChild(nameInput);
	form.appendChild(scoreInput);
	
	
	form.appendChild(submit);
	
	
	formDiv.appendChild(form);
	submit.addEventListener('click', function(e) {
		e.preventDefault();
		console.log("I'm in the submit event listener");
		var form = e.target.parentElement;
		console.log(form.nameInput.value);
		console.log(form.scoreInput.value);
		
		var obj = {
			"name" : form.nameInput.value,
			"scoreValue" : form.scoreInput.value
		};
		
		
		var jsonString = JSON.stringify(obj);
		console.log(jsonString);

		var xhr = new XMLHttpRequest();
		
		xhr.open('POST', 'rest/scores/allScores/' + form.nameInput.value + '/' + form.scoreInput.value + '', true);
		xhr.setRequestHeader('Content-type', 'application/json'); 

		

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				console.log(xhr.status);
				console.log(xhr.responseText);
			}
			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		};

		xhr.send(jsonString);

		console.log("Ready to build the table");
		buildTableWithRequest();
		var table = document.querySelector("#scoresTable");
		table.parentElement.removeChild(table);
//		while (table.firstChild) {
//			table.removeChild(table.firstChild.nextSibling);
//		}
		buildTableWithRequest();

	})

}

// see all the scores 

var buildTableWithRequest = (function() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'rest/scores', true);
	//xhr.setRequestHeader('Content-type', 'application/json'); 


	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log("I'm trying to build the table");
			var data = JSON.parse(xhr.responseText);
			var scoreDiv = document.getElementsById("scoreTable");
			var table = document.createElement('table');
			table.id = "scoresTable";
			
			table.style.height = "40px";
			table.style.overflow="hidden";
			table.style.textOverflow="ellipsis";
			data.forEach(function(value, index, array) {
				// sort by scores
				array.sort(function(a, b) {
					return b.scoreValue - a.scoreValue;
				});
				// table is below
				var tr = document.createElement('tr');
				var td = document.createElement('td');
				var td2 = document.createElement('td');
				td.textContent = value.name;
				td2.textContent = value.scoreValue;
				tr.appendChild(td);
				tr.appendChild(td2);
				table.appendChild(tr);

			});
			
			scoreDiv.appendChild(table);
			// table has been created

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}
	};
//
	xhr.send(null);
})



