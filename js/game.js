
function Game() {
  this.grid = [
    [0,0,0,0,1,   0,0,0,0],
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
}

Game.prototype.startGame = function () {
  console.log("Starting the game...");
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


        for(var row = i; row > i-1; row-- ){
          htmlRow++;
          htmlCol = -1;
          for(var col=0; col<this.grid[row].length; col++) {
            htmlCol++;

            //Now what do we do with that index?
            if (this.grid[row][col] == "d"){
              $(".row" + htmlRow + "col" + htmlCol).html("<i>👩🏼‍💻</i>");
            }
            else if (this.grid[row][col] == 5){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-pizza'></i>");
            }
            else if (this.grid[row][col] == 4){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-electric_plug'></i>");
            }
            else if (this.grid[row][col] == 3){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-coffee'></i>");
            }
            else if (this.grid[row][col] == 2){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-beer'></i>");
            }
            else if (this.grid[row][col] == 1){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-green_apple'></i>");
            }
            else if (this.grid[row][col] == 6){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-sunny'></i>");
            }
            else if (this.grid[row][col] == 7){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-necktie'></i>");
            }
            else if (this.grid[row][col] == 8){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-bust_in_silhouette'></i>");
            }
            else if (this.grid[row][col] == 9){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-watch'></i>");
            }
            else if (this.grid[row][col] == 10){
              $(".row" + htmlRow + "col" + htmlCol).html("<i class='em em-sleeping'></i>");
            }
            else if (this.grid[row][col] === 0) {
              $(".row" + htmlRow + "col" + htmlCol).html("");
            }
          }
        }
      }
    }
  }

};

var score = 0;

Game.prototype.moveUpDude = function () {
  for(var i=0; i<this.grid.length; i++) {
    for(var j=0; j<this.grid[0].length; j++) {
      if(this.grid[i][j] == "d") {
        if(this.grid[i-1][j] === 0) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
        }
        else if(this.grid[i-1][j] >= 1 && this.grid[i-1][j] <= 5) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
          score ++;
        }
        else if(this.grid[i-1][j] >= 6 && this.grid[i-1][j] <= 10) {
          this.grid[i][j] = 0;
          this.grid[i-1][j] = "d";
          score -= 4;
        }
      }
    }
  }
  this.render();
  $(".scorebox").html(score);
};

// Game.prototype.scrollRows = function () {
//   for(var i=0; i<this.grid.length; i++) {
//     for(var j=0; i<this.grid[0].length; j++) {
//       if(this.grid[i][j] == "d") {
//
//         this.grid[i + 1][j] = "d";
//         //If this is a rock u lose
//         this.grid[i][j] = 0;
//       }
//     }
//   }
//
//
// };



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

Game.prototype.generateRows = function () {
  var newrow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var itemType = Math.floor(Math.random() * 5) + 1;
  var rockType = Math.floor(Math.random() * 5) + 6;
  newrow[Math.floor(Math.random() * 9)] = itemType;
  newrow[Math.floor(Math.random() * 9)] = rockType;
  this.grid.unshift(newrow);
};
