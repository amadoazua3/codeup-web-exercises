"use strict";

//-------------------------------- Exercise 1

var a = 1; // value of a is 3 after all the increments
var b = a++; // value of b is 1
var c = ++a; // value of c is 3
// what is the value of a, b, and c?

var d = "hello";
var e = false;

d++; // result in NaN
e++; // result is 1

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2; // NaN

// var price = 2.7;
// price.toFixed(2); // result is 2.70

// var price = "2.7";
// price.toFixed(2); // result is in a compiling error because 2.7 is a String in this case and not a number.


// console.log(isNaN(0)); // result : false

// console.log(isNaN(1)); // result : false
//
// console.log(isNaN("")); // result : false
//
// console.log(isNaN("string")); // result : true
//
// console.log(isNaN("0")); // result : false
//
// console.log(isNaN("1")); // result : false

// console.log(isNaN("3.145")); // result : false
//
// console.log(isNaN(Number.MAX_VALUE)); // result : false
//
// console.log(isNaN(Infinity)); // result : false
//
// console.log(isNaN("true")); // result : true
//
// console.log(isNaN(true)); // result : false
//
// console.log(isNaN("false")); // result : true
//
// console.log(isNaN(false)); // result : false

// to illustrate why the isNaN() function is needed:
// console.log(NaN == NaN); // result : false
//
// console.log(isNaN(NaN)); // result : true
//
// console.log(isNaN(NaN == NaN)); // result : false

// console.log(!true); // result : false
//
// console.log(!false); // result : true
//
// console.log(!!true); // result : true
//
// console.log(!!false); // result : false
//
// console.log(!!0); // result : false

// console.log(!!-0); // result : false
//
// console.log(!!1); // result : true
//
// console.log(!!-1); // result : true
//
// console.log(!!0.1); // result : true
//
// console.log(!!"hello"); // result : true
//
// console.log(!!""); // result : false

// console.log(!!''); // result : false
//
// console.log(!!"false"); // result : true
//
// console.log(!!"0"); // result : true

//-------------------------------- Exercise 2
//
// var sample = "Hello Codeup";
//
// console.log(sample.length); // # of characters in sample is 12
//
// console.log(sample.toUpperCase()); // change sample to all upper case
// console.log(sample.toLowerCase()); // change sample to all lower case
//
// var sampleStudents = sample + " Students"; // update sample and concatenate Students to the string
// console.log(sampleStudents);
//
// console.log(sampleStudents.replace(" Students", " Class")); // replaces Students with Class
//
// console.log(sampleStudents.indexOf("c")); // returns a -1 because there is no lower case c
// console.log(sampleStudents.indexOf("C")); // returns a value of 6, C is the 7th character in the string
//
// console.log(sampleStudents.indexOf("Codeup"));
// console.log(sampleStudents.substring(sampleStudents.indexOf("Codeup"), sampleStudents.indexOf("C") + "Codeup".length)); // retrieves a substring only containing "Codeup"


//--------------------------------- Exercise 3

//scenario 1
//
// var movieRentalFee = 3;
// var theLittleMermaidRentalDays = 3;
// var brotherBearRentalDays = 5;
// var herculesRentalDays = 1;
// var total = (theLittleMermaidRentalDays + brotherBearRentalDays + herculesRentalDays) * movieRentalFee;
//
// console.log("Your total is $" + total);
//
// //scenario 2
//
// var googleContractPay = 400;
// var googleContractHoursWorked = 6;
// var googlePay = googleContractPay * googleContractHoursWorked;
//
// var amazonContractPay = 380;
// var amazonContractHoursWorked = 4;
// var amazonPay = amazonContractPay * amazonContractHoursWorked;
//
// var facebookContractPay = 350;
// var facebookContractHoursWorked = 10;
// var facebookPay = facebookContractPay * facebookContractHoursWorked;
//
// var weeklyPay = facebookPay + googlePay + amazonPay;
//
// console.log("Your pay for the week is $" + weeklyPay);
//
// //scenario 3
//
// var classIsNotFull = true;
// var classScheduleOpen = true;
//
// if(classIsNotFull && classScheduleOpen) {
//     console.log("Congradulations, you are now enrolled.");
// }
//
// //scenario 4
//
// var notExpired = true;
// var premiumMember = true;
// var salesPromotion = 3;
//
// if(notExpired && salesPromotion > 2 || premiumMember){
//     console.log("The customer qualifies for the promotion");
// }

//------------------------------------- Exercise 4

// TODO: create a variable that holds a boolean value for each of the following conditions
// the password must be at least 5 characters
// the password must not include the username
// the username must be no longer than 20 characters
// neither the username or password can start or end with whitespace

// var username = 'codeup';
// var password = 'notastrongpassword';
// var validUsername;
// var validPassword;
//
// if(password.length > 5 && password != username && password[0] != " " && password.length-1 != " "){
//     validPassword = true;
//     console.log("Your password is valid.");
// }else{
//     console.log("Your password is invalid.");
// }
//
// if(username.length <= 20 && username[0] != " " && username.length-1 != " ") {
//     validUsername = true;
//     console.log("Your username is valid.");
// }else{
//     console.log("Your username is invalid.")
// }


