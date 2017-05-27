
$(document).ready(function () {

  //slide down info
  $(".product-info").click(function () {
    var $wrap = $(this).parents('.b-list-products__details');

    if ($wrap.find('.b-list-products__full').is(':visible')) {
      $(".b-list-products__full").slideUp(300);
    }
    else {
      $('.b-list-products__full').slideUp(300);
      $wrap.find('.b-list-products__full').stop();
      $wrap.find('.b-list-products__full').slideDown(300);
    }
  });



  //for the scrollbar
  //change browser scrollbar
  // no need to modify this
  $(".scrollProducts").mCustomScrollbar({
    theme:"3d-thick"
  });

  //open modal window
  $(".c-modal-open").click(function(e) {
      $('.c-modal.c-modal--form').hide();
      $('.c-modal.c-modal--form').slideDown();
  });
  $(".c-modal__btn-close").click(function() {
    $('.c-modal.c-modal--form').slideUp();
  });


  //owl slider
  // $(".owl-carousel").owlCarousel({
  //   autoPlay: 3000, //Set AutoPlay to 3 seconds
  //   items: 1,
  //   nav:true,
  //   navText:["<i class='fontelloIcon left-open-mini'>&#xe80f</i>","<i class='fontelloIcon right-open-mini'>&#xe80e;</i>"],
  //   dots: false
  // });

});

//covert link to iframe
$(function() {
  $('.product-image__thumb--video a').each(function() {
    var yt_url = this.href,
    yt_id = yt_url.split('?v=')[1],
    yt_title = $(this).text();
    // $(this).replaceWith('<div class="youtube-box" style="background-image:url(http://img.youtube.com/vi/' + yt_id + '/0.jpg);"></div>');
    // $('div.youtube-box').click(function() {
    $(this).replaceWith('<iframe allowfullscreen class="youtube-frame" src="https://www.youtube.com/embed/' + yt_id + ' "></iframe>');
    // });
  });
});
