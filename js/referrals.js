$(document).ready(function() {
  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".fullPageScroll").mCustomScrollbar({
    axis:"yx",
    theme:"3d-thick"
  });

  $(".scrollMails").mCustomScrollbar({
    theme:"3d-thick"
  });

//open gmail list form
  $(".b-gmail__icon").click(function() {
      $('.c-modal').slideDown('300');
  });
  $(".b-gmail-popup__btn-close").click(function() {
    $('.c-modal').slideUp('300');
  });

//open reedem
  $( ".reedem-btn" ).click(function() {
  $( ".reedem-show" ).slideToggle( '300' );
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
