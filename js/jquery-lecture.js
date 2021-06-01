
// tapping into objects
// let school = {
//     students: 36,
//     name: "high school one",
//     teachers: ["Casey", "Tristan"],
//     getLunchMoney: function(){
//         console.log("you have X dollars left");
//     }
// }
// school.getLunchMoney();

// dollar sign - tapping into jQuery library
// selector - the element that you're selecting from the dom (
// $("selector").methods(any argument required);

// syntax - select by tag name
// $("h1") //... --> select by tagName

// syntax - selecting by id
// $("#change-text") //

// syntax - selecting by class
// $(".lead")


// let myAge = 30;
// console.log(`I can't believe I am ${myAge} years old!!`);

// selecting children/parent/sibling elements

// mini exercise:

// window.onload

// document.ready




// mini-exercise

$("#all-caps").hide();

$("span").hide();

$(".show-me").show();

$("#pink").css("background-color", "pink");

$("#orange").css("background-color", "orange");

console.time("timer");
$(window).ready(function() {

    console.timeLog("timer");
    $('#pink').hide();
});

$(document).ready(function() {
    console.timeLog("timer");
    $('#orange').hide();
});