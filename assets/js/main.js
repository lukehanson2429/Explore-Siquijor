$(".btn-toptip").click(function() {
  $("#tp-Content-2").toggle(3000);
});

$(".btn-toptip").click(function() {
  $("#tp-Content-1").toggle(3000);
});

var myContainer = $('.scroll-container')

$(myContainer).on('click', '.btn-scroll', function () {
    var scrollTo = $('#scroll-bottom');
    myContainer.animate({
        scrollTop: scrollTo.offset().top - myContainer.offset().top + myContainer.scrollTop()
    }, 20000);
});