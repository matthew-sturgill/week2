$(function() {
 $("html").css("background-color", "lightgrey");
 $("body").css("text-align", "center");
 $("body").css("font-family", "impact");
 $("li").css("list-style-type", "none");
  $("li").css("display", "inline");
  $("li").click(function() {
        $(this).appendTo("<li>","</li>");
    });




});

