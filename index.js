$(document).ready(function () {
  
    
    
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

    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });
    
  });

  