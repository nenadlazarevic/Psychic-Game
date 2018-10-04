


var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var userselected =[];
var numGuesses = 9;


    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var numGuessesText = document.getElementById("numGuesses-text");
    var userselectedtext = document.getElementById("UserSelected-text");
   

document.onkeyup = function(event) {
    
  var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     {
        
         if (userGuess === computerGuess) {
        wins++;
        // numGuesses = 9;
        userselected = [];
         }
        if (event.keyCode < 65 || event.keyCode > 90) {
          alert("Invalid Entry");

         
        } else if (userselected.indexOf(userGuess) >=0) {
          alert("You already guessed that!");
        
      } else if (userGuess !== computerGuess) {
       numGuesses--;
       userselected.push(userGuess);
      } 

      if (numGuesses === 0) {
        numGuesses = 9;
        losses++;
        userselected = [];
      } 
      

    }

   
    

    // ????
    
    


    directionsText.textContent = "";
    


    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    numGuessesText.textContent = "guesses left: " + numGuesses;
    userselectedtext.textContent = "you selected: " + userselected;
    
  };



  