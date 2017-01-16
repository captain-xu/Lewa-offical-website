
$ = require('jquery');
require('swiper');



$(window).scroll(function() {
  	var scroll_top = $(document).scrollTop();
  	if (scroll_top >= 800) {
  		$("#to-top").fadeIn(300);
  	} else {
  		$("#to-top").fadeOut(300);
  	}
});
$("#to-top").on('click', function() {
	var speed = 200;
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});