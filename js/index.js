//code for sticky sidebars
$(document).ready(function() {
  var $window = $(window);
  var $sidebar1 = $("#description-section");
  var $sidebar2 = $("#order-section");
  var $sidebarHeight = $sidebar1.innerHeight();
  var $footerOffsetTop = $(".secondary").offset().top;
  var $sidebarOffset = $sidebar1.offset();

  $window.scroll(function() {
    if($window.scrollTop() > $sidebarOffset.top) {
      $sidebar1.addClass("fixed");
      $sidebar2.addClass("fixed");
    } else {
      $sidebar1.removeClass("fixed");
      $sidebar2.removeClass("fixed");
    }
    if($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
      $sidebar1.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});
      $sidebar2.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});

    } else {
      $sidebar1.css({"top": "0",});
      $sidebar2.css({"top": "0",});

    }
  });
});
