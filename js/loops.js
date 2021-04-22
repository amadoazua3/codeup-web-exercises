// // TODO: MINI EXERCISES

// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file

var num = 0;

while(num < 25){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}

function passwordCheck(){

    var key = "password";
    var password;
    while(password !== key){

       password = prompt("Please enter your password");

    }
    alert("Login successful");
}

passwordCheck();