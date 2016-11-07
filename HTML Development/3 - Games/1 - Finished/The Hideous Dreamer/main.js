
setTimeout(function(){
var fst = false
function makeText(text,delay,id,timeout,done){
	if(fst){

	}
	fst = true
setTimeout(function(){
var chars = text.split('');
printLoop(chars,id,delay,0,done)
},timeout)
}
function printLoop(chars,id,delay,no,done){
if(no<chars.length){
if(chars[no]==">"){
	chars[no] = "'"
}
if(chars[no]=="<"){
	chars[no] = '"'
}
if(chars[no]==" "){
	document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+chars[no]
	printLoop(chars,id,delay,no+1,done)
}
else{
document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+chars[no]
setTimeout(function(){printLoop(chars,id,delay,no+1,done)
},delay)}}
else{
	done()
}
}
function br(){
	document.getElementById("header").innerHTML+="<br/>"
}

function next(){
	document.getElementById("header").innerHTML+="<br/>"
}
var food = {poptarts: true, muffins: true, cereal:true,toast:true}
//Has to be equal to three to win the love ending
var wafer = false
var jennyLove = 0
var count = 0
var count2 = 0
function makeChoices(){
	count2 ++
	var code = "f"+String(count2)+"destroy = function(){for(i="+count+"+1;i<count+1+"+arguments.length+";i++){console.log(i);document.getElementById(String(i)).style.display = 'none'}}"
	eval(code)
	document.getElementById("footer").innerHTML = ""
	for(i=0;i<arguments.length;i++){
		count++
		var code = "f"+String(count)+" = function(){"+arguments[i].outcome+"}"
		eval(code)
		document.getElementById("footer").innerHTML += "<button style = 'width:"+96/arguments.length+"%;border: 1px solid black;display:inline' id = '"+count+"' class = 'btn btn-default' onclick = f"+String(count)+"();f"+String(count2)+"destroy()>"+arguments[i].text+"</button>"
	}
}
function makeChoicesToggleable(){
	count2 ++
	var code = "f"+String(count2)+"destroy = function(){for(i="+count+"+1;i<count+1+"+arguments.length+";i++){console.log(i);document.getElementById(String(i)).style.display = 'none'}}"
	eval(code)
	document.getElementById("footer").innerHTML = ""
	var lengthOfThing = arguments.length
	for(i=0;i<arguments.length;i++){
		if(arguments[i].toggled==false){
			lengthOfThing-=1
		}
	}
	for(i=0;i<arguments.length;i++){
		if(arguments[i].toggled==true){
		count++
		var code = "f"+String(count)+" = function(){"+arguments[i].outcome+"}"
		eval(code)
		document.getElementById("footer").innerHTML += "<button style = 'width:"+(95+(2/3))/lengthOfThing+"%;border: 1px solid black;display:inline' id = '"+count+"' class = 'btn btn-default' onclick = f"+String(count)+"();f"+String(count2)+"destroy()>"+arguments[i].text+"</button>"}
	}
}
function ci(){
	document.getElementById("header").innerHTML = ""
}
function run(ideas,ondone){
var code = "";
for(i=0;i<ideas.length;i++){
	code=code+'function(){br();makeText("'+ideas[i]+'",40,"header",750,'
}
code = code+"function(){"+ondone+"}"
for(i=0;i<ideas.length;i++){
code=code+")}"
}
code=code.substring(15,code.length-1);
eval(code)}
run([
"I had a dream last night.",
"Everyone liked me.",
"But I looked.",
"Different.",
"Better.",
""
],"makeChoices({text: 'Wake up',outcome: 's1()'})")
function s1(){
	document.getElementById("header").innerHTML = ""
	run(["Time for the most important decision of my entire day...","What am I going to eat for breakfast?"],"next();s2()")
}
function s2(){
	makeChoices(
	{text: 'Poptarts',outcome: 'run(["Oh! These are my favorite!"],"s3();food.poptarts = false")'},
	{text: 'Muffins',outcome: 'run(["Muffins... Yum?"],"s3();food.muffins = false")'},
	{text: 'Cereal',outcome: 'run(["Okay. Cereal. Seems good... I guess..."],"s3();food.cereal = false")'},
	{text: 'Toast',outcome: 'run(["My toast got a bit burnt. Why don>t I just overload on cinnamon..."],"s3();food.toast = false")'}
	)
}
function s3(){
	next()
	run(["Now, to my job.","I wonder how I should get there...","Its about five blocks away from my apartment."],"s4()")
}
function setTravel(id){
	if(id==1){
		travel = "walk"
	}
	if(id==2){
		travel = "bike"
	}
	if(id==3){
		travel = "drive"
	}
}
function s4(){
	next()
	makeChoices(
	{text: 'Walk',outcome: 'run(["Three blocks into the walk I see a strange looking guy in a jet black trenchcoat.","I wonder if I should talk to him or just keep going."],"s5();setTravel(1)")'},
	{text: 'Bike',outcome: 'run(["I go the five blocks and along the way I see a guy in the trenchcoat. Weird.","I put my bike in the bike rack and go into the convenience store.",,"Jeff my co-worker walks in. He is scared of my face, and doesn>t usualy talk.","I look at him.","He raises his eyebrows.","I wonder if I should say something..."],"s6();setTravel(2)")'},
	{text: 'Drive',outcome: 'run(["Well, I guess that was a stupid waste of gas.","I park my car and go into the convenience store.","Jeff my co-worker walks in. He is scared of my face, and doesn>t usualy talk.","I look at him.","He raises his eyebrows.","I wonder if I should say something..."],"s6();setTravel(3)")'}
	)
}
function s5(){
	makeChoices(
	{text: 'Talk to the man',outcome: 'next();run(["He says nothing and hands me a small wafer.","It reads <wait until the moment is right<","I look up to ask him what its for but he is gone.","I decide to leave and go to the convenience store- my workplace","Jeff my co-worker walks in. He is scared of my face, and doesn>t usually talk.","I look at him.","He raises his eyebrows.","I wonder if I should say something..."],"wafer=true;s6()")'},
	 {text: 'Keep on walking',outcome: 'run(["A few blocks later I arrive at the convenience store- my workplace","Jeff my co-worker walks in. He is scared of my face, and doesn>t usually talk.","I look at him.","He raises his eyebrows.","I wonder if I should say something..."],"s6()")'}
	)
}
function s6(){
	makeChoices(
	{text: 'Hi Jeff',outcome: 'run([""],"s7('+"'Uh.. Hi?'"+')")'},
	{text: 'What'+"'"+'s wrong?',outcome: 'run([""],"s7('+"'*Jeff mutters something unintelligible*'"+')")'},
	{text: '*Don'+"'"+'t talk*',outcome: 'run([""],"s7('+"'*Jeff doesn>t talk either*'"+')")'},
	{text: '*Raise eyebrows*',outcome: 'run([""],"s7('+"'*Jeff starts to smile, but quickly stops*'"+')")'}
	)
}
function ss7(){
	makeChoices({text: 'Continue', outcome: "setTimeout(function(){document.getElementById('header').innerHTML = '';s8()},1000)"})
}
function s7(jeffsays){
	document.getElementById("header").innerHTML = ""
	run([jeffsays,"Jeff never talks to me...","The day is quite boring.","Jenny walks in and buys a pack of apricot bubblegum.","This happens to be my favorite flavor as well.","She smiles at me as she leaves.","She's seems to be the only one who doesn't care about my face.","After a lot of working to close (eleven o'clock) I am utterly exhausted.","I " + travel + " to my house and collapse on my bed."],"ss7()")

}
//Day 2 you can have the "magical" wafer by now
function s8(){
setTimeout(function(){document.getElementById('header').innerHTML = '';
run(["I had a dream last night.","Everyone avoided me.","And I looked.","The same.","Like.","Me."],"makeChoices({text: 'Wake up',outcome: 's9();c()'})")
},2000)
}
function s9(){
	document.getElementById("header").innerHTML = ""
	run(["This is a fate deciding moment...","What am I going to eat for breakfast?"],"next();s10()")

}
function s10(){

	makeChoicesToggleable(
	{text: 'Poptarts',outcome: 'run(["Oh! These are my favorite!"],"s11();food.poptarts = false")', toggled: food.poptarts},
	{text: 'Muffins',outcome: 'run(["Muffins... Yum?"],"s11();food.muffins = false")', toggled: food.muffins},
	{text: 'Cereal',outcome: 'run(["Okay. Cereal. Seems good... I guess..."],"s11();food.cereal = false")', toggled: food.cereal},
	{text: 'Toast',outcome: 'run(["My toast got a bit burnt. Why don>t I just overload on cinnamon..."],"s11();food.toast = false")', toggled: food.toast}
	)
}
function s11(){
	next()
	run(["Now, back to the old grind...","How should I get there?"],"s12()")
}
function s12(){
	next()
	makeChoices(
	{text: 'Walk',outcome: 'run(["I see nothing out of the ordinary and quickly arrive to my job."," Today is some holiday and a bunch of people are coming in for last minute presents.","There was a huge checkout line for Jeff, but a miniscule line for me.","Guess they all are scared of me.","I love my job.","During the day, Jenny comes in and buys a pack of apricot bubblegum.","She forgot her wallet and is about to leave."],"s13();setTravel(1)")'},
	{text: 'Bike',outcome: 'run(["I see nothing out of the ordinary and quickly arrive to my job."," Today is some holiday and a bunch of people are coming in for last minute presents.","There was a huge checkout line for Jeff, but a miniscule line for me.","Guess they all are scared of me.","I love my job.","During the day, Jenny comes in and buys a pack of apricot bubblegum.","She forgot her wallet and is about to leave."],"s13();setTravel(2)")'},
	{text: 'Drive',outcome: 'run(["I see nothing out of the ordinary and quickly arrive to my job."," Today is some holiday and a bunch of people are coming in for last minute presents.","There was a huge checkout line for Jeff, but a miniscule line for me.","Guess they all are scared of me.","I love my job.","During the day, Jenny comes in and buys a pack of apricot bubblegum.","She forgot her wallet and is about to leave."],"s13();setTravel(3)")'}
	)
}
function s13(){
	next()
	makeChoices(
	{text: 'Buy the gum for her',outcome: 'run(["I pay the $2.29 and hand Jenny the pack of gum before she leaves.","She smiles at me before she leaves."],"next();s14();jennyLove+=1")'},
	{text: 'Do nothing',outcome: 'run(["Jenny leaves."],"next();s14()")'}
	)
}
function s14(){
	run(["I " + travel + " back home.","I'm not as tired so I get into bed and fall asleep."],"ss15()")
}
function ss15(){
	makeChoices({text: "Continue",outcome: "s15();document.getElementById('footer').innerHTML = ''"})
}
//Day 3. Jenny max love is 1 (from buying her apricot bubblegum) and you can have the "magical" wafer by now
function s15(){
	setTimeout(function(){document.getElementById('header').innerHTML = '';
run(["I had a dream last night.","I was falling in a pit.","My stomach as empty.","As the pit I.","Had fallen.","In."],"makeChoices({text: 'Wake up',outcome: 's16()'})")
},2000)
}
function s16(){
	document.getElementById('header').innerHTML = ""
	run(["No.","NO!","NO!!!","This can't be...","I must figure out...","What am I going to eat for breakfast?"],"next();s17()")
}
function s17(){
	makeChoicesToggleable(
	{text: 'Poptarts',outcome: 'run(["Oh! These are my favorite!"],"s18();food.poptarts = false")', toggled: food.poptarts},
	{text: 'Muffins',outcome: 'run(["Muffins... Yum?"],"s18();food.muffins = false")', toggled: food.muffins},
	{text: 'Cereal',outcome: 'run(["Okay. Cereal. Seems good... I guess..."],"s18();food.cereal = false")', toggled: food.cereal},
	{text: 'Toast',outcome: 'run(["My toast got a bit burnt. Why don>t I just overload on cinnamon..."],"s18();food.toast = false")', toggled: food.toast}
	)
}
function s18(){
	next()
	run(["Back to my job...","How should I get there?"],"s19()")
}
function s19(){
	next()
	makeChoices(
	{text: 'Walk',outcome: 'run(["Its a bit cold outside and I wish I brought a jacket.","Its a small walk so I get there in a fair amount of time."],"s20();setTravel(1)")'},
	{text: 'Bike',outcome: 'run(["The wind bites as me as I speed down the block.","I really wish I brought a jacket, but I am glad to reach the convenience store- a place that has heating."],"s20();setTravel(2)")'},
	{text: 'Drive',outcome: 'run(["The car>s display shows its forty-five degrees today.","I>m glad I didn>t walk or bike."],"s20();setTravel(3)")'}
	)
}
function s20(){
	next()
	//If you bought Jenny apricot bubblegum she will come and offer you a pack for payment for the pack you bought her
	if(jennyLove>0){
	run(["The day is quite boring.","People come in for candy, drinks, food, and cigarettes.","Jenny comes in as usual and buys two packs of apricot bubblegum.","She asks me <Do you like apricot bubblegum?<"],"s21()")
	}
	//If you didn't buy Jenny apricot bubblegum she won't come and buy a pack of apricot bubblegum
	else{
	run(["The day is quite boring.","People come in for candy, drinks, food, and cigarettes.","Jenny comes in as usual and buys a pack of apricot bubblegum.","She doesn't smile at you as she leaves"],"s23()")
	}
}
function ss21(){
	next()
	document.getElementById("header").innerHTML = ""
	run(["Because you bought me some yesterday.","Do you like it?"],'sss21()')
}
function sss21(){
	next()
	//Jenny love+1
	makeChoices(
	{text: 'Yes',outcome: 'run(["Great! *she hands you the packet of apricot bubblegum*","Enjoy!","You take a piece and written on the wrapper is the phone number (867-5309)"],"s22();jennyLove+=1")'},
	{text: 'No',outcome: 'run(["Oh. Okay.","Jenny leaves with the extra pack of apricot bubblegum."],"s22()")'}
	)
}
function s21(){
	makeChoices(
	{text: 'Yes',outcome: 'document.getElementById("header").innerHTML="";run(["Great! *she hands you the packet of apricot bubblegum*","Enjoy!"],"s22();jennyLove+=1")'},
	{text: 'No',outcome: 'document.getElementById("header").innerHTML="";run(["Oh. Okay.","Jenny leaves with the extra pack of apricot bubblegum."],"s22()")'},
	{text: 'Why?',outcome: 'ss21()'}
	)
}
function s22(){
	next()
	run(["Well.","That was the first time in my life that anyone did anything for me.","I think I like this <Jenny< person.","I work happily until close and then " + travel + " back home."],makeChoices({text: "Continue",outcome: 's23()'}))

}
function s23(){
	setTimeout(function(){document.getElementById('header').innerHTML = '';
run(["I didn't have a dream last night"],"makeChoices({text: 'Wake up',outcome: 's24()'})")
},2000)
}
function s24(){
	var foods = ["poptarts","muffins","cereal","toast"]
	var remainingFood = ""
	for(i=0;i<foods.length;i++){
		if(eval("food."+foods[i])==true){
			remaingFood = foods[i]
		}
	}
	next()
	run(["Today is Saturday, and I don't work today.","I>m going to go ahead and eat the " + remaingFood + ". I wonder what else I should do today? "],"s25()")
}
function ss25(){
	next();
	run(["The wafer tasted like nothing.","After a while, nothing happens.","Then, after a moment nothing continues to happen","I guess the wafer was just a wafer. Makes sense."],"s25();wafer=false")
}
function s25(){
	//Choices that lead to epilogue
	makeChoicesToggleable(
	{text: 'Eat wafer',outcome: 'ss25()', toggled: wafer},
	{text: 'Call Jenny',outcome: 'document.getElementById("header").innerHTML = "";epilogue("Jenny")', toggled:jennyLove>1},
	{text: 'Watch TV',outcome: 'document.getElementById("header").innerHTML = "";epilogue("TV")', toggled: true}
	)
}
function epilogue(name){
	switch(name){
		case 'Jenny':
		next()
		run(["You call the number you found in the apricot bubblegunm wrapper (867-5309)","I meet up with Jenny, and we get some icecream","If your wondering which flavor, we got apricot.","It went well with the bubblegum","As they say, opposites attract.","--- THE END ---","You completed ending 1!","Play again?"],"control()")
		break;
		case 'TV':
		if(love>0){
			run(["I stay in touch with Jenny after that, and think of her as a friend.","Jenny is a great friend to have.","--- THE END ---","You completed ending 2!","Play again?"],"control()")
		}
		else{
			run(["I don't have much fun watching TV","Jenny stops coming to the store and my life is boring.","People don't look at me directly and my life isn't much fun.","--- THE END ---","You completed ending 3!","Play again?"],"control()")
		}
		break;
	}
}
function control(){
	makeChoices(
	{text: 'Play again',outcome: 'location.reload()'},
	{text: 'View credits',outcome: 'document.getElementById("header").innerHTML = "";run(["Coded by BigBlingThing","Concept by BigBlingThing and a friend","Tested by a lot of people!"],"control()")'},
	{text: 'About',outcome: 'document.getElementById("header").innerHTML = "";run(["In this game, the main character lacks attraction and has little friends.","In this game you attempt to befriend (or not befriend) Jenny, a girl who likes to buy apricot bubblegum."],"control()")'},
	{text: 'Quit',outcome: 'document.getElementById("header").innerHTML = ""'}
	)
}
},10)
