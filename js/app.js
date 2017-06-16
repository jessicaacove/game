
$(document).ready(function () {

  var myGame = new Game();

  $(".directionsbutton").click(function () {
    $(".startoverlay").addClass("hidden");
    $(".directionsoverlay").removeClass("hidden");
  });

  $(".returntostart").click(function () {
    $(".startoverlay").removeClass("hidden");
    $(".directionsoverlay").addClass("hidden");
  });

  $(".startbutton").click(function () {
    myGame.startGame();

    var interval = setInterval(function () {
      myGame.moveUpDude();
      myGame.generateRows();
      if( myGame.score < 0 || myGame.score >= 15) {
        clearInterval(interval);
      }
      }, 500);
  });


  $(".restartbutton").click(function () {
    myGame.restart();
  });


  $(document).keydown(function (theEvent) {
    if (theEvent.which === 39 ||
        theEvent.which === 37) {
        theEvent.preventDefault();
      }

      if (theEvent.which === 39) {
        myGame.moveDudeRight();
      }

      else if (theEvent.which === 37) {
        myGame.moveDudeLeft();
      }
    });

});
