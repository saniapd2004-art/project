// Simple Number Guessing Game

// Hardcoded secret number
const secretNumber = 7;

//user guess
const guess=7;
if(guess === secretNumber){
    console.log("Congratulations! You guessed the secret number.");
}else{
    console.log("Wrong guess. The correct number was " + secretNumber);
}