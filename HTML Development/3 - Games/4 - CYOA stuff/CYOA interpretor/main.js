var story = Object()
var ref98746 = ""
story.s1 = {"lore":"Hello!","choices":[{"name":"Hi","link":{"lore":"How's the weather been","choices":[{"name":"Awful","link":{"lore":"Honestly, I don't care.\nJust press that button down there to continue the story","choices":[{"name":"No","link":{"lore":"The awful weather kills you (Hurricane Trump)\n%%lose%%","choices":[]}},{"name":"Okay, lets go","link":{"lore":"%%linkto,story.s1.choices[2].link%%","choices":[]}}]}},{"name":"It's raining orange juice","link":{"lore":"Honestly, I don't care.\nJust press that button down there to continue the story","choices":[{"name":"No","link":{"lore":"In soviet Russia...\nOrange juice, rains YOU!\n%%lose%%","choices":[]}},{"name":"Okay, lets go","link":{"lore":"%%linkto,story.s1.choices[2].link%%","choices":[]}}]}},{"name":"Swell","link":{"lore":"Honestly, I don't care.\nJust press that button down there to continue the story","choices":[{"name":"No","link":{"lore":"You explode in a shower of...\nFeathers?\n%%lose%%","choices":[]}},{"name":"Okay, lets go","link":{"lore":"%%linkto,story.s1.choices[2].link%%","choices":[]}}]}}]}},{"name":"Oh gosh","link":{"lore":"Lore here","choices":[]}},{"name":"*shrug shoulders*","link":{"lore":"Lore here","choices":[]}}]}


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
function debrief(code,code1,code2){
	$("#content").html(`
    <p>
	`+replaceAll(code1,"\n","<br/>")+`
	`+replaceAll(code2,"\n","<br/>")+`
	</p>
	<button class = "btn btn-default" style = "width:100%;border-radius:0px" onclick = "$('#content').html(\`<div id='header'></div><hr><div id='footer'></div>\`);run('story.s1')">Try again</button>
	`)
}
function run(loc){
    var loc1 = loc
            var loc = eval(loc)
            var lo = checkcode(loc.lore)
			if(!lo.match(/(LINKTO|VICTORY|LOSS)/i)){

            var info = replaceAll(lo,"\n","<br/>")
            document.getElementById("header").innerHTML = info
            document.getElementById("footer").innerHTML = ""
            var btnCode = ""
            for(i=0;i<loc.choices.length;i++){
                btnCode+= "<button class = 'btn btn-default' onclick = \"run('"+loc1+".choices["+i+"].link')\" style = width:"+100/loc.choices.length+"%;border-radius:0px>"+loc.choices[i].name+"</button>"
            }
            $(btnCode).appendTo("#footer")
	//Deprecated restart button: document.getElementById("footer").innerHTML+='<button class = "btn btn-default" style = "width:100%;border-radius:0px" onclick = "run(\'story.s1\')">Restart</button>'
}}
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
      if(!(matches[i][1]===undefined)){
		if(matches[i][1].length>1){
        //Define lore if it exists
      	var eventLore = matches[i][1]
      }
      else if(matches[i][1].length<=1){
      }}
	  if(l>2){
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
	if(matches[i][0].match(/^(link|linkto|go|goto|redirect|redirectto|loop|loopto)$/i)){
		handleLink(eventLore)
	}
  //Code to execute, has been interpreted: matches
  //Text to show to the user, code has been hidden: fixed
}
}
return fixed}
run("story.s1")
