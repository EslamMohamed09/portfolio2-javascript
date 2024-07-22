(function($){
    ("use strict");

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            //Button Switch
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            //Div Switch
            document.querySelectorAll(".active").forEach((e)=>e.classList.remove("active"));
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });
    if(document.querySelector(".theme-btn")){
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
    }




  jQuery(document).ready(function ($) {
    
        (function autoChange() {

            $('.ticker-list .active').each(function () {

                if (! $(this).is(':last-child')) {

                    $(this).delay(1000).fadeOut(1000, function () {

                        $(this).removeClass('active').next().addClass('active').fadeIn();

                        autoChange();

                    });

                } else {
                    
                    $(this).delay(1000).fadeOut(1000, function(){

                        $(this).removeClass('active');

                        $('.ticker-list li').eq(0).addClass('active').fadeIn();

                        autoChange();

                    });
                }

            });

        }());

  }); 



       var TextInsideP = document.getElementById('typer').innerHTML,
            theTextLength = TextInsideP.length,
            n = 0;
            document.getElementById('typer').innerHTML = '';
            theTyper = setInterval(function(){

                $('#typer').each(function(){

                    $(this).html($(this).html() + TextInsideP[n]);

                });

                n += 1;

                if (n >= theTextLength){

                    clearInterval(theTyper);

                }

       }, 100);



})(jQuery);

