$(".search-wrapper").click(function() {
  $(".search-box").focus();
  $(".search-box").addClass('search-box-open');
  $(this).addClass('search-wrapper-open');
});

$(".search-box").blur(function() {
  $(this).removeClass('search-box-open');
  $(".search-wrapper").removeClass('search-wrapper-open');
});
