    $(document).ready(function(){
      // slideshow
      $('.my-slide').slick({
          autoplay: true,
          autoplaySpeed: 4000
      });
      //appear elements on scroll
      $('.box').appear({
        force_process: true
      });
      $('.box').on('appear',function() {
        $(this).removeClass('fade-in');
      });
    });


    var tl_one = new TimelineMax({repeat: 2,delay: 0.5});
    tl_one
    .to('.lineOne',0.2,{x: 2, ease:Linear.easeNone})
    .to('.lineOne',0.2,{x: 0, ease:Linear.easeNone});

    var tl_two = new TimelineMax({repeat: 2, delay: 0.5});
    tl_two
    .from('.lineTwo',0.2,{x: 2, ease:Linear.easeNone})
    .from('.lineTwo',0.2,{x: 0, ease:Linear.easeNone});

    var tl_three = new TimelineMax({repeat: 2, delay: 0.5});
    tl_three
    .to('.lineThree',0.2,{x: 2, ease:Linear.easeNone})
    .to('.lineThree',0.2,{x: 0, ease:Linear.easeNone});



    var tlP = new TimelineMax({delay: 0.5});

    tlP.set('#pedales',{
      transformOrigin: "50% 50%",
    })
    .to("#pedales",0.5,{rotation: "360",repeat: 1, ease:Linear.easeNone});
