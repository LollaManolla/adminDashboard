
$(document).ready(function () {

  //slide down info
  $(".product-info").click(function () {
    var $wrap = $(this).parents('.b-list-products__details');

    if ($wrap.find('.b-list-products__full').is(':visible')) {
      $(".b-list-products__full").slideUp(300);
    }
    else {
      $('.b-list-products__full').slideUp(300);
      $wrap.find('.b-list-products__full').stop();
      $wrap.find('.b-list-products__full').slideDown(300);
    }
  });



  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".scrollProducts").mCustomScrollbar({
    theme:"3d-thick"
  });

  //open modal window
  $(".c-modal-open").click(function(e) {
      $('.c-modal.c-modal--form').hide();
      $('.c-modal.c-modal--form').slideDown();
  });
  $(".c-modal__btn-close").click(function() {
    $('.c-modal.c-modal--form').slideUp();
  });

  //for the forms
  // change look of the select forms
  // no need to modify this
    $('select').niceSelect();

});
