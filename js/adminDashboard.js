$(document).ready(function() {
  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".fullPageScroll").mCustomScrollbar({
    axis:"yx",
    theme:"3d-thick"
  });

  $(".scrollAdmins").mCustomScrollbar({
    theme:"3d-thick"
  });
  //for the forms
  // change look of the select forms
  // no need to modify this
    $('select').niceSelect();
    //call calendarfunction
    simpleEvent();
});



//functions to call and set charts
// please reffer to https://gionkunz.github.io/chartist-js/ for more info

//chart orders
new Chartist.Line('.ct-orders', {
  labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  series: [
    [70, 60, 50, 40, 30, 20, 10, 0],
    [75, 65, 55, 45, 35, 25, 15, 5]
  ]
}, {
  height: 320,
  width: 710,
  showPoint: false,
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2
  }),
  fullWidth: true,
  low: 0
});


//chart sales report
new Chartist.Bar('.ct-sales-report', {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [120000, 110000, 100000, 9000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000],
    [120000, 110000, 100000, 9000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]
  ]
}, {
  stackBars: false,
  axisX: {
    showGrid: false
  },
  height: 499,
  width:1094,
  axisY: {
    onlyInteger: true,
    offset: 45,
    labelInterpolationFnc: function(value) {
      return (value / 250);
    }
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 35px'
    });
  }
});



//chart profile
var data = {
  series:  [100, 50, 0]
};
var sum = function(a, b) {
  return a + b;
};
new Chartist.Pie('.ct-profile', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  },
  donut: true,
  donutWidth: 9,
  donutSolid: true,
  startAngle: 0,
  showLabel: true,
   labelOffset: 45,
 width:340,
 height: 205
  });

//chart products
  var data2 = {
    series:  [100, 50, 0]
  };
  var sum = function(a, b) {
    return a + b;
  };
  new Chartist.Pie('.ct-products', data2, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data2.series.reduce(sum) * 100) + '%';
    },
    donut: true,
    donutWidth: 9,
    donutSolid: true,
    startAngle: 0,
    showLabel: true,
     labelOffset: 45,
   width:340,
   height: 205
    });

//chart visits
    new Chartist.Line('.ct-visits', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      series: [
        [100, 300, 30, 421, 555, 60, 72, 800, 98, 101, 500, 120],
      ]
    }, {
      showArea: true,
      showLine: true,
      showPoint: true,
      height: 353,
      width: 1044,
      axisX: {
        showLabel: true,
        showGrid: false
      }
    });

//charts end
//////

//function to call calendar
// geel free to change how ever you want
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
