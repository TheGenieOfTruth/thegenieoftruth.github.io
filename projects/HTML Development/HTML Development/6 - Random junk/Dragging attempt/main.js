$( document ).ready(function() {
var cloned = "";

$('.draggable, .clonedrag').hover(function () {
 cloned = $(this).clone();


});
function handleDropEvent (event, ui) {
  if(ui.draggable.hasClass("clonedrag")){
alert("Y")
  }
  else{
  this.innerHTML = ""
  cloned.appendTo(this);

    $(this).draggable({
    clone:true,revert: true,revertDuration:0,helper:'clone'
  })
  $(this).addClass("draggable")
  if(ui.draggable.text().length==0){
  ui.draggable.removeClass("draggable")
  ui.draggable.draggable({cancel : 'span'})}

}}
$(".clonedrag" ).draggable({ 
  clone:true,revert: true,revertDuration:0,helper:'clone'})
$(".draggable" ).draggable({ 
  clone:true,revert: true,revertDuration:0,helper:'clone'})
$(".droppable").droppable({
  accept: '.draggable',
  accept: '.clonedrag',
  drop:handleDropEvent
})
})