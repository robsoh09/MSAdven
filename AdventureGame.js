/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

const readline = require("readline-sync");


//create playerName 
let playerName = "";
console.log("Enter your name: ");
playerName = readline.question();
console.log(`Welcome, Adventurer ${playerName}`);
let gold = 100;
console.log(`You have ${gold} gold.`);

//create inventory array
let inventory = [];
