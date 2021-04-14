"use strict";

alert("Welcome to my Website!");

var favColor = "blue".toUpperCase();
var userInput = prompt("What is your favorite color?").toUpperCase();


if(userInput === favColor){
    alert("Blue is my favorite color too!");
}else{
    alert("Your favorite color is: " + userInput);
}