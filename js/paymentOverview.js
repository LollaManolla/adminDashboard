$(document).ready(function(){

    //toggle quarters
    $('.quarter-toggle, .graph-toggle').on('change',function() {
        var target = $(this).data('target');
        var show = $("option:selected", this).data('show');
        $(target).children().addClass('hide');
        $(show).removeClass('hide');
    });

    $('.quarter-toggle, .graph-toggle ').trigger('change');

    //for the forms
    // change look of the select forms
    // no need to modify this
    $('select').niceSelect();

    //nice scroll
    $(".scrollPayment").mCustomScrollbar({
        theme:"3d-thick"
    });

});

//chart sales report
new Chartist.Bar('.ct-sales-report', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
        [120000, 110000, 100000, 9000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000],
        [120000, 110000, 100000, 9000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]
    ]
}, {
    stackBars: true,
    axisX: {
        showGrid: false
    },
    height: 499,
    width:1038,
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
