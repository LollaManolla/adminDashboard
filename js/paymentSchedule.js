$(document).ready(function() {
  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".fullPageScroll").mCustomScrollbar({
    axis:"yx",
    theme:"3d-thick"
  });


    //show modal receipt
    $(".c-modal-user").click(function(e) {
        $('.c-modal.c-modal--user').hide();
        $('.c-modal.c-modal--user').slideDown();
    });
    $(".c-modal__btn-close").click(function() {
      $('.c-modal.c-modal--user').slideUp();
    });



});
