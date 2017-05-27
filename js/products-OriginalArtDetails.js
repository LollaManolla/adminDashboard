
$(document).ready(function () {

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

});
