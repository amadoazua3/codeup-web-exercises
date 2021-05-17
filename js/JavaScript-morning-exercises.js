"use strict";

// 5/3/2021 morning exercise

// function trim(input){
//
//     console.log(input);
//     console.log(input.trim());
// }
//
// trim("   Good morning Codeup!   ");

// 5/4/2021 morning exercise

// function cube(n){
//
//     return n * n * n;
//
// }
//
// console.log(cube(3));
//
// function cubeRoot(n){
//
//     return Math.cbrt(n);
//
// }
//
// console.log(cubeRoot(6));
// console.log(cubeRoot(cube(5)));

// 5/5/2021 morning exercise


// function last(input){
//
//     return input.slice(-1);
// }
//
// console.log(last("Good morning everyone"));

// 5/6/2021 morning exercise

// function remainder(number, divisor){
//
//     if(isNaN(number) || isNaN(divisor)){
//         return "Argument is not a number/numeric string";
//     }
//
//     return number % divisor;
// }
//
// console.log(remainder("It was me DIO!",10));

// 5/13/2021 morning exercise

// Write a JavaScript program to construct the following pattern, using a nested for loop.
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

        // Solution 1 refactored Laura's number's pyramid

//     for(let i = 1; i <= 5; i++){
//     console.log("* ".toString().repeat(i));
// }

        // Solution 2 refactored Grady's numbers pyramid

// let starPyramid = function(start, end){
//     for(let i = start; i <= end; i++){
//         var x = String("* ");
//         x = x.repeat(i);
//         console.log(x);
//     }
// }
//
// starPyramid(1, 5);

// 5/17/2021 morning exercise

// Write a function named secondToLast(arr) that returns the data type of the
// second to last element of the array parameter. When you call the function, pass in an array of your choosing


function secondToLast(arr){

    return typeof arr[arr.length-2];

}

var myArr = [1, "hello", true, undefined, false, "world", 27];

console.log(secondToLast(myArr));
