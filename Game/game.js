// Demo code for the Archaeology game
//
// Loaded by game.html
// Uses GameBoard object defined in board.js
//

// Warning! The function tryDig and the variable board are global variables!

// As global variables, tryDig and board can be accessed from the console
// Examples from console:
//     tryDig("c3");
// Note that tryDig just performs a "dig" operation on the board. You can
// also try this on the console:
//     obj = board.dig("d5");
$(function () {
  var ruin = 0
  var Success = 0
  var totaldig = 0
  $("#totalRuins").html("Total ruins found: " + ruin)
  $("#totalAttempts").html("Total dig attempts: " + totaldig)
  $("#totalSuccess").html("Total successful digs: " + Success)
  tryDig = function(targetCell)
  {
    var targetObj = board.dig(targetCell);
  
    if (targetObj) {
      $("#results").css('color','green');
      $("#results").html('Success finding a part of the ' + targetObj.name);
      $("#cell"+targetCell).html('O');
      $("#cell"+targetCell).css('color', 'green');
      Success++
      totaldig++
      $("#totalSuccess").html("Total successful digs: " + Success)
      $("#totalAttempts").html("Total dig attempts: " + totaldig)
    }
    else {
      $("#results").css('color','red');
      $("#results").html('Failure nothing found!');
      totaldig++
      $("#cell"+targetCell).html('X').css('color', 'red');
      $("#totalAttempts").html("Total dig attempts: " + totaldig)
    }
    if(board.ruins[0].size == board.ruins[0].successes){
      $("#results").html("The Palace was found!")
      ruin = ruin + 1
      board.ruins[0].successes++
      $("#totalRuins").html("Total ruins found: " + ruin)}
    else if(board.ruins[1].size == board.ruins[1].successes){
      $("#results").html("The Temple was found!")
      ruin = ruin + 1
      board.ruins[1].successes++
      $("#totalRuins").html("Total ruins found: " + ruin)}
    else if(board.ruins[2].size == board.ruins[2].successes){
      $("#results").html("The Forum was found!")
      ruin = ruin + 1
      board.ruins[2].successes++
      $("#totalRuins").html("Total ruins found: " + ruin)}
    else if(board.ruins[3].size == board.ruins[3].successes){
      $("#results").html("The House was found!")
      ruin = ruin + 1
      board.ruins[3].successes++
      $("#totalRuins").html("Total ruins found: " + ruin)}
    else if(board.ruins[4].size == board.ruins[4].successes){
      $("#results").html("The Hut was found!")
      ruin = ruin + 1
      board.ruins[4].successes++
      $("#totalRuins").html("Total ruins found: " + ruin)}
    
    if(ruin==5 && totaldig == 18){
      $("#results").html('Congragulation you found all the ruins and have achieved rank S');
    }
    else if(ruin==5 && totaldig >= 19 && totaldig < 29){
      $("#results").html('Congragulation you found all the ruins and have achieved rank A');
    }
    else if(ruin==5 && totaldig >= 29 && totaldig < 39){
      $("#results").html('Congragulation you found all the ruins and have achieved rank B');
    }
    else if(ruin==5 && totaldig >= 39 && totaldig < 49){
      $("#results").html('Congragulation you found all the ruins and have achieved rank C');
    }
    else if(ruin==5 && totaldig >= 49 && totaldig < 59){
      $("#results").html('Congragulation you found all the ruins and have achieved rank D');
    }
    else if(ruin==5 && totaldig >= 59){
      $("#results").html('Congragulation you found all the ruins and have achieved rank E');
    }  
  }
      
  board = new GameBoard();
  board.setBoard();
  
  tryDig("b3");

  $("#digButton").click(function() {
    tryDig($("#tileField").val());
  })


})

