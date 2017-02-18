

$(document).ready(function(){




  $(window).resize(function() {
    // This will execute whenever the window is resized
    $(window).height(); // New height
    $(window).width(); // New width
  });

  $(' .entertain .sky-carousel').carousel({

    itemWidth: 342,
    itemHeight: 500,
    distance: 50,
    selectedItemDistance: 10,
    selectedItemZoomFactor: .7,
    unselectedItemZoomFactor: .5,
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

  // $("#tvid").css(visibility ="hidden");

  // document.getElementById("tvid")


  var x =  document.getElementById("tvid");
      x.style.display = 'none';

  var y =  document.getElementById("movieid");
      y.style.display = 'block';



  $('.entertain').addClass('bg1');



  $("#movie").click(function(){

    reloadtemp();

    y.style.display = 'block';
    x.style.display = 'none';



    // $('.movie').fadeIn(300, function() { $(this).show(); })
    // $('.tv').hide().fadeOut(300, function() { $(this).hide(); });

    $('.entertain').removeClass('bg2').addClass('bg1');


  });

  $("#tv").click(function(){

    reloadtemp();
    x.style.display = 'block';
    y.style.display = 'none';



    $('.entertain').removeClass('bg1').addClass('bg2');

  });

});

$.fn.redraw = function(){
  return $(this).each(function(){
    var redraw = this.offsetHeight;
  });
};



$(document).ready(function($) {
  //resizes carousel right side as window changes
  function size_carousel(){
    var height = $('.carousel-inner .item img:visible').height();
    console.log($('.carousel-inner .item img:visible').height());
    $('.carousel-caption').each(function(){
      $(this).height(height);
    });
  }



  $('#myCarousel').ready(function(){
    size_carousel();
  });
});


function reloadtemp() {

  $(window).on('resize load',function() {
    $(' .entertain .sky-carousel').carousel({

      itemWidth: 342,
      itemHeight: 500,
      distance: 50,
      selectedItemDistance: 10,
      selectedItemZoomFactor: .7,
      unselectedItemZoomFactor: .5,
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


}

