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





  let count = 0;
  $(".slider2").click(function () {
  count += 1;
  if (count == 1) {
  $(".p2").css("z-index", 1);
  $(".p3, .p1").css("z-index", "inherit");
  };
  if (count == 2) {
    $(".p3").css("z-index", 1);
    $(".p2, .p1").css("z-index", "inherit");
  };
  if (count == 3) {
    $(".p1").css("z-index", 1);
    $(".p2, .p3").css("z-index", "inherit");
    count=0;
  };
});

let count1 = 0;
$(".slider12").click(function () {
count1 += 1;
if (count1 == 1) {
$(".p12").css("z-index", 1);
$(".p13, .p11").css("z-index", "inherit");
};
if (count1 == 2) {
  $(".p13").css("z-index", 1);
  $(".p12, .p11").css("z-index", "inherit");
};
if (count1 == 3) {
  $(".p11").css("z-index", 1);
  $(".p12, .p13").css("z-index", "inherit");
  count1=0;
};
});


let count2 = 0;
$(".slider22").click(function () {
count2 += 1;
if (count2 == 1) {
$(".p22").css("z-index", 1);
$(".p23, .p21").css("z-index", "inherit");
};
if (count2 == 2) {
  $(".p23").css("z-index", 1);
  $(".p22, .p21").css("z-index", "inherit");
};
if (count2 == 3) {
  $(".p21").css("z-index", 1);
  $(".p22, .p23").css("z-index", "inherit");
  count2=0;
};
});



let count3 = 0;
$(".slider32").click(function () {
count3 += 1;
if (count3 == 1) {
$(".p32").css("z-index", 1);
$(".p33, .p31").css("z-index", "inherit");
};
if (count3 == 2) {
  $(".p33").css("z-index", 1);
  $(".p32, .p31").css("z-index", "inherit");
};
if (count3 == 3) {
  $(".p31").css("z-index", 1);
  $(".p32, .p33").css("z-index", "inherit");
  count3=0;
};
});



let count4 = 0;
$(".slider42").click(function () {
count4 += 1;
if (count4 == 1) {
$(".p42").css("z-index", 1);
$(".p43, .p41").css("z-index", "inherit");
};
if (count4 == 2) {
  $(".p43").css("z-index", 1);
  $(".p42, .p41").css("z-index", "inherit");
};
if (count4 == 3) {
  $(".p41").css("z-index", 1);
  $(".p42, .p43").css("z-index", "inherit");
  count4=0;
};
});

$(".merch1").click(function(){
       document.location.href = "./hat.html";

});

$(".merch2").click(function(){
       document.location.href = "./book.html";

});
$(".merch3").click(function(){
       document.location.href = "./coat.html";

});
$(".merch4").click(function(){
       document.location.href = "./weight.html";

});
$(".merch5").click(function(){
       document.location.href = "./sticker.html";

});
$(".merch6").click(function(){
       document.location.href = "./pen.html";

});

});
