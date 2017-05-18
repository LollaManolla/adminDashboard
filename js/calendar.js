//calendar JS
// initiate calendar
$(document).ready(function() {
    simpleEvent();
});

//function to call calendar
//feel free to change how ever you want
var simpleEvent = function() {
  'use strict';
	$('.b-calendar').simpleEventCalendar({events: [
    //enter the data here

		{
			'date': '2017-05-03',
			'desc': 'Lorem ipsum dolor sit amet.'
		},
		{
			'date': '2017-05-12',
			'desc': 'Lorem ipsum dolor sit amet.'
		}
		],
	});
};
