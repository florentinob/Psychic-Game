 var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var guessesMade = [];

 var confirmLetter = prompt("What Letter Do You Choose?");

 if (confirmLetter) {
     alert("You Win Champ!");
 } else {
     alert("Wrong Answer, Try Again!");
     location.reload();
 }

 document.onkeyup = function(event) {
     var userGuess = event.key;

     var computerGuess = 
     computerChoices[Math.floor(Math.random() * computerChoices.length)];

     if (computerChoices.includes(userGuess)) {
         if (userGuess === computerGuess) {
             wins++;
             guessArray.push(userGuess);
             chances--;
         }

         else if (userGuess !== computerGuess) {
             losses++;
             guessArray.push(userGuess);
             chances--;
         }

         if (chances ===0) {
             alert("You're Running Out Of Guesses!");
             location.reload();
         }
         else if (losses === 9) {
             alert("You Are Out Guesses. You Lose!");
         }
     }
 }