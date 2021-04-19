(function (){

        "use strict";

        /* ########################################################################## */

        /**
         * TODO:
         * Create a function named `analyzeColor` that accepts a string that is a color
         * name as input. This function should return a message that related to that
         * color. Only worry about the colors defined below, if the color passed is not
         * one of the ones defined below, return a message that says so
         *
         * Example:
         *  > analyzeColor('blue') // returns "blue is the color of the sky"
         *  > analyzeColor('red') // returns "Strawberries are red"
         *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
         *
         * You should use an if-else-if-else block to return different messages.
         *
         * Test your function by passing various string literals to it and
         * console.logging the function's return value
         */


    // function analyzeColor(str) {
    //
    //         if (str === "blue") {
    //             console.log("Blue is the color of the sky");
    //         }else if (str === "red") {
    //             console.log("Cherries are red");
    //         }else if (str === "cyan") {
    //             console.log("I don't know anything about cyan");
    //         }else if(str === "yellow"){
    //             console.log("Bananas are yellow");
    //         }else if(str === "green"){
    //             console.log("Lettuce is green");
    //         } else{
    //             console.log("I don't know anything about that color");
    //     }
    //
    // }
    //
    // analyzeColor("blue".toLowerCase());

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        /**
         * TODO:
         * Pass the `randomColor` variable to your function and console.log the results.
         * You should see a different message every time you refresh the page
         */

    // analyzeColor(randomColor.toLowerCase());

        /**
         * TODO:
         * Refactor your above function to use a switch-case statement
         */

    // function analyzeColor(str){
    //
    //     switch(str) {
    //
    //         case "red":
    //             console.log("Cherries are red");
    //             alert("Cherries are red");
    //             break;
    //         case "blue":
    //             console.log("The sky is blue");
    //             alert("The sky is blue");
    //             break;
    //         case "yellow":
    //             console.log("Bananas are yellow");
    //             alert("Bananas are yellow");
    //             break;
    //         case "green":
    //             console.log("Lettuce is green");
    //             alert("Lettuce is green");
    //             break;
    //         case "cyan":
    //             console.log("I don't know anything about cyan");
    //             alert("I don't know anything about cyan");
    //             break;
    //         default:
    //             console.log("I don't know anything about that color");
    //             alert("I don't know anything about that color");
    //         }
    //
    //     }
    //analyzeColor(randomColor.toLowerCase());


        /**
         * TODO:
         * Prompt the user for a color when the page loads, and pass the input from the
         * user to your `analyzeColor` function. Alert the return value from your
         * function to show it to the user.
         */

    // var userColor = prompt("Please enter in a color: ");
    // analyzeColor(userColor.toLowerCase());



        /* ########################################################################## */

        /**
         * TODO:
         * Suppose there's a promotion in Walmart, each customer is given a randomly
         * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
         * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
         * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
         * all for free!.
         *
         * Write a function named `calculateTotal` that accepts a lucky number and total
         * amount, and returns the discounted price.
         *
         * Example:
         * calculateTotal(0, 100) // returns 100
         * calculateTotal(4, 100) // returns 50
         * calculateTotal(5, 100) // returns 0
         *
         * Test your function by passing it various values and checking for the expected
         * return value.
         */

        // function calculateTotal(num1, num2){
        //
        //     var subTotal;
        //     var discount;
        //
        //     if(num1 === 0){
        //         subTotal = num2;
        //         console.log("You drew 0...sorry no discount today :(");
        //         console.log("Your total is: $" + subTotal.toFixed(2));
        //     }else if(num1 === 1){
        //         discount = 0.10 * num2;
        //         subTotal = num2 - discount;
        //         console.log("You drew 1, and your discount is 10% off of $" + num2);
        //         console.log("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else if(num1 === 2){
        //         discount = 0.25 * num2;
        //         subTotal = num2 - discount;
        //         console.log("You drew 2, and your discount is 25% off of $"+ num2);
        //         console.log("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else if(num1 === 3){
        //         discount = 0.35 * num2;
        //         subTotal = num2 - discount;
        //         console.log("You drew 3, and your discount is 35% off of $"+ num2);
        //         console.log("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else if(num1 === 4){
        //         discount = 0.50 * num2;
        //         subTotal = num2 - discount;
        //         console.log("You drew 4, and your discount is 50% off of $" + num2);
        //         console.log("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else{
        //         subTotal = 0;
        //         console.log("Congradulations! You drew lucky number 5, and you get all it all for FREE!");
        //         console.log("Brings your new total to: $" + subTotal.toFixed(2));
        //     }
        //
        // }
        //
        // calculateTotal(Math.floor(Math.random() * 6), 100);


        /**
         * TODO:
         * Uncomment the line below to generate a random number between 0 and 6.
         * Prompt the user for their total bill, then use your `calculateTotal` function
         * and alerts to display to the user what their lucky number was, what their
         * price before the discount was, and what their price after the discount is.
         */
// Generate a random number between 0 and 6

        // var luckyNumber = Math.floor(Math.random() * 6);
        //
        // function calculateTotal(num1, num2){
        //
        //     var subTotal;
        //     var discount;
        //
        //     if(num1 === 0){
        //         subTotal = num2;
        //         alert("You drew 0...sorry no discount today :(");
        //         alert("Your total is: $" + subTotal);
        //     }else if(num1 === 1){
        //         discount = 0.10 * num2;
        //         subTotal = num2 - discount;
        //         alert("You drew 1, and your discount is 10% off of $" + num2);
        //         alert("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else if(num1 === 2){
        //         discount = 0.25 * num2;
        //         subTotal = num2 - discount;
        //         alert("You drew 2, and your discount is 25% off of $"+ num2);
        //         alert("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else if(num1 === 3){
        //         discount = 0.35 * num2;
        //         subTotal = num2 - discount;
        //         alert("You drew 3, and your discount is 35% off of $"+ num2);
        //         alert("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else if(num1 === 4){
        //         discount = 0.50 * num2;
        //         subTotal = num2 - discount;
        //         alert("You drew 4, and your discount is 50% off of $" + num2);
        //         alert("Brings your new total to: $" + subTotal.toFixed(2));
        //     }else{
        //         subTotal = 0;
        //         alert("Congratulations! You drew lucky number 5, and you get all it all for FREE!");
        //         alert("Brings your new total to: $" + subTotal.toFixed(2));
        //     }
        //
        // }
        //
        // var customerTotal = prompt("What is your total?");
        // calculateTotal(luckyNumber, customerTotal);

        /**
         * TODO:
         * Write some JavaScript that uses a `confirm` dialog to ask the user if they
         * would like to enter a number. If they click 'Ok', prompt the user for a
         * number, then use 3 separate alerts to tell the user:
         *
         * - whether the number is even or odd
         * - what the number plus 100 is
         * - if the number is negative or positive
         *
         * if what the user enters is not a number, use an alert to tell them that, and
         * do *not* display any of the above information.
         *
         * Can you refactor your code to use functions?
         * HINT: The way we prompt for a value could be improved
         */

        // var userConfirmation = confirm("Would you like to enter a number?");
        // var userInput = prompt("Please enter a number: ");
        // var calculation = parseInt(userInput);
        // var plusHundred = calculation + 100;
        //
        // if(isNaN(userInput)){
        //     alert("Please input a number. " + userInput + " is not a number.");
        // }
        // else if(userInput > 0 && userInput % 2 === 0){
        //     alert("Your number " + userInput + " is an even number");
        //     alert("Your number " + userInput + " is a positive number");
        //     alert("Your number " + userInput + " plus 100 is: " + plusHundred);
        // }else if (userInput > 0 && userInput % 2 !== 0){
        //     alert("Your number " + userInput + " is an odd number");
        //     alert("Your number " + userInput + " is a positive number");
        //     alert("Your number " + userInput + " plus 100 is: " + plusHundred);
        // }else if(userInput < 0 && userInput % 2 === 0){
        //     alert("Your number " + userInput + " is an even number");
        //     alert("Your number " + userInput + " is a negative number");
        //     alert("Your number " + userInput + " plus 100 is: " + plusHundred);
        // }else if(userInput < 0 && userInput % 2 !== 0){
        //     alert("Your number " + userInput + " is an odd number");
        //     alert("Your number " + userInput + " is a negative number");
        //     alert("Your number " + userInput + " plus 100 is: " + plusHundred);
        // }else{
        //
        // }

}
)()