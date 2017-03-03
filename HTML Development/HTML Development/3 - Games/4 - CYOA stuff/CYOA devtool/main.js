function generateOptionsPopover(){
    for(i=0;i<4;i++){
        eval(arguments[i]+"Popover = function(element){$(element).popover('"+arguments[i]+"')}")
    }
}
generateOptionsPopover("delete","show","hide","toggle")
//
function setPopover(element,title,content,killButton,toggled,next,position,onclick,trigger){
    function render(input,fallback){
        if(input==undefined||input=="default"){
            return fallback
        }
        else{
            return input
        }
    }
    var element = render(arguments[0],"")
    var title = render(arguments[1],"Title")
    var content = render(arguments[2],"Hmmm, there should be stuff here but instead there is the default fallback.")
    var killButton = render(arguments[3],"")
    var toggled = render(arguments[4],"false")
    var next = render(arguments[5],"")
    var position = render(arguments[6],"bottom")
    var onclick = render(arguments[7],"")
    var trigger = render(arguments[8],"click")
    var eleOffset = $(element).position();
    console.log(eleOffset)
    $(element).attr('data-content', content)
    .attr('onclick',onclick)
    .attr('data-trigger',trigger)
    .attr("data-placement",position)
    .attr("data-html",true)
    .attr('title',title)
    .popover('fixTitle')

    if(toggled){
        $(element).popover('show');
    }
    hidePopover(element)
}
function addItem(obj,loc1){
    var loc1 = loc1 //String getObjName
    var loc2 = obj.parentElement //DOM getObjName
    var loc3 = eval(loc1) //Object getObjName
    console.log(loc1)
    console.log(loc2)
    console.log(loc3)
    var pos = loc3.length
    loc3[loc3.length] = {
        name: 'Choice description here',
        link: {
            lore:"Lore here",
            choices: []
        }
    }
    var code = "<li><b><input data-loc = "+loc1+"["+pos+"] oninput = \"edit(\'getObjName( `"+loc1+"["+pos+"].name`)\',this)\" value = \"" + loc3[loc3.length-1].name + "\"></b>"+"<meh><i><textarea style = margin-left:39px data-loc = \""+loc1.substring(6,loc1.length)+"["+String(Number(loc3.length)-1)+"]"+".link\" oninput = edit('getObjName(`" +
    loc1+"["+pos+"]" + ".link.lore`)',this)>Lore here</textarea></i></meh>"+"</li>"
    console.log(code)
    $(code).appendTo(loc2)
    $(this).remove()
    $(obj).appendTo(loc2)
    initDefault()
}
function getObjName(chapter, attribute,nostory) {
    var extra = ""
    if (attribute == undefined||attribute == '') {
        var attribute = ""
    } else {
        attribute = "." + attribute
    }
    //Can pick chapter and wanted attribute inside of choice.
    //Arguments 2 and above is for brancing choices
    for (i = 3; i < arguments.length; i++) {
        if (i == 3) {
            extra += extra + ".choices[" + arguments[i] + "]"
        } else {
            extra += extra + ".choices[" + arguments[i] + "].link"
        }
    }
        if(!((chapter + extra + attribute).substring(0,6)==="story.")){
            return "story." + chapter + extra + attribute
        }
        else{
            return chapter + extra + attribute
        }
}

function edit(loc, obj) {
    var c1 = !(obj.value==undefined)
    var c2 = !(obj.innerHTML==undefined)
    if(c1){
        value = obj.value
    } else if(c2){
        value = obj.innnerHTML
    } else{
        value = ""
    }
    if(!(eval(eval(loc)) === undefined)){
        loc = eval(loc)
    }
    if(!(loc.substring(0,5)==="story")){
        loc = "story." + loc
    }
    if(c2){
        eval(loc + "=`" + value + "`")
    } else{
        eval(loc + "='" + value + "'")
    }
}
var story = Object()
story.s1 = C:\Users\Luke\Desktop\HTML Development Backups\Backup 61\HTML Development\3 - Games\4 - CYOA stuff\CYOA interpretor\main.html

