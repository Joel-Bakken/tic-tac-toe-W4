//BUSINESS LOGIC

    function Player(name) {
    	this.name = name;
      this.turnScore = 0;
      this.totalScore = 0;
    }

    var player1 = new Player("Mike");

    Player.prototype.setToZero = function() {
    	this.turnScore = 0;
    }

    Player.prototype.addTurnScore = function() {
    	this.turnScore += rollNumber;
    }

    Player.prototype.addTotalScore = function() {
    	this.totalScore += this.turnScore;
    }

    function roll() {
      min = Math.ceil(1);
      max = Math.floor(6);
      rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      compare();
    }

    function hold() {
    	addTotalScore();
    }

    function compare() {
    	if (rollNumber === 1) {
      	player1.setToZero();
      } else {
      	player1.addTurnScore();
      }
    }

    var rollNumber;




//UI Logic
$(document).ready(function() {
  $("").submit(function(event) {
    event.preventDefault();
