
$(document).ready(function(){

    $('#datepicker').datepicker({
        minDate: 0,
        maxDate: '+145D',
        // defaultDate: new Date()
    });

    $('#datepicker').val("07/22/2019");
   

    $('#timepicker').timepicker();

    $('#timepicker').val("14:00");
  


    if(!window.location.href.includes("userId")){
        $('#modalLoginForm').modal({backdrop: 'static', keyboard: false}) 
        $("#modalLoginForm").modal('show');
    }else{
        $("#modalLoginForm").modal('hide');

        if(window.location.href.includes("date")){
            $("#landingPageSuccess").css("display", "block");

            var date = window.location.href.split("date=")[1].split("&")[0];
            var time = window.location.href.split("time=")[1];
            $('#datepicker').val(date);
            $('#timepicker').val(time);

   

        }
    }
    

    var selected = [];

 
    $('.alert').alert();

   

    var availableDates = ["07/22/2019", "07/23/2019", "07/24/2019"];

    $('#datepicker').change( function() {
        var newValue = $(this).val();
        // console.log(newValue);

        if(!availableDates.includes(newValue)){
            $("#error").css("display", "block");
            $("#appointmentBtn").attr("disabled", "disabled");
          
        }
        else{
            $("#error").css("display", "none");

            // if(selected.length !== 0){
                $("#appointmentBtn").removeAttr("disabled");
            // }
           
            
            //  $(".alert").alert('close');
        }

      });




    
    var availableTimes = ["18:00", "14:00"];

    $('#timepicker').change( function() {
        var newValue = $(this).val();

        if(!availableTimes.includes(newValue)){
            $("#error").css("display", "block");
            $("#appointmentBtn").attr("disabled", "disabled");
        }
        else{
            $("#error").css("display", "none");

            // if(selected.length !== 0){
                $("#appointmentBtn").removeAttr("disabled");
            // }
        }

      });


    $('select').selectpicker();

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
    });


    $('.selectpicker').change(function(){

  
        selected = [];
        var reasons = $('.selectpicker option:selected');
    
        $(reasons).each(function(index, brand){
            selected.push($(this).val());
        });
    
        // if(selected.length !== 0 && $("#error").css("display") == "none"){
        //     $("#appointmentBtn").removeAttr("disabled");
        // }
        // else{
        //     $("#appointmentBtn").attr("disabled", "disabled");
        // }
    });

    $("form").submit(function(e){
        e.preventDefault();
    });


    $("#appointmentBtn").click(function(event){

        event.preventDefault();

            $("#success").css("display", "block");
     
    });


    $("#loginBtn").click(function(){

        if($("#loginEmail").val() == "marianne_abikanaan97@hotmail.com" && $("#loginPass").val() == "123"){
            $("#modalLoginForm").modal('hide');
            window.location.href = "appointments.html?userId=1";
   
        }else{
            $("#loginError").css("display", "block");
        }
       
    });


    $(".bs-searchbox input").attr("placeholder", "Search for reasons ...");

    
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

      $("#available").click(function(){

        $("#error").css("display", "none");
        $('#datepicker').val("07/22/2019");
        $('#timepicker').val("14:00");
        $("#appointmentBtn").removeAttr("disabled");
      });
  
});


