$(document).ready(function(){
      "use strick";
    
      // back to top part
    $(".back-to-top").click(function(){
    $('html,body').animate({
      scrollTop:0
    }, 2000)
    });

  $(window).scroll(function(){
    var scrolling = $(window).scrollTop();

    if(scrolling > 10){
      $(".back-to-top").fadeIn(500);
    }else{
      $(".back-to-top").fadeOut(500);
    }

    if(scrolling > 50){
      $(".nav-bg").addClass("menu-bg")
    }else{
      $(".nav-bg").removeClass("menu-bg")
    }

  });

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 2500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '__',
        // smartBackspace: true,
      });

    //   particles.js
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS('banner',
  
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  
  );

//   Counterup js

    jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 100,
        time: 1000,
    });
  });

  // progressbar js

  $(document).ready(function(){

    $('#bar1').barfiller({
      barColor: '#f97800',
      duration: 3000
    });
    $('#bar2').barfiller({
      barColor: '#f96400',
      duration: 3000
    });
    $('#bar3').barfiller({
      barColor: '#f9e800',
      duration: 3000
    });
    $('#bar4').barfiller({
       barColor: '#cbf900',
       duration: 3000
    });
    
    






  });



  new WOW().init();

  // Slick slider

  $('.testi-slick').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });



});