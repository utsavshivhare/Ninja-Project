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


  });

  