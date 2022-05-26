$(document).ready(function () {
  $("#clear").click(function () {
    $("#inp").val("");
  });

  $("#delete").click(function () {
    let inpvalue = $("#inp").val();
    $("#inp").val(inpvalue.substring(-1, inpvalue.length - 1));
    if (inpvalue === "ERROR") {
      $("#inp").val("");
    }
  });

  $(".Numb").click(function Numb() {
    let val1 = $(this).val();
    let val2 = $("#inp").val();
    $("#inp").val(val2 + val1);
  });


  $(".Equel").click(function () {
    let inpvalue = $("#inp").val();
    let char = inpvalue.charAt(inpvalue.length - 1);
    if (char == "+" || char == "-" || char == "*" || char == "/") {
      $("#inp").val("ERROR");
      $("#inp").keypress(function () {
        $("#inp").val("");
      });
    }
  });

  $(".Signal").click(function () {
    let inpvalue = $("#inp").val();
    let final = eval(inpvalue);
    $("#inp").val(final);
  });


  $("#inp").keyup(function () {
    let inpvalue = $("#inp").val();
    let dont = inpvalue.charAt(0);
    if (dont == "+" || dont == "-" || dont == "*" || dont == "/") {
      $("#inp").val("");
    }
  });

  $(".sp").click(function () {
    let inpvalue = $("#inp").val();
    let dont = inpvalue.charAt(0);
    if (dont == "+" || dont == "-" || dont == "*" || dont == "/") {
      $("#inp").val("");
    }
  });
});
