// BUSINESS LOGIC

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
};



var roll = function() {
 rollScore = 0;
 rollScore += randomRoll();
 if (rollScore === 1) {
   changePlayer();
   rollScore = 0;
 } 
};






// USER LOGIC

$(document).ready(function() {
  $("form#startingForm").submit(function(event) {
    event.preventDefault();

    var player1name = $("#player1name").val();
    var player2name = $("#player2name").val();

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




  });

});
