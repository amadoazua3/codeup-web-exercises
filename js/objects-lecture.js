"use strict";

/*** OBJECTS ***/
/** INTRODUCTION **/


//  //  What is an object?
////

// var laptop = {
//     color: 'space gray',
//     make: 'make',
//     size: 13,
//     turnsOn: function (){
//         return 'turn the computer on';
//         }
//     }


// var string = "hello world";
// console.log(string.length);

//  //  New Object Instance

    // var losSpurs = new Object();
    // console.log(losSpurs);

//  // Object literal:

    // var theSpurs = {};
    //
    // console.log(typeof theSpurs);

//  // TODO: create an empty 'aboutMe' object using the `new` keyword and the Object() constructor

        // var aboutMe = new Object();

//  // TODO: create an empty 'thisIsMe' object using object literal syntax

        // var thisIsMe = {};


//  //  What is a custom object?
//  //


//  //  Setting properties within object
//  //  okay, now let's add some information to our objects

// var thisIsMe = {
//     name: "Amado",
//     favFood: "Sushi",
//     age: 30,
//     city: "Houston",
//     yearBorn: 1991
// }

//  //  using dot notation (losSpurs)

// var losSpurs = new Object();
// console.log(losSpurs);

//  //  nameOfObject.nameOfProperty = value

// losSpurs.coach = "Gregg";
// losSpurs.mascot = "Coyote";
// losSpurs.fans = "The Best";
// console.log(losSpurs);

//  //  Bracket notation
// var daMavs = {};

//  //  brackets and quotes
//  //  nameOfObject[nameOfProperty];

// daMavs["city"] = "Dallas";
// daMavs["wins"] = 1;
// console.log(daMavs);

// var Federer = {
//     name: "Roger",
//     city: "Bern",
//     opensWon: 15
// }

// prompt 'whats your favorite sport'
// var sport = "tennis";
// Federer[sport] = sport;
// console.log(Federer);

// //  adding to aboutMe object using bracket notation
// aboutMe["age"] = 30;
// //  adding to aboutMe object using dot notation
// aboutMe.favBand = "Kinoko Teikoku";
// console.log(aboutMe);

//syntax:
// nameOfObject.nameOfProperty--> this creates the property within the object

// var theSpurs = {
//     city: "San Antonio",
//     coach: "Gregg",
//     wins: 5,
//     isBestTeam: true
// }

//  //  what's the difference between dot and bracket (array) notation?
//  //  bracket notation - quotes around the property name

//  USING BRACKET:

// let bracketObj = {
//     cat: 'meow',
//     dog: 'woof'
// };
//
// let dog = 'cat';
// let sound = bracketObj[dog];      // output is meow
// let sound = bracketObj.dog;         // output is woof
// console.log(sound);

//  // dot notation is more widely used and simpler than bracket notation


// USING DOT

// let obj = {
//     cat: 'meow',
//     dog: 'woof'
// }
//
// let dog = 'cat';
// let sound = obj.dog;
// console.log(sound);


// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// TODO: write a function that returns the sport and numOfPlayers from your 'team' object

// var yourFaveSportsTeam = {};
//
// yourFaveSportsTeam.city = "Houston";
// yourFaveSportsTeam.coach = "Dusty Baker";
// yourFaveSportsTeam.sport = "MLB";
// yourFaveSportsTeam.team = "Astros";
//
// yourFaveSportsTeam["numOfPlayers"] = 26;
// yourFaveSportsTeam["numOfChampsWon"] = 1;
// yourFaveSportsTeam["isBestTeam"] = true;
//
// console.log(yourFaveSportsTeam);

//  //  Original function
// function teamData(yourFaveSportsTeam){
//
//     let data1 = yourFaveSportsTeam.sport;
//     let data2 = yourFaveSportsTeam.numOfPlayers;
//
//     console.log(`The sport is ${data1}, and there are ${data2} players on the roster`);
//     //return (`The sport is ${data1}, and there are ${data2} players on the roster`);
// }
//
// teamData(yourFaveSportsTeam);

