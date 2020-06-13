// Armando Ortiz Js code for assignment 5
$(function() {
    var attemptCount;
    attemptCount = 0;

    $(function() {
        $(".note").hide();
        $(".icon").css("position" , "relative");
        
        $(".note").each(function(){
            var topPos = - $(this).outerHeight() + "px";
            $(this).css("position" , "absolute");
            $(this).css("left" , "0");
            $(this).css("top" , topPos);
        })
        $(".icon").hover(function(){
            //hover handler
            console.log("hover event!"); 
            $(this).children(".note").show() 
        },  
        function(){
            // unhover handler
            console.log("unhover event!");
            $(".note").hide();
    
    
        })
     
    $("#checkButton").click(function() {
       console.log($('#jamestownItem'&&'#roanoketeItem'&&'#newnetherlandsItem').prop("checked"));
       var count;
       count = 0;
       attemptCount = attemptCount + 1;
       $("#results").val("");
                
       if ($('#blueNorth').prop("checked")) {
          count = count + 1;
          $('#results').val( 
             $('#results').val() + "Question 1 is right" + "\n"
             );
        }
        else {
            $('#results').val( 
                $('#results').val() + "Question 1 is incorrect" + "\n"
                );
        }

        if($('#yearTwo').prop("checked")){
            count = count + 1;
          $('#results').val( 
             $('#results').val() + "Question 2 is right" + "\n"
             );
        }
        else {
            $('#results').val( 
                $('#results').val() + "Question 2 is incorrect" + "\n"
                );
        }
      
       if ($('#ukItem'&&'#sovietItem'&&'#australiaItem').prop("checked")) {
          count = count + 1;
          $('#results').val( 
            $('#results').val() + "Question 3 is right" + "\n"
            );
       }
       else {
        $('#results').val( 
            $('#results').val() + "Question 3 is incorrect" + "\n"
            );
        }

       if ($('#adversaryOne').prop("checked")) {
        count = count + 1;
        $('#results').val( 
           $('#results').val() + "Question 4 is right" + "\n"
           );
        }
        else {
            $('#results').val( 
                $('#results').val() + "Question 4 is incorrect" + "\n"
                );
        }

        if ($('#jamestownItem'&&'#roanoketeItem'&&'#newnetherlandsItem').prop("checked")) {
            count = count + 1;
            $('#results').val( 
              $('#results').val() + "Question 5 is right" + "\n"
              );
        }
        else {
            $('#results').val( 
                $('#results').val() + "Question 5 is incorrect" + "\n"
                );
        }
        
       $('#results').val( 
          $('#results').val() + "You got " + count + " correct." + "\n"
       );
       $('#results').val( 
          $('#results').val() + "Number of attempts: " + attemptCount + "\n"
       ); 
       if(count==5){
        $('#results').val( 
            $('#results').val() + "You got an A"+ "\n"
         );
       }
       else if(count==4){
        $('#results').val( 
            $('#results').val() + "You got an B"+ "\n"
         );
       }
       else if(count==3){
        $('#results').val( 
            $('#results').val() + "You got an C"+ "\n"
         );
       }
       else if(count==2){
        $('#results').val( 
            $('#results').val() + "You got an D"+ "\n"
         );
       }
       else if(count<=1){
        $('#results').val( 
            $('#results').val() + "You got an F"+ "\n"
         );
       }
    });
 })
});