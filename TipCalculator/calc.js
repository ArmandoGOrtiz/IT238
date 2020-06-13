$(document).ready(function(){ // event handler when all html code has been loaded
    $("#calcButton").click(function(){ // event that occurs when user clicks click button this code runs 
        //alert("Hey There!");
        //var tip=document.getElementById('checkField').value * 0.20
        //document.getElementById('tipArea').innerHTML = " The tip is $" + tip

        var tip;
        var level=$("#serviceSelect").val();
        var checkValue = Number($("#checkField").val());
        if (level==="Good"){
            tip= checkValue * 0.20;
        }
        else if (level === "Fair"){
            tip= checkValue * 0.15;
            }
        else {
            tip= checkValue * 0.10;
            }

        var message= " The tip is $" + tip
        var total = tip + checkValue
        message = message + " and the total is " + total
        
        $("#tipArea").html(message)
        });
    });