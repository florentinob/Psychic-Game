var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessesMade = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector(.list).style.display = "none";

function updateGuessesLeft() {
	document.querySelector('#guessesleft').innerHTML = "Guesses Left:" + guessesLeft;
};

function updateLetterToGuess() {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
	document.querySelector('#guessesmade').innerHTML = "Your Guesses So Far:" + guessesMade.join(', ');
};



