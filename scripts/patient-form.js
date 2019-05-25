
$(document).ready(function(){

    $("#info").alert();

    if(window.location.href.includes("success")){
        $("#success").css("display", "block");
        $("#help").css("display", "none");
    }

    $("#saveBtn").click(function(){
        window.location.href = "patient-form.html?success";
    });

    $('#datepicker').datepicker({
        minDate: 0,
        maxDate: '+145D',
        defaultDate: new Date()
    });

    $('.dropdown-toggle').dropdown();
   

    $('.dropdown-menu').on( 'click', 'a', function() {
        var text = $(this).html();
        var htmlText = text + ' <span class="caret"></span>';
        $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
    });

    $('select').selectpicker();

    var pickers = $(".gj-textbox-md");

    for(var i=0; i < pickers.length; i++){
        $(pickers[i]).removeClass("gj-textbox-md");
    }

    if(window.location.href.includes("?first-visit")){
        $('#first').alert();
    }else{
        $("#first").alert('close');
    }

    $(".bs-searchbox input").attr("placeholder", "Search for reasons ...");
});
