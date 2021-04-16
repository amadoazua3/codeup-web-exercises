"use strict";

// var num = 5;
//
// num = num + 5;
//
// console.log(num);

// creating an interface for other code to use without knowing what happens inside add()
// function add(){
//     return 5 + 5;
// }
//
// console.log("The result of add() is: " + add());

// function add(num1, num2){ // <- parameters here
//     return num1 + num2;
// }
//
// console.log("The result of add() is: " + add(5, 10)); // <- arguments here

// function add(num1, num2, num3){ // <- parameters here
//    // console.log(num1 + num2 + num3); <- Void function (doesn't return a value its void)
//     return num1 + num2 + num3;  // <- return function
// }
//
// console.log("The result of add() is: " + add(5, 10, 15)); // <- arguments here

// Returns the difference of subtraction num2 from num1
// function subtract(num1, num2){
//     return num1 - num2;
// }
//
// console.log("The result of subtract() is: " + subtract(10, 2));

// MINI EXERCISE

// MINI EXERCISE
// TODO: Create functions which will return the product (*) of two numbers and the dividend (/) of two numbers, respectively

// function product(num1, num2){
//     return num1 * num2;
// }
// console.log("The product is: " + product(2, 5));
//
// function divide(num1, num2){
//     return num1 / num2;
// }
// console.log("The dividend is: " + divide(10, 2));

// function addWithDefaults(num1, num2 = 0){
//     return num1 + num2;
// }
//
// console.log(addWithDefaults(2,2));

//--------------- Scoping and local variables

{
    {   let number = 2;
        {

            console.log(number);
        }
    }
}
var number2 = 10;

function scoopingFun(){
    var number = 2;
    console.log(number + number2);
}

// console.log(number); <- Can't access variable number

scoopingFun();

