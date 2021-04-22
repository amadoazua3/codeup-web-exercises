"use strict";

//region TODO: MINI EXERCISE -> SWITCH STATEMENTS

// TODO: Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
//  -> This will involve multiple switch statements
//      -> Orchestrate the statements in a central function that is responsible for calling and checking for errors
//      -> each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
//      -> ie: function getBodyStyle(input){return input}
//  -> The user should be able to enter their
//      -> Body style (2D, 4D, etc)
//      -> Vehicle type (sports car, sedan, compact, truck, etc)
//      -> Vehicle color
//  -> Each switch statement should confirm the user's choice in a logging statement
//  -> The point of this is to validate what the user enters. If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
//      -> ie: default: "error: " + vehicleType + " not recognized";
//      -> If this occurs, call the related function again (see: recursion) until the user enters a correct choice
//      -> HINT: a way you can check for errors is to see if the string contains the word "error"
//  -> After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user
//endregion


function getBodyStyle() {

     let bodyStyleInput = prompt("Please enter a body style: ");

        switch (bodyStyleInput.toUpperCase()) {

            case "2D":
                confirm("Vehicle body style is 2D");
                //return bodyStyleInput;
                break;
            case "4D":
                confirm("Vehicle body style is 4D");
                //return bodyStyleInput;
                break;
            default:
                alert("Error: " + bodyStyleInput + " is not a valid body style!");
                failState("Error");
                //getBodyStyle();
                break;
        }
        console.log("bodyStyleInput is: " + bodyStyleInput);
    return bodyStyleInput;
}

function getVehicleType() {

    let vehicleTypeInput = prompt("Please enter a vehicle type: ");

        switch (vehicleTypeInput.toLowerCase()) {
            case "sedan":
                confirm("Vehicle type is a sedan");
                break;
            case "truck":
                confirm("Vehicle type is a truck");
                break;
            case "sports car":
                confirm("Vehicle type is a sports car");
                break;
            case "compact":
                confirm("Vehicle type is a compact");
                break;
            default:
                alert("Error: " + vehicleTypeInput + " is not a valid vehicle type!");
                getVehicleType();
                break;

        }
    return vehicleTypeInput;
}

function getVehicleColor() {

    let vehicleColorInput = prompt("Please enter a vehicle color: ");

        switch (vehicleColorInput.toLowerCase()) {
            case "white":
                confirm("Vehicle body color is white");
                break;
            case "red":
                confirm("Vehicle body color is red");
                break;
            case "blue":
                confirm("Vehicle body color is blue");
                break;
            default:
                alert("Error: " + vehicleColorInput + " is not a valid body color!");
                getVehicleColor();
                break;
        }
    return vehicleColorInput;
}

function concat() {

    var bodyStyle = getBodyStyle();
    var vehicleType = getVehicleType();
    var vehicleColor = getVehicleColor();

    alert("Your vehicle is a " + bodyStyle + " " + vehicleType + " that is " + vehicleColor);

}

function failState(str){

    if(str === "Error"){

        getBodyStyle();
    }

}

concat();


