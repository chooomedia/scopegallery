$(document).ready(function() {
var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var up = false;
    var newscroll;
    mywindow.scroll(function () {
        newscroll = mywindow.scrollTop();
        if (newscroll > mypos && !up) {
            $('.panel-rounded, .panel-navbar').stop().slideToggle('fast');
            up = !up;
            console.log(up);
        } else if(newscroll < mypos && up) {
            $('.panel-rounded, .panel-navbar').stop().slideToggle('fast');
            up = !up;
        }
        mypos = newscroll;
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
