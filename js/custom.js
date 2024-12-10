document.addEventListener("DOMContentLoaded", function(){
    var ll = $('.ladi-section-background, .ladi-image-background, .ladi-button-background, .ladi-headline, .ladi-video-background, .ladi-overlay, .ladi-countdown-background, .ladi-box, .ladi-frame-background, .ladi-banner, .ladi-form-item-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-spin-lucky-screen, .ladi-spin-lucky-start, .ladi-list-paragraph ul li');
    var lh = []
    var wscroll = 0;
    var wh = $(window).height();
    
    // ll.addClass("loaded");

    function update_offsets(){
      ll.each(function(){
        var x = $(this).offset().top;
        lh.push(x);
      });
    };
    
    function lazy() {
      wscroll = $(window).scrollTop();
      for(i = 0; i < lh.length; i++){
        if(lh[i] <= wscroll + (wh - 200)){
          ll.eq(i).addClass('loaded');
        };
      };
    };
    
    // Page Load
    update_offsets();
    lazy();
    
    $(window).on('scroll',function(){
      lazy();
    });

    
    
});