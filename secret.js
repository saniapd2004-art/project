// Simple Number Guessing Game

// Hardcoded secret number
const secretNumber = 7;

// Ask user for input
let guess = prompt("Guess a number between 1 and 10:");

// Convert input to number
guess = Number(guess);

// Check the guess
if (guess === secretNumber) {
    console.log("Correct! You guessed the number.");
} else {
    console.log("Wrong guess. The correct number was " + secretNumber);
}