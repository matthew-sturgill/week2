$(function(){
    $("button#add").click(function(ev){
       var newcar = $("#newcar")
       .val();
           if(newcar == "") return;

           $("#list").append("<li>"+ newcar + "</li>");

           $("newcar").val("");
       
    })


});