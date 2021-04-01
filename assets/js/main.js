var topPicksScroll = $('.scroll-container')


// Used from tutorial and adjusted to suit my project- https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hideNav").style.top = "0";
  } else {
    document.getElementById("hideNav").style.top = "-82px";
  }
  prevScrollpos = currentScrollPos;
}

$(".btn-custom").click(function() {
    $('html, body').animate({
        scrollTop: $("#map-section").offset().top
    }, 2000);
});

$(".btn-toptip").click(function() {
  $("#tp-Content-2").toggle(3000);
});

$(".btn-toptip").click(function() {
  $("#tp-Content-1").toggle(3000);
});

$(".btn-scroll").click(function() {
  $(".tp-hidden").show(2000);
});

$(".btn-scroll").click(function() {
  $(".btn-scroll").hide(2000);
});

$(topPicksScroll).on('click', '.btn-scroll', function () {
    var scrollTo = $(this);
    topPicksScroll.animate({
        scrollTop: scrollTo.offset().top - topPicksScroll.offset().top + topPicksScroll.scrollTop()
    }, 2000);
});