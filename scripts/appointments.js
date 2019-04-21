
$(document).ready(function(){
    $('#datepicker').datepicker({
        minDate: 0,
        maxDate: '+145D',
        defaultDate: new Date()
    });

   

    $('#datepicker').val("04/21/2019");

    var availableDates = ["04/22/2019", "04/23/2019", "04/24/2019"];

    $('#datepicker').change( function() {
        var newValue = $(this).val();
        console.log(newValue);

        if(!availableDates.includes(newValue)){
            $("#error").css("display", "block");
        }
        else{
            $("#error").css("display", "none");
        }

      });



    $('#timepicker').timepicker();

    $('#timepicker').val("14:00");

    
    var availableTimes = ["18:00", "14:00"];

    $('#timepicker').change( function() {
        var newValue = $(this).val();

        if(!availableTimes.includes(newValue)){
            $("#error").css("display", "block");
        }
        else{
            $("#error").css("display", "none");
        }

      });


    $('select').selectpicker();

    $(".filter-option-inner-inner").text("REASONS");

    var pickers = $(".gj-textbox-md");

    for(var i=0; i < pickers.length; i++){
        $(pickers[i]).removeClass("gj-textbox-md");
    }

    $(".carousel-like").click(function(){
        console.log("clicked");
       
        if($(this).hasClass("not-liked")){
            $(this).attr("src", "../assets/icons/thumbs-up-hand-symbol.svg");
            $(this).removeClass("not-liked");
            $(this).addClass("liked");
        }
        else{
            $(this).attr("src", "../assets/icons/thumbs-up.svg");
            $(this).removeClass("liked");
            $(this).addClass("not-liked");
        }
    })
});
