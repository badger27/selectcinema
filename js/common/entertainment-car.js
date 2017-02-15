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

    gradientStartPoint: .1,
    gradientOverlayColor: "#1f1f1f",
    gradientOverlaySize: 100,
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

