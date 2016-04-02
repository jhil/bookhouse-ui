$(".input-wrapper").click(function() {
  $(".input-box").focus();
  $(".input-box").addClass('input-box-open');
  $(this).addClass('input-wrapper-open');
});

$(".input-box").blur(function() {
  $(this).removeClass('input-box-open');
  $(".input-wrapper").removeClass('input-wrapper-open');
});
