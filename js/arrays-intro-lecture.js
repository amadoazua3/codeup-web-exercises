(function (){

    "use strict";

    //number - 5
    //string - "dog"
    //boolean - false/true
    //null - the absence of
    //undefined - data should exist, but doesn't
    //object ->

    // []

    // ["dog", "cat", "fish"] <- each comma-delimited value is called an "element"

    // var myArr = ["dog", "cat", "fish"];
    //
    // console.log(typeof myArr);
    // console.log(Array.isArray(myArr));

    //var myCharacteristics = ["Casey", "Software Engineer", "31"];

    //console.log("The length of the array is: " + myCharacteristics.length);
    // The first element in an array has an index of 0
    // the last element in an array has an index of (length -1)

    //console.log(myCharacteristics[0]);
    //console.log(`Hello, I am a ${myCharacteristics[1]} named ${myCharacteristics[0]}`);


    // TODO: Make a new array which holds elements based on your own characteristics
    //  -> In a console.log, output a string which describes yourself based on those elements
    //  -> KEEP IN MIND ZERO-INDEXING!

    // var myCharacteristics = ["Amado", "Student", "30"];
    //
    // console.log(`Hello, my name is ${myCharacteristics[0]}. I am ${myCharacteristics[2]} years old, and I am a ${myCharacteristics[1]}.`);

    //console.log(myCharacteristics[3]); // accessing an index out of the bounds of an array

    //myCharacteristics[0] += " Azua"; // string are immutable, they don't change
    //myCharacteristics[0] = myCharacteristics[0] + " Azua";
    //console.log(myCharacteristics[0]);

    // for(let i = 0; i < 10; i++){
    //
    //     // do something with ONE array element
    //
    //
    // }

    // var myPets = ["Code", "Murphy", "Hondo", "Buddy"];
    //
    // for(let i = 0; i < myPets.length; i++){
    //
    //     console.log(myPets[i]);
    //
    // }

    // TODO: MINI-EXERCISE
    //  -> Create an array with at least 5 elements, describing whatever you'd like!
    //  -> Create a loop which will log each element to the console
    //  -> Wrap that loop in a function which has an array parameter
    //  -> Call the function and pass in your array as the argument
    //  -> DID YOU KNOW: You can add different data types to an array??
    //      -> Try adding strings, numbers, or booleans as elements


    //var favBands = ["Kinoko Teikoku", "BTS", "Chevelle", "The Joy Formidable", "The Smashing Pumpkins"];
    //console.log("My favorite Bands are: ");

    // for(var i = 0; i < favBands.length; i++){
    //
    //     console.log(favBands[i]);
    //
    // }

//------------------------------------------------

    // var favBands = ["Kinoko Teikoku", "BTS", "Chevelle", "The Joy Formidable", "The Smashing Pumpkins"];
    // favBands.forEach(function(band){
    //
    //         console.log("My favorite band is: " + band);
    //
    // })



})()