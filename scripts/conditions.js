

$(document).ready(function(){

    if(window.location.href.includes("?part")){
        $("#main").css("display", "none");

        var bodyPart = window.location.href.split("?part=")[1];
        $(".list").each(function(){

            if($(this).attr("id") === bodyPart){
                $(this).css("display", "block");
            }
            else{
                $(this).css("display", "none");
            }
        });

    }
    $('[data-toggle="popover"]').popover();

$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});


$(".bodyPart").click(function(){

    $("#main").css("display", "none");
    var bodyPart = $(this).attr("body-part");

    $(".list").each(function(){

        if($(this).attr("id") === bodyPart){
            $(this).css("display", "block");
        }
        else{
            $(this).css("display", "none");
        }
    });

});
});

