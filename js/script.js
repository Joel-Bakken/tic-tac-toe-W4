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
    return true;
  } else { return false;}
}

//UI LOGIC

var gameBoard = new Gameboard();
var playerX = new Player("X");
var playerO = new Player("O");
var currentPlayer = playerO;
var validate = false;

$(document).ready(function() {
  //click listener for row0 col0, when clicked:
  $("#r0c0").click(function(event) {
    event.preventDefault();
    validate = checkSpace(0,0);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(0,0, currentPlayer.mark);
    gameBoard.change(newSpace);
    //output AddClass X or O or text from currentPlayer.mark within span in li
    $("#out-r0c0").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  //click listener 2...
  $("#r0c1").click(function(event) {
    event.preventDefault();
    validate = checkSpace(0,1);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(0,1, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r0c1").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r0c2").click(function(event) {
    event.preventDefault();
    validate = checkSpace(0,2);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(0,2, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r0c2").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r1c0").click(function(event) {
    event.preventDefault();
    validate = checkSpace(1,0);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(1,0, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r1c0").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r1c1").click(function(event) {
    event.preventDefault();
    validate = checkSpace(1,1);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(1,1, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r1c1").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r1c2").click(function(event) {
    event.preventDefault();
    validate = checkSpace(1,2);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(1,2, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r1c2").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r2c0").click(function(event) {
    event.preventDefault();
    validate = checkSpace(2,0);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(2,0, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r2c0").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r2c1").click(function(event) {
    event.preventDefault();
    validate = checkSpace(2,1);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(2,1, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r2c1").text(currentPlayer.mark);
    switchPlayer();
    }
  });
  $("#r2c2").click(function(event) {
    event.preventDefault();
    validate = checkSpace(2,2);
    if (validate === true) {
      alert('Pick another space');
    } else {
    var newSpace = new Space(2,2, currentPlayer.mark);
    gameBoard.change(newSpace);
    $("#out-r2c2").text(currentPlayer.mark);
    switchPlayer();
    }
  });
});



