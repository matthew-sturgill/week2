$(function() {
    $("#para").click(function() {
        $(this).fadeOut('slow','linear');
    });
    $("h3").css("text-decoration", "underline");
    $("ul").find("li:first-child")
    .css("color", "red")
    
       

    });


 $("#add").click(function() {
  $("ul").appendTo("<li>Item 2</li>");
  $("#name").blur(function() {
      var name = $(ev.target).val();
      alert("hello," + name);
      function createInput(){
    var $input = $('<input type="button" value="new button" />');
    $input.appendTo($("body"));
}

  }
 
 });
