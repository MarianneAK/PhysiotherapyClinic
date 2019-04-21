$(document).ready(function() {

    var videoHeight = $("#videoContainer").height();


    $(window).scroll(function() {
        if($(window).scrollTop() > videoHeight - 400) {
            $('nav').css("background-color", "#116089");
            
        }else{
            $('nav').css("background", "0 0");
        }
    });
});