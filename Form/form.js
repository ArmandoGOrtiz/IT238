$(function () {
  $("#majorSelection").hide();
  $("#user").focus();

  $(function () {
    $(".note").hide();
    $(".icon").css("position", "relative");

    $(".note").each(function () {
      var topPos = - $(this).outerHeight() + "px";
      $(this).css("position", "absolute");
      $(this).css("left", "0");
      $(this).css("top", topPos);
    })
    $(".icon").hover(function () {
      //hover handler
      console.log("hover event!");
      $(this).children(".note").show()
    },
      function () {
        // unhover handler
        console.log("unhover event!");
        $(".note").hide();


      })


    $("#majorYes").click(function () {
      $("#majorSelection").slideDown(700);
    });

    $("#majorNo").click(function () {
      $("#majorSelection").slideUp();
    });

    $("form").submit(function (evt) {
      // alert("Hey!");
      if ($("#user").val().length === 0) {
        // alert("need name");
        // $("#uPanel").append("Name is required").css("color", "red");
        evt.preventDefault();
        // return false;
      }

    });

    $("#user").blur(function () {
      console.log("Demo of the blur event");
      if ($("#user").val().length === 0) {
        $("#uPanel").append("Name is required").css("color", "red");
      }
    });
  });
});