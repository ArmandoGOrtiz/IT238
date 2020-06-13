console.log("Howdy Partner what are ye doing!!!");// Gives our rights to the console will appear in the developer tool console
// same as $(document).ready(function()
$(function(){ 
   
    console.log("What is going on here?");
    $("#convertButton").click(function(){
        console.log("Cheers");
        var miles = Number($("#kmField").val()) * 0.62 
        var message = "Equivalent Miles:" + miles 
        $("#display").html(message)
    });

});
console.log("Bye Bye Birdy");