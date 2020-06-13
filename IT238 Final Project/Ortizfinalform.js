//Js code for the order and pick up page
$(function(){
    $("#softDrink").hide();
    $("#softSelection").hide();
    $("#drinkSelection").hide();
    $("#message").hide();
    $("#user").focus();

    $("#drinkY").click(function () {
        $("#softDrink").slideDown(700);
    });
    $("#drinkN").click(function () {
        $("#softDrink").slideUp(700);
        $("#softs").val("none");
        $("#drinks").val("none");
    });
    $("#softY").click(function () {
        $("#softSelection").slideDown(700);
        $("#drinkSelection").slideUp(700);
        $("#drinks").val("none");
    });
    $("#softN").click(function () {
        $("#drinkSelection").slideDown(900);
        $("#softSelection").slideUp(500);
        $("#softs").val("none");
    });
    $("form").submit(function (evt) {
        if ($("#user").val().length === 0) {
          evt.preventDefault();
        }
      });
    $("#user").blur(function () {
        console.log("Demo of the blur event");
        if ($("#user").val().length === 0) {
          $("#uPanel").append("Name is required").css("color", "red");
        }
    });
})