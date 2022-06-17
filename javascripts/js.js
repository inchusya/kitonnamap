$(document).ready(function(){

$("#searchb").click(function(){
       document.location.href = "./error.html";

});

// if (event.key === "Enter") {
//     document.getElementById("#searchb").click();
// }
//
// var el = document.getElementById("#search");
// el.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         document.getElementById("#searchb").click(function(){
//                  document.location.href = "./error.html";
//           });
//     }
// });

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


});
