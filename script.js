$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
      autoplayTimeout: 3000 ,
    margin:10,
    animateIn: 'fadeIn' ,
    animateOut: 'fadeOut',
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});