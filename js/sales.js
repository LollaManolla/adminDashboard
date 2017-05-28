$(document).ready(function() {
  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".fullPageScroll").mCustomScrollbar({
    axis:"yx",
    theme:"3d-thick"
  });

  //for the forms
  // change look of the select forms
  // no need to modify this
    $('select').niceSelect();

//show modal receipt
$(".c-modal-receipt").click(function(e) {
    $('.c-modal.c-modal--receipt').hide();
    $('.c-modal.c-modal--receipt').slideDown();
});
$(".c-modal__btn-close").click(function() {
  $('.c-modal.c-modal--receipt').slideUp();
});


});

//initiate calendar, clicking on icon
$( function() {
  $( ".datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "./_common/images/calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
  });
} );
