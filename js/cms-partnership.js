$(document).ready(function () {
  //show details
  $(".clickThis").click(function(){
    $(".slideDetails").slideToggle();
    $('.icon').toggleClass( "icon-minus", 'icon-plus' );
    if ($('icon').hasClass("icon-plus")) {
      $('.icon').removeClass('icon-plus');
    } else {

      $('.icon').hasClass('icon-minus');
      $('icon').removeClass('icon-minus');
    }
  });
});
