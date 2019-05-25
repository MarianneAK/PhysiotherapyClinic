$(document).ready(function(){

    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });


      $(".alert").alert();


      $("#signUpBtn").click(function(event){
         
        
        if($("#email").val() === '' || $("#lastName").val() === '' || $("#firstName").val() === '' ||$("#passwordSignUp").val() === ''){
            event.preventDefault();
            $("#errorFields").css("display", "block");
          }

          else{
            $("#errorFields").css("display", "none");

            if($("#email").val() == "taken@gmail.com"){
                $("#error").css("display", "block");
              
                event.preventDefault();
            }
            else{
            
                window.location.href="patient-form.html?first-visit";
            }
             
          }

      })
});