$(document).ready(function() {

  //show hover notification
  $( ".add, .decline" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

  //nice scroll
  $(".scrollThis").mCustomScrollbar({
    theme:"3d-thick"
  });

});
