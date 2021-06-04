
// //make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
//     addListeners();
// });

$(document).ready(function() {
    addListeners();
});


//parent method for adding all listeners
// function addListeners(){
//     //get the elements to add listener and change image
//     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//     addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'mouseover');
//     addEvents(cardContainers, 'img/question.png', 'mouseout');
// }

function addListeners(){

    let cardContainers = $('.col-md-3');
    addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'mouseover');
    addEvents(cardContainers, 'img/question.png', 'mouseout');
}


// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
//     cardContainers.forEach((cc) => {
//
//         let card = cc;
//         //create listener which will call function change the image
//         let listener = function (event) {
//             let cardImg = card.querySelector(".card .card-img-top");
//             changeImage(cardImg, imgPath);
//         };
//         cc.addEventListener(listenerType, listener);
//     });
//     console.log(listenerType);
// }

function addEvents(cardContainers, imgPath, listenerType){

    (cardContainers).hover(
        function() {
            changeImage($(this), 'img/jazz-music-rubber-duck.jpg');

        },
        function() {
            changeImage($(this), 'img/question.png');

        }
    );
}


// //actual function to swap images
// function changeImage(card, imgPath){
//     card.setAttribute('src', imgPath);
// }


function changeImage(card, imgPath){
    $(card).find('img').attr('src', imgPath);
}