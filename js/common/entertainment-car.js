

$(document).ready(function(){

  $('  .sky-carousel_movie').carousel({

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



  $('  .sky-carousel_tv').carousel({

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



 // var tvCarousel;
 //  var createNewCarusel = function(id) {
 //
 //   tvCarousel = $('  .' + id).carousel({
 //
 //      itemWidth: 342,
 //      itemHeight: 500,
 //      distance: 50,
 //      selectedItemDistance: 10,
 //      selectedItemZoomFactor: .7,
 //      unselectedItemZoomFactor: .5,
 //      unselectedItemAlpha: 0.9,
 //      motionStartDistance: 200,
 //      topMargin: 30,
 //      gradientStartPoint: 0,
 //      gradientOverlayColor: "#1f1f1f",
 //      gradientOverlaySize: 0,
 //      selectByClick: false,
 //      navigationButtonsVisible:false,
 //      startIndex:'auto'
 //    });
 //
 //  }

  function refresherTv() {



   // var temp =  document.getElementById("tvid").window.reload();

    // var test = window.location;

    // createNewCarusel('sky-carousel_tv')


    // window.document.getElementById('tvid').location.reload();

   // console.log("temp" + temp);

    // var container = document.getElementById("tvid");


    // location.reload();
    // var content = container.innerHTML;

    // container.innerHTML = content;
  }

  // function refresherMovie() {
  //
  //   var container = document.getElementByClassName("movieid");
  //   var content = container.innerHTML;
  //
  //   container.innerHTML =content;
  //
  // }




  // document.getElementById("tvid");

  var tvEle =  document.getElementById("tvid");
      tvEle.style.display = 'block';

  var movieEle =  document.getElementById("movieid");
  movieEle.style.display = 'none';



  $('.entertain').addClass('bg1');



  $("#movie").click(function(){



    // document.getElementById('.sky-carousel_movie').contentWindow.location.reload(true);

    tvEle.style.display = 'none';
    movieEle.style.display = 'block';





    //location.reload();
    // refresherMovie();
    // $('.sky-carousel_movie').window.location.reload(true);
    // $('.movie').fadeIn(300, function() { $(this).show(); })
    // $('.tv').hide().fadeOut(300, function() { $(this).hide(); });

    $('.entertain').removeClass('bg2').addClass('bg1');


  });

  $("#tv").click(function(){


    // document.getElementById('.sky-carousel_tv').Window.location.reload(true);
    // location.reload();


    movieEle.style.display = 'none';
    tvEle.style.display = 'block';





    // refresherTv();
    // tvCarousel.select(5, 1);
    // location.reload();
    // $('.entertain').location.reload();
    // $('.sky-carousel_tv').window.location.reload(true);


    $('.entertain').removeClass('bg1').addClass('bg2');

  });

});




