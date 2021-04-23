"use strict";

//----------------------------------------------- Exercise 2

// function showMultiplicationTable(number){
//
//    for(var i = 1; i <= 10; i++){
//
//       console.log(number + " x " + i + " = " + (number * i));
//
//    }
//
// }
//
// showMultiplicationTable(7);


//------------------------------------------------ Exercise 3

// for(var i = 0; i < 10; i++){
//
//     var random = Math.floor(Math.random() * (200 - 20)) + 20;
//
//     if(random % 2 === 0){
//         console.log(random + " is even");
//     }else{
//         console.log(random + " is odd");
//     }
// }

//------------------------------------------------- Exercise 4

//Grady's Solution
// let numberPyramid = function(start, end){
//     for(let i = start; i <= end; i++){
//         var x = String(i);
//         x = x.repeat(i);
//         console.log(x);
//     }
// }
//
// numberPyramid(1, 9);

// Laura's solution
// for(let i = 1; i <= 9; i++){
//     console.log(i.toString().repeat(i));
// }

//------------------------------------------------- Exercise 5

// for (var i = 100; i >= 5; i -= 5){
//
//     console.log(i);
//
// }
