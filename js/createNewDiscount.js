//events JS
$(document).ready(function () {

  //for the forms
  // change look of the select forms
  // no need to modify this
  $('select').niceSelect();

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
