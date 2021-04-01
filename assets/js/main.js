var topPicksScroll = $('.scroll-container')

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

$(".btn-custom").click(function() {
    $('html, body').animate({
        scrollTop: $("#map-section").offset().top
    }, 2000);
});

$(topPicksScroll).on('click', '.btn-scroll', function () {
    var scrollTo = $(this);
    topPicksScroll.animate({
        scrollTop: scrollTo.offset().top - topPicksScroll.offset().top + topPicksScroll.scrollTop()
    }, 2000);
});