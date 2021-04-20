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

function getBodyStyle(input) {

    switch (input){

        case "2D":
            alert("Vehicle body style is 2D");
            break;
        case "4D":
            alert("Vehicle body style is 4D");
            break;
        default:
            alert("Error: Not a valid body style!");
            break;
    }




}

function getVehicleType(input){

    switch (input){
        case "sedan":
            alert("Vehicle type is a sedan");
            break;
        case "truck":
            alert("Vehicle type is a truck");
            break;
        default:
            alert("Error: Not a valid vehicle type!");
            break;

    }

}

function getVehicleColor(input){

    switch (input){
        case "white":
            alert("Vehicle body color is white");
            break;
        case "red":
            alert("Vehicle body color is red");
            break;
        case "blue":
            alert("Vehicle body color is blue");
        default:
            alert("Error: Not a valid body color!");
            break;


    }

}

var bodyStyleInput = prompt("Please enter a body style: ");
getBodyStyle(bodyStyleInput);

var vehicleTypeInput = prompt("Please enter a vehicle type: ");
getVehicleType(vehicleTypeInput);

var vehicleColorInput = prompt("Please enter a vehicle color: ");
getVehicleColor(vehicleColorInput);