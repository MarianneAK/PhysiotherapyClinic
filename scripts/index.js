$(document).ready(function() {


    if(window.location.href.includes("?userId")){
        $("#loginNav").css("display", "none");
        $("#signupNav").css("display", "none");
        $("#myAccountNav").css("display", "block");

        $("#bookContainer").css("display", "block");
        $("#signUpContainer").css("display", "none");

        $('#datepicker').datepicker({
            minDate: 0,
            maxDate: '+145D',
            // defaultDate: new Date()
        });
    
        $('.alert').alert();
    
        $('#datepicker').val("07/22/2019");
    
        var availableDates = ["07/22/2019", "07/23/2019", "07/24/2019"];
    
        $('#datepicker').change( function() {
            var newValue = $(this).val();
            // console.log(newValue);
    
            if(!availableDates.includes(newValue)){
                $("#error").css("display", "block");
                $("#bookBtn").attr("disabled", "disabled");
              
            }
            else{
                $("#error").css("display", "none");
                    $("#bookBtn").removeAttr("disabled");


            }
    
          });
    
    
    
        $('#timepicker').timepicker();
    
        $('#timepicker').val("14:00");
    
        
        var availableTimes = ["18:00", "14:00"];
    
        $('#timepicker').change( function() {
            var newValue = $(this).val();
    
            if(!availableTimes.includes(newValue)){
                $("#error").css("display", "block");
                $("#bookBtn").attr("disabled", "disabled");
            }
            else{
                $("#error").css("display", "none");
    
                    $("#bookBtn").removeAttr("disabled");
   
            }
    
          });
    

          $("#bookBtn").click(function(event){

            event.preventDefault();
    
              window.location.href="appointments.html?userId=1&date="+$("#datepicker").val()+"&time="+$("#timepicker").val();
         
        });
    

    }

    var video = document.getElementById("video");
    video.muted = true;

    var videoHeight = $("#videoContainer").height();


    $(window).scroll(function() {
        if($(window).scrollTop() > videoHeight - 400) {
            $('nav').css("background-color", "#1B7BBA");
            
        }else{
            $('nav').css("background", "0 0");
        }
    });


    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });


      $("#loginBtn").click(function(){

        if($("#loginEmail").val() == "marianne_abikanaan97@hotmail.com" && $("#loginPass").val() == "123"){
            $("#modalLoginForm").modal('hide');
            window.location.href = "index.html?userId=1";
   
        }else{
            $("#loginError").css("display", "block");
        }
       
    });

    $(".flip-card").click(function(){
      window.location.href = "techniques.html?technique="+$(this).attr("technique");
    });

    $("#signUpBtn").click(function(event){

      if($("#email").val() === '' || $("#lastName").val() === '' || $("#firstName").val() === '' ||$("#passwordSignUp").val() === ''){
        event.preventDefault();
        $("#errorFields").css("display", "block");
      }

      else{
        $("#errorFields").css("display", "none");

        if($("#email").val() == "taken@gmail.com"){
            $("#signupError").css("display", "block");
          
            event.preventDefault();
        }
        else{
        
            window.location.href="patient-form.html?first-visit";
        }
         
      }


    });
});


function controlVideo(){
    // Get the video
    var video = document.getElementById("video");

    // Get the button
    var btn = document.getElementById("videoBtn");

    if (video.paused) {

      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  

}