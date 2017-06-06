
$(document).ready(function () {

  //slide down info
  $(".edit-post").click(function () {
    var $wrap = $(this).parents('.b-list-blog__details');

    if ($wrap.find('.b-list-blog__full').is(':visible')) {
      $(".b-list-blog__full").slideUp(300);
    }
    else {
      $('.b-list-blog__full').slideUp(300);
      $wrap.find('.b-list-blog__full').stop();
      $wrap.find('.b-list-blog__full').slideDown(300);
    }
  });



  //for the forms
  // change look of the select forms
  // no need to modify this
  $('select').niceSelect();

  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".scrollBlogList").mCustomScrollbar({
    theme:"3d-thick"
  });


});
