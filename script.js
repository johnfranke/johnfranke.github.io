$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-section").offset().top
    }, 1000);
});
$("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-section").offset().top
    }, 1000);
});
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 3000);
});
