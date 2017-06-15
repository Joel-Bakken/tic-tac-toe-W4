//BUSINESS LOGIC
var row = 2;
var col = 2;

function Gameboard() {
	this.board = [];
  for (var i=0; i <= row; i++ ) {
    var newArray = [];
    this.board[i] = newArray;
    for (var k=0; k <= col; k++) {
      this.board[i][k] = "";
    }
  }
}



function Space(xCoord, yCoord, mark) {
	this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.markedBy = mark;
}

function Player(mark) {
	this.mark = mark;
  //alert(this.mark);
}

Gameboard.prototype.change = function(newSpace) {
	this.board[newSpace.xCoord][newSpace.yCoord] = newSpace.markedBy;
  //alert(newSpace.xCoord + " " + newSpace.yCoord + " " + newSpace.markedBy);
}

function switchPlayer() {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  } else if (currentPlayer === playerO) {
    currentPlayer = playerX;
  }
}

function checkSpace(x, y) {
  if (gameBoard.board[x][y] === "X" || gameBoard.board[x][y] === "O") {
    return 1;
  } else if (winner != "none") {
    return 2;
  } else { return 0;}
}
function checkWinner() {
  if ((gameBoard.board[0][0] === "X" && gameBoard.board[0][1] === "X" && gameBoard.board[0][2] === "X") || (gameBoard.board[1][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board[1][2] === "X") || (gameBoard.board[2][0] === "X" && gameBoard.board[2][1] === "X" && gameBoard.board[2][2] === "X") || (gameBoard.board[0][0] === "X" && gameBoard.board[1][0] === "X" && gameBoard.board[2][0] === "X") || (gameBoard.board[0][1] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board[2][1] === "X") || (gameBoard.board[0][2] === "X" && gameBoard.board[1][2] === "X" && gameBoard.board[2][2] === "X") || (gameBoard.board[0][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board[2][2] === "X") || (gameBoard.board[0][2] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board[2][0] === "X")) {
    //alert("x wins");
    winner = "Player X Wins";
  } else if ((gameBoard.board[0][0] === "O" && gameBoard.board[0][1] === "O" && gameBoard.board[0][2] === "O") || (gameBoard.board[1][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board[1][2] === "O") || (gameBoard.board[2][0] === "O" && gameBoard.board[2][1] === "O" && gameBoard.board[2][2] === "O") || (gameBoard.board[0][0] === "O" && gameBoard.board[1][0] === "O" && gameBoard.board[2][0] === "O") || (gameBoard.board[0][1] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board[2][1] === "O") || (gameBoard.board[0][2] === "O" && gameBoard.board[1][2] === "O" && gameBoard.board[2][2] === "O") || (gameBoard.board[0][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board[2][2] === "O") || (gameBoard.board[0][2] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board[2][0] === "O")) {
    //alert("O wins");
    winner = "Player O Wins";
  } else if (clickCount === 9) {
    //alert('draw');
    winner = "Draw!";
  }
}

var gameBoard = new Gameboard();
var playerX = new Player("X");
var playerO = new Player("O");
var currentPlayer = playerO;
var validate = 0;
var clickCount = 0;
var winner = "none";

//UI LOGIC
$(document).ready(function() {

  //click listener for row0 col0, when clicked:
  $("#r0c0").click(function(event) {
    event.preventDefault();
    validate = checkSpace(0,0);
    if (validate === 1) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
    var newSpace = new Space(0,0, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r0c0").text(currentPlayer.mark);
    clickCount++;
    checkWinner();
    if (winner != "none") {
      $("#game-status").text(winner);
    }
    switchPlayer();
    }
  });
  //click listener 2...
  $("#r0c1").click(function(event) {
    event.preventDefault();
    validate = checkSpace(0,1);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
    var newSpace = new Space(0,1, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r0c1").text(currentPlayer.mark);
    clickCount++;
    checkWinner();
    if (winner != "none") {
      $("#game-status").text(winner);
    }
    switchPlayer();
    }
  });
  $("#r0c2").click(function(event) {
    event.preventDefault();
    validate = checkSpace(0,2);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
    var newSpace = new Space(0,2, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r0c2").text(currentPlayer.mark);
    clickCount++;
    checkWinner();
    if (winner != "none") {
      $("#game-status").text(winner);
    }
    switchPlayer();
    }
  });
  $("#r1c0").click(function(event) {
    event.preventDefault();
    validate = checkSpace(1,0);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
      var newSpace = new Space(1,0, currentPlayer.mark);
      gameBoard.change(newSpace);
      $("#out-r1c0").text(currentPlayer.mark);
      clickCount++;
      checkWinner();
      if (winner != "none") {
        $("#game-status").text(winner);
      }
      switchPlayer();
    }
  });
  $("#r1c1").click(function(event) {
    event.preventDefault();
    validate = checkSpace(1,1);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
      var newSpace = new Space(1,1, currentPlayer.mark);
      gameBoard.change(newSpace);
      $("#out-r1c1").text(currentPlayer.mark);
      clickCount++;
      checkWinner();
      if (winner != "none") {
        $("#game-status").text(winner);
      }
      switchPlayer();
    }
  });
  $("#r1c2").click(function(event) {
    event.preventDefault();
    validate = checkSpace(1,2);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
      var newSpace = new Space(1,2, currentPlayer.mark);
      gameBoard.change(newSpace);
      $("#out-r1c2").text(currentPlayer.mark);
      clickCount++;
      checkWinner();
      if (winner != "none") {
        $("#game-status").text(winner);
      }
      switchPlayer();
    }
  });
  $("#r2c0").click(function(event) {
    event.preventDefault();
    validate = checkSpace(2,0);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
      var newSpace = new Space(2,0, currentPlayer.mark);
      gameBoard.change(newSpace);
      $("#out-r2c0").text(currentPlayer.mark);
      clickCount++;
      checkWinner();
      if (winner != "none") {
        $("#game-status").text(winner);
      }
      switchPlayer();
    }
  });
  $("#r2c1").click(function(event) {
    event.preventDefault();
    validate = checkSpace(2,1);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
      var newSpace = new Space(2,1, currentPlayer.mark);
      gameBoard.change(newSpace);
      $("#out-r2c1").text(currentPlayer.mark);
      clickCount++;
      checkWinner();
      if (winner != "none") {
        $("#game-status").text(winner);
      }
      switchPlayer();
    }
  });
  $("#r2c2").click(function(event) {
    event.preventDefault();
    validate = checkSpace(2,2);
    if (validate === true) {
      alert('Pick another space');
    } else if (validate === 2) {
      alert('Game Completed Already. Hit START PLAYING button to start a new game');
    } else {
      var newSpace = new Space(2,2, currentPlayer.mark);
      gameBoard.change(newSpace);
      $("#out-r2c2").text(currentPlayer.mark);
      clickCount++;
      checkWinner();
      if (winner != "none") {
        $("#game-status").text(winner);
      }
      switchPlayer();
    }
  });

});



