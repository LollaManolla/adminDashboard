$(document).ready(function () {
//open modal for flip book
  $(".c-modal-book").click(function(e) {
      $('.c-modal.c-modal--book').hide();
      $('.c-modal.c-modal--book').slideDown();
  });
  $(".c-modal__btn-close").click(function() {
    $('.c-modal.c-modal--book').slideUp();
  });

  $(".flipbook").turn({
    width: 800,
    height: 566
  });
});
