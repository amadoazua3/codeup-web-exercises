// 1.
let redBrd = document.getElementById("red-border");
console.log(redBrd);

//2. print an arr of elements whose text is dark green
let drkGrn = document.getElementsByClassName("drk-grn")
console.log(drkGrn);

// 3. print an array of ALL paragraphs
let allPars = document.getElementsByTagName("p");
console.log(allPars);

// STYLE ELEMENTS

let yellowDiv = document.getElementById("yellow-border");
console.log(yellowDiv);

yellowDiv.style.border = "6px solid #f8f8f8";
yellowDiv.style.color = "blue";

console.log(yellowDiv.childNodes[0]);

// // change inner contents
let yellowPar = document.getElementById("change-txt");
console.log(yellowPar.innerText);
yellowPar.innerText = "hello world";


// // console.log(document.getElementsByClassName("innerHTML")[0].innerHTML);
// //
// //
// // let newEl = document.createElement((p))
// document.getElementsByClassName("innerHTML")[0].innerHTML = "new text"