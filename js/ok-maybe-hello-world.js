"use strict";

// alert("I swear I won't make you say 'hello world'");
//
// alert("I hope my dogs don't get out again :/ ");

// MINI EXERCISE
// TODO: I demand a haiku! Using alert, write a haiku!
//     -> The entire poem consists of just three lines, with 17 syllables in total.
//     -> The first line is 5 syllables. -> first alert
//     -> The second line is 7 syllables. -> secord alert
//     -> haha The third line is 5 syllables. -> third alert

alert("Why doesn't this work?");
alert("I've checked syntax ninety times!");
alert("oh, missed bracket...");

// CONFIRM

var userChoice = confirm("Would you like to continue?");

if(userChoice === true) {
    console.log("Let's continue");
}else{
    console.log("Alright, be like that...");
}

console.log("The user chose: " + userChoice);

// PROMPT

var userInput = prompt( "What is your favorite movie?").toUpperCase();

if (userInput === "The Room".toUpperCase()){
    alert("Oh, hi Mark.");
}else{
    alert("You chose: " + userInput);
}

//alert(userInput);


