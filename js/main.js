$(document).ready(function() {

});
	$(window).scroll(function() {
	  	var scroll_top = $(document).scrollTop();
	  	if (scroll_top >= 800) {
	  		$("#to-top").fadeIn(300);
	  	} else {
	  		$("#to-top").fadeOut(300);
	  	}
	});
    $("#to-top").on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 200);
        return false;
    });