// Armando Ortiz dice code for assignment 2
$(function() {
    dice = new DiceSet();

    $("#rollButton").click(function() {
        result = dice.roll();
        numDice = result.length;
        hisDice = dice.history;
        sideDice = dice.sides;
        $("#result").html("Just rolled " + numDice + " dice of " + sideDice + " sides " );
        $("#historyArea").html("History so far: "+ hisDice);
        $("#averageArea").html("The Average so far: "+ dice.getAverage());
        $("#diceRoll").html(result + "")
    })
})

$(function() {
    $("#resetButton").click(function() {
    dice.reset();
    })
})

$(function() {
    $("#8Button").click(function() {
        dice.setNumSides(8);
    })
})

$(function() {
    $("#6Button").click(function() {
        dice.setNumSides(6);
    })
})

$(function() {
    $("#4setButton").click(function() {
        dice.setDiceSetSize(4);
    })
})

$(function() {
    $("#2setButton").click(function() {
        dice.setDiceSetSize(2);
    })
})