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

//code for custom dropdown
//TOGGLING NESTED ul
$(".drop-down .selected a").click(function() {
    $(".drop-down .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function() {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").hide();
});


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("drop-down"))
        $(".drop-down .options ul").hide();
});

//code for custom counter
$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });

  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});
