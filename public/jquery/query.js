$(document).ready(function(){

$('#hoverPointer').click(function(){
  var sref = $(this).find("ui").attr("sref");
  if(sref) {
    window.location = sref;
  }
});
$('#hoverPointer').hover(function(){
  $(this).css("cursor","pointer");
});



});
