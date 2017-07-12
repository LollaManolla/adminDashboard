$(document).ready(function() {
  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".fullPageScroll").mCustomScrollbar({
    axis: "yx",
    theme: "3d-thick"
  });

  //for the forms
  // change look of the select forms
  // no need to modify this
  $('select').niceSelect();


  //show modal receipt
  // $(".c-modal-receipt").click(function(e) {
  //   $('.c-modal.c-modal--receipt').hide();
  //   $('.c-modal.c-modal--receipt').slideDown();
  // });
  // $(".c-modal__btn-close").click(function() {
  //   $('.c-modal.c-modal--receipt').slideUp();
  // });


  //show modal receipt// this is second modal
  // $(".c-modal-receipt-sum").click(function(e) {
  //     $('.c-modal.c-modal--receipt-sum').hide();
  //     $('.c-modal.c-modal--receipt-sum').slideDown();
  // });
  // $(".c-modal__btn-close").click(function() {
  //   $('.c-modal.c-modal--receipt-sum').slideUp();
  // });


});

//initiate calendar, clicking on icon
$(function() {
  $(".datepicker").datepicker({
    showOn: "button",
    buttonImage: "./_common/images/calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
  });
});

var changeColor = function(ele) {
  var val = $(ele).val();
  switch (val) {
    case 'processing':
      $(ele).next().children('span').removeClass('sale-order__received');
      $(ele).next().children('span').removeClass('sale-order__delivered');
      $(ele).next().children('span').addClass('sale-order__processing');
      break;
    case 'received':
      $(ele).next().children('span').removeClass('sale-order__processing');
      $(ele).next().children('span').removeClass('sale-order__delivered');
      $(ele).next().children('span').addClass('sale-order__received');
      break;
    case 'delivered':
      $(ele).next().children('span').removeClass('sale-order__processing');
      $(ele).next().children('span').removeClass('sale-order__received');
      $(ele).next().children('span').addClass('sale-order__delivered');
      break;
  }
};
