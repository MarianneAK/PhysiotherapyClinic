$(document).ready(function () {

    if (window.location.href.includes("?userId")) {


        $("#loginForm").css("display", "none");
      
    }

    $("#submitCommentBtn").click(function () {

  
            var rating = $("input[name='rating']:checked").val();

            var stars = ["../assets/icons/rating-star-empty.svg", "../assets/icons/rating-star-empty.svg",
                "../assets/icons/rating-star-empty.svg", "../assets/icons/rating-star-empty.svg", "../assets/icons/rating-star-empty.svg"
            ];

            var starsHtml = '';

            for (var i = 0; i < rating; i++) {
                stars[i] = "../assets/icons/rating-star.svg";
            }


            for (var i = 0; i < stars.length; i++) {
                starsHtml += '<img src="' + stars[i] + '" class="ratingStarFilled">';
            }

            var review = $("#review").val();

            $("#reviewsContainer").prepend(' <div class="card"><div class="card-header">' + starsHtml + '<i class="far fa-flag"></i></div> <div class="card-body"><blockquote class="blockquote mb-0"><p class="reviewText">' + review + '<footer class="blockquote-footer">marianne_abikanaan97</footer></blockquote></div></div>');
       
            $("#submitCommentBtn").attr("disabled", "disabled");
     

    });


    $("#loginBtn").click(function(){

        if($("#loginEmail").val() == "marianne_abikanaan97@hotmail.com" && $("#loginPass").val() == "123"){
            $("#modalLoginForm").modal('hide');
            var rating = $("input[name='rating']:checked").val();

            var stars = ["../assets/icons/rating-star-empty.svg", "../assets/icons/rating-star-empty.svg",
                "../assets/icons/rating-star-empty.svg", "../assets/icons/rating-star-empty.svg", "../assets/icons/rating-star-empty.svg"
            ];

            var starsHtml = '';

            for (var i = 0; i < rating; i++) {
                stars[i] = "../assets/icons/rating-star.svg";
            }


            for (var i = 0; i < stars.length; i++) {
                starsHtml += '<img src="' + stars[i] + '" class="ratingStarFilled">';
            }

            var review = $("#review").val();

            $("#reviewsContainer").prepend(' <div class="card"><div class="card-header">' + starsHtml + '<i class="far fa-flag"></i></div> <div class="card-body"><blockquote class="blockquote mb-0"><p class="reviewText">' + review + '<footer class="blockquote-footer">Richard L.</footer></blockquote></div></div>');
   
            $("#submitCommentBtn").attr("disabled", "disabled");
        }else{
            $("#loginError").css("display", "block");
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

});