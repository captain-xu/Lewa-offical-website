
$(document).ready(function() {
    $('body').on('click', function(event) {
      event.stopPropagation();
      var target = $(event.target);
      if ( $(window).width() <= 760) {
        if(target.closest("#menu").length === 0){
          $(".header-nav").removeClass('active');
        }
      }
    });

  $("#menu").on('click', function() {
    $(this).next().toggleClass('active');
  });

  $(window).on("scroll", debounce(windowScroll));

  $("#to-top").on('click', function() {
      $('body,html').animate({ scrollTop: 0 }, 200);
      return false;
  });
});

//防抖动
function debounce(fn) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, 100);
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
