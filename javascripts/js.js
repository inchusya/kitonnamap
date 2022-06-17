$(document).ready(function(){

$("#searchb").click(function(){
       document.location.href = "./error.html";

});


  $("input").keydown(function(){
      if (event.key === "Enter")
      document.location.href = "./error.html";

    });


let a = 262;
while (a > 0) {
  a -= 1;
  $("#hid").clone().appendTo("#inlineError");
}


$("#inlineError p").hover(function(){
  $(this).css("opacity", "0");
},
function() {
  $(this).css("opacity", "0");
});


$("#hidb").click(function(){
       document.location.href = "./gruz.html";

});
$(".logoimg").click(function(){
       document.location.href = "./index.html";

});
$(".navig1").click(function(){
       document.location.href = "./about.html";

});
$(".navig2").click(function(){
       document.location.href = "./raspisanie.html";

});
$(".navig3").click(function(){
       document.location.href = "./news.html";

});
$(".navig4").click(function(){
       document.location.href = "./gruz.html";

});
$(".navig5").click(function(){
       document.location.href = "./merch.html";

});







});