function renderPaths(chapter, chaptername) {
    var codes = "<ul>"
    codes = codes + "<i><textarea data-loc = \""+chaptername+"\" oninput = edit(\"getObjName('" +
    chaptername + ".lore')\",this)>" + eval("story."+chaptername+".lore") + "</textarea></i>"
        //Fun name! Loops loops insides of loops to generate a list.

    function loopLoopList(segment, loc) {
        if (!(segment.link == undefined)) {
            if (!(segment.link.lore == undefined)) {
                if (segment.link.choices.length > 0) {
                    codes += "<ul>"
                    codes +=
                        "<i><textarea data-loc = \""+loc+".link\" oninput = edit(\"getObjName('" +
                        loc + ".link.lore')\",this)>" + segment.link
                        .lore + "</textarea></i>"
                    for (i = 0; i < segment.link.choices.length; i++) {
                        codes +=
                            "<li><b><input data-loc = \""+loc+".link.choices["+i+"]\" oninput = edit(\"getObjName('" +
                            loc + "','link.choices[" + i +
                            "].name')\",this) value = \"" + segment.link.choices[
                                i].name + "\"></b>"
                        if (!(segment.link.choices[i].link == undefined)) {
                            loopLoopList(segment.link.choices[i], loc +
                                ".link.choices[" + i + "]")
                        }
                        codes += "</li>"
                    }
                    var btncode = "addItem(this,'story."+loc+".link.choices')"
                    codes+= "<br/><button class = \"btn btn-default btn-xxs\" onclick = \""+btncode+"\">+</button>"

                    codes += "</ul>"
                }
                else{

                    codes +=
                        "<meh><i><textarea style = margin-left:39px data-loc = \""+loc+".link\" oninput = edit(\"getObjName('" +
                        loc + ".link.lore')\",this)>" + segment.link
                        .lore + "</textarea></i></meh>"
                }
            }
        }
    }
    let constantsize = chapter.choices.length
    for (j = 0; j < constantsize; j++) {
        var i = j
        console.log("hi")
        codes += "<li><b><input data-loc = "+chaptername+".choices["+j+"] oninput = edit(\"getObjName('" + chaptername +
            "','name',false," + String(i) + ")\",this) value = \"" + chapter.choices[
                i].name + "\"></b>"
        loopLoopList(chapter.choices[i], chaptername + ".choices[" + i +
            "]")
        codes += "</li>"
    }
    var btncode = "addItem(this,'story."+chaptername+".choices')"
    codes+= "<br/><button class = \"btn btn-default btn-xxs\" onclick = \""+btncode+"\">+</button>"
    $("#content").html(codes + "</ul>")
}
function deleteBranch(){
    console.log("story."+currentpos)
    if(itemtype === "choice"){
        var piece;
        for(i=0;i<currentpos.length;i++){
            if(!isNaN(currentpos.substring(currentpos.length-2-i,currentpos.length-1-i))){
                var j = i+1
                piece = currentpos.substring(currentpos.length-2-i,currentpos.length-1-i)
                i = currentpos.length
                for(i = j;i < currentpos.length;i++){
                    if(isNaN(currentpos.substring(currentpos.length-2-i,currentpos.length-1-i))){
                        i = currentpos.length
                    }
                    else{
                        piece = currentpos.substring(currentpos.length-2-i,currentpos.length-1-i) + piece
                    }
                }
            }
        }
        console.log(piece)
        currentpos = currentpos.substring(0,currentpos.length-3)
        if(currentpos.substring(0,5) === "story"){
            eval(currentpos + ".splice("+piece+",1)");
        }
        else{
            eval("story."+currentpos + ".splice("+piece+",1)");
        }
    }
    if(itemtype === "lore"){
        if(currentpos.substring(0,5) === "story"){
            eval(currentpos + "=''");
        }
        else{
            eval("story."+currentpos + "=''");
        }
    }
    if(itemtype === "lore"){
        if(item.parentElement.parentElement.tagName=="MEH"){
            item.parentElement.parentElement.innerHTML = ""
        }
        else if(item.parentElement.parentElement.tagName=="UL"){
            item.parentElement.parentElement.innerHTML = ""
        } else if(item.parentElement.tagName == "I"){
            item.parentElement.innerHTML = ""
        } else{
            console.error("Welp. Ya couldn't delete the branch because of some weird glitch with parent elements... But I can tell you a few things. For starters, the elements double parent's tag  "+item.parentElement.parentElement.tagName+" was and its single parent's was " + item.parentElement.tagName + ". You're supposed to have MEH, UL or I for this to work.")
        }
    }
    if(itemtype === "choice"){
        if(item.parentElement.parentElement.tagName=="LI"){
            item.parentElement.parentElement.outerHTML = ""
        }
        else if(item.parentElement.parentElement.tagName=="UL"){
            item.parentElement.parentElement.innerHTML = ""
        } else if(item.parentElement.tagName == "I"){
            item.parentElement.innerHTML = ""
        } else{
            console.error("Welp. Ya couldn't delete the branch because of some weird glitch with parent elements... But I can tell you a few things. For starters, the elements double parent's tag  "+item.parentElement.parentElement.tagName+" was and its single parent's was " + item.parentElement.tagName + ". You're supposed to have LI for this to work.")
        }
    }

}
function continueBranch() {
    var safepos = currentpos
    currentpos = "story." + currentpos
    if(currentpos.substring(0,11)==="story.story"){
        currentpos = currentpos.substring(6,currentpos.length-8)
    }
    if(safepos.substring(safepos.length-8,safepos.length)===".choices"){
        safepos = safepos.substring(0,safepos.length-8)
    }
    var stringpos = currentpos
    currentpos = eval(currentpos)
    currentpos.choices[currentpos.choices.length] = {
        name: 'Choice description here',
        link: {
            lore:"Lore here",
            choices: []
        }
    }
    var btncode = "addItem(this,'"+stringpos+".choices')"
    var template = "<b><input data-loc = \""+safepos+".choices["+String(Number(currentpos.choices.length) - 1)+"]\" oninput = edit(\"getObjName('" + stringpos +
        ".choices[" + String(Number(currentpos.choices.length) - 1) + "]" +
        "','name'" +
        ")\",this) value = \"Choice description here\"></b>" +
        "<meh><i><textarea style = margin-left:39px data-loc = \""+safepos+".choices["+String(Number(currentpos.choices.length) - 1)+"].link\" oninput = edit(\"getObjName('" +
        stringpos + ".choices["+String(Number(currentpos.choices.length) - 1)+"]" + ".link.lore','')\",this)>Lore here</textarea></i></meh>"+"<br/><button class = \"btn btn-default btn-xxs\" onclick = \""+btncode+"\">+</button>"
    if (item.parentElement.parentElement.tagName === "UL") {
        $("<li>" + template + "</li>").appendTo(item.parentElement.parentElement)
        var code = item.parentElement.parentElement.children[item.parentElement
            .parentElement.children.length - 2]
        let code2 = code
        code.outerHTML = ""
        $(code2).appendTo(item.parentElement.parentElement)
    } else if (item.parentElement.parentElement.tagName === "MEH") {
        $("<ul><li>" + template + "</li></ul>").appendTo(item.parentElement
            .parentElement)
    } else {
        console.error("Invalid element: \"" + item.parentElement.parentElement
            .tagName + "\". Expected UL or MEH")
    }
    initDefault()
}
function renderType(tagname){
    switch(tagname){
        case 'TEXTAREA':
            return "lore"
            break;
        case 'INPUT':
            return "choice"
            break;
        default:
            return 0
    }
}
function reg(){
	var check = setInterval(function(){
		console.log("Looking...")
		if(document.getElementsByClassName("woop")[document.getElementsByClassName('woop').length-1] !== null){
			document.getElementsByClassName('woop')[document.getElementsByClassName('woop').length-1].onclick = function(){
				document.getElementsByClassName('woop')[document.getElementsByClassName('woop').length-1].select();
				console.log("Attempting to copy")
				try {
    				var successful = document.execCommand('copy');
   					var msg = successful ? 'successful' : 'unsuccessful';
   				    console.log('Copying text command was ' + msg);
  					} catch (err) {
   					 console.log('Oops, unable to copy');
 					 }
			}
			document.getElementsByClassName('woop')[document.getElementsByClassName('woop').length-1].value = "story."+currentpos
			clearInterval(check)
			console.log("Done!")
		}
	},10)
}
function initDefault(){
    setPopover("textarea","Menu",""+
    "<button class = 'full btn btn-primary' onclick = 'deleteBranch()'>Delete this and linked items</button>"+
    "<button class = 'full btn btn-primary' onclick = 'continueBranch()'>Add next-tier choice</button>"+
	"<input type = text class = woop></input>"+
    "","Close",false,"","bottom","","focus")
    setPopover("input","Menu",""+
    "<button class = 'full btn btn-primary' onclick = 'deleteBranch()'>Delete this and linked items</button>"+
	"<input type = text class = woop></input>"+
    "","Close",false,"","bottom","","focus")
    $(".normal").popover("destroy")
    $("textarea, input").attr("onclick","overpos = this.dataset.overpos;currentpos = this.dataset.loc;item = this;itemtype = renderType(this.tagName);reg()")
	$("textarea").autogrow()
}
var item = "" //The object for the HTML element
var currentpos = "" //Position to be edited
var itemtype = "" //Lore, choice, code...
$(function() {
    //element,title,content,killButton,toggled,next,position,onclick,trigger
    renderPaths(story.s1, "s1")
    initDefault()
    $(".normal").attr("onclick","")
    $("button").addClass("btn btn-default")
    setInterval(function() {
        $("#export").html(JSON.stringify(story.s1))
    }, 100)
})
