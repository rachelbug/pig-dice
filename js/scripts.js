// BUSINESS LOGIC

<<<<<<< HEAD
 function Game(player1name, player2name) {
   this.player1Name = player1name;
   this.player2Name = player2name;
   this.p1score = 0;
   this.p2score = 0;
   this.player1active = true;
   this.rollScore = 0;
 }

 Game.prototype.collect = function() {
    if(this.player1active) {
      this.p1score += this.rollScore;
    }
    else {
      this.p2score += this.rollScore;
    }
    this.switch();

 };

Game.prototype.switch = function() {
  this.player1active = !this.player1active;
  this.rollScore = 0;
};

randomRoll = function() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
=======
 function Player(name, score) {
   this.playerName = name;
   this.playerScore = score;
 }

 Player.prototype.addScore = function() {
 };

var activePlayer;
var rollScore;

var changePlayer = function() {
  if (activePlayer === player1) {
    activePlayer = player2;
  } else if (activePlayer === player2) {
    activePlayer = player1;
  }
};

randomRoll = function() {
  return  Math.floor(Math.random() * (6 - 1 + 1)) + 1;
>>>>>>> e2495febd00ec2f04251cd35cc33b9ffdae40c78
};



<<<<<<< HEAD
Game.prototype.roll = function() {
  var currentRoll = randomRoll();
  if (currentRoll === 1) {
    this.switch();
  } else {
    this.rollScore += currentRoll;
  }
  console.log(this);
  console.log(this.p1score + " " + this.p2score + " " + this.rollScore);


};
=======
var roll = function() {
 rollScore = 0;
 rollScore += randomRoll();
 if (rollScore === 1) {
   changePlayer();
   rollScore = 0;
 } 
};


>>>>>>> e2495febd00ec2f04251cd35cc33b9ffdae40c78




// USER LOGIC

$(document).ready(function() {
<<<<<<< HEAD

$("button#rules-display").click(function(event) {
    event.preventDefault();
    $("#rulespopup").slideToggle(1000, function() {
      $("#rulespopup h1, #rulespopup ol").toggle();
    });

});

$("#startButton").click(function() {
  $("#startButton").fadeOut(1000, function() {
    $(".newgamediv").hide();
    $("#intro-view").show();
  });

});



=======
>>>>>>> e2495febd00ec2f04251cd35cc33b9ffdae40c78
  $("form#startingForm").submit(function(event) {
    event.preventDefault();

    var player1name = $("#player1name").val();
    var player2name = $("#player2name").val();

<<<<<<< HEAD
    var newGame = new Game(player1name, player2name);

    $("#intro-view").fadeOut(2000, function() {
      $("#gameTimeRow").fadeIn(2000);
      $("div#playerOneName").prepend("<h3 class='text-center'>" + newGame.player1Name + "'s Score:</h3>");
      $("div#playerTwoName").prepend("<h3 class='text-center'>" + newGame.player2Name + "'s Score:</h3>");
      updateDisplay(newGame.p1score, newGame.p2score, newGame.rollScore, newGame.player1active);
    });



    $("#dice").click(function () {
      newGame.roll();
      updateDisplay(newGame.p1score, newGame.p2score, newGame.rollScore, newGame.player1active);

    });

    $("#collectButton").click(function() {
      newGame.collect();
      updateDisplay(newGame.p1score, newGame.p2score, newGame.rollScore, newGame.player1active);
      if (newGame.p1score >= 100) {
        $("")
      }


    });
=======
    var player1 = new Player(player1name, 0);
    var player2 = new Player(player2name, 0);

    $("#intro-view").fadeOut(2000, function() {
      $("#gameTimeRow").fadeIn(2000);

    });

    activePlayer = player1;

    $("#dice").click(function () {
      roll();
      alert(rollScore);


    });


>>>>>>> e2495febd00ec2f04251cd35cc33b9ffdae40c78


  });

});
<<<<<<< HEAD


var updateDisplay = function(p1score, p2score, rollscore, isp1active) {
  $("#player1score").text(p1score);
  $("#player2score").text(p2score);
  $("#currentRoll").text(rollscore);

  if (isp1active) {
    $("#playerOneName").addClass("current");
    $("#playerTwoName").removeClass("current");
  } else {
    $("#playerOneName").removeClass("current");
    $("#playerTwoName").addClass("current");
  }
};
=======
>>>>>>> e2495febd00ec2f04251cd35cc33b9ffdae40c78
