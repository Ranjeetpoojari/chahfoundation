$('#logo').owlCarousel({
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
$('#ourteam').owlCarousel({
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
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('#campaign').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
  center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('#project').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
  center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$(document).ready(function(){
    
    $('#donate-btn').on('click',function(){
        event.preventDefault();
        $("#donateform").addClass('d-none');
        $("#donnerdetail").removeClass('d-none');
    })
    $('#back-btn').on('click',function(){
        event.preventDefault();
        $("#donateform").removeClass('d-none');
        $("#donnerdetail").addClass('d-none');
    });
});