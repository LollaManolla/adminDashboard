
$(document).ready(function () {
  //for the scrollbar
  //change browser scrollbar
  // no need to modify this

  $(".fullPageScroll").mCustomScrollbar({
    axis:"yx",
    theme:"3d-thick"
  });

  // 
  // $(".scrollPrice").mCustomScrollbar({
  //   theme:"3d-thick"
  // });


  //slide down info
  $(".enquiry-message").click(function () {
    var $wrap = $(this).parents('.b-list-enquiry__details');

    if ($wrap.find('.b-list-enquiry__full').is(':visible')) {
      $(".b-list-enquiry__full").slideUp(300);
    }
    else {
      $('.b-list-enquiry__full').slideUp(300);
      $wrap.find('.b-list-enquiry__full').stop();
      $wrap.find('.b-list-enquiry__full').slideDown(300);
    }
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
