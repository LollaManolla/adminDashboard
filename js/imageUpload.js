$(document).ready(function() {


  var fileInput = $("#img-input")[0];
  var blogList = $(".blog-input")[0];
  var cmsPress = $(".cms-press-input")[0];
  var cmsPressLogo = $(".cms-press-logo-input")[0];
  // var cmsEvents = $(".cms-events-input")[0];

  // input file on chage
  $('#img-input').change(function(event) {
    var file = event.target.files[0];
    readURL(fileInput, 'prev-img');
  });

  $('.blog-input').change(function(event) {
    var file = event.target.files[0];
    readURL(blogList, 'blog-prev-img');
  });

  $('.cms-press-input').change(function(event) {
    var file = event.target.files[0];
    readURL(cmsPress, 'cms-press-prev-img');
  });

  $('.cms-press-logo-input').change(function(event) {
    var file = event.target.files[0];
    readURL(cmsPressLogo, 'cms-press-logo-prev-img');
  });

  // $('.cms-events-input').change(function() {
  //   var file = event.target.files[0];
  //   readURL(cmsEvents, 'cms-event-prev-img');
  // });

});

var getOrientation = function(file, callback) {
  var reader = new FileReader();

  reader.onload = function(event) {
    var view = new DataView(event.target.result);

    if (view.getUint16(0, false) != 0xFFD8)
      return callback(-2);

    var length = view.byteLength,
      offset = 2;

    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;

      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) {
          return callback(-1);
        }
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;

        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      } else if ((marker & 0xFF00) != 0xFF00)
        break;
      else
        offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };

  reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
};

var resetOrientation = function(srcBase64, srcOrientation, callback) {
  var img = new Image();

  img.onload = function() {
    var width = img.width,
      height = img.height,
      canvas = document.getElementById('canvas'),
      ctx = canvas.getContext("2d");

    // set proper canvas dimensions before transform & export
    if ([5, 6, 7, 8].indexOf(srcOrientation) > -1) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }

    // transform context before drawing image
    switch (srcOrientation) {
      case 2:
        ctx.transform(-1, 0, 0, 1, width, 0);
        break;
      case 3:
        ctx.transform(-1, 0, 0, -1, width, height);
        break;
      case 4:
        ctx.transform(1, 0, 0, -1, 0, height);
        break;
      case 5:
        ctx.transform(0, 1, 1, 0, 0, 0);
        break;
      case 6:
        ctx.transform(0, 1, -1, 0, height, 0);
        break;
      case 7:
        ctx.transform(0, -1, -1, 0, height, width);
        break;
      case 8:
        ctx.transform(0, -1, 1, 0, 0, width);
        break;
      default:
        ctx.transform(1, 0, 0, 1, 0, 0);
    }

    // draw image
    ctx.drawImage(img, 0, 0);

    // export base64
    callback(canvas.toDataURL());
  };

  img.src = srcBase64;
};

var readURL = function(input, ele) {
  if (input.files && input.files[0]) {
    /* get size */
    var imgSize = Math.round((input.files[0].size / 1024) / 1024);
    // get extension
    var imgExtSplit = input.files[0].type.split("/");
    var imgExt = imgExtSplit[1];
    if (imgExt === 'jpeg') {
      imgExt = 'jpg';
    }
    /* check size */
    if (imgSize > 1) {
      alert('SIZE!!!');
      $('#' + input.id).val('');
      return false;
    }
    /* check extension */
    if (imgExt !== 'jpg' && imgExt !== 'png') {
      alert('EXTENSION!!!');
      $('#' + input.id).val('');
      return false;
    }

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("worker").src = e.target.result;
      getOrientation(input.files[0], function(orientation) {
        if (orientation === 5 || orientation === 6 || orientation === 7 || orientation === 8) {
          resetOrientation(document.getElementById("worker").src, orientation, function(resetBase64Image) {
            $('#' + ele).css("background-image", "url(" + resetBase64Image + ")");
            document.getElementById("worker").src = '';
          });
        } else {
          $('#' + ele).css("background-image", "url(" + e.target.result + ")");
          document.getElementById("worker").src = '';
        }
      });
    };

    reader.readAsDataURL(input.files[0]);
  }
};
