// for smooth scroll but not working correct
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});



$(document).ready(function () {
  
    //Navbar scroll hide effect code below
    
     var c, currentScrollTop = 0,
         navbar = $('nav');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });


    // Navbar active nav-item code below
    $( '#navbar1 .navbar-nav a' ).on( 'click', function () {
      $( '#navbar1 .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
    });



    // Loader code below
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });



    //Navbar hide on focus out
    $(function() {
      $(document).on("click scroll",function (event) {
        $('.navbar-collapse').collapse('hide');
      });
    });


// for photo
var $wrap = $('.wrapper'),
  $lEye = $('.eye'),
  lFollowX = 5,
  lFollowY = 10,
  x = 0,
  y = 0,
  friction = 1 / 12;

function animate() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  $lEye.css({
    '-webit-transform': 'translate(' + -x + 'px, ' + -y + 'px)',
    '-moz-transform': 'translate(' + -x + 'px, ' + -y + 'px)',
    'transform': 'translate(' + -x + 'px, ' + -y + 'px)'
  });

  $wrap.css({
    'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
  });
  window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

animate();

});
