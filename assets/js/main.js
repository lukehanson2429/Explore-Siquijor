var myContainer = $('.scroll-container')

$(".btn-toptip").click(function() {
  $("#tp-Content-2").toggle(3000);
});

$(".btn-toptip").click(function() {
  $("#tp-Content-1").toggle(3000);
});

$(".btn-scroll").click(function() {
  $(".tp-hidden").show(5000);
});

$(".btn-scroll").click(function() {
  $(".btn-scroll").hide(5000);
});

$(myContainer).on('click', '.btn-scroll', function () {
    var scrollTo = $('.scroll-next');
    myContainer.animate({
        scrollTop: scrollTo.offset().top - myContainer.offset().top + myContainer.scrollTop()
    }, 5000);
});