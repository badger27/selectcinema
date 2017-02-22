

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
    navigationButtonsVisible :false
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
      navigationButtonsVisible :false
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
      navigationButtonsVisible :false
    });
  }



  $('.entertain').addClass('bg1');



  $("#movie").click(function(){

    $('.sky-carousel_first').remove();

    getMovie();
    $('.sky-carousel_movie').show();
    $('.sky-carousel_tv').hide();

    $('.entertain').removeClass('bg2').addClass('bg1');

  });


  $("#tv").click(function(){

    $('.sky-carousel_first').remove();

    getTV();
    $('  .sky-carousel_tv').show();
    $('  .sky-carousel_movie').hide();

    $('.entertain').removeClass('bg1').addClass('bg2');

  });

});




