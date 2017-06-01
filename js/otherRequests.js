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
    $(".scrollTop, .scrollBottom").mCustomScrollbar({
        theme:"3d-thick"
    });

});
