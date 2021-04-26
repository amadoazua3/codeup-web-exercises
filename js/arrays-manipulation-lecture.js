(function (){

    "use strict";

    //TODO:
    // -> .length - SUPER IMPORTANT!
    // -> .forEach() - ALSO IMPORTANT!
    // -> FOR LOOP - STILL IMPORTANT!


    // var days = ["Monday", "Tuesday", "Wednesday"];
    // console.log(days.length);
    // var newLength = days.push("Thursday");
    // console.log(newLength);

    // console.log("The max index of this array: " + days.indexOf("Thursday"));

    // var removedElement = days.pop();
    //
    // console.log(days);
    // console.log("The removed element was: " + removedElement);


    // TODO: MINI-EXERCISE
    //  -> var days = ["Monday", "Tuesday", "Wednesday"];
    //  -> Create an array with the remaining days of the week
    //  -> Call .forEach() on that NEW array
    //  -> Inside the inline function you pass into .forEach():
    //      -> add the remainingDay of the week to the old array
    //  -> When the loop completes, console.log() the completed day of the week array

    // var days = ["Monday", "Tuesday", "Wednesday"];
    // var remainingWeek = ["Thursday", "Friday", "Saturday", "Sunday"];
    //
    // remainingWeek.forEach(function (day){
    //     days.push(day);
    // });
    //
    // console.log(days);


//--------------------------------------------------------

    // .unshift(valueToAdd);

    // Start 0, 1, 2, 3
// Unshift  [] , 0, 1, 2, 3
//    w/ New 0, 1, 2, 3, 4

    // var numArray = [1, 2, 3, 4, 5];

    // console.log(numArray.indexOf(1)); // beginning index

    // numArray.shift(6);
    // numArray.push(6);

    // console.log(numArray.indexOf(1)); // ending index
    //
    // console.log(numArray);

    // var sortedArray = numArray.sort();
    // console.log(sortedArray);

    // var daysInMonth = [...Array(32).keys()];
    // console.log(daysInMonth);

    // var removedDay = daysInMonth.shift();
    // console.log("This day was removed: " + removedDay);
    // console.log(daysInMonth);
    // daysInMonth.unshift(2);
    // console.log(daysInMonth.indexOf(1) === 0);
    // console.log(daysInMonth.lastIndexOf(2));
    // console.log(daysInMonth);


//---------------------------------------------------------

    // TODO - MINI EXERCISE
    //  -> Let's reverse engineer our days of the week array
    //  -> Make sure to console.log in order to see your code's behavior!
    //  -> Write a function which takes in your complete days of the week array
    //      -> It will eventually return your reverse-engineered array
    //  -> Using a FOR LOOP (not .forEach())
    //      -> pop() each item off the days array
    //      -> use the returned value from pop() to unshift the element
    //      -> on to the new array
    //  -> HINT: You may find that the loop doesn't behave as expected
    //      -> console.log EVERY possible thing which could change as your loop runs
    //          -> consider how the methods you are using change state of the array


    // var newArray = [];
    //
    // function reversedEngineering(days){
    //
    //     for(var i = 0; i < days.length+1; i++){
    //         newArray.unshift(days.pop());
    //         console.log(newArray);
    //        // console.log(days.length);
    //         i = 0;
    //     }
    //     console.log("The element at index 0 is: " + newArray[0]);
    // }
    //
    // reversedEngineering(days);

//------------------------------------------

    // function sortMyNums(num1, num2, num3){
    //     var numArray = [num1, num2, num3];
    //     console.log(numArray);
    //     numArray.sort(function (a, b){
    //         console.log(a);
    //         console.log(b);
    //         console.log(a - b);
    //         return a - b;
    //     });
    //     console.log(numArray);
    //     return numArray;
    // }
    //
    // sortMyNums(13,1,1009);


    // function giveMissyJustice(notASuspectString){
    //
    //     var musicalGenius = notASuspectString.split('');
    //
    //     console.log(musicalGenius);
    //
    //     //musicalGenius.reverse();
    //
    //     console.log(musicalGenius.reverse());
    //
    //     var reversedString = musicalGenius.join('');
    //
    //     console.log(reversedString);
    //
    //
    //
    // }
    //
    // giveMissyJustice("I put my string down, flip it and reverse it");





})()