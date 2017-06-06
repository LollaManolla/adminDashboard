$(document).ready(function() {
    $('.b-menu__submenu').hide();    //hide all nested ul's
    $('.b-sidebar .b-menu li:has(ul) > a').click(function() { //when click on only on those with submenu
        if ($('.b-menu__submenu').is(':visible')) { // if submenu visible
            $(".b-menu__submenu").slideUp(300); // slideit up
        }
        if ($(this).next(".b-menu__submenu").is(':visible')) {
            $(this).next(".b-menu__submenu").slideUp(300);
            $(this).children('.b-menu li a .right-open-mini').html('&#xe80e;');
        } else {
            $(this).next(".b-menu__submenu").slideDown(300);
            $(this).children('.b-menu li a .right-open-mini').html('&#xe803;');
        }
        return false;
    });
});
