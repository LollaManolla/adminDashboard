$(document).ready(function() {

  // simulate click on input file
  $('.add-img').click(function() {
    $('#profile-input').trigger('click');
  });
  // input file on chage
  $('#profile-input').change(function() {
    showMyProfile(this);
  });

});

var showMyProfile = function(fileInput) {
  if (fileInput.files && fileInput.files[0]) {

    // get size
    var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
    // get extension
    var imgExtSplit = fileInput.files[0].type.split("/");
    var imgExt = imgExtSplit[1];
    if (imgExt === 'jpeg') {
      imgExt = 'jpg';
    }
    // check size
    if (imgSize > 5) {
      alert('Maximum image size is 5MB :P');
      $('#' + fileInput.id).val('');
      return false;
    }
    // check extension
    if (imgExt !== 'jpg' && imgExt !== 'png' && imgExt !== 'gif') {
      alert('Use only JPG, PNG or GIF :P');
      $('#' + fileInput.id).val('');
      return false;
    }

    // reader on load
    var reader = new FileReader();
    reader.onload = function(e) {

      // get orientation
      binImg = e.target.result;
      input = document.getElementById('profile-input');

      // call get orientation function
      getOrientation(input.files[0], function(orientation) {

        if ([5, 6, 7, 8].indexOf(orientation) > -1) {
          $('#profile-rotator').attr('src', binImg);
          var tm = setInterval(function() {
            if ($('#profile-rotator').attr('src') !== '') {
              var c = document.getElementById("profile-photo-slice");
              c.width = $('#profile-rotator').height();
              c.height = $('#profile-rotator').width();
              var ctx = c.getContext("2d");
              ctx.transform(0, 1, -1, 0, $('#profile-rotator').height(), 0);
              ctx.drawImage(document.getElementById('profile-rotator'), 0, 0);
              urlRot = c.toDataURL();
              // set Base64 string in src profile image if rotated
              $('#profile-img').css("background-image", "url(" + urlRot + ")");
              clearInterval(tm);
            }
          }, 100);

        } else {
          // set Base64 string in src profile image ifnot rotated
          $('#profile-img').css("background-image", "url(" + binImg + ")");
        }
      });

    };
    reader.readAsDataURL(fileInput.files[0]);
  }
};

// get image orientation
var getOrientation = function(file, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {

    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength,
      offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      } else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
};
