$(document).ready(function() {
    $('.clickThis').click(function() {
      $('.addCategory').slideDown('300');
    });

    $('.c-btn-secondary').click(function() {
      $('.addCategory').slideUp('300');
    });



  // $(".scrollCategories").mCustomScrollbar({
  //   theme:"3d-thick"
  // });

  //slide down info
  $(".edit-post").click(function () {
    var $wrap = $(this).parents('.b-list-categories__details');

    if ($wrap.find('.b-list-categories__full').is(':visible')) {
      $(".b-list-categories__full").slideUp(300);
    }
    else {
      $('.b-list-categories__full').slideUp(300);
      $wrap.find('.b-list-categories__full').stop();
      $wrap.find('.b-list-categories__full').slideDown(300);
    }
    $('.b-list-categories__full .c-btn-secondary').click(function() {
      $('.b-list-categories__full').slideUp('300');
    });
  });

});
