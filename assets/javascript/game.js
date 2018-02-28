var wins = 0;
var losses = 0;
var counter = 0;

function start() {
	counter = 0;
	//displays the score
	$("#currentScore").text(counter);
	//generates random number to guess
	var randomNumber = Math.floor((Math.random() * 120) + 1);

	//add random number to screen
$("#randomNumber").text(randomNumber);
	//generates random number to give button values
		var crystalNumbers = Math.floor((Math.random() * 12) + 1);
		//adds the value above ot button 1
	$("#btn1").attr("data-crystalValue", crystalNumbers);

	$("#btn1").off().on("click", function() {
		//when clicked calls the value
	var crystalValue = ($("#btn1").attr("data-crystalValue"));
	//turns the value from a string to a number
		crystalValue = parseInt(crystalValue)
		//adds the value of the button eachtime clicked to the counter
	counter += crystalValue;
	console.log(counter);

	$("#currentScore").text(counter);

	if (counter === randomNumber){
		wins++;
		$("#wins").text(wins);
		alert("winner");
		start();
		

	}
	else if (counter >= randomNumber){
		losses++;
		$("#losses").text(losses);
		alert("loser");
		start();
		};
});
	//same steps as button 1
	var crystalNumbers = Math.floor((Math.random() * 12) + 1);

		$("#btn2").attr("data-crystalValue", crystalNumbers);

	$("#btn2").off().on("click", function() {

	var crystalValue = ($("#btn2").attr("data-crystalValue"));

		crystalValue = parseInt(crystalValue)

	counter += crystalValue;
	console.log(counter);
	$("#currentScore").text(counter);

	if (counter === randomNumber){
		wins++;
		$("#wins").text(wins);
		alert("winner");
		start();
		

	}
	else if (counter >= randomNumber){
		losses++;
		$("#losses").text(losses);
		alert("loser");
		start();
		};
});
	//same steps as button 1
		var crystalNumbers = Math.floor((Math.random() * 12) + 1);

		$("#btn3").attr("data-crystalValue", crystalNumbers);

	$("#btn3").off().on("click", function() {

	var crystalValue = ($("#btn3").attr("data-crystalValue"));

		crystalValue = parseInt(crystalValue)

	counter += crystalValue;
	console.log(counter);
	$("#currentScore").text(counter);

	if (counter === randomNumber){
		wins++;
		$("#wins").text(wins);
		alert("winner");
		start();
		

	}
	else if (counter >= randomNumber){
		losses++;
		$("#losses").text(losses);
		alert("loser");
		start();
		};
});
	//same steps as button 1
		var crystalNumbers = Math.floor((Math.random() * 12) + 1);

		$("#btn4").attr("data-crystalValue", crystalNumbers);

	$("#btn4").off().on("click", function() {

	var crystalValue = ($("#btn4").attr("data-crystalValue"));

		crystalValue = parseInt(crystalValue)

	counter += crystalValue;
	console.log(counter);
	$("#currentScore").text(counter);

	if (counter === randomNumber){
		wins++;
		$("#wins").text(wins);
		alert("winner");
		start();
		

	}
	else if (counter >= randomNumber){
		losses++;
		$("#losses").text(losses);
		alert("loser");
		start();
		};
});
}

start();
