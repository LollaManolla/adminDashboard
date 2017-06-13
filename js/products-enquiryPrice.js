
$(document).ready(function () {




  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".scrollPrice").mCustomScrollbar({
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


});