//  //  A better solution
// function teamData(obj){
//
//     let data1 = obj.sport;
//     let data2 = obj.numOfPlayers;
//
//     console.log(`The sport is ${data1}, and there are ${data2} players on the roster`);
//     //return (`The sport is ${data1}, and there are ${data2} players on the roster`);
// }
//
// teamData(yourFaveSportsTeam);

//--------------------------------------------------------------

// var losSpurs = {};
// losSpurs.city = "San Antonio";
// losSpurs.coach = "Greg";
// losSpurs.sport = "BasketBall"

//  //  ARRAY NOTATION
// console.log(`${losSpurs.coach}`);
// console.log(losSpurs.coach);
// console.log(losSpurs["coach"]);

//  //  Re-assigning values inside of objects
// losSpurs.city = "Gregg"
// console.log(losSpurs);


// var theSpurs = {
//     city: "SA",
//     coach: 'Gregg',
//     wins: 5.,
//     players: ["one", "two", "Tim Duncan", "Manu", "David Robinson"],
//     playerInfo: [
//         {
//             name: "Tim",
//             age: 40,
//             mvp: 3
//         },
//         {
//             name: "Manu",
//             age: 38,
//             mvp: 6
//         },
//     ]
// }
//
// console.log(theSpurs.playerInfo[0].age);

//  // Assigning Functionality

// var laptop = {
//     color: 'space gray',
//     make: 'mac',
//     size: 13,
//     // method
//     //  //  property name becomes the name of the function
//     shutDown: function (){
//         return "Laptop is shutting down";
//         }
//     }

// // Let's shut our laptop off
// console.log(laptop.shutDown());
//
// //  //  turn your laptop back on
// laptop.turnOn = function (){
//     return "Laptop is now starting";
// }
//
// console.log(laptop.turnOn());
// console.log(laptop);

//-------------------------------------------

//  // THIS keyword

// var laptop = {
//     color: 'space gray',
//     make: 'mac',
//     size: 13,
//     whatSize: function (width){
//         return `A laptop is ${width} inches wide`;
//     }
// }

// var inches = laptop.size;
// console.log(laptop.whatSize(inches));

// Using THIS keyword

// var laptop = {
//     color: 'space gray',
//     make: 'mac',
//     size: 13,
//     whatSize: function (){
//         return `A laptop is ${this.size} inches wide`;
//     }
// }
//
// console.log(laptop.whatSize());


//----------------------------------------------------MINI EXERCISE

// var theSpurs = {
//         city: "SA",
//         coach: 'gregg',
//         wins: 5,
//         players: ["one", "two", "tim duncan", "manu", "david robinson"],
//         playerInfo: [
//             {
//                 name: "Tim",
//                 age: 40,
//                 mvp: 3
//             },
//             {
//                 name: "manu",
//                 age: 38,
//                 mvp: 6
//             }
//         ],
//         otherNBATeams: {
//             Jazz: {
//                 city: "Salt Lake City",
//                 mascot: "Jazz Bear",
//                 champsWon: 0
//             },
//             Mavs: {
//                 city: "Dallas",
//                 mascot: "MavsMan & Champ",
//                 champsWon: 1
//             },
//             Pistons: {
//                 city: "Detroit",
//                 mascot: "Hooper the Horse",
//                 champsWon: 3
//             }
//         }
//     }
//console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);

// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.

// console.log(theSpurs.otherNBATeams.Jazz.mascot);
// console.log(theSpurs.otherNBATeams.Mavs.mascot);
// console.log(theSpurs.otherNBATeams.Pistons.mascot);

// theSpurs.players[3] = "Ginobli";
// console.log(theSpurs.players[3]);

// var newOtherNBATeam = {city: 'Houston', mascot: 'Clutch the Rocket Bear', champsWon: 2};
// theSpurs.otherNBATeams.Rockets = newOtherNBATeam;
// console.log(theSpurs);


