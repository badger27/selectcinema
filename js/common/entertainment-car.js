$(function() {
  $(' .entertain .sky-carousel').carousel({

    itemWidth: 180,
    itemHeight: 240,
    distance: 100,
    selectedItemDistance: 10,
    selectedItemZoomFactor: .8,
    unselectedItemZoomFactor: .6,
    unselectedItemAlpha: 0.9,
    motionStartDistance: 200,
    topMargin: 30,
    slideSpeed: 045,
    gradientStartPoint: 0.0,
    gradientOverlayColor: "#292929",
    gradientOverlaySize: 0,
    selectByClick: false,
    navigationButtonsVisible:false,
    startIndex:'auto'
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
