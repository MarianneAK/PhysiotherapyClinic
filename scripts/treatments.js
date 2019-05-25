$(document).ready(function(){

    if(window.location.href.includes("?technique")){
        var technique = window.location.href.split("?technique=")[1];
   

        if(technique.includes("%20")){
            var splitted = technique.split("%20");

            technique = splitted[0]+' '+splitted[1];
        }
   
        window.find(technique);
    }
    
});