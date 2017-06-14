//BUSINESS LOGIC

    function Player(name) {
    	this.name = name;
      this.turnScore = 0;
      this.totalScore = 0;
    }

    Player.prototype.setToZero = function() {
    	this.turnScore = 0;
    }

    Player.prototype.addTurnScore = function() {
    	this.turnScore += rollNumber;
    }

    Player.prototype.addTotalScore = function() {
    	this.totalScore += this.turnScore;
    }

    function roll1() {
      min = Math.ceil(1);
      max = Math.floor(6);
      rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      compare1();
    }

    function hold1() {
    	addTotalScore();
    }

    function compare1() {
    	if (rollNumber === 1) {
      	player1.setToZero();
      } else {
      	player1.addTurnScore();
      }
    }

    function roll2() {
      min = Math.ceil(1);
      max = Math.floor(6);
      rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      compare2();
    }

    function hold2() {
      addTotalScore();
    }

    function compare2() {
      if (rollNumber === 1) {
        player2.setToZero();
      } else {
        player2.addTurnScore();
      }
    }

    var rollNumber;

//UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var inputName1 = $("#player1-name").val();
    var inputName2 = $("#player2-name").val();

    var player1 = new Player(inputName1);
    var player2 = new Player(inputName2);
    //alert(player1.name + player2.name);
    $("#output-name1").text(player1.name);
    $("#output-name2").text(player2.name);
    

  });
});
