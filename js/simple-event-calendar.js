$.fn.simpleEventCalendar = function(args) {
  'use strict';
  var df = {
    'monthLabels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'dayLabels': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'prevLabel': '&#xe80f;',
    'nextLabel': '&#xe80e;',
    'events': []
  };

  args = $.extend(df, args);

  var endDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var currentDate = new Date();

  function Calendar(month, year) {
    this.month = (isNaN(month) || month === null) ? currentDate.getMonth() : month;
    this.year = (isNaN(year) || year === null) ? currentDate.getFullYear() : year;
    this.html = '';
  }

  Calendar.prototype.generateHTML = function() {
    if (args.monthLabels[this.month] === undefined || args.monthLabels[this.month] === null) {
      this.month = 11;
    }
    // console.log(this.month);
    var html = '';

    // first row month
    html += '<div class="calendar-month">' +
      '<a class="fontelloIcon left-open-mini prev" href="#">' + args.prevLabel + '</a>' +
      '<a class="fontelloIcon right-open-mini next" href="#">' + args.nextLabel + '</a>' +
      '<span class="month-label">' + args.monthLabels[this.month] + ' ' + this.year + '</span>' +
      '</div>';

    // open table
    html += '<table class="calendar-tb">';

    // week day
    html += '<tr class="week">';
    args.dayLabels.forEach(function(value, index) {
      html += '<th class="week-cell">' + value + '</th>';
    });
    html += '</tr>';

    // days
    var firstDay = new Date(this.year, this.month, 1);

    var start = -(firstDay.getDay());
    var maxrows = Math.ceil(endDates[this.month] / 7);
    var end = maxrows * 8 - firstDay.getDay();

    html += '<tr>';
    var i = start;
    var count = 0;
    while (i < end) {
      i++;
      count++;
      var classes = '';
      var content = '';
      var date = new Date(this.year, this.month, i);
      var dateTwo = new Date();
      classes += ' date-' + (date.getMonth() + 1) + date.getDate();

      if (i <= 0 || i > endDates[this.month]) {
        content = '<span class="date"><span>';
      } else {
        if (i == (currentDate.getDate()) && date.getMonth() === dateTwo.getMonth()) {
          classes += ' today';
        }
        content = '<a href="javascript:;" title=""><span class="date">' + i + '<span class="fontelloIcon circle">&#xf111;</span>' + '<span></a>';
      }

      html += '<td class="' + classes.trim() + '">' + content + '</td>';
      if (count >= 7) {
        html += '</tr><tr>';
        count = 0;
      }
    }
    html += '</tr>'; // close row

    // close table
    html += '</table>';

    this.html = '<div class="simple-event-calendar">' + html + '</div>';

    return this.html;
  };

  Calendar.prototype.prevMonth = function() {
    console.log(this.month);
    if (this.month === 0) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
  };
  Calendar.prototype.nextMonth = function() {
    console.log(this.month);
    if (this.month >= 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
  };

  return this.each(function() {
    var cal = new Calendar();
    var $this = $(this);

    // utilities functions
    var refreshHtml = function(html) {
      $this.html(html);
      applyEvents();
    };

    var applyEvents = function() {

      var eventsHtml = '';
      args.events.forEach(function(event, index) {
        var date = new Date(event.date);
        $this.find('.date-' + (date.getMonth() + 1) + date.getDate()).addClass('has-event');
        $this.find('.date-' + (date.getMonth() + 1) + date.getDate()).children('a').attr({
          'href': 'events.php?dt=' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
          'title': event.desc
        });
        eventsHtml += '<div class="event-item">' + event.desc + '</div>';
      });

      $this.append('<div class="events-list">' + eventsHtml + '</div>');
    };

    refreshHtml(cal.generateHTML());
    $(this).on('click', '.prev', function(event) {
      event.preventDefault();
      cal.prevMonth();
      refreshHtml(cal.generateHTML());
    });
    $(this).on('click', '.next', function(event) {
      event.preventDefault();
      cal.nextMonth();
      refreshHtml(cal.generateHTML());
    });
  });
};
