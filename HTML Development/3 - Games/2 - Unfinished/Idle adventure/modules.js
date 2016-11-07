//Working module 1: newTab()
function newTab(name,toggled,selected){
  function render(input,fallback){
    var extra = arguments[2]
    if(input==undefined||input=="default"){
      return fallback
    }
    else{
      return input
    }
  }
  function specialrender(){
    if(selected==true){
      return "active"
    }
    else{
      return ""
    }
  }

  select = function(item){
    $(".content").hide()
    $("#"+$(item).attr('daname')+"content").show()
    $("#nav li").removeClass("active")
    $(item).addClass("active")
  }
  var toggled = render(arguments[2],true)
  var selected = render(arguments[3],false)
  var selected2 = specialrender()
  console.log(toggled)
  console.log(selected)
  if(selected){
    $("#"+name.toLowerCase()+"content").show()
  }
  $("#nav").append("<li id = "+name+" class = '"+selected2+"' onclick = 'select(this)' daname = "+name.toLowerCase()+"><a>"+name+"</a></li>")
}
//Working module 2: setTutorial(), deleteTutorial(), showTutorial(), hideTutorial()
function generateOptionsPopover(){
  for(i=0;i<4;i++){
    eval(arguments[i]+"Popover = function(element){$(element).popover('"+arguments[i]+"')}")
  }
}
generateOptionsPopover("delete","show","hide","toggle")
//
function setPopover(element,title,content,killButton,toggled,next,position,onclick){
  function render(input,fallback){
    if(input==undefined||input=="default"){
      return fallback
    }
    else{
      return input
    }
  }
  function kB(label){
    return '<button onclick = $("'+element+'").popover("hide") class = "btn btn-sucess" style = "float:right;margin-top:10px;margin-bottom:10px">'+label+"</button><br/><br/>"
  }
  var element = render(arguments[0],"")
  var title = render(arguments[1],"Title")
  var content = render(arguments[2],"Hmmm, there should be stuff here but instead there is the default fallback.")
  var killButton = render(arguments[3],"Next")
  var toggled = render(arguments[4],"false")
  var next = render(arguments[5],"")
  var position = render(arguments[6],"bottom")
  var onclick = render(arguments[7],"")
  $(element).attr('data-content', content + kB(killButton))
            .attr('onclick',onclick)
            .attr('data-trigger','manual')
            .attr("data-placement",position)
            .attr("data-html",true)
            .attr('title',title)
            .popover('fixTitle')
  if(toggled){
    $(element).popover('show');
  }
}
//
function generateOptionsTooltip(){
  for(i=0;i<4;i++){
    eval(arguments[i]+"Tooltip = function(element){$(element).tooltip('"+arguments[i]+"')}")
  }
}
generateOptionsTooltip("delete","show","hide","toggle")
//
function setTooltip(element,title,position){
  deleteTooltip(element)
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
  var position = render(arguments[2],"bottom")
  $(element).attr('title', title)
            .attr("data-placement",position)
            .attr("data-html",true)
            .tooltip('fixTitle')
}
function storyGen(title,debrief,file){
	ref98746 = title
    $("#storycontent .story").html(
        `
        <h1>`+title+`</h1>
        <hr/>
        <span>`+debrief+`</span>
        <br/>
		<br/>
        <center>
            <button class = "btn btn-default" onclick = "begin('`+file+`')">Begin</button>
        </center>
      </div>

        `
    )
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
function clean(){
  $("#storycontent .story").html(`
        <div id="content">
            <div id="header"></div>
            <hr>
            <div id="footer"></div>
        </div>
        `)
}
function begin(file){
	file = file
	ref98325 = file
  clean()
        run(file)
}
function run(loc){
            var loc1 = loc
            var loc = eval(loc)
            console.log(loc1)
            console.log(loc)
            console.log(loc.lore)
            var lo = checkcode(loc.lore)
			if(!lo.match(/(LINKTO|VICTORY|LOSS)/i)){
			      clean()
            var info = replaceAll(lo,"\n","<br/>")
            document.getElementById("header").innerHTML = info
            document.getElementById("footer").innerHTML = ""
            var btnCode = ""
            for(i=0;i<loc.choices.length;i++){
                btnCode+= "<button class = 'btn btn-default' onclick = \"run('"+loc1+".choices["+i+"].link')\" style = width:"+100/loc.choices.length+"%;border-radius:0px>"+loc.choices[i].name+"</button>"
            }
            $(btnCode).appendTo("#footer")
        	//Deprecated restart button: document.getElementById("footer").innerHTML+='<button class = "btn btn-default" style = "width:100%;border-radius:0px" onclick = "run(\''+ref98325+'\')">Restart</button>'
}}
function debrief(code,code1,code2){
	$("#storycontent .story").html(`
	<h1>`+code+`</h1>
	<hr/>
    <p>
	`+replaceAll(code1,"\n","<br/>")+`
	`+replaceAll(code2,"\n","<br/>")+`
	</p>
	<button class = "btn btn-default" style = "width:100%;border-radius:0px">Continue</button>
	`)
}
function checkcode(str){
var code = /%%((?!%).)*%%/g
var fixed = str.replace(/%%((?!%).)*%%/g,"")
var matches = str.match(code)
//Handle no matches
	if(matches!=null){
	//Format each match
	for(i=0;i<matches.length;i++){
    //Split into readable arrays
		matches[i] = matches[i].substring(2,matches[i].length-2).split(",")
    //Define the amount of arguments the array has
    var l = matches[i].length
    //Handle arguments
    if(l>0){
      console.log(matches[i][1])
      if(!(matches[i][1]===undefined)){
		if(matches[i][1].length>1){
        //Define lore if it exists
      	var eventLore = matches[i][1]
      }
      else if(matches[i][1].length<=1){
      }}
	  if(l>1){
      //Check to see if matches[i][2] actually exists
      if(!(matches[i][2]===null)){
      if(!matches[i][2].match(/^(null|undefined|false|empty|nothing| |)$/i)&&!matches[i][2].length<1){
    	eval(matches[i][2])
      }}}


    }
    //Handle victories with message
    function handleVictory(){
		if(fixed.length===0){debrief(ref98746,"<h3 style = 'color:green'>VICTORY</h4>","You have succeeded at the quest \"" + ref98746 + "\".")}
        else if(fixed.length!=0){
            debrief(ref98746,"<h3 style = 'color:green'>VICTORY</h4>",fixed)
        }
		fixed = "VICTORY"
    }
    //Handle loss with message
    function handleLoss(){
        if(fixed.length===0){debrief(ref98746,"<h3 style = 'color:red'>FAILURE</h4>","You have failed the quest \"" + ref98746 + "\".")}
        else if(fixed.length!=0){
            debrief(ref98746,"<h3 style = 'color:red'>FAILURE</h4>",fixed)
        }
		fixed = "LOSS"
    }
	//Handle link with redirect to part of story
	function handleLink(msg){
		run(msg)
		fixed = "LINKTO"
	}
    //Handle victory with corresponding regex
    if(matches[i][0].match(/^(win|true|t|victory)$/i)){
    	handleVictory()
    }
    //Handle loss with corresponding regex
    if(matches[i][0].match(/^(lose|loss|death|defeat|false|f|failure|fail)$/i)){
    	handleLoss()
    }
	//Handle linkto with corresponding regex
	if(matches[i][0].match(/^(link|linkto|go|goto|redirect|redirectto|loop|loopto)$/i))
		handleLink(eventLore)
	}
  //Code to execute, has been interpreted: matches
  //Text to show to the user, code has been hidden: fixed
}
return fixed
}
