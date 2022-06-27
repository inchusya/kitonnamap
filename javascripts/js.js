$(document).ready(function(){

$("#searchb").click(function(){
       document.location.href = "./error.html";

});


  $("input").keydown(function(){
      if (event.key === "Enter")
      document.location.href = "./error.html";

    });


$(".textrun").clone().appendTo(".devider");

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







  $(".t1").click(function () {
    $(this).toggleClass("texp");
    $(".texpt1").toggleClass("visible");
  });

  $(".t2").click(function () {
    $(this).toggleClass("texp");
    $(".texpt2").toggleClass("visible");
  });

  $(".t3").click(function () {
    $(this).toggleClass("texp");
    $(".texpt3").toggleClass("visible");
  });

  $(".t4").click(function () {
    $(this).toggleClass("texp");
    $(".texpt4").toggleClass("visible");
  });

  $(".t5").click(function () {
    $(this).toggleClass("texp");
    $(".texpt5").toggleClass("visible");
  });

  $(".t6").click(function () {
    $(this).toggleClass("texp");
    $(".texpt6").toggleClass("visible");
  });

  $(".t7").click(function () {
    $(this).toggleClass("texp");
    $(".texpt7").toggleClass("visible");
  });

  $(".t8").click(function () {
    $(this).toggleClass("texp");
    $(".texpt8").toggleClass("visible");
  });

});
