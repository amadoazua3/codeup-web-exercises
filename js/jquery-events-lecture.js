
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


// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

let hoverIn = function(){

   $(this).find('.card-title').text($(this).attr('data-attribute'));
}

let hoverOut = function(){
    $(this).find('.card-title').text('Card');
}

$('.col-md-3').hover(hoverIn, hoverOut);


// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

$('.list-group-item').click(function () {

    // console.log(($(this).css('background-color')));

    if($(this).css('background-color') === 'rgb(128, 0, 128)'){
        $(this).css('background-color', '');
    }else {
        $(this).css('text-transform', 'uppercase').css('background-color', 'purple');
    }
})


// TODO: When the user clicks #submitBtn, log to the console the values of #first, #last, and #handleField
//  -> If any of the fields are empty, alert the user to fill the empty control (be sure to tell them which control was empty)

$(document).ready(function () {
    $('#submitBtn').click(function () {

        console.log($('#first').val());
        console.log($('#last').val());
        console.log($('#handleField').val());

        if($('#first').val() === '' || $('#last').val() === '' || $('#handleField').val() === ''){
            alert('Please completely fill out the form. Do not leave any section empty!');
        }

    });
});