
var myGame = new Game();

$(document).ready(function () {

  myGame.startGame();

  setInterval(function () {
    myGame.moveUpDude();
    myGame.generateRows();
  }, 1000);



});

$(document).ready(function () {

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
