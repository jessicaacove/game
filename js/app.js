
$(document).ready(function () {

  var myGame = new Game();

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
