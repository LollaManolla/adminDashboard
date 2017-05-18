//events JS
$(document).ready(function () {


    //toggle events
$(".b-list-events__preview").click(function () {
    if ($('.b-list-events__full').is(':visible')) {
        $(".b-list-events__full").slideUp(300);
        $(".show-more").html('&#xe803;');
    }
    if ($(this).next(".b-list-events__full").is(':visible')) {
        $(this).next(".b-list-events__full").slideUp(300);
        $(this).children(".show-more").html('&#xe803;');
    } else {
        $(this).next(".b-list-events__full").slideDown(300);
        $(this).children(".show-more").html('&#xe810;');
    }
});


    //for the forms
    // change look of the select forms
    // no need to modify this
      $('select').niceSelect();
      //for the scrollbar
      //change browser scrollbar
      // no need to modify this
      $(".scrollEvents").mCustomScrollbar({
        theme:"3d-thick"
      });
});

//initiate UI calendar
  var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
