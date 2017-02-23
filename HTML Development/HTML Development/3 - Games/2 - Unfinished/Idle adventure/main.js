
$( document ).ready(function(){
  /*
  In all function modules, remember that ALL OPTIONS HAVE FALLBACKS and you do not need to fill them all.
  newTab(name,content,toggled,selected)
   setPopover(element,title,content,killButton,toggled,next,position,onclick)
  deletePopover(),togglePopover(),showPopover(),hidePopover()
  setTooltip(element,title,position)
  deleteTooltip(),toggleTooltip(),showTooltip(),hideTooltip()
  */

  //Init
$("#content tab").hide()
$("#content tab").addClass("content")
newTab("Main",true,true)
newTab("Story")
$("#maincontent").show()
$("#Main").addClass("active")
storyGen("Derp Adventure","You wake up in a room...","story.s1")
  //Main JavaScript
})
