"use strict";

var numToSkip = prompt("please enter an odd number between 1 and 50: ");

for(var i = 0; i < 50; i++){
    if(i == numToSkip){
        console.log("Yikes! Skipping number: " + i);
    }
    if(i % 2 !== 0){
        console.log("Here is an odd number: " + i);
    }
}