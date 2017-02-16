$(document).ready(function(){




  var imageNames = [ 1,2,3,4,5,6,7,8,9];
  var imageLength = imageNames.length;
  var directoryNames  = "movies";

  getImages(directoryNames);



  $("#movie").click(function(){

    directoryNames  = "movies";
    getImages(directoryNames);

  });

  $("#tv").click(function(){
    directoryNames  = "tv";
    getImages(directoryNames);
  });


  function getImages (directoryNames) {


  if( directoryNames === "movies"){

    for (var item = 0; item <imageLength ; item++) {
     var  output= "../../img/" + directoryNames + "/" + imageNames[item] + ".jpg";

      var result= "<li>" +   "<img src= "  +  output +  ">" + "</li>";

      console.log("result " + result);
      document.getElementById("demo").innerHTML += result;

    }

  } else if(directoryNames === "tv"){




    var current=  $("li,img.sc-image" );
    console.log("current" , current);

    for (var i = 0; i <current.length ; i++) {
      // console.log("array:" , current[i]);
      $("#demo" ).empty($("#demo" ));
    };

    for (var item = 0; item <imageLength ; item++) {

      // console.log("item " + item );
      var  output= "../../img/" + directoryNames + "/" + imageNames[item] + ".jpg";


      var result= "<li>" +   "<img src= "  +  output +  "" +  " class=" +  "'sc-image'" + " >" + "</li>";
      console.log(" result", result);

      $(".entertain .sky-carousel").carousel();
      document.getElementById("demo").innerHTML += result;

       }
    }
  }




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



  //
  // $('.entertain').addClass('bg1');
  //
  // // $('.tv').hide();
  //
  //
  // $("#movie").click(function(){
  //
  //
  //   $('.movie').fadeIn(300, function() { $(this).show(); })
  //
  //
  //   $('.tv').hide().fadeOut(300, function() { $(this).hide(); });
  //
  //   $('.entertain').removeClass('bg2').addClass('bg1');
  //
  //
  // });
  //
  // $("#tv").click(function(){
  //
  //   $('.tv').fadeIn(300, function() { $(this).show(); })
  //
  //
  //   $('.movie').hide().fadeOut(300, function() { $(this).hide(); });
  //
  //
  //
  //
  //
  //   $('.entertain').removeClass('bg1').addClass('bg2');
  //
  // });

});

