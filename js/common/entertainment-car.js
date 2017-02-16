$(function() {
  $(' .entertain .sky-carousel').carousel({

    itemWidth: 342,
    itemHeight: 500,
    distance: 50,
    selectedItemDistance: 10,
    selectedItemZoomFactor: .8,
    unselectedItemZoomFactor: .6,
    unselectedItemAlpha: 0.9,
    motionStartDistance: 200,
    topMargin: 30,
    gradientStartPoint: 0,
    gradientOverlayColor: "#1f1f1f",
    gradientOverlaySize: 0,
    selectByClick: false,
    navigationButtonsVisible:false,
    startIndex:'auto'
  });


});

$(document).ready(function(){


  $('.entertain').addClass('bg1');

  $('.tv').hide();


  $("#movie").click(function(){


    $('.movie').fadeIn(300, function() { $(this).show(); })


    $('.tv').hide().fadeOut(300, function() { $(this).hide(); });

    $('.entertain').removeClass('bg2').addClass('bg1');


  });

  $("#tv").click(function(){

    $('.tv').fadeIn(300, function() { $(this).show(); })


    $('.movie').hide().fadeOut(300, function() { $(this).hide(); });


    $('.entertain').removeClass('bg1').addClass('bg2');

  });

});

