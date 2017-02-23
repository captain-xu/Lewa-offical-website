
//防抖动
function debounce(fn) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, 200);
  }
};

function windowScroll() {
    var scroll_top = $(document).scrollTop();
    if (scroll_top >= 300) {
      $("#to-top").fadeIn(300);
      $(".header").addClass('active');
    } else {
      $("#to-top").fadeOut(300);
      $(".header").removeClass('active');
    }
};

$(window).on("scroll", debounce(windowScroll));

$("#to-top").on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 200);
    return false;
});