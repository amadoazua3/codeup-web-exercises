"use strict";

function getKindOfDog(){

    return prompt("What kind of dog is it?");

}

//console.log(getKindOfDog());

function getContactInfo(){

    return prompt("How do I contact you when I find the dog?");

}

//console.log(getContactInfo());

function getDogName(){

    return prompt("What is your dog's name?")

}

//console.log(getDogName());

function playTheGreatEscape(){

    //get all the info
    var dogKind = getKindOfDog();
    var dogName = getDogName();
    var contactInfo = getContactInfo();

    //start searching
    alert("Time to search for this doggo!");

    //see a dog!
    alert("I see a dog!");

    var kindOfDogSeen = getKindOfDog();

    //check if the dog matches
    var isTheLostDog = (kindOfDogSeen === dogKind) && confirm("Does dog respond to the name " + dogName + "?");

    if(isTheLostDog){

        //return dog to the owner!
        alert("Puts leash on " + dogName);
        alert("Time to call the owner!");
        alert("Calling: " + contactInfo);
        alert("Taking the dog to their worried owner!");
    }

}

playTheGreatEscape();