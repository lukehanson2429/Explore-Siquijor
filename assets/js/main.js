$(".btn-custom-ed").mouseenter(function() {
        $("#top-bg-eat").css("color", "rgba(240, 117, 24, 1)");
   });

$(".btn-custom-ed").mouseleave(function() {
        $("#top-bg-eat").css("color", "white");
   });

$(".btn-custom-attr").mouseenter(function() {
        $("#top-bg-attr").css("color", "rgba(171, 72, 196, 1)");
   });

$(".btn-custom-attr").mouseleave(function() {
        $("#top-bg-attr").css("color", "white");
   });

$(".btn-custom-hos").mouseenter(function() {
        $("#top-bg-hos").css("color", "rgba(21, 209, 177, 1)");
   });

$(".btn-custom-hos").mouseleave(function() {
        $("#top-bg-hos").css("color", "white");
   });

$(".btn-toptip").click(function() {
  $("#tp-Content").toggle(3000);
});
