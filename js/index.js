//CODE FOR STICKY SIDEBARS
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

//CODE FOR CUSTOM DROPDOWN
$(".drop-down .selected a").click(function() {
    $(".drop-down .options ul").toggle();
});

//select options/hide after
$(".drop-down .options ul li a").click(function() {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").hide();
});


//hide options if clicked anywhere on page
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("drop-down"))
        $(".drop-down .options ul").hide();
});

//CODE FOR CUSTOM COUNTER
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

//CODE FOR IMAGE ZOOMS

//FIRST IMAGE MODAL
// Get the modal
var modal = document.getElementById('zoom-modal');

// Get the image and insert it inside the modal
var img = document.getElementById('zoom-img');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// SECOND IMG MODAL
var modal2 = document.getElementById('zoom-modal-2');
var img2 = document.getElementById('zoom-img-2');
var modalImg2 = document.getElementById("img02");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
}
var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
    modal2.style.display = "none";
}

//THIRD IMG MODAL
var modal3 = document.getElementById('zoom-modal-3');
var img3 = document.getElementById('zoom-img-3');
var modalImg3 = document.getElementById("img03");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
}
var span3 = document.getElementsByClassName("close")[2];
span3.onclick = function() {
    modal3.style.display = "none";
}

//FOURTH IMG Modal
var modal4 = document.getElementById('zoom-modal-4');
var img4 = document.getElementById('zoom-img-4');
var modalImg4 = document.getElementById("img04");
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
}
var span4 = document.getElementsByClassName("close")[3];
span4.onclick = function() {
    modal4.style.display = "none";
}

//FIFTH IMG Modal
var modal5 = document.getElementById('zoom-modal-5');
var img5 = document.getElementById('zoom-img-5');
var modalImg5 = document.getElementById("img05");
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
}
var span5 = document.getElementsByClassName("close")[4];
span5.onclick = function() {
    modal5.style.display = "none";
}

//SIXTH IMG Modal
var modal6 = document.getElementById('zoom-modal-6');
var img6 = document.getElementById('zoom-img-6');
var modalImg6 = document.getElementById("img06");
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
}
var span6 = document.getElementsByClassName("close")[5];
span6.onclick = function() {
    modal6.style.display = "none";
}
