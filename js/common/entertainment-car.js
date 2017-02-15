$(function() {
  $(' .entertain .sky-carousel').carousel({

    itemWidth: 180,
    itemHeight: 240,
    distance: 10,
    selectedItemDistance: 30,
    selectedItemZoomFactor: 1,
    unselectedItemZoomFactor: .8,
    unselectedItemAlpha: 0.9,
    motionStartDistance: 200,
    topMargin: 30,
    slideSpeed: 045,
    gradientStartPoint: 0.0,
    gradientOverlayColor: "#292929",
    gradientOverlaySize: 0,
    selectByClick: false,
    navigationButtonsVisible:false
  });


});

$(document).ready(function(){

  $('.tv').hide();

  $("#showPanel").click(function(){
    $('.movie').show();
    $('.tv').hide();
  });

  $("#hidePanel").click(function(){
    $('.tv').show();
    $('.movie').hide();
  });

});
