"use strict";

$('button').click(function() {
    var contents = $("input").val();
    $("#post-container").text(contents);
});

$("#post-container").css("font-size", "50px");
$("#post-container").css("font-family", "Monaco");
$("#post-container").css("font-weight", "bold");