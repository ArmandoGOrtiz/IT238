// Armando Oritz Currency converter of USD to top 4 global currencys
$(document).ready(function(){
    $("#convertButton").click(function(){

        var amount;
        var econ=$("#desiredCurrency").val();
        var usd = Number($("#usdField").val());
        if (econ ==="Euro"){
            amount = usd * 0.87;
        }
        else if (econ === "Pound"){
            amount= usd * 0.78;
            }
        else if (econ === "Yuan") {
            amount= usd * 6.76;
            }
        else if (econ === "Yen") {
            amount= usd * 108.10;
            }    

        var result = " The conversion to the currency you chose equates to " + amount.toFixed(2) 
        
        $("#currencyArea").html(result)
        });
    });