
function Game() {
  this.grid = [
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,0,   0,0,0,0],
    [0,0,0,0,"d", 0,0,0,0]
  ];
  this.score = 0;
}

Game.prototype.startGame = function () {
  console.log("Starting the game...");
  $(".startoverlay").addClass("hidden");
  $(".startbutton").addClass("hidden");
  $(".directionsbutton").addClass("hidden");
  $(".gamegrid").removeClass("hidden");
  this.render();
};

Game.prototype.render = function(){
  $(".gridbox").empty();



  var htmlRow = -1;
  var htmlCol = -1;
  // find dude
  for(var i=0; i<this.grid.length; i++) {
    for(var j=0; j<this.grid[0].length; j++) {
      if(this.grid[i][j] === "d") {
      //Now render rows
        for(var row = i; row > i-9; row-- ){
          htmlRow++;
          htmlCol = -1;
          for(var col=0; col<this.grid[row].length; col++) {
            htmlCol++;
            //Now what do we do with that index?
            if (this.grid[row][col] == "d"){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='dude' src='./images/computer_girl.jpg'/>");
            }
            else if (this.grid[row][col] == 6){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='rock' src='./images/no-entry-sign.png'>");
            }
            else if (this.grid[row][col] == 5){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='rock' src='./images/interrobang.png'>");
            }
            else if (this.grid[row][col] == 4){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='rock' src='./images/arrows_clockwise.png'>");
            }
            else if (this.grid[row][col] == 3){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='item' src='./images/electric_plug.png'>");
            }
            else if (this.grid[row][col] == 2){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='item' src='./images/Green_Apple_Emoji.png'>");
            }
            else if (this.grid[row][col] == 1){
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='item' src='./images/hot-beverage.png'>");
            }
            else if (this.grid[row][col] === 0) {
              $(".row" + htmlRow + "col" + htmlCol).html("");
            }
            else if (this.grid[row][col] === 7) {
              $(".row" + htmlRow + "col" + htmlCol).html("<img class='pizza' src='./images/slice-of-pizza.png'>");
            }
          }
        }
      }
    }
  }

};

Game.prototype.moveUpDude = function () {
  for(var i=0; i<this.grid.length; i++) {
    for(var j=0; j<this.grid[0].length; j++) {
      if(this.grid[i][j] == "d") {
        if(this.grid[i-1][j] === 0) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
        }
        else if(this.grid[i-1][j] >= 1 && this.grid[i-1][j] <= 3) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
          this.score ++;
        }
        else if(this.grid[i-1][j] >= 4 && this.grid[i-1][j] <= 6) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
          this.score -= 4;
        }
        else if(this.grid[i-1][j] == 7) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
          this.score ++;
        }
      }
    }
  }
  this.render();
  if(this.score >= 0) {
  $(".scorebox").html(this.score);
    if(this.score >= 15) {
      this.win();
    }
  }
  else {
    $(".scorebox").html(0);
    this.lose();
  }
};



Game.prototype.moveDudeRight = function () {
  for(var i=0; i<this.grid.length; i++) {
    for(var j=0; j<this.grid[0].length; j++) {
      if(this.grid[i][j] == "d") {
        if(j == this.grid[i].length - 1) {
          break;
        }
        else {
        this.grid[i][j] = 0;
        this.grid[i][j+1] = "d";
        break;
        }
      }
    }
  }
  this.render();
};

Game.prototype.moveDudeLeft = function () {
  for(var i=0; i<this.grid.length; i++) {
    for(var j=0; j<this.grid[0].length; j++) {
      if(this.grid[i][j] == "d") {
        if(j === 0) {
          break;
        }
        else {
        this.grid[i][j] = 0;
        this.grid[i][j-1] = "d";
        break;
        }
      }
    }
  }
  this.render();
};
var x = 0;
Game.prototype.generateRows = function () {

  if( this.score == 2 && x === 0) {
    x++;
    console.log("Why am I two forever????????????????????????????????????");
    console.log(this.score);

    var pizzaarray = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 7, 0, 7, 0, 7, 0, 7, 0],
      [7, 0, 7, 0, 7, 0, 7, 0, 7],
      [0, 7, 0, 7, 0, 7, 0, 7, 0],
      [7, 0, 7, 0, 7, 0, 7, 0, 7],
      [0, 7, 0, 7, 0, 7, 0, 7, 0],
      [7, 0, 7, 0, 7, 0, 7, 0, 7],
      [0, 7, 0, 7, 0, 7, 0, 7, 0],
      [7, 0, 7, 0, 7, 0, 7, 0, 7],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    for (var i=0; i<pizzaarray.length; i++) {
      this.grid.unshift(pizzaarray[i]);
    }
  }
  else {
    var newrow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var itemType = Math.floor(Math.random() * 3) + 1;
    var rockType = Math.floor(Math.random() * 3) + 4;
    newrow[Math.floor(Math.random() * 9)] = itemType;
    newrow[Math.floor(Math.random() * 9)] = rockType;
    this.grid.unshift(newrow);
  }
};

Game.prototype.lose = function () {
  $(".gamegrid").addClass("hidden");
  $(".winorloseoverlay").removeClass("hidden");
  $(".winorloseoverlay .resulttext").html("You Lose");
  $(".restartbutton").removeClass("hidden");
};

Game.prototype.win = function () {
  $(".gamegrid").addClass("hidden");
  $(".winorloseoverlay").removeClass("hidden");
  $(".winorloseoverlay .resulttext").html("You Win");
  $(".restartbutton").removeClass("hidden");
};

Game.prototype.restart = function () {
    $(".winorloseoverlay").addClass("hidden");
    $(".restartbutton").addClass("hidden");
    $(".startoverlay").removeClass("hidden");
    $(".startbutton").removeClass("hidden");
    $(".directionsbutton").removeClass("hidden");
    myGame = new Game();
    $(".scorebox").html(0);
    // htmlRow = -1;
    // htmlCol = -1;
    // $(".gridbox").empty();
    this.grid = [
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,0,   0,0,0,0],
      [0,0,0,0,"d", 0,0,0,0]
    ];
    this.score = 0;
};
