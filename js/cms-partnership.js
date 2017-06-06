$(document).ready(function() {
  addPartner();
});

/* add element */
var addPartner = function() {
  $('.clickThis').click(function() {
    $('.slideDetails:first').clone().insertAfter('.slideDetails:last').slideDown('300');
  });
};

/* delete element */
var delPartner = function(ele) {
  $(ele).parent().slideUp("300", function() {
    $(ele).parent().remove();
  });
};
