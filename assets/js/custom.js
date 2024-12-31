/*-----------------------------------------------------------------------------------

    Template Name: Websole


    Note: This is Custom Js file
  
-----------------------------------------------------------------------------------*/
 
// /*************  accordion-item ****************/

$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});
 
 
function inVisible(element) { 
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height(); 
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) { 
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, { 
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}
$(function() { 
  $(window).scroll(function() {
     $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
}); 

/* 6. loaded */  
$(window).on('load', function () {
    $("body").addClass("page-loaded"); 
    $('.preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
  
/* heading hover  */
(function ($) {
  function title_animation() {
    var tg_var = $('.sec-title-animation');
    if (!tg_var.length) {
      return;
    }

    const quotes = document.querySelectorAll(".sec-title-animation .title-animation");

    quotes.forEach(quote => {
      // Reset animation if already exists
      if (quote.animation) {
        quote.animation.progress(1).kill();
      }

      // Determine animation style
      var getclass = quote.closest('.sec-title-animation').className;
      var animation = getclass.split('animation-');
      if (animation[1] === "style4") return;

      // Set initial styles for animation
      gsap.set(quote, {
        opacity: 0,
        x: document.documentElement.dir === "rtl" ? "-50" : "50", // RTL handling
        y: "0",
        rotateX: "0"
      });

      // Apply animation to the whole text block
      quote.animation = gsap.to(quote, {
        scrollTrigger: {
          trigger: quote,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      });
    });
  }

  // Ensure ScrollTrigger refreshes animations on updates
  ScrollTrigger.addEventListener("refresh", title_animation);

  // Initialize animation on page load
  $(window).on('load', function () {
    title_animation();
  });
})(window.jQuery);




function scrollTopPercentage() {
  const scrollPercentage = () => {
    const scrollTopPos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
    const scrollElementWrap = $("#scroll-percentage");

    scrollElementWrap.css("background", `conic-gradient( #fff ${scrollValue}%, #000 ${scrollValue}%)`);

    // ScrollProgress
    if (scrollTopPos > 100) {
      scrollElementWrap.addClass("active");
    } else {
      scrollElementWrap.removeClass("active");
    }

    if (scrollValue < 99) {
      $("#scroll-percentage-value").text(`${scrollValue}%`);
    } else {
      $("#scroll-percentage-value").html('<i class="fa-solid fa-arrow-up-long"></i>');
    }
  }
  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;
  // Back to Top
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  $("#scroll-percentage").on("click", scrollToTop);
}
scrollTopPercentage(); 
$(document).ready(function () {
  $('.menu-toggle').on('click', function () {
    $('.navbar').toggleClass('active');
    $('body').toggleClass('menu-open');
  });
});
