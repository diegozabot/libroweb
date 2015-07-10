$(function() {
  $("#sidebar").height($(window).height() - 90);

  $("h1").click(switchCassetto);

  $("iframe").css("height",$(window).height()-80);

});

function switchCassetto() {
  $("#sidebar").toggleClass("chiuso");
}

function content(n){
  $("#content1").hide();
  $("#content2").hide();
   $("#content3").hide();
  $("#content"+n).show();
  $("#sidebar").addClass("chiuso");
}