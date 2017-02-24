

$(document).ready(function(){

  $('.sky-carousel_first').carousel({
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
    navigationButtonsVisible :false,
    enableMouseWheel:false,
    selectByClick: true
  });


  $('.sky-carousel_tv').hide();
  $('.sky-carousel_movie').hide();
  function getTV () {

    $('.sky-carousel_tv').carousel({
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
      navigationButtonsVisible :false,
      enableMouseWheel:false,
      selectByClick: true


    });
  }

  function getMovie () {

    $('.sky-carousel_movie').carousel({
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
      navigationButtonsVisible :false,
      enableMouseWheel:false,
      selectByClick: true



    });
  }



  $('.entertain').addClass('bg1');



  $("#movie").bind('click', function() {

    $('.sky-carousel_first').fadeOut(300, function() { $(this).remove(); });

    getMovie();
    $('.sky-carousel_tv').hide();
    $('.sky-carousel_movie').fadeIn(600, function() { $(this).show(); });


    $('.entertain').removeClass('bg2').addClass('bg1');

  });


  $("#tv").bind('click', function() {

    $('.sky-carousel_first').remove();

    getTV();

    // $('.movie').fadeIn(300, function() { $(this).show(); })
    +    // $('.tv').hide().fadeOut(300, function() { $(this).hide(); });

    $('  .sky-carousel_movie').hide();
    $('  .sky-carousel_tv').fadeIn(600, function() { $(this).show(); });


    $('.entertain').removeClass('bg1').addClass('bg2');

  });

});




