$(document).ready(function () {
    $('.alert').alert();

    if(window.location.href.includes("success")){
        $('#success').css("display", "block");
    }

    $("#sendBtn").click(function (event) {

        if ($("#message").text() !== '' && $("#phone").text() !== '' && $("#email").text() !== '' && $("#name").text() !== '') {
         
        } 

    });
});