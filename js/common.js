$(document).ready(function() {
    $(".wtf").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            $(this).children(".tooltip").fadeOut();
            $(".overlay").fadeOut();
        }
        else {
            $(this).addClass("js-active")
            $(this).children(".tooltip").fadeIn();
            $(".overlay").fadeIn();
        }
    });
    $(".overlay").click(function(){
        $(this).fadeOut();
        $(".tooltip").fadeOut();
        $(".wtf").removeClass("js-active");
    });
});