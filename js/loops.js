// // TODO: MINI EXERCISES

// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file

// var num = 0;
//
// while(num < 25){
//     if(num % 2 === 0){
//         console.log(num);
//     }
//     num++;
// }
//
// function passwordCheck(){
//
//     var key = "password";
//     var password;
//     while(password !== key){
//
//        password = prompt("Please enter your password");
//
//     }
//     alert("Login successful");
// }
//
// passwordCheck();

//-----------------------------------------------------


// TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo)

// for(var i = 0; i < 30; i++){
//     if(i % 2 === 0){
//         console.log(i + 2);
//     }else{
//         console.log("odd is: " + i);
//     }
// }

// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.

// for(var i = 0; i < 40; i++){
//     if(i % 3 === 0){
//         console.log("Marco " + i);
//     }else if(i % 5 === 0){
//         console.log("Polo " + i);
//     }else if(i % 3 !== 0 && i % 5 !== 0){
//         console.log("MARCO POLO " + i);
//     }
// }
