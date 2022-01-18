/*

$(document).ready(function () {
  
  'use strict';
  
  
  // Color Button
  
//  $('.navbar-header button').on("click", function () {
//    $('.navbar-header button').css({
//      backgroundColor: "transparent"
//    })
//  });
//  
//  $('.navbar-header button').on("mouseenter", function () {
//    $('.navbar-header button').css({
//      backgroundColor: "#37A000"
//    })
//  }, function () {
//    $('.navbar-header button').on("mouseleave", function () {
//      $('.navbar-header button').css({
//        backgroundColor: "#transparent"
//      })
//    });
//  });
  
  // Scroll To Home
  
//  $('.navbar-collapse ul.nav li.active').click(function () {
//    $('.navbar-collapse ul.nav li.active a').css({
//      backgroundColor: "transparent",
//      color: '#6AD044'
//    });
//    $('html, body').animate({
//      scrollTop: 0
//    }, 2000);
//  });
  
  // Scroll To about
  
//  $('.navbar-collapse ul.nav li.about').click(function () {
//    $('.navbar-collapse ul.nav li.about a').css({
//      backgroundColor: "transparent"
//    });
//    $('html, body').animate({
//      scrollTop: $('section.about-me').offset().top
//    }, 2000);
//  });
  
  $('.header .overlay span i').click(function () {
    $('html, body').animate({
      scrollTop: $('section.about-me').offset().top
    }, 2000);
  });
  
  // Scroll To Skills
  
//  $('.navbar-collapse ul.nav li.skills').click(function () {
//    $('.navbar-collapse ul.nav li.skills a').css({
//      backgroundColor: "transparent"
//    });
//    $('html, body').animate({
//      scrollTop: $('section.my-skills').offset().top
//    }, 2000);
//  });
  
  // Scroll To My Works
  
//  $('.navbar-collapse ul.nav li.my-works').click(function () {
//    $('.navbar-collapse ul.nav li.my-works a').css({
//      backgroundColor: "transparent"
//    });
//    $('html, body').animate({
//      scrollTop: $('section.my-works').offset().top
//    }, 2000);
//  });
  
  // Scroll To Counter
  
//  $('.navbar-collapse ul.nav li.comments').click(function () {
//    $('.navbar-collapse ul.nav li.comments a').css({
//      backgroundColor: "transparent"
//    });
//    $('html, body').animate({
//      scrollTop: $('section.comments').offset().top
//    }, 2000);
//  });
  
  // Scroll To Contact-Me
  
//  $('.navbar-collapse ul.nav li.contact-me').click(function () {
//    $('.navbar-collapse ul.nav li.contact-me a').css({
//      backgroundColor: "transparent"
//    });
//    $('html, body').animate({
//      scrollTop: $('section.contact-me').offset().top
//    }, 2000);
//  });
  
  // Scroll To Button
  
  var scrollButton = $("#scroll-top");
  
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1100) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 2000, 'linear');
    //window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
  
  // Loading Screen
  
//  $(window).on('load', function () {
//    "use strict";
//    $('.loading h1').fadeOut(2000);
//    $('.loading .sk-circle').fadeOut(2000, function () {
//      $(this).parent().fadeOut(2000, function () {
//        $("body").css({
//          overflow: "auto",
//          overflowX: "hidden",
//        });
//        $(this).remove();
//      });
//    });
//  });
  
  
});

*/

 /*

let mybtn = document.getElementById('scroll-top')


var scrollToTop = window.setInterval(function upp() {
  
  var pos = window.pageYOffset;
  
  if( pos > 0 ) {
    
    window.scrollTo( 0, pos - 20 );  // how far to scroll on each step
    
  } else {
    
    window.clearInterval( scrollToTop );
    
  }
  
}, 16);  // how fast to scroll ( this equals roughly 60 fps )

*/

/*
 *  Scroll To Top
 */

var your_header  = document.getElementById('header_id'),
    scroll_to_top = document.getElementById('scroll-top');


window.onscroll = function(ev) {

    let scrollTop = window.pageYOffset || document.body.scrollTop;
    if (scrollTop > your_header.offsetHeight + 100) {

        scroll_to_top.style.display = 'block';
    }
    else{
        scroll_to_top.style.display = 'none';   
    }
};

scroll_to_top.onclick = function () {
    scrollTo(document.body, 0, 100);
}

/*

  * scroll to body top
  * element, position and time duration
  
*/

function scrollTo(element, to, duration) {
  
  if (duration < 0) return;
  let difference = to - element.scrollTop;
  let perTick = difference / duration * 2;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      scrollTo(element, to, duration - 2);
  }, 10);
}















