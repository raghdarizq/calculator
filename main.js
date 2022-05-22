$(document).ready(function () {
  $("#clear").click(function(){
    $('#inp').val("");
  })
  $("#delete").click(function(){
    let inpvalue = $('#inp').val();
    $('#inp').val(inpvalue.substring(-1, inpvalue.length - 1));
  })
  $(".prees").click(function(){
    let inpvalue = $('.prees').val();
    $('#inp').val(inpvalue);
  })
  $("#res").click(function(){
    let inpvalue = $('#inp').val();
    let char = inpvalue.charAt(0);
    if(char =="+" || char == '-' || char == '*' || char == '/'){
      $('#inp').val("ERROR")
    }
  })
  $(".Numb").click(function(){
    let val1 = $(this).val();
    let val2 = $( "#inp" ).val();
    $('#inp').val(val2+val1);
  })
    $(".Signal").click(function(){
      let val = eval($("#inp").val());
      $( "#inp" ).val(val );
})
});

