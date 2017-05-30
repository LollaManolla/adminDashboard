$(document).ready(function () {

  //open modal window
  $(".c-modal-open").click(function(e) {
    $('.c-modal.c-modal--form').hide();
    $('.c-modal.c-modal--form').slideDown();
  });
  $(".c-modal__btn-close").click(function() {
    $('.c-modal.c-modal--form').slideUp();
  });

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