/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/

// var zoo = {
//     name: "Houston Zoo",
//     city: "Houston",
//     isOpen: "yes",
//     ranking: 2,
//     yearOpened: 1922,
//     animals: {
//         Lions: {
//             hasFur: "yes",
//             isMammal: "yes",
//             animalSound: "roar",
//             canFly: "no",
//             livingPlace: "Carnivores",
//             whatSound: function (){
//                 return `The sound a lion makes is ${this.animalSound}.`;
//             }
//         },
//         Zebra: {
//             hasFur: "yes",
//             isMammal: "yes",
//             animalSound: "braaay",
//             canFly: "no",
//             livingPlace: "African forest",
//             whatSound: function (){
//                 return `The sound a zebra makes is ${this.animalSound}.`;
//             }
//         },
//         SeaLion: {
//             hasFur: "yes",
//             isMammal: "yes",
//             animalSound: "aarrf",
//             canFly: "no",
//             livingPlace: "Sea Lion pool",
//             whatSound: function (){
//                 return `The sound a sea lion makes is ${this.animalSound}.`;
//             }
//         },
//         Gorilla: {
//             hasFur: "yes",
//             isMammal: "yes",
//             animalSound: "Waaaah",
//             canFly: "no",
//             livingPlace: "Wortham World of Primates",
//             whatSound: function (){
//                 return `The sound a gorilla makes is ${this.animalSound}.`;
//             }
//         },
//         Lemur: {
//             hasFur: "yes",
//             isMammal: "yes",
//             animalSound: "Hoooowl",
//             canFly: "no",
//             livingPlace: "Wortham World of Primates",
//             whatSound: function (){
//                 return `the sound a lemur makes is ${this.animalSound}.`;
//             }
//         },
//
//     }
//
// }
//
// console.log(zoo.animals.Lions.whatSound());
// console.log(zoo.animals.Zebra.whatSound());
// console.log(zoo.animals.SeaLion.whatSound());
// console.log(zoo.animals.Gorilla.whatSound());
// console.log(zoo.animals.Lemur.whatSound());


/**  MATH **/

//  //  Math.random()

// //  //  random num between 0 and 1;
// var random = Math.random();
// console.log(random);
// //
// //  //  now let's remove the decimals using toFixed - an existing js method
// var fixed = random.toFixed(2);
// console.log(fixed);
// //
// //  // Now let's get a whole number between 20 and 40
// var inBetween = Math.floor(Math.random() * (40 - 20 + 1) + 20);
// console.log(inBetween);
// //
// //  // Let's break it down
// console.log(40 - 20 + 1); // 21
// console.log(21 + 20); // 41
// console.log(Math.random() * 41);
// //  //  Make sure to replace what's being passed in to floor with actual random num;
// console.log(Math.floor(2.8176061648139354));
//
// console.log(inBetween);

//  //  // TODO:
//
//  //  // Math.round();
// console.log(Math.round(8.245));
// console.log(Math.round(9.872123));
// console.log(Math.round(Math.random()));
//
//  //  // Math.floor()
// console.log(Math.floor(7.90));
// console.log(Math.floor(8.245));
// console.log(Math.floor(9.872));
//
//
//  //  //  Math.ceil()
// console.log(Math.ceil(7.90));
// console.log(Math.ceil(8.245));
// console.log(Math.ceil(9.872));
//
//
//  //  //  Math.pow()
// console.log(Math.pow(4,12));
// console.log(Math.pow(9, 3));
//
//  //  //  Math.sqrt()
// console.log(Math.sqrt(342));
// console.log(Math.sqrt(100));
//
//
//  //  //  Math Constants
//
//  //  Euler's Number
// console.log(Math.E);

//  //  Pi
// console.log(Math.PI);
// console.log(Math.floor(Math.PI));

//  //  Question: what's an example of a Math property and what's an example of a Math method?
//  //  What's the difference?




