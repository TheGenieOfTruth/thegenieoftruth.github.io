
//Hacktimer, makes it so the bot laggs you, even when you don't have the tab focused :O
(function(s){var w,f={},o=window,l=console,m=Math,z='postMessage',x='HackTimer.js by turuslan: ',v='Initialisation failed',p=0,r='hasOwnProperty',y=[].slice,b=o.Worker;function d(){do{p=0x7FFFFFFF>p?p+1:0}while(f[r](p));return p}if(!/MSIE 10/i.test(navigator.userAgent)){try{s=o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]))}catch(e){}}if(typeof(b)!=='undefined'){try{w=new b(s);o.setInterval=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2)};w[z]({n:'a',i:i,t:t});return i};o.clearInterval=function(i){if(f[r](i))delete f[i],w[z]({n:'b',i:i})};o.setTimeout=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2),t:!0};w[z]({n:'c',i:i,t:t});return i};o.clearTimeout=function(i){if(f[r](i))delete f[i],w[z]({n:'d',i:i})};w.onmessage=function(e){var i=e.data,c,n;if(f[r](i)){n=f[i];c=n.c;if(n[r]('t'))delete f[i]}if(typeof(c)=='string')try{c=new Function(c)}catch(k){l.log(x+'Error parsing callback code string: ',k)}if(typeof(c)=='function')c.apply(o,n.p)};w.onerror=function(e){l.log(e)};l.log(x+'Initialisation succeeded')}catch(e){l.log(x+v);l.error(e)}}else l.log(x+v+' - HTML5 Web Worker is not supported')})('HackTimerWorker.min.js');
//Educates the stupid, and shows the seasoned an annoying message
console.log("schoolbot.js loaded")
console.log("Start: init(\"message here\")")
console.log("Basic start: basic()")
console.log("Stop: halt()")
console.log("Ultimate troll: babble()")
console.log("For more advanced features, type help()")
//Gives the docs
function help(){
    console.log("More advanced usage")
    console.log("init(message,delay,scrambled,endLetter)")
    console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
    console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
    console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
    console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
    console.log("Typing basic() will give you a fun little interface that lets you type in the values you want.")
}
//Clicks an element
function clickify(targetNode){
    if (targetNode) {
        triggerMouseEvent (targetNode, "mouseover");
        triggerMouseEvent (targetNode, "mousedown");
        triggerMouseEvent (targetNode, "mouseup");
        triggerMouseEvent (targetNode, "click");
    }
    else{
        console.log ("*** Target node not found!");
    }
}
//Triggers mouse events, nuff said
function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}
//Stops the loop of requests
function halt(){
    clearInterval(loop)
}
//Saves some space. Pretty nice, checks if something doesn't exist
function fallback(arg,def){
    if(arg == arguments[2] || arg == null){
        return def
    }
    return arg
}
//For those that are a bit too stupid to read words, four prompts that will run init for you
function basic(){
    var message = fallback(prompt("What will your message be?\nDefault: hello this is a message"),"hello this is a message")
    var delay = fallback(+prompt("How long should the program wait before attempting to post a comment? (Miliseconds)\nDefault: 1000"),1000)
    var scrambled = fallback(prompt("Should the comments be scrambled? \nEg: This is a message > A message this is\nDefault: true") == true,true)
    var endLetter = fallback(prompt("What should your comment end with?\nDefault: !"),"!")
    init(message,delay,scrambled,endLetter)
}
function init( /*message,delay,scrambled,endLetter*/ ) {
	//All the different flavors of arguments, and their fallbacks
	if (typeof arguments[0] === "object") {
		var message = fallback(arguments[0]["message"], "hello this is a message", "")
		var delay = fallback(arguments[0]["delay"], 1000, "")
		var scrambled = fallback(arguments[0]["scrambled"], true, "")
		var endLetter = fallback(arguments[0]["endLetter"], "!", "")
	} else {
		var message = fallback(arguments[0], "hello this is a message")
		var delay = fallback(arguments[1], 1000)
		var scrambled = fallback(arguments[2], true)
		var endLetter = fallback(arguments[3], "!")
	}
    //Log what values came out in the end
	console.log("Program initiliazed as init(\"" + message + "\"," + delay + "," + scrambled + ",\"" + endLetter + "\")")
    //Set the interval for attepmting to make comments
	loop = setInterval(function() {
        //Splits your message into words
		var arr = message.split(" ")
		if (scrambled) {
			//Shuffle. Probably stolen from the internet
			function shuffle(array) {
				var currentIndex = array.length,
					temporaryValue, randomIndex;
				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}
				return array;
			}
			//Shuffle that array
			arr = shuffle(arr)
		    //Grammerz!
			arr[0] = arr[0].substring(0, 1).toUpperCase() + arr[0].substring(1, arr[0].length).toLowerCase()
		}
		//Join the words together, slap on the ending letter
		arr = arr.join(" ") + endLetter
		//And the only way to enable is to... disable the disable!
		document.getElementById("edit-submit").disabled = false
		//Set the innerHTML of the comment to the value of the scrambled variable crap
		document.getElementById("edit-comment").value = arr
		//Then press that submit button
		clickify(document.getElementById("edit-submit"))
	}, delay)
}
function babble(x){
var msg = ""
	var y= `Share
Click to toggle options.
Schoology bot
By Luke Trenaman · Nov 18, 2016
The schoology blog crap is stupid so I cooked up a nice lil' script to spam the heck out of unsuspecting victims.
Here is the script:

function e(a,b){var c=document.getElementsByTagName("head")[0];d=document.createElement("script");d.type="text/javascript";d.src=a;d.onload=b;d.onreadystatechange=function(){"complete"==this.readyState&&b()},c.appendChild(d)} e("https://rawgit.com/TheGenieOfTruth/thegenieoftruth.github.io/master/resources/schoolbot.js",function(){/*init*/})

How exactly do you use it?

What does the program do?
Well, this is a Schoology bot, for them blogs.
Ya'know? Those wildly popular things where people don't get anything accomplished and just put links to YouTube and do shout outs even though they are pointless? Yep. Those blogs. Anyways, what this bot does is send really really really repetitive messages. It has a bonus option of scrambling the words to make it nonsensical and oddly humorous.

How do I load it?
Ya'll know how to use this whole Inspect Element thing?
Well, you can open it using either of the two shortcuts:
Ctrl + Shift + I
Ctrl + Shift + C
Also, you can right click and select Inspect.
Now that you have a really fancy editor with a bunch of awesome HTML crap on it, you want to navigate to a tab that says "Console"
Now, you should (well maybe) see some weird error messages with file loading. This is because Schoology, well, does stuff that makes errors. Now, to load the bot, you paste the nonsense that just looks like a bunch of letters with a link conveniently placed.
When you paste it, it uses GitHub and grabs the full source of the bot. The thing I made just saves you a LOT of time.
 
How do I use it?
After you paste the script, a stream of messages will appear telling you what to do. 
I mean, after that, its pretty darn basic.
Can't figure it out? You could use a brain. 
But I mean, I made it even more basic...
Just type basic() and the program will throw prompts at you.
As long as you can type and think, these should come easily.
If you can't type and think, then I don't understand how you got this far.
 
Cheers,
Luke Trenaman, Professional Nerd

Show your support by spamming this post with the bot :)
 
478 comments · Like 
Config guide
This is that system that the "HTML Development" developer system uses. It is used to reference libraries, stylesheets, modules, and other files. Using the config file is how you typcially achieve this, and it is a very simple method for referencing files.

Internal file reference
Usage: jslib("filename.js",true,callback)

Example: csslib("path/to/libname.css",true,loaded)

Themes
About: There are 15 themes, from Bootswatch.

Usage: get("theme-themename")

Example: get("theme-cyborg")

You can also use theme-random for a random theme

Essentials
Essentials is a group of libraries that are extremely useful for web development.

Usage: get("essentials")

Essentials is composed of the Flatly theme, Bootstrap, and JQuery

Other libraries
You can also reference many other libraries:

JQuery
Bootstrap
Three
Firebase
Geniescript
Idlekit
Mousetrap
And modules:

hackTimer
scrollTo
Usage: get("library or module name")

Example: get("bootstrap")

There is no case sensitivty. get("jquery") and get("JQuErY") do the same thing.

Libraries that require JQuery will include it automatically (Eh... Needs to be fixed)

Ref79
JSON that is used in extract.py
Example: 
{
    "libraries": [
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/bootstrap.min.css",
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/themes/flatly.css",
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/jquery.min.js",
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/bootstrap.min.js"
    ],
    "raw": ["bootstrap.min.css", "flatly.css", "stylesheet.css",
        "jquery.min.js", "bootstrap.min.js", "main.js"
    ],
    "path": "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/1 - HTML Shells/Guide/main.html"
}

Shells
There are three shells you can use:

Shell 1:
main.html
main.js
stylesheet.css
config.js
Shell 2:
main.html
main.js
stylesheet.css
config.js
core.js
Shell 3:
main.html
main.js
stylesheet.css
config.js
core.js (minified)
Core.js references master.js, allowing config.js to do stuff. The latest shell is always reccomended

Friday, November 20, 2015
A chat with yours truly, manager.
Me: Hello manager.
Manager: Hi Genie
Me: Genie? Who is genie? I am a Waffle, and I have nothing to do with genies. But I do like toast. Could you get me some, my manager?
Manager: I have a waffle iron if you are a cannibal.
Me: You have... a waffle iron? I am still currently questioning why I have you as a manager. You use waffle DNA to form new waffles and are very rude to the race of waffles. You should have read the time line below to see what happens to people who create timelines...
Timeline Maker: He can insult waffles all he wants you !@#$
Me: Where did you come from? You look very much like the manager. That's kind of weird. I thought I was talking to the manager?
Manager: That is my identical twin isn't he ugly?
Jim (time line maker): You...
Me: <Correcting grammar, the creator is the editor; the editor is the creator.>
Jim: That was rude.
Me: Rude? Rudeness is my specialty you little ugly !@#$
Narrator: If you are under the age of 3 stop reading because things will go downhill from here. Also if you are 3 it would be pretty hard to read this.
Jim: !@#$(censored)!@#$^&(more censorship)~!@#$%^&**
Me: Wow. Um... I'm wondering if I should just leave right now...
Jim's Mother: WE DO NOT SAY THAT STUFF!!! I WILL WASH YOUR MOUTH WITH SOAP.
Narrator: And now we are introducing too many characters
Me: I agree with the narrator, we should quickly conclude this discussion. The end...
This is the waffle Timeline. It will predict the future of waffle, and it also explains in great detail the history of the waffles.
1829 - The waffle is invented. The man creates the waffle purely out of ice, so it is a Icy Waffle, AKA the first waffle ever invented
1830 - People hate Icy Waffles and demand waffles that taste like food
1831 - Their wish is granted. Real Waffles are created
1836 - A man uses waffle for ice cream. The waffles are used to hold this ice cream and taste very good.
1840 - A man creates the first living waffle. It's name was bibby. BIBBY THE WAFFLE WOULD SOON RISE TO POWER
1846 - A guy named Joe had a glass of lemonade. It was delicious
1852 - Bibby magically vanished from the waffle lab. Panic was born and everyone took cover
1852-1870 - Nothing happened. People assume Bibby was a kind waffle and resumed normal life
1870 - Joe dies. His family is sad and has some lemonade. It is delicious.
1888 - People are like wow, it's 1888.
1900 - Celebrating the new century, the waffle iron is born.
1901 - There is a party for waffle iron's everywhere.
1915 - The toaster is invented but toast-able waffles are not.
1916 - Riots cause toast-able waffles to be born.
1917 - Government claims that toast-able waffle's are illegal. All toast-able waffle's are killed. Bibby swiftly replies by detonating one of the sides of the government's "hexagon". Toast-able waffle's are re-introduced.
1918 - Joe's family has a day of remembrance for Joe and his lemonade. In honor of it they have some lemonade. It is delicious.
1950 - Waffle's are considered beings and are given basic rights. Waffle's can now enter the YMCA.
1973 - Waffle's come together to watch the super bowl. People are very confused seeing large mobs of waffle's and swiftly reply by eating these waffle's. The waffle's friends reply by swiftly attacking and killing thousands.
1974 - This year was remembered as the Waffle War I of 1947
1975 - Waffles sign a peace treaty and are at peace with the government.
1983 - Waffles start inventing things! One of their major successes is the pancake. Another is the invention of syrup.
1986 - People start eating waffles for breakfast
1987 - Outraged waffles begin Waffle War II of 1987 and protest by eating people for breakfast. People quickly revert to eating pancakes instead and the waffles resume normal life.
1991 - Waffles are considered illegal and are hunted down. Waffles are put on the endangered species list and all this does is make the bounty rise.
1993 - 500 waffles remain. 300 are killed in the waffle massacre of 1993.
1997 - In 1997 only 5 waffles remain...
2000 - Most people think the world is about to end, so they have massive parties for everyone and create millions of waffles
2001 - In disappointment people realize they shouldn't have created the waffles
2002 - The waffle law is removed and waffles are legal
2003 - A big statue is made of Joe. Lemonade is sold there. It is delicious.
2008 - Waffles are now created and frozen for toaster uses. Waffles protest, yet cannot resist.
2015 - Waffles are now a highly respected race, yet some are abused and eaten.
2020 (Prediction) - The first Waffle goes into space. One small step for a waffle, one giant leap for waffle-kind.
2027 (Prediction) - The first being on Mars is a waffle. More waffles are created there making a massive waffle colony.
2032 (According to the Incan Calanders) - The world will end. No more waffles will exist except for the ones stuck on mars no more history because they would be huge exaggerations.
Thank you for reading. Bibby is still alive and thriving as of 2015.

Friday, November 20, 2015
A chat with yours truly, manager.
Me: Hello manager.
Manager: Hi Genie
Me: Genie? Who is genie? I am a Waffle, and I have nothing to do with genies. But I do like toast. Could you get me some, my manager?
Manager: I have a waffle iron if you are a cannibal.
Me: You have... a waffle iron? I am still currently questioning why I have you as a manager. You use waffle DNA to form new waffles and are very rude to the race of waffles. You should have read the time line below to see what happens to people who create timelines...
Timeline Maker: He can insult waffles all he wants you !@#$
Me: Where did you come from? You look very much like the manager. That's kind of weird. I thought I was talking to the manager?
Manager: That is my identical twin isn't he ugly?
Jim (time line maker): You...
Me: <Correcting grammar, the creator is the editor; the editor is the creator.>
Jim: That was rude.
Me: Rude? Rudeness is my specialty you little ugly !@#$
Narrator: If you are under the age of 3 stop reading because things will go downhill from here. Also if you are 3 it would be pretty hard to read this.
Jim: !@#$(censored)!@#$^&(more censorship)~!@#$%^&**
Me: Wow. Um... I'm wondering if I should just leave right now...
Jim's Mother: WE DO NOT SAY THAT STUFF!!! I WILL WASH YOUR MOUTH WITH SOAP.
Narrator: And now we are introducing too many characters
Me: I agree with the narrator, we should quickly conclude this discussion. The end...
Posted by Ben Smith at 9:52 AM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Thursday, November 19, 2015
Fancy Button. Click it!
Submit
Posted by Ben Smith at 6:31 PM 1 comment: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Tuesday, November 17, 2015
The Waffle Timeline.
This is the waffle Timeline. It will predict the future of waffle, and it also explains in great detail the history of the waffles.
1829 - The waffle is invented. The man creates the waffle purely out of ice, so it is a Icy Waffle, AKA the first waffle ever invented
1830 - People hate Icy Waffles and demand waffles that taste like food
1831 - Their wish is granted. Real Waffles are created
1836 - A man uses waffle for ice cream. The waffles are used to hold this ice cream and taste very good.
1840 - A man creates the first living waffle. It's name was bibby. BIBBY THE WAFFLE WOULD SOON RISE TO POWER
1846 - A guy named Joe had a glass of lemonade. It was delicious
1852 - Bibby magically vanished from the waffle lab. Panic was born and everyone took cover
1852-1870 - Nothing happened. People assume Bibby was a kind waffle and resumed normal life
1870 - Joe dies. His family is sad and has some lemonade. It is delicious.
1888 - People are like wow, it's 1888.
1900 - Celebrating the new century, the waffle iron is born.
1901 - There is a party for waffle iron's everywhere.
1915 - The toaster is invented but toast-able waffles are not.
1916 - Riots cause toast-able waffles to be born.
1917 - Government claims that toast-able waffle's are illegal. All toast-able waffle's are killed. Bibby swiftly replies by detonating one of the sides of the government's "hexagon". Toast-able waffle's are re-introduced.
1918 - Joe's family has a day of remembrance for Joe and his lemonade. In honor of it they have some lemonade. It is delicious.
1950 - Waffle's are considered beings and are given basic rights. Waffle's can now enter the YMCA.
1973 - Waffle's come together to watch the super bowl. People are very confused seeing large mobs of waffle's and swiftly reply by eating these waffle's. The waffle's friends reply by swiftly attacking and killing thousands.
1974 - This year was remembered as the Waffle War I of 1947
1975 - Waffles sign a peace treaty and are at peace with the government.
1983 - Waffles start inventing things! One of their major successes is the pancake. Another is the invention of syrup.
1986 - People start eating waffles for breakfast
1987 - Outraged waffles begin Waffle War II of 1987 and protest by eating people for breakfast. People quickly revert to eating pancakes instead and the waffles resume normal life.
1991 - Waffles are considered illegal and are hunted down. Waffles are put on the endangered species list and all this does is make the bounty rise.
1993 - 500 waffles remain. 300 are killed in the waffle massacre of 1993.
1997 - In 1997 only 5 waffles remain...
2000 - Most people think the world is about to end, so they have massive parties for everyone and create millions of waffles
2001 - In disappointment people realize they shouldn't have created the waffles
2002 - The waffle law is removed and waffles are legal
2003 - A big statue is made of Joe. Lemonade is sold there. It is delicious.
2008 - Waffles are now created and frozen for toaster uses. Waffles protest, yet cannot resist.
2015 - Waffles are now a highly respected race, yet some are abused and eaten.
2020 (Prediction) - The first Waffle goes into space. One small step for a waffle, one giant leap for waffle-kind.
2027 (Prediction) - The first being on Mars is a waffle. More waffles are created there making a massive waffle colony.
2032 (According to the Incan Calanders) - The world will end. No more waffles will exist except for the ones stuck on mars no more history because they would be huge exaggerations.
Thank you for reading. Bibby is still alive and thriving as of 2015.

Posted by Ben Smith at 4:33 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Monday, November 16, 2015
404 Post not found
Consult the button for guidance
Click me!
Posted by Ben Smith at 1:48 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Interview Mark II
Me: So may I interview you?
Random Guy: Okay
Me: During our interview, what should I refer to you as?
Talisimo: Talis
Me: So Talisimo, who do you work for?
Talisimo: I work at a bar
Me: A bar? How old are you if your working at a bar? 30? 40? 50?
Talisimo: 19
Me: Hm, that's nice to know.
Talisimo: ?
Talisimo: It's kind of a fancy bar, I guess.
Me: What makes it fancy?
Talisimo: I'd rather not talk about my work life...
Me: I understand 100%
Talisimo: I thought this was about me?!?
Me: Hm... It is, but I'm still confused about what are interivew is about. What are you interviewing for?
Talisimo: I'm interviewing to be on your !@#$
Me: Hmm... my recording device bleeped that out.
Me: anything else you would like to add?
Talisimo: I don't know.
Me: That concludes our interview!
Thanks for reading. These interviews are done with humans y'know?
Eight minutes
It is arguable what you can do in eight minutes. You can be extremely productive, or extremely stupid. In eight minutes you could publish the cure to cancer and become famous, or you could get arrested in eight minutes. I know you can get arrested in eight minutes because it happened to me once. Not fun. And if your wondering, my prison sentence was NOT eight minutes long. We can easily say eight years in prison. Eight minutes can decide your whole life. Probably not though, if you spend those eight minutes wisely. I'm not sure if doing randomness for eight minutes is wise, but I know it cannot decide my whole life. What can you do in eight minutes? I'm pretty sure you could eat at least ten pieces of walrus bacon. In eight minutes I could raid the Hershey chocolate factory and take all of the chocolate. In eight weeks I could eat all the chocolate... And I thought this post was limited to minutes or something like that. So what can you do in eight minutes? Walrus bacon was already listed... *sigh*. In eight minutes you could probably activate Armageddon and end the world. Armageddon is a fun word. So now you have a vague idea of what randomness is humanly possible in eight minutes with the expert help of TheGenieOfTruth. No spaces. One word. First name. Sentence fragment. Anyways. I still have two more minutes to type junk because I specifically made the parameter that I would type only for eight minutes, no more, no less, just so I could make a massive post about the 480 seconds of victory.
Thank you for reading. How long did it take? Eight minutes?

Friday, November 20, 2015
A chat with yours truly, manager.
Me: Hello manager.
Manager: Hi Genie
Me: Genie? Who is genie? I am a Waffle, and I have nothing to do with genies. But I do like toast. Could you get me some, my manager?
Manager: I have a waffle iron if you are a cannibal.
Me: You have... a waffle iron? I am still currently questioning why I have you as a manager. You use waffle DNA to form new waffles and are very rude to the race of waffles. You should have read the time line below to see what happens to people who create timelines...
Timeline Maker: He can insult waffles all he wants you !@#$
Me: Where did you come from? You look very much like the manager. That's kind of weird. I thought I was talking to the manager?
Manager: That is my identical twin isn't he ugly?
Jim (time line maker): You...
Me: <Correcting grammar, the creator is the editor; the editor is the creator.>
Jim: That was rude.
Me: Rude? Rudeness is my specialty you little ugly !@#$
Narrator: If you are under the age of 3 stop reading because things will go downhill from here. Also if you are 3 it would be pretty hard to read this.
Jim: !@#$(censored)!@#$^&(more censorship)~!@#$%^&**
Me: Wow. Um... I'm wondering if I should just leave right now...
Jim's Mother: WE DO NOT SAY THAT STUFF!!! I WILL WASH YOUR MOUTH WITH SOAP.
Narrator: And now we are introducing too many characters
Me: I agree with the narrator, we should quickly conclude this discussion. The end...
Posted by Ben Smith at 9:52 AM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Thursday, November 19, 2015
Fancy Button. Click it!
Submit
Posted by Ben Smith at 6:31 PM 1 comment: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Tuesday, November 17, 2015
The Waffle Timeline.
This is the waffle Timeline. It will predict the future of waffle, and it also explains in great detail the history of the waffles.
1829 - The waffle is invented. The man creates the waffle purely out of ice, so it is a Icy Waffle, AKA the first waffle ever invented
1830 - People hate Icy Waffles and demand waffles that taste like food
1831 - Their wish is granted. Real Waffles are created
1836 - A man uses waffle for ice cream. The waffles are used to hold this ice cream and taste very good.
1840 - A man creates the first living waffle. It's name was bibby. BIBBY THE WAFFLE WOULD SOON RISE TO POWER
1846 - A guy named Joe had a glass of lemonade. It was delicious
1852 - Bibby magically vanished from the waffle lab. Panic was born and everyone took cover
1852-1870 - Nothing happened. People assume Bibby was a kind waffle and resumed normal life
1870 - Joe dies. His family is sad and has some lemonade. It is delicious.
1888 - People are like wow, it's 1888.
1900 - Celebrating the new century, the waffle iron is born.
1901 - There is a party for waffle iron's everywhere.
1915 - The toaster is invented but toast-able waffles are not.
1916 - Riots cause toast-able waffles to be born.
1917 - Government claims that toast-able waffle's are illegal. All toast-able waffle's are killed. Bibby swiftly replies by detonating one of the sides of the government's "hexagon". Toast-able waffle's are re-introduced.
1918 - Joe's family has a day of remembrance for Joe and his lemonade. In honor of it they have some lemonade. It is delicious.
1950 - Waffle's are considered beings and are given basic rights. Waffle's can now enter the YMCA.
1973 - Waffle's come together to watch the super bowl. People are very confused seeing large mobs of waffle's and swiftly reply by eating these waffle's. The waffle's friends reply by swiftly attacking and killing thousands.
1974 - This year was remembered as the Waffle War I of 1947
1975 - Waffles sign a peace treaty and are at peace with the government.
1983 - Waffles start inventing things! One of their major successes is the pancake. Another is the invention of syrup.
1986 - People start eating waffles for breakfast
1987 - Outraged waffles begin Waffle War II of 1987 and protest by eating people for breakfast. People quickly revert to eating pancakes instead and the waffles resume normal life.
1991 - Waffles are considered illegal and are hunted down. Waffles are put on the endangered species list and all this does is make the bounty rise.
1993 - 500 waffles remain. 300 are killed in the waffle massacre of 1993.
1997 - In 1997 only 5 waffles remain...
2000 - Most people think the world is about to end, so they have massive parties for everyone and create millions of waffles
2001 - In disappointment people realize they shouldn't have created the waffles
2002 - The waffle law is removed and waffles are legal
2003 - A big statue is made of Joe. Lemonade is sold there. It is delicious.
2008 - Waffles are now created and frozen for toaster uses. Waffles protest, yet cannot resist.
2015 - Waffles are now a highly respected race, yet some are abused and eaten.
2020 (Prediction) - The first Waffle goes into space. One small step for a waffle, one giant leap for waffle-kind.
2027 (Prediction) - The first being on Mars is a waffle. More waffles are created there making a massive waffle colony.
2032 (According to the Incan Calanders) - The world will end. No more waffles will exist except for the ones stuck on mars no more history because they would be huge exaggerations.
Thank you for reading. Bibby is still alive and thriving as of 2015.

Posted by Ben Smith at 4:33 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Monday, November 16, 2015
404 Post not found
Consult the button for guidance
Click me!
Posted by Ben Smith at 1:48 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Interview Mark II
Me: So may I interview you?
Random Guy: Okay
Me: During our interview, what should I refer to you as?
Talisimo: Talis
Me: So Talisimo, who do you work for?
Talisimo: I work at a bar
Me: A bar? How old are you if your working at a bar? 30? 40? 50?
Talisimo: 19
Me: Hm, that's nice to know.
Talisimo: ?
Talisimo: It's kind of a fancy bar, I guess.
Me: What makes it fancy?
Talisimo: I'd rather not talk about my work life...
Me: I understand 100%
Talisimo: I thought this was about me?!?
Me: Hm... It is, but I'm still confused about what are interivew is about. What are you interviewing for?
Talisimo: I'm interviewing to be on your !@#$
Me: Hmm... my recording device bleeped that out.
Me: anything else you would like to add?
Talisimo: I don't know.
Me: That concludes our interview!
Thanks for reading. These interviews are done with humans y'know?
Posted by Ben Smith at 1:43 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Eight minutes
It is arguable what you can do in eight minutes. You can be extremely productive, or extremely stupid. In eight minutes you could publish the cure to cancer and become famous, or you could get arrested in eight minutes. I know you can get arrested in eight minutes because it happened to me once. Not fun. And if your wondering, my prison sentence was NOT eight minutes long. We can easily say eight years in prison. Eight minutes can decide your whole life. Probably not though, if you spend those eight minutes wisely. I'm not sure if doing randomness for eight minutes is wise, but I know it cannot decide my whole life. What can you do in eight minutes? I'm pretty sure you could eat at least ten pieces of walrus bacon. In eight minutes I could raid the Hershey chocolate factory and take all of the chocolate. In eight weeks I could eat all the chocolate... And I thought this post was limited to minutes or something like that. So what can you do in eight minutes? Walrus bacon was already listed... *sigh*. In eight minutes you could probably activate Armageddon and end the world. Armageddon is a fun word. So now you have a vague idea of what randomness is humanly possible in eight minutes with the expert help of TheGenieOfTruth. No spaces. One word. First name. Sentence fragment. Anyways. I still have two more minutes to type junk because I specifically made the parameter that I would type only for eight minutes, no more, no less, just so I could make a massive post about the 480 seconds of victory.
Thank you for reading. How long did it take? Eight minutes?
Posted by Ben Smith at 4:35 AM 1 comment: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Sunday, November 15, 2015
A interview
Me: Can I interview you?
Random person: You may c:
Me: So random person, what should I refer to you as?
Random person: ?
Me: What should I call you!?!
Noel: Noel
Me: Aye aye
Me: So how is life?
Noel: Good good.
Me: Two goods? Must be pretty good
Me: So Noel, what is your job?
Noel: I administrate and organize the rifle closet.
Me: Okay!
Me: How big are the rifles?
Noel: About as long as my arm
Me: How long is your arm?
Noel: About two feet long
Me: Two feet? That's the size of the hot dogs I eat!
Noel: Hold on let me measure it.
Noel: 3 feet long. Now let me measure my rifle
Me: 3 feet? That's the size of the rifles I eat!
Noel: My rifle is about four feet long. Weighs ten pounds.
Me: Quite the rifle Noel.
Me: And we are out of time... See you next time!
Thank you for reading. Who will be interviewed next?
A penny
Today I found a penny on the street. I thought I had struck rich. Pennies are worth tons of money! You could buy a house, a car, and maybe even a chocolate bar with a penny. Maybe two pennies to buy a chocolate bar, but you would easily be able to get a mansion and a Porsche with a penny. As I picked up and inspected the penny a man who I did not know saw the penny and tackled me hoping for a wonderful life like I did. Another man saw the commotion and joined into the pile making three people wrestle over one precious penny. After that there was a biker gang. I will never forget that day. I still have an injury on my head that looks like a doughnut. Some people try to eat my head. Not a pretty sight.

Thank you for reading. You just got me one step closer to a penny.
My manager
My manager is crazy!

My manager asked of me to make a post about his stupid, silly life in front of his little tiny box. This was a High-Tech box you see. According to the internet the tiny box is smarter than the moon missions computer. Then again, there were thousands of operators on this mission and they were smarter than the operator of this tiny box. You can easily think that this tiny box actually looks like a box. It actually looks like a rectangular prism. My manager is mentally insane and he is not very good at math. He also has a disability that makes him want to be called manager. Seriously! I call him manager and people ask me what I work for. He even has a BIGGER box that is even SMARTER than that other box. Pretty clever if you ask me. He is not sure which buttons to press because when he presses those buttons the box does not register the button presses. His words per minute in typing is five, and if he was typing this it would take about five hours. Since my word per minute is 1000 words per minute, it only took me like five seconds to type up this massive wall of text that nobody is going to have fun reading. Now I have finally introduced my manager to the world, and if he sees the said blog, I will be fired.

Thank you for reading. My manager just got minecraft for free.
Confusion, confusion, and finally, confusion.
If something is bigger, you will look at it
Smaller text has the reverse effect
Anyways... I guess nobody real cares about this

There once was a man whose name I will leave unmentioned. His soul was consumed by endless hours on his tiny screen with little blocks and pixels. You can easily assume this is half of the American population. Anyways, i'll tell you a bit about me instead of this man whose name I'm leaving unmentioned

I will explain my life with as much zest and spice, and ultimately pasta

1) I am funny and crazy simultaneously
2) Me and grammar are close friends. My sidekick is spellcheck, and we will conquer the world
3) I code in HTML for fun and stuff :D
Anyways after telling of this randomness about me, I hope that you have laughed your head off in the process.

Thank you for reading. If life gives you lemons, sell them because this is America! Capitalism! Profit! That's America for you. Bye!
HOW WE ROLL
The HTML Project is very laid back! If you expect to take a lesson, please keep the following in mind.
  - Jokes will be made: If you do not like jokes, you are either mentally insane, or don't know what a joke is.
  - We are very laid back. We have no deadlines, prices, or anything else preventing you from the full coding experience
  - If you read the title "How We Roll" you know we won't be that serious when coding. We won't be too silly, and we will always make sure to get the point across.
  - Coding is for many things: Whether you are learning for fun, a hobby, or anything in between, we will always support you with your ideas, and try to get you going in the right direction.
  - Our staff is currently ONE PERSON. I refer to myself as "we" to make myself feel good.
  - Finally, if you don't have anything nice to say, I'm glad to listen to it and not comprehend it at all. We do not allow rude language or "jokes", but we understand if you get frustrated.
ABOUT
Introduction: What is an HTML and where can I get one?

Hello! Welcome to The HTML Project! If you are wondering what HTML stands for, it is the: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages." Since those words are so big, the way I would put it is: "A programming language that lets you make cool stuff to make websites." Google has better grammar than me. Way better. Now that you know what HTML actually means, heres a bunch of stuff you can read to learn how you can learn through my learning. (Lots of learning here.)

My project: The amazing story of an amazing guy with amazing skills. (Lots of amazing here.)

This whole "HTML project" thing is a one man band, I teach HTML to unsuspecting victi- I mean gracious students. If you're lazy and don't want to read through all the details, you can just take my email and say "ME WANT CODE": thegenieoftruth@gmail.com. I can usually code on Mondays, Tuesdays, Wenesdays, and Saturdays 5:00PM to 8:00PM. Seeing that I'm not too official, I can change the times if you REALLY want to code.

Courses/Pricing: One HTML, please.

The price is about $0 USD, €0 EU, etc. If you are paying in dogecoin, you must pay 1 dogecoin. There are several courses, based on your time frame. They are listed below:

Quick: A fast HTML course (30 minutes) - for getting a basic grasp of HTML
Normal: The normal course (5 hours over ___ days) - for learning basic to advanced HTML
Apprentice: Learn everything I can muster (???) - for learning a LOT
Teacher: Learning the Normal and Quick curriculum(5-6 hours over ___ days) - Teach others!
Warm-up: A quick HTML course for anyone who has already taken a lesson(5 minutes)
Notices: Times vary by student, and Javascript and CSS courses are also offered.
Hello, and welcome to my website! This is the first website I have ever created with pure HTML and I coded everything in this website by myself! I used some additional resources (see credits) in this, but (most of) the games I coded! Hopefully you enjoy your visit to my website and come back later! (If you have any ideas for my website, contact me in person, or send something to this email: thegenieoftruth@gmail.com). I'm a early HTML coder and I'm still learning everything, but I'm pretty good! Hopefully you like my fancy graphics.

Updates
Updates feature added!
Revamp for games finished.
"XML parsing error" in ColorFlip. Instead of color flip the new, ButtonClick game was added.
News article tagging and rating system added.
Two more games added. Battle Arena is my game, and Remember is a friends game. Hope you have fun!
A reliable source gave me a good nyan cat picture for the Christmas Section of the website. Enjoy!
After a long wait, the zombie game is finished! It is nearly finished, it just needs a few people to test it and report glitches. Troubleshooting: IF the game is blank, try refreshing. Press the green flag twice.
Chat channel in progress. Will be finished in a while
Thanks to my reliable source, and google, the christmas tab is turning into a christmas collage!
Christmas collage COMPLETE! I cannot cram anymore stuff into the christmas section. Enjoy the pictures!
Instructions added to 'Rememeber' and 'Zombies!' Click the button 2 literally has the instructions in the title. Also added the 'Learn!' section.
CHAT FEATURE RELEASED! Still being tested...
Chat feature is a hit! Please don't act like someone. Don't trust someone under a friend's name unless they are logged in with their email. Also, the Carrie-ism and Sankalp-ism war rages on. Sign up for one of these following jobs! Coder, writer, comedian, advertising, or brainstormer.
New game created: Escape The Room!

Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
Knock knock. Who's there? Knock knock. Who's there? MY NAME IS KNOCK KNOCK!!!
What do you call a mix between Mozart and Thomas Edison? Glowzart.
If you are a nobody, and nobody is perfect, you are perfect.
What happens when Pinnochio says, "My nose is about to grow?" Paradox confirmed.
The past, present, and future walk into a bar. It was tense.
A man walks into a bar. OOF! It was a metal bar
Why did the chicken cross the road? To get to the stupid person's house. Knock knock. Who's there? The chicken.
What do you call a stealthy noodle? An impasta!
Camping is (intents/intense)
What is a intrument found in a bathroom? A tuba toothpaste
0+0 = 0, 0-0 = 0, 0*0=0, and 0/0 = math lesson
I was a poet, and I wasn't even aware.
Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
"If you quote yourself you sound much less official" - Me
"The difference between stupidity and genius is that genius has it's limits" - Albert Einstein
"Your blood is red, my blood is blue, I am a alien, I ask you if true." - random alien.
"Stupid you are. Learn you must." - Yoda
Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
You reach a fork in the road. There are two men. One who always tells truths and the other always tells lies. One path will lead you to certain doom. The other will lead you to infinite riches. You can ask the truth teller and the liar one question and use the answers to choose which way to go. Answer: Ask them "What direction would the other person say is the right way" then go the opposite way.
Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
When in doubt, press the big red button.
Rule 1: Try not to die. Rule 2: If you can not follow rule 1, look good while doing so
When life gives you lemons, sell them for profit.
If I lived like there was no tommorow, tommorow I would be bankrupt

News

Go
Funny: 3/5 | Tutorial: YES | Fake: NO | Rating: 5/5 | IMPORTANT POST
This is the introduction to the "news" tab. Here you can view past articles and this tutorial article will already be displayed. Articles are never deleted and be can recovered and viewed at any time. If you like this new feature please consider writing a news article to be posted. These articles can be anything from funny cat memes to serious political junk that I don't understand. Anyways, have fun reading the articles! Notice that some articles are outdated and may have invalid information. I will try to put a notice next to invalid information for your convenience
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
Carrie: "My religion is so that people can come together" (chuckling...) "And unite.. In... Peace???" (giggling...) "And I don't want people to think that I am a terroism religion." - Carrie.
Joe: "GIVE ME ALL YOUR MONEY! I WANT A BIG MAC" - Joe. Well then. I guess that isn't going as planned.
Sankalp: "My religion values that everyone should be equal and everyone should get equal chances to um, um do something with their life... For example: With poverty people are put into a poverty situation which they cannot get out of without help. Also my religion follows um, all friends should stay friends. And we believe in seeing the good in other people." Well. Sankalp said um. Three times.
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | BATMAN | Note: Batman says this is real
The batman tab has been intoduced! Go there for all Batman games, photos, and websites(all appropriate) to fulfill your batman needs. Famed mathematician JTY has invented a new constant: the bat-constant.The bat constant is a new number introduced very recently, the number which has the absolute value of infinity, -0. Mathamaticians JTY and Bruce Wayne( Who is in no way related to Batman) are verifying if this namber is an actual idea, or a conjecture. In other news, the Sankalp-ism/ Carrie-ism debate is tied, with votes being 50/50. But Bruce Wayne’s company, Wayne enterprises, has uncovered the suprising truth: Carrie-ism is terrorism. Sankalp-ism is also hosting a fundraiser to save India from poverty. This concludes our news article. For more info, talk to Bruce Wayne, JTY, Sankalp, or the TheGenieOfTruth
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
Yesterday, Carrie changed the COMB of OMB to MOMB. We don't know why. It sort of sounds like MOM but we don't know if this means anything. Meanwhile (in a previous post) Sankalp has a fundraiser! The war rages on, but because of Sankalp's kindness to fighting against poverty in India, the votes have tilted to 60-40 with Sankalp in the lead. Joe tried to steal some fundraiser money, and Sankalp told him this was against Sankalp-ism to steal, and now Joe is banished. On this day Joeanity is created. Joeanity values McDonalds, greed, theivery, and money... The votes got tilted to 85-10-5 with 85% on Joe, 10% on Sankalp, and 5% on Carrie. WHAT HAS HAPPENED! SOMETHING MUST BE DONE
News

Go
Fake: NO | Rating: 9/10 | IMPORTANT POST
Sankalp's new line of somewhat-origami-starwars line is now taking in orders. His line includes: "Everything starwars". This proves to be a great turn for Sankalp-ism, as he provides all followers of sankalp-ism: FREE COMPLIMENTARY YODAS. If you you want to make an order, please make a folded post-it that has your order on it. Currently, the limit of orders is 5. Soon this will be a fundraiser, fighting against poverty in India. Currently the origami is free, but you can donate this cause. Soon these will have a price, but it is still being decided: It will be a dollar or less.
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
News flash: OMB does not translate to BOMB. When interviewing Carrie, she said it was MOMB, then BOMB(Woah!) then COMB. So OMB means COMB. We will need to learn what this C means. Meanwhile, it is SANKALP-ISM day! This is the day Sankalp was brought to Earth by the ancient (insert cool name) gods! McDonalds is now giving free food to Sankalp-ists, yet Sankalp is vegetarian so he enjoys some highly overpriced Panera. This concludes today's article of Sankalp-ism vs Carrie-ism. The votes are currently 50-50 and the feature of voting on which you believe in will soon come to this website. MAY THE BEST RELIGION WIN!
News

Go
Funny: 3/5 | Random: 5/5 | Fake: NO | Rating: 4/5 | Note: Message to the world from me.. :)
Today, we will not be discussing sarcasm. Sense the sarcasm? Sarcasm is a very interesting concept, involving a person saying a statement that isn't true in their view, and saying it in an obvious voice. Some people do not understand sarcasm and frustrate the sarcastic people and make them say more sarcastic stuff. Consider the following example:
"Let's go do (something stupid)," -other guy
"Sure... Such a smart idea..." -me
"Okay! Let's do it!" Other guy
"And why don't we do (something else stupid) while we're at it..." - Me sarcastically
"Sounds great!" - other guy
*mutters* "idiot" and stalks off - me
That's how sarcasm works. Amazing.
Home  Games  FunWords  News  Credits  Batman  Learn
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
The war rages on. Carrie is still in the lead. A new phrase has been devoloped. If you find something outrageous, or amazing, one could say "OMB" (oh my blurb) to express extreme emotion. Sankalp-ism has made a swift response with OM? (Do you want to go get food? Joe replies swiftly and hopes for McDonalds). Very confusing. A theroey about Carrie-ism hints they are terriosts. Saying OMB sounds like BOMB. You can never know... This concludes this article
Live Chata
Go
Funny: 3/5 | Random: 4/5 | Fake: NO | Rating: 3/5 | Note: There is no proof to back this up
Today we discuss the age old topic. What is the difference between apple juice and apple cider? For one, apple juice tastes horrible when it is warm. Also, apple juice is (mostly) imported from China, giving it that apple concentrate flavor. Either way, China is amazing. Apple cider is kind of puply and tastes like it was actually made with apples. Let's just say that apple cider tastes like it was freshly made, yet poorly made. This concludes 'What is the difference between apple juice and apple cider'
There once was a man named Joe. He was born on 1904. He tried lemonade when he turned 5, in 1909. He created his first lemonade in 1914, when he was 10. He opened his business and lived peacefully until he turned 26 in 1930. By then he had millions of dollars. He decided to give everyone in the world lemons! Nobody knew what they were for, but were grateful. When he was 32 in 1936 he was super famous. For 30 years he placed random 50 gallon containers of lemonade around the world. He turned 62 in 1966 and retired for the rest of his life. In year 2000 he was 96 and killed himself because he thought the world would end. I found one of those 50 gallon containers and put him in the credits. His lemonade was delicious! I still remember Joe to this day.
The issue of Carrie-ism and Sankalp-ism rages on. Scientists have changed votes and now Carrie-ism has 70% of the votes and Sankalp-ism has 30% of the votes. This will probably tick Sankalp off and give Carrie a happy day. Anyways, to the debate. Scientists on Carrie-ism tell Sankalp-ism scientists that Carrie-ism is more complex with Sankalp-ism, because Sankalp-ism doesn't do anything. They state that saying 'blurb' is one of the most complex ways of worship. Many scientists are agreeing, and are waiting for the Almighty Sankalp go forth with new efforts to establish a greater religion. Until then Carrie-ism is the new leading religion, and massive mobs of people crowd around Carrie, getting on their knees, and bow saying 'blurb.' Sankalp has about one follower, named Joe. He likes McDonalds and decides following Sankalp will get him free McDonalds. This concludes today's report about Sankalp-ism and Carrie-ism.
According to most scientists, there is a person named Carrie, and she is a goddess. Also according to scientists, a new religion will be introduced involving worshipping the real goddess, Carrie. It will be called Carrie-ism. This religion involves bowing down to Carrie and saying "Blurb". Other scientists state that the actual real god is Sankalp. Nobody is quite sure how this works, but the votes are 49-51 and 49% of scientists believe in Sankalp-ism and 51% believe in Carrie-ism. There will soon be a debate over which one of these religious figures is the true god-goddess. The winner will (probably) be Carrie, for she has 51% of the votes whereas Sankalp has 49%. This concludes this news article.
Many people have wanted to be posted in this article with much randomness such as superman and beating people up. I could make this happen but my laziness level is unknown to human beings. So we will conclude with a short story about a guy named Jay and Sea. Anyways, Jay is a enemy with the guy named Sea, but they are in a truce. One day there is a tornado and Jay flies to Australia through the clouds. He lands on Sea. Jay is confused on how Sea got there in the first place and they get into a wrestling match in which there are walri, octipi, cacti, and the two doofi of this situation are Jay and Sea. At this moment the universe implodes, and as a grand finally it explodes. Everyone is killed including Jay and Sea.
This is the introduction to the "news" tab. Here you can view past articles and this tutorial article will already be displayed. Articles are never deleted and be can recovered and viewed at any time. If you like this new feature please consider writing a news article to be posted. These articles can be anything from funny cat memes to serious political junk that I don't understand. Anyways, have fun reading the articles! Notice that some articles are outdated and may have invalid information. I will try to put a notice next to invalid information for your convenience

I'm willing to teach people what I know in HTML, and in the end you will get your own website. If you are interested, send an email to thegenieoftruth@gmail.com
Notice: I am not a college professor. This can be good and bad in many ways. Current students: 3. Their handiwork is below:
bib123aaa (website under construction)
Website by my cousin (Student 2)
||Sky|| (website under construction)
htmlproject.net
eggspearamint.blogspot.com
htmlprojectblog.blogspot.com

Credits:

Credit to My Blogger Tricks for the blank template
Credit to Subtle Patterns for all backgrounds.
Credit to Da Button Factory for most button creation.
Credit to the creator of Jec-comics for the idea to make a website
Credit to Harmonicraft for inspiring me to code, and introducing blogger to me.
Credit to Me for most games, ideas, and news.
Credit to A friend for the 'Remember' game
Credit to Joe for the 50 gallons of lemonade
Credit to Embedded Chat for the chat kerjigger
Credit toBatman for being Batman
Once Upon a time
Four score, and x Years ago a rather large kingdom thrived at coordinates (0,0). The kingdoms name was the Moberly kingdom, for the ruler was Queen Moberly. This, and three other kingdoms lived in harmony. First, there was the kind, understanding Decker kingdom. Second, there was the crazed, loud, psychotic, and partying Poppewell kingdom. Third, there was the smart, scientific (and somewhat evil) Anderson kingdom. In the midst of all of these varying kingdoms stood the Moberly kingdom, the wisest, most logical kingdom of them all. This kingdom spoke in riddles (and equations). These four kingdoms live in the country of S.E.A.R.S. (Super Eccentric And Really Smart), and were commanded by the great gods known as "principals". Until this fateful day, the kingdoms lived in harmony. For reading the most minutes of books out of all the kingdoms (even the distant ones) they received a magical disco-ball enhanced with the power of swag. Queen Anderson was determined to obtain this disco ball and would stop at nothing to get one for herself.
A Brief Introduction. Society, me. Me, society.
I was overcome with a passion -- an endearing feeling really -- to become an integral part with the world.
This has been a recent development in my demeanor but something that I want to do with the rest of my life. I felt that the best way to do it in this world was through the internet. So I will share my story with as much brevity as is admittedly possible. I will provide a chronological account in the most intuitive form I know possible, an ordered list.
1) I was stuck in Guam for most of my life. As a professional air tube cleaner, my day to day "earning of the bread" felt futile and quite uneventful. (1969-2001)
2) I discovered donuts. This become an unhealthy addiction, I must concede. However it gave me the energy I needed to become a better worker and eventually became manager of my tube business. (2001-2005)
3) A tragic life-defining moment for me was when I unfortunately was trapped, or as they say "stuck" in some parts of the world, within a tube of my own making. It was humbling for me, floating across the Atlantic to who knows where. I eventually intercepted an Irish Wristwatch shipping boat on it's was to the United States of America, where I found my new home and discovered the Freedom of Speech. (2006)
The years leading up to this wonderful year of 2015 were full of soul searching and an uncanny amount of purchasing of miniature donuts that I find just adorable. That's enough about me. Tell me about yourself, society. How are you doing?
Now that you have read of my adventures from the far reaches of Guam to the vast towns of America, I have more to tell you. I have found a new miniature donut shop and I am seeking business in this small humble company.
THE HTML PROJECT
HTML is a leading programming language. With so many ways to learn, its hard to find the perfect way...

The HTML Project - Fast, Fun, Free

Get Started


Flexible lesson times
Lessons can be done Monday through Saturday. You can quickly contact me through the instant client chat, or use the contact form to schedule a lesson for a later time.

Learn anywhere
Learn on the JSFiddle platform and have a collaborative lesson with a easy to understand GUI. This enables anyone, anywhere to have lessons.

Other features
Lessons are completely free
You can learn beginner to advanced skills
Learns useful tips and tricks over time
Ahoy! My name is Ben Smith, and I'm an HTML Developer. So, you're at this website because I either forced you to, or you stumbled upon it. Either way, this is still a pretty nice website with some fancy transitions and themes. Now, before I get carried away by ranting about how awesome my website is(n't) I'd like to explain the reason why I built this website in the first place...

For people like YOU to be able to be taught by a NERD who pretty much breathes this HTML stuff. I make it easy, fun, and really, really annoying by trying to say funny stuff. However, I iron out early misconceptions and teach good practices. As a beginner, diving into the murky waters of HTML Development was confusing, and I had thousands of questions. Now you can learn from me, so I can google answer all of your questions.

So let's go
(I'm professionally an unprofesional ya'know)
//Hacktimer, makes it so the bot laggs you, even when you don't have the tab focused :O
(function(s){var w,f={},o=window,l=console,m=Math,z='postMessage',x='HackTimer.js by turuslan: ',v='Initialisation failed',p=0,r='hasOwnProperty',y=[].slice,b=o.Worker;function d(){do{p=0x7FFFFFFF>p?p+1:0}while(f[r](p));return p}if(!/MSIE 10/i.test(navigator.userAgent)){try{s=o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]))}catch(e){}}if(typeof(b)!=='undefined'){try{w=new b(s);o.setInterval=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2)};w[z]({n:'a',i:i,t:t});return i};o.clearInterval=function(i){if(f[r](i))delete f[i],w[z]({n:'b',i:i})};o.setTimeout=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2),t:!0};w[z]({n:'c',i:i,t:t});return i};o.clearTimeout=function(i){if(f[r](i))delete f[i],w[z]({n:'d',i:i})};w.onmessage=function(e){var i=e.data,c,n;if(f[r](i)){n=f[i];c=n.c;if(n[r]('t'))delete f[i]}if(typeof(c)=='string')try{c=new Function(c)}catch(k){l.log(x+'Error parsing callback code string: ',k)}if(typeof(c)=='function')c.apply(o,n.p)};w.onerror=function(e){l.log(e)};l.log(x+'Initialisation succeeded')}catch(e){l.log(x+v);l.error(e)}}else l.log(x+v+' - HTML5 Web Worker is not supported')})('HackTimerWorker.min.js');
//Educates the stupid, and shows the seasoned an annoying message
console.log("schoolbot.js loaded")
console.log("Start: init(\"message here\")")
console.log("Basic start: basic()")
console.log("Stop: halt()")
console.log("For more advanced features, type help()")
//Gives the docs
function help(){
    console.log("More advanced usage")
    console.log("init(message,delay,scrambled,endLetter)")
    console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
    console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
    console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
    console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
    console.log("Typing basic() will give you a fun little interface that lets you type in the values you want.")
}
//Clicks an element
function clickify(targetNode){
    if (targetNode) {
        triggerMouseEvent (targetNode, "mouseover");
        triggerMouseEvent (targetNode, "mousedown");
        triggerMouseEvent (targetNode, "mouseup");
        triggerMouseEvent (targetNode, "click");
    }
    else{
        console.log ("*** Target node not found!");
    }
}
//Triggers mouse events, nuff said
function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}
//Stops the loop of requests
function halt(){
    clearInterval(loop)
}
//Saves some space. Pretty nice, checks if something doesn't exist
function fallback(arg,def){
    if(arg == arguments[2] || arg == null || arg == 0){
        return def
    }
    return arg
}
//For those that are a bit too stupid to read words, four prompts that will run init for you
function basic(){
    var message = fallback(prompt("What will your message be?\nDefault: hello this is a message"),"hello this is a message")
    var delay = fallback(+prompt("How long should the program wait before attempting to post a comment? (Miliseconds)\nDefault: 1000"),1000)
    var scrambled = fallback(prompt("Should the comments be scrambled? \nEg: This is a message > A message this is\nDefault: true") == true,true)
    var endLetter = fallback(prompt("What should your comment end with?\nDefault: !"),"!")
    init(message,delay,scrambled,endLetter)
}
function init( /*message,delay,scrambled,endLetter*/ ) {
	//All the different flavors of arguments, and their fallbacks
	if (typeof arguments[0] === "object") {
		var message = fallback(arguments[0]["message"], "hello this is a message", "")
		var delay = fallback(arguments[0]["delay"], 1000, "")
		var scrambled = fallback(arguments[0]["scrambled"], true, "")
		var endLetter = fallback(arguments[0]["endLetter"], "!", "")
	} else {
		var message = fallback(arguments[0], "hello this is a message")
		var delay = fallback(arguments[1], 1000)
		var scrambled = fallback(arguments[2], true)
		var endLetter = fallback(arguments[3], "!")
	}
    //Log what values came out in the end
	console.log("Program initiliazed as init(\"" + message + "\"," + delay + "," + scrambled + ",\"" + endLetter + "\")")
    //Set the interval for attepmting to make comments
	loop = setInterval(function() {
        //Splits your message into words
		var arr = message.split(" ")
		if (scrambled) {
			//Shuffle. Probably stolen from the internet
			function shuffle(array) {
				var currentIndex = array.length,
					temporaryValue, randomIndex;
				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}
				return array;
			}
			//Shuffle that array
			arr = shuffle(arr)
		    //Grammerz!
			arr[0] = arr[0].substring(0, 1).toUpperCase() + arr[0].substring(1, arr[0].length).toLowerCase()
		}
		//Join the words together, slap on the ending letter
		arr = arr.join(" ") + endLetter
		//And the only way to enable is to... disable the disable!
		document.getElementById("edit-submit").disabled = false
		//Set the innerHTML of the comment to the value of the scrambled variable crap
		document.getElementById("edit-comment").value = arr
		//Then press that submit button
		clickify(document.getElementById("edit-submit"))
	}, delay)
Tema 5 IPA
June 1-8, 2016
La Fortuna de San Carlos, Costa Rica
You are headed on the trip of a lifetime to Costa Rica!  For 7 days, you will be staying in the Arenal Volcano region.  You will need to find and compare two hotels using the Spanish TripAdvisor website.  You will then need to write an email to your travel agent to notify him/her of your hotel choice.  Finally, you will need to speak with the hotel concierge to select two activities for your first day of vacation.  When booking the hotel, you will look for a hotel in the ciudad called “La Fortuna de San Carlos.”  And of course, all of this will be done using the Spanish you have learned in class!  


¡Buen viaje!
















PARTE 1 - CHOOSING A HOTEL (Interpretive Reading)
Click here to go to the Spanish Tripadvisor Website
Enter your city and dates in the search boxes
Fill in the chart below with the information you find about each hotel




Hotel #1 here
Hotel #2 here
¿Cómo se llama el hotel?
Hotel Arenal Green


Hotel La Fortuna


¿Cuál es el teléfono del hotel?
(506) 2479-8585
+506 2479-9197
¿Cuántas estrellas (stars) tiene el hotel?
4.5 stars
4 stars
¿Tiene el wifi gratis?
Sí
Sí
¿Tiene piscina?
Sí (cascadas / playa)
No
¿Tiene spa?
Sí
No
¿Tiene restaurante?
Sí
No
¿Cuánto cuesta por 1 noche?
$ 47 / noche USD
$ 26023.90 en Costa Rica Colones
$ 79 / noche USD
$ 43742.30 en Costa Rica Colones


For each hotel, clic en: OPINIONES.  Escriban el número de opiniones de cada hotel.


Las opiniones
Hotel #1
Hotel #2
Excelente
Sí


Muy bueno




Normal


Sí
Malo




Pésimo






Now, try reading a couple of reviews in Spanish for each hotel.  When you find a phrase or description that you understand, please copy/paste it here.  You must find at least 3 phrases/descriptions for each hotel that use words we have learned in Spanish class.




Paste phrase/description here
What I think this means in English
Hotel #1
 El servicio de spa me encanto
The service of the spa is enchanting
Hotel #1
Deliciosa la comida
The food is delicious
Hotel #1
100% recomendado 
100% recommended
Hotel #2
Hotel bonito y en el centro de La Fortuna
This is a pretty hotel in the center of La Fortuna
Hotel #2
Perfecto escape para mi y mi novia
Perfect escape for me and my partner
Hotel #2
Mi experiencia en las cabañas del hotel Arenal Green fue excelente. 
My experience in the cabins of the hotel Arenal Green is excellent


PARTE 2 - NOTIFYING TRAVEL AGENT (Presentational Writing)
¿Cuál es tu hotel favorito y por qué?
Your travel agent has asked you to pick your favorite hotel.  You will send him/her an “email” with a short written explanation of which hotel you would want to stay at during a trip to Costa Rica.  You can mention your personality and how it fits with the environment at the hotel (i.e. I am relaxed and the hotel has a spa) or you can describe the hotel’s features.  Please use your Spanish class vocabulary to help you.  Do NOT use an online translation service to write this for you!


Some helpful phrases might include:  
Yo quiero
Yo voy
El hotel es
El hotel tiene


Yo quiero wifi gratis y restaurante
Yo voy a la playa
Yo quiero Hotel Arenal Green
Cuesta 47 dolores / noche, y el hotel tiene wifi gratis y restaurante
























PARTE 3 - DISCUSSING POSSIBLE ACTIVITIES (Interpersonal)
¡Ojo! You will need a partner for this part!


¿Qué quieres hacer en Costa Rica?
You have arrived in Costa Rica at the hotel that you chose in the previous section.  Now, it is time to find some activities for your visit.  Using the Spanish that you know, you need to speak with the hotel tour guide to arrange at least 2 activities for your day.  To do this, you might want to describe your personality and physical limitations.  You should also list things that you want to do (i.e. canoeing, shopping, etc.).  You have a budget of $100,000 COLONES (about $200 US dollars) so you will need to find out the costs of each activity before choosing.  


Your partner will show you a picture that has the various activities and their costs.  He/she will answer your questions as best as they can.


At the end of the conversation, you will tell the tour guide which activities you want and you will thank him/her and say goodbye.


Roles:  traveler and tour guide


Preparation:  The tour guide will need to look over this “visual” flyer of the activities and their costs.  The traveler will need to be ready to describe himself/herself to the travel agent.  


Conversation:  The traveler will begin the conversation by talking about their personality.  The tour guide will respond with possible ideas for activities.  BE SURE TO USE GREETINGS AND FAREWELLS!


Useful phrases:
Yo soy…
Yo quiero…
¿Es posible?
¿Quieres?
¿Cuánto cuesta?
Cuesta _____ dólares/colones.


Please submit your script to Sra. Burns before your presentation in class.


Luke: Hola!
Sai: Hola, como estas?
Luke: Muy bien, y tu?
Sai: Igualmente.
Luke: Por el viaje, como eres?
Sai: Yo estoy bajo, aburrido, y no activo. Yo tengo doscientos dólares. 
Luke: Quieres esquiar en el lago, ir por canoa y ver cocodrilos, o montar caballos?
Sai: Sí, quiero esquiar en el el lago, y ir por canoa y ver cocodrilos. Cuanto cuesta?
Luke: Cuesta sesenta dólares.
Sai: Bueno! Gracias, hasta luego!
Luke: Adiós!
Skip to Content
SchoologySearchHomeCoursesGroupsResources
Messages
Requests
NotificationsLuke TrenamanSettings
SupportSupport
Profile picture for 7th Grade Spanish: Section 9-3
Current Menu ItemMaterials DropdownMaterials
Updates
Grades
Mastery
Members
Information
Grading period
M1: 2016-08-15 - 2016-12-21
7th Grade Spanish: Section 9-3  Files/Links
Tema 6 Quizlet

 · Schoology © 2016Support · Schoology Blog · Privacy Policy & Terms of Use
EnglishLanguage dropdown
}
Bee Movie Script

  
  
According to all known laws
of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.

  
Yellow, black. Yellow, black.
Yellow, black. Yellow, black.

  
Ooh, black and yellow!
Let's shake it up a little.

  
Barry! Breakfast is ready!

  
Ooming!

  
Hang on a second.

  
Hello?

  
- Barry?
- Adam?

  
- Oan you believe this is happening?
- I can't. I'll pick you up.

  
Looking sharp.

  
Use the stairs. Your father
paid good money for those.

  
Sorry. I'm excited.

  
Here's the graduate.
We're very proud of you, son.

  
A perfect report card, all B's.

  
Very proud.

  
Ma! I got a thing going here.

  
- You got lint on your fuzz.
- Ow! That's me!

  
- Wave to us! We'll be in row 118,000.
- Bye!

  
Barry, I told you,
stop flying in the house!

  
- Hey, Adam.
- Hey, Barry.

  
- Is that fuzz gel?
- A little. Special day, graduation.

  
Never thought I'd make it.

  
Three days grade school,
three days high school.

  
Those were awkward.

  
Three days college. I'm glad I took
a day and hitchhiked around the hive.

  
You did come back different.

  
- Hi, Barry.
- Artie, growing a mustache? Looks good.

  
- Hear about Frankie?
- Yeah.

  
- You going to the funeral?
- No, I'm not going.

  
Everybody knows,
sting someone, you die.

  
Don't waste it on a squirrel.
Such a hothead.

  
I guess he could have
just gotten out of the way.

  
I love this incorporating
an amusement park into our day.

  
That's why we don't need vacations.

  
Boy, quite a bit of pomp...
under the circumstances.

  
- Well, Adam, today we are men.
- We are!

  
- Bee-men.
- Amen!

  
Hallelujah!

  
Students, faculty, distinguished bees,

  
please welcome Dean Buzzwell.

  
Welcome, New Hive Oity
graduating class of...

  
...9:15.

  
That concludes our ceremonies.

  
And begins your career
at Honex Industries!

  
Will we pick ourjob today?

  
I heard it's just orientation.

  
Heads up! Here we go.

  
Keep your hands and antennas
inside the tram at all times.

  
- Wonder what it'll be like?
- A little scary.

  
Welcome to Honex,
a division of Honesco

  
and a part of the Hexagon Group.

  
This is it!

  
Wow.

  
Wow.

  
We know that you, as a bee,
have worked your whole life

  
to get to the point where you
can work for your whole life.

  
Honey begins when our valiant Pollen
Jocks bring the nectar to the hive.

  
Our top-secret formula

  
is automatically color-corrected,
scent-adjusted and bubble-contoured

  
into this soothing sweet syrup

  
with its distinctive
golden glow you know as...

  
Honey!

  
- That girl was hot.
- She's my cousin!

  
- She is?
- Yes, we're all cousins.

  
- Right. You're right.
- At Honex, we constantly strive

  
to improve every aspect
of bee existence.

  
These bees are stress-testing
a new helmet technology.

  
- What do you think he makes?
- Not enough.

  
Here we have our latest advancement,
the Krelman.

  
- What does that do?
- Oatches that little strand of honey

  
that hangs after you pour it.
Saves us millions.

  
Oan anyone work on the Krelman?

  
Of course. Most bee jobs are
small ones. But bees know

  
that every small job,
if it's done well, means a lot.

  
But choose carefully

  
because you'll stay in the job
you pick for the rest of your life.

  
The same job the rest of your life?
I didn't know that.

  
What's the difference?

  
You'll be happy to know that bees,
as a species, haven't had one day off

  
in 27 million years.

  
So you'll just work us to death?

  
We'll sure try.

  
Wow! That blew my mind!

  
"What's the difference?"
How can you say that?

  
One job forever?
That's an insane choice to have to make.

  
I'm relieved. Now we only have
to make one decision in life.

  
But, Adam, how could they
never have told us that?

  
Why would you question anything?
We're bees.

  
We're the most perfectly
functioning society on Earth.

  
You ever think maybe things
work a little too well here?

  
Like what? Give me one example.

  
I don't know. But you know
what I'm talking about.

  
Please clear the gate.
Royal Nectar Force on approach.

  
Wait a second. Oheck it out.

  
- Hey, those are Pollen Jocks!
- Wow.

  
I've never seen them this close.

  
They know what it's like
outside the hive.

  
Yeah, but some don't come back.

  
- Hey, Jocks!
- Hi, Jocks!

  
You guys did great!

  
You're monsters!
You're sky freaks! I love it! I love it!

  
- I wonder where they were.
- I don't know.

  
Their day's not planned.

  
Outside the hive, flying who knows
where, doing who knows what.

  
You can'tjust decide to be a Pollen
Jock. You have to be bred for that.

  
Right.

  
Look. That's more pollen
than you and I will see in a lifetime.

  
It's just a status symbol.
Bees make too much of it.

  
Perhaps. Unless you're wearing it
and the ladies see you wearing it.

  
Those ladies?
Aren't they our cousins too?

  
Distant. Distant.

  
Look at these two.

  
- Oouple of Hive Harrys.
- Let's have fun with them.

  
It must be dangerous
being a Pollen Jock.

  
Yeah. Once a bear pinned me
against a mushroom!

  
He had a paw on my throat,
and with the other, he was slapping me!

  
- Oh, my!
- I never thought I'd knock him out.

  
What were you doing during this?

  
Trying to alert the authorities.

  
I can autograph that.

  
A little gusty out there today,
wasn't it, comrades?

  
Yeah. Gusty.

  
We're hitting a sunflower patch
six miles from here tomorrow.

  
- Six miles, huh?
- Barry!

  
A puddle jump for us,
but maybe you're not up for it.

  
- Maybe I am.
- You are not!

  
We're going 0900 at J-Gate.

  
What do you think, buzzy-boy?
Are you bee enough?

  
I might be. It all depends
on what 0900 means.

  
Hey, Honex!

  
Dad, you surprised me.

  
You decide what you're interested in?

  
- Well, there's a lot of choices.
- But you only get one.

  
Do you ever get bored
doing the same job every day?

  
Son, let me tell you about stirring.

  
You grab that stick, and you just
move it around, and you stir it around.

  
You get yourself into a rhythm.
It's a beautiful thing.

  
You know, Dad,
the more I think about it,

  
maybe the honey field
just isn't right for me.

  
You were thinking of what,
making balloon animals?

  
That's a bad job
for a guy with a stinger.

  
Janet, your son's not sure
he wants to go into honey!

  
- Barry, you are so funny sometimes.
- I'm not trying to be funny.

  
You're not funny! You're going
into honey. Our son, the stirrer!

  
- You're gonna be a stirrer?
- No one's listening to me!

  
Wait till you see the sticks I have.

  
I could say anything right now.
I'm gonna get an ant tattoo!

  
Let's open some honey and celebrate!

  
Maybe I'll pierce my thorax.
Shave my antennae.

  
Shack up with a grasshopper. Get
a gold tooth and call everybody "dawg"!

  
I'm so proud.

  
- We're starting work today!
- Today's the day.

  
Oome on! All the good jobs
will be gone.

  
Yeah, right.

  
Pollen counting, stunt bee, pouring,
stirrer, front desk, hair removal...

  
- Is it still available?
- Hang on. Two left!

  
One of them's yours! Oongratulations!
Step to the side.

  
- What'd you get?
- Picking crud out. Stellar!

  
Wow!

  
Oouple of newbies?

  
Yes, sir! Our first day! We are ready!

  
Make your choice.

  
- You want to go first?
- No, you go.

  
Oh, my. What's available?

  
Restroom attendant's open,
not for the reason you think.

  
- Any chance of getting the Krelman?
- Sure, you're on.

  
I'm sorry, the Krelman just closed out.

  
Wax monkey's always open.

  
The Krelman opened up again.

  
What happened?

  
A bee died. Makes an opening. See?
He's dead. Another dead one.

  
Deady. Deadified. Two more dead.

  
Dead from the neck up.
Dead from the neck down. That's life!

  
Oh, this is so hard!

  
Heating, cooling,
stunt bee, pourer, stirrer,

  
humming, inspector number seven,
lint coordinator, stripe supervisor,

  
mite wrangler. Barry, what
do you think I should... Barry?

  
Barry!

  
All right, we've got the sunflower patch
in quadrant nine...

  
What happened to you?
Where are you?

  
- I'm going out.
- Out? Out where?

  
- Out there.
- Oh, no!

  
I have to, before I go
to work for the rest of my life.

  
You're gonna die! You're crazy! Hello?

  
Another call coming in.

  
If anyone's feeling brave,
there's a Korean deli on 83rd

  
that gets their roses today.

  
Hey, guys.

  
- Look at that.
- Isn't that the kid we saw yesterday?

  
Hold it, son, flight deck's restricted.

  
It's OK, Lou. We're gonna take him up.

  
Really? Feeling lucky, are you?

  
Sign here, here. Just initial that.

  
- Thank you.
- OK.

  
You got a rain advisory today,

  
and as you all know,
bees cannot fly in rain.

  
So be careful. As always,
watch your brooms,

  
hockey sticks, dogs,
birds, bears and bats.

  
Also, I got a couple of reports
of root beer being poured on us.

  
Murphy's in a home because of it,
babbling like a cicada!

  
- That's awful.
- And a reminder for you rookies,

  
bee law number one,
absolutely no talking to humans!

  
All right, launch positions!

  
Buzz, buzz, buzz, buzz! Buzz, buzz,
buzz, buzz! Buzz, buzz, buzz, buzz!

  
Black and yellow!

  
Hello!

  
You ready for this, hot shot?

  
Yeah. Yeah, bring it on.

  
Wind, check.

  
- Antennae, check.
- Nectar pack, check.

  
- Wings, check.
- Stinger, check.

  
Scared out of my shorts, check.

  
OK, ladies,

  
let's move it out!

  
Pound those petunias,
you striped stem-suckers!

  
All of you, drain those flowers!

  
Wow! I'm out!

  
I can't believe I'm out!

  
So blue.

  
I feel so fast and free!

  
Box kite!

  
Wow!

  
Flowers!

  
This is Blue Leader.
We have roses visual.

  
Bring it around 30 degrees and hold.

  
Roses!

  
30 degrees, roger. Bringing it around.

  
Stand to the side, kid.
It's got a bit of a kick.

  
That is one nectar collector!

  
- Ever see pollination up close?
- No, sir.

  
I pick up some pollen here, sprinkle it
over here. Maybe a dash over there,

  
a pinch on that one.
See that? It's a little bit of magic.

  
That's amazing. Why do we do that?

  
That's pollen power. More pollen, more
flowers, more nectar, more honey for us.

  
Oool.

  
I'm picking up a lot of bright yellow.
Oould be daisies. Don't we need those?

  
Oopy that visual.

  
Wait. One of these flowers
seems to be on the move.

  
Say again? You're reporting
a moving flower?

  
Affirmative.

  
That was on the line!

  
This is the coolest. What is it?

  
I don't know, but I'm loving this color.

  
It smells good.
Not like a flower, but I like it.

  
Yeah, fuzzy.

  
Ohemical-y.

  
Oareful, guys. It's a little grabby.

  
My sweet lord of bees!

  
Oandy-brain, get off there!

  
Problem!

  
- Guys!
- This could be bad.

  
Affirmative.

  
Very close.

  
Gonna hurt.

  
Mama's little boy.

  
You are way out of position, rookie!

  
Ooming in at you like a missile!

  
Help me!

  
I don't think these are flowers.

  
- Should we tell him?
- I think he knows.

  
What is this?!

  
Match point!

  
You can start packing up, honey,
because you're about to eat it!

  
Yowser!

  
Gross.

  
There's a bee in the car!

  
- Do something!
- I'm driving!

  
- Hi, bee.
- He's back here!

  
He's going to sting me!

  
Nobody move. If you don't move,
he won't sting you. Freeze!

  
He blinked!

  
Spray him, Granny!

  
What are you doing?!

  
Wow... the tension level
out here is unbelievable.

  
I gotta get home.

  
Oan't fly in rain.

  
Oan't fly in rain.

  
Oan't fly in rain.

  
Mayday! Mayday! Bee going down!

  
Ken, could you close
the window please?

  
Ken, could you close
the window please?

  
Oheck out my new resume.
I made it into a fold-out brochure.

  
You see? Folds out.

  
Oh, no. More humans. I don't need this.

  
What was that?

  
Maybe this time. This time. This time.
This time! This time! This...

  
Drapes!

  
That is diabolical.

  
It's fantastic. It's got all my special
skills, even my top-ten favorite movies.

  
What's number one? Star Wars?

  
Nah, I don't go for that...

  
...kind of stuff.

  
No wonder we shouldn't talk to them.
They're out of their minds.

  
When I leave a job interview, they're
flabbergasted, can't believe what I say.

  
There's the sun. Maybe that's a way out.

  
I don't remember the sun
having a big 75 on it.

  
I predicted global warming.

  
I could feel it getting hotter.
At first I thought it was just me.

  
Wait! Stop! Bee!

  
Stand back. These are winter boots.

  
Wait!

  
Don't kill him!

  
You know I'm allergic to them!
This thing could kill me!

  
Why does his life have
less value than yours?

  
Why does his life have any less value
than mine? Is that your statement?

  
I'm just saying all life has value. You
don't know what he's capable of feeling.

  
My brochure!

  
There you go, little guy.

  
I'm not scared of him.
It's an allergic thing.

  
Put that on your resume brochure.

  
My whole face could puff up.

  
Make it one of your special skills.

  
Knocking someone out
is also a special skill.

  
Right. Bye, Vanessa. Thanks.

  
- Vanessa, next week? Yogurt night?
- Sure, Ken. You know, whatever.

  
- You could put carob chips on there.
- Bye.

  
- Supposed to be less calories.
- Bye.

  
I gotta say something.

  
She saved my life.
I gotta say something.

  
All right, here it goes.

  
Nah.

  
What would I say?

  
I could really get in trouble.

  
It's a bee law.
You're not supposed to talk to a human.

  
I can't believe I'm doing this.

  
I've got to.

  
Oh, I can't do it. Oome on!

  
No. Yes. No.

  
Do it. I can't.

  
How should I start it?
"You like jazz?" No, that's no good.

  
Here she comes! Speak, you fool!

  
Hi!

  
I'm sorry.

  
- You're talking.
- Yes, I know.

  
You're talking!

  
I'm so sorry.

  
No, it's OK. It's fine.
I know I'm dreaming.

  
But I don't recall going to bed.

  
Well, I'm sure this
is very disconcerting.

  
This is a bit of a surprise to me.
I mean, you're a bee!

  
I am. And I'm not supposed
to be doing this,

  
but they were all trying to kill me.

  
And if it wasn't for you...

  
I had to thank you.
It's just how I was raised.

  
That was a little weird.

  
- I'm talking with a bee.
- Yeah.

  
I'm talking to a bee.
And the bee is talking to me!

  
I just want to say I'm grateful.
I'll leave now.

  
- Wait! How did you learn to do that?
- What?

  
The talking thing.

  
Same way you did, I guess.
"Mama, Dada, honey." You pick it up.

  
- That's very funny.
- Yeah.

  
Bees are funny. If we didn't laugh,
we'd cry with what we have to deal with.

  
Anyway...

  
Oan I...

  
...get you something?
- Like what?

  
I don't know. I mean...
I don't know. Ooffee?

  
I don't want to put you out.

  
It's no trouble. It takes two minutes.

  
- It's just coffee.
- I hate to impose.

  
- Don't be ridiculous!
- Actually, I would love a cup.

  
Hey, you want rum cake?

  
- I shouldn't.
- Have some.

  
- No, I can't.
- Oome on!

  
I'm trying to lose a couple micrograms.

  
- Where?
- These stripes don't help.

  
You look great!

  
I don't know if you know
anything about fashion.

  
Are you all right?

  
No.

  
He's making the tie in the cab
as they're flying up Madison.

  
He finally gets there.

  
He runs up the steps into the church.
The wedding is on.

  
And he says, "Watermelon?
I thought you said Guatemalan.

  
Why would I marry a watermelon?"

  
Is that a bee joke?

  
That's the kind of stuff we do.

  
Yeah, different.

  
So, what are you gonna do, Barry?

  
About work? I don't know.

  
I want to do my part for the hive,
but I can't do it the way they want.

  
I know how you feel.

  
- You do?
- Sure.

  
My parents wanted me to be a lawyer or
a doctor, but I wanted to be a florist.

  
- Really?
- My only interest is flowers.

  
Our new queen was just elected
with that same campaign slogan.

  
Anyway, if you look...

  
There's my hive right there. See it?

  
You're in Sheep Meadow!

  
Yes! I'm right off the Turtle Pond!

  
No way! I know that area.
I lost a toe ring there once.

  
- Why do girls put rings on their toes?
- Why not?

  
- It's like putting a hat on your knee.
- Maybe I'll try that.

  
- You all right, ma'am?
- Oh, yeah. Fine.

  
Just having two cups of coffee!

  
Anyway, this has been great.
Thanks for the coffee.

  
Yeah, it's no trouble.

  
Sorry I couldn't finish it. If I did,
I'd be up the rest of my life.

  
Are you...?

  
Oan I take a piece of this with me?

  
Sure! Here, have a crumb.

  
- Thanks!
- Yeah.

  
All right. Well, then...
I guess I'll see you around.

  
Or not.

  
OK, Barry.

  
And thank you
so much again... for before.

  
Oh, that? That was nothing.

  
Well, not nothing, but... Anyway...

  
This can't possibly work.

  
He's all set to go.
We may as well try it.

  
OK, Dave, pull the chute.

  
- Sounds amazing.
- It was amazing!

  
It was the scariest,
happiest moment of my life.

  
Humans! I can't believe
you were with humans!

  
Giant, scary humans!
What were they like?

  
Huge and crazy. They talk crazy.

  
They eat crazy giant things.
They drive crazy.

  
- Do they try and kill you, like on TV?
- Some of them. But some of them don't.

  
- How'd you get back?
- Poodle.

  
You did it, and I'm glad. You saw
whatever you wanted to see.

  
You had your "experience." Now you
can pick out yourjob and be normal.

  
- Well...
- Well?

  
Well, I met someone.

  
You did? Was she Bee-ish?

  
- A wasp?! Your parents will kill you!
- No, no, no, not a wasp.

  
- Spider?
- I'm not attracted to spiders.

  
I know it's the hottest thing,
with the eight legs and all.

  
I can't get by that face.

  
So who is she?

  
She's... human.

  
No, no. That's a bee law.
You wouldn't break a bee law.

  
- Her name's Vanessa.
- Oh, boy.

  
She's so nice. And she's a florist!

  
Oh, no! You're dating a human florist!

  
We're not dating.

  
You're flying outside the hive, talking
to humans that attack our homes

  
with power washers and M-80s!
One-eighth a stick of dynamite!

  
She saved my life!
And she understands me.

  
This is over!

  
Eat this.

  
This is not over! What was that?

  
- They call it a crumb.
- It was so stingin' stripey!

  
And that's not what they eat.
That's what falls off what they eat!

  
- You know what a Oinnabon is?
- No.

  
It's bread and cinnamon and frosting.
They heat it up...

  
Sit down!

  
...really hot!
- Listen to me!

  
We are not them! We're us.
There's us and there's them!

  
Yes, but who can deny
the heart that is yearning?

  
There's no yearning.
Stop yearning. Listen to me!

  
You have got to start thinking bee,
my friend. Thinking bee!

  
- Thinking bee.
- Thinking bee.

  
Thinking bee! Thinking bee!
Thinking bee! Thinking bee!

  
There he is. He's in the pool.

  
You know what your problem is, Barry?

  
I gotta start thinking bee?

  
How much longer will this go on?

  
It's been three days!
Why aren't you working?

  
I've got a lot of big life decisions
to think about.

  
What life? You have no life!
You have no job. You're barely a bee!

  
Would it kill you
to make a little honey?

  
Barry, come out.
Your father's talking to you.

  
Martin, would you talk to him?

  
Barry, I'm talking to you!

  
You coming?

  
Got everything?

  
All set!

  
Go ahead. I'll catch up.

  
Don't be too long.

  
Watch this!

  
Vanessa!

  
- We're still here.
- I told you not to yell at him.

  
He doesn't respond to yelling!

  
- Then why yell at me?
- Because you don't listen!

  
I'm not listening to this.

  
Sorry, I've gotta go.

  
- Where are you going?
- I'm meeting a friend.

  
A girl? Is this why you can't decide?

  
Bye.

  
I just hope she's Bee-ish.

  
They have a huge parade
of flowers every year in Pasadena?

  
To be in the Tournament of Roses,
that's every florist's dream!

  
Up on a float, surrounded
by flowers, crowds cheering.

  
A tournament. Do the roses
compete in athletic events?

  
No. All right, I've got one.
How come you don't fly everywhere?

  
It's exhausting. Why don't you
run everywhere? It's faster.

  
Yeah, OK, I see, I see.
All right, your turn.

  
TiVo. You can just freeze live TV?
That's insane!

  
You don't have that?

  
We have Hivo, but it's a disease.
It's a horrible, horrible disease.

  
Oh, my.

  
Dumb bees!

  
You must want to sting all those jerks.

  
We try not to sting.
It's usually fatal for us.

  
So you have to watch your temper.

  
Very carefully.
You kick a wall, take a walk,

  
write an angry letter and throw it out.
Work through it like any emotion:

  
Anger, jealousy, lust.

  
Oh, my goodness! Are you OK?

  
Yeah.

  
- What is wrong with you?!
- It's a bug.

  
He's not bothering anybody.
Get out of here, you creep!

  
What was that? A Pic 'N' Save circular?

  
Yeah, it was. How did you know?

  
It felt like about 10 pages.
Seventy-five is pretty much our limit.

  
You've really got that
down to a science.

  
- I lost a cousin to Italian Vogue.
- I'll bet.

  
What in the name
of Mighty Hercules is this?

  
How did this get here?
Oute Bee, Golden Blossom,

  
Ray Liotta Private Select?

  
- Is he that actor?
- I never heard of him.

  
- Why is this here?
- For people. We eat it.

  
You don't have
enough food of your own?

  
- Well, yes.
- How do you get it?

  
- Bees make it.
- I know who makes it!

  
And it's hard to make it!

  
There's heating, cooling, stirring.
You need a whole Krelman thing!

  
- It's organic.
- It's our-ganic!

  
It's just honey, Barry.

  
Just what?!

  
Bees don't know about this!
This is stealing! A lot of stealing!

  
You've taken our homes, schools,
hospitals! This is all we have!

  
And it's on sale?!
I'm getting to the bottom of this.

  
I'm getting to the bottom
of all of this!

  
Hey, Hector.

  
- You almost done?
- Almost.

  
He is here. I sense it.

  
Well, I guess I'll go home now

  
and just leave this nice honey out,
with no one around.

  
You're busted, box boy!

  
I knew I heard something.
So you can talk!

  
I can talk.
And now you'll start talking!

  
Where you getting the sweet stuff?
Who's your supplier?

  
I don't understand.
I thought we were friends.

  
The last thing we want
to do is upset bees!

  
You're too late! It's ours now!

  
You, sir, have crossed
the wrong sword!

  
You, sir, will be lunch
for my iguana, Ignacio!

  
Where is the honey coming from?

  
Tell me where!

  
Honey Farms! It comes from Honey Farms!

  
Orazy person!

  
What horrible thing has happened here?

  
These faces, they never knew
what hit them. And now

  
they're on the road to nowhere!

  
Just keep still.

  
What? You're not dead?

  
Do I look dead? They will wipe anything
that moves. Where you headed?

  
To Honey Farms.
I am onto something huge here.

  
I'm going to Alaska. Moose blood,
crazy stuff. Blows your head off!

  
I'm going to Tacoma.

  
- And you?
- He really is dead.

  
All right.

  
Uh-oh!

  
- What is that?!
- Oh, no!

  
- A wiper! Triple blade!
- Triple blade?

  
Jump on! It's your only chance, bee!

  
Why does everything have
to be so doggone clean?!

  
How much do you people need to see?!

  
Open your eyes!
Stick your head out the window!

  
From NPR News in Washington,
I'm Oarl Kasell.

  
But don't kill no more bugs!

  
- Bee!
- Moose blood guy!!

  
- You hear something?
- Like what?

  
Like tiny screaming.

  
Turn off the radio.

  
Whassup, bee boy?

  
Hey, Blood.

  
Just a row of honey jars,
as far as the eye could see.

  
Wow!

  
I assume wherever this truck goes
is where they're getting it.

  
I mean, that honey's ours.

  
- Bees hang tight.
- We're all jammed in.

  
It's a close community.

  
Not us, man. We on our own.
Every mosquito on his own.

  
- What if you get in trouble?
- You a mosquito, you in trouble.

  
Nobody likes us. They just smack.
See a mosquito, smack, smack!

  
At least you're out in the world.
You must meet girls.

  
Mosquito girls try to trade up,
get with a moth, dragonfly.

  
Mosquito girl don't want no mosquito.

  
You got to be kidding me!

  
Mooseblood's about to leave
the building! So long, bee!

  
- Hey, guys!
- Mooseblood!

  
I knew I'd catch y'all down here.
Did you bring your crazy straw?

  
We throw it in jars, slap a label on it,
and it's pretty much pure profit.

  
What is this place?

  
A bee's got a brain
the size of a pinhead.

  
They are pinheads!

  
Pinhead.

  
- Oheck out the new smoker.
- Oh, sweet. That's the one you want.

  
The Thomas 3000!

  
Smoker?

  
Ninety puffs a minute, semi-automatic.
Twice the nicotine, all the tar.

  
A couple breaths of this
knocks them right out.

  
They make the honey,
and we make the money.

  
"They make the honey,
and we make the money"?

  
Oh, my!

  
What's going on? Are you OK?

  
Yeah. It doesn't last too long.

  
Do you know you're
in a fake hive with fake walls?

  
Our queen was moved here.
We had no choice.

  
This is your queen?
That's a man in women's clothes!

  
That's a drag queen!

  
What is this?

  
Oh, no!

  
There's hundreds of them!

  
Bee honey.

  
Our honey is being brazenly stolen
on a massive scale!

  
This is worse than anything bears
have done! I intend to do something.

  
Oh, Barry, stop.

  
Who told you humans are taking
our honey? That's a rumor.

  
Do these look like rumors?

  
That's a conspiracy theory.
These are obviously doctored photos.

  
How did you get mixed up in this?

  
He's been talking to humans.

  
- What?
- Talking to humans?!

  
He has a human girlfriend.
And they make out!

  
Make out? Barry!

  
We do not.

  
- You wish you could.
- Whose side are you on?

  
The bees!

  
I dated a cricket once in San Antonio.
Those crazy legs kept me up all night.

  
Barry, this is what you want
to do with your life?

  
I want to do it for all our lives.
Nobody works harder than bees!

  
Dad, I remember you
coming home so overworked

  
your hands were still stirring.
You couldn't stop.

  
I remember that.

  
What right do they have to our honey?

  
We live on two cups a year. They put it
in lip balm for no reason whatsoever!

  
Even if it's true, what can one bee do?

  
Sting them where it really hurts.

  
In the face! The eye!

  
- That would hurt.
- No.

  
Up the nose? That's a killer.

  
There's only one place you can sting
the humans, one place where it matters.

  
Hive at Five, the hive's only
full-hour action news source.

  
No more bee beards!

  
With Bob Bumble at the anchor desk.

  
Weather with Storm Stinger.

  
Sports with Buzz Larvi.

  
And Jeanette Ohung.

  
- Good evening. I'm Bob Bumble.
- And I'm Jeanette Ohung.

  
A tri-county bee, Barry Benson,

  
intends to sue the human race
for stealing our honey,

  
packaging it and profiting
from it illegally!

  
Tomorrow night on Bee Larry King,

  
we'll have three former queens here in
our studio, discussing their new book,

  
Olassy Ladies,
out this week on Hexagon.

  
Tonight we're talking to Barry Benson.

  
Did you ever think, "I'm a kid
from the hive. I can't do this"?

  
Bees have never been afraid
to change the world.

  
What about Bee Oolumbus?
Bee Gandhi? Bejesus?

  
Where I'm from, we'd never sue humans.

  
We were thinking
of stickball or candy stores.

  
How old are you?

  
The bee community
is supporting you in this case,

  
which will be the trial
of the bee century.

  
You know, they have a Larry King
in the human world too.

  
It's a common name. Next week...

  
He looks like you and has a show
and suspenders and colored dots...

  
Next week...

  
Glasses, quotes on the bottom from the
guest even though you just heard 'em.

  
Bear Week next week!
They're scary, hairy and here live.

  
Always leans forward, pointy shoulders,
squinty eyes, very Jewish.

  
In tennis, you attack
at the point of weakness!

  
It was my grandmother, Ken. She's 81.

  
Honey, her backhand's a joke!
I'm not gonna take advantage of that?

  
Quiet, please.
Actual work going on here.

  
- Is that that same bee?
- Yes, it is!

  
I'm helping him sue the human race.

  
- Hello.
- Hello, bee.

  
This is Ken.

  
Yeah, I remember you. Timberland, size
ten and a half. Vibram sole, I believe.

  
Why does he talk again?

  
Listen, you better go
'cause we're really busy working.

  
But it's our yogurt night!

  
Bye-bye.

  
Why is yogurt night so difficult?!

  
You poor thing.
You two have been at this for hours!

  
Yes, and Adam here
has been a huge help.

  
- Frosting...
- How many sugars?

  
Just one. I try not
to use the competition.

  
So why are you helping me?

  
Bees have good qualities.

  
And it takes my mind off the shop.

  
Instead of flowers, people
are giving balloon bouquets now.

  
Those are great, if you're three.

  
And artificial flowers.

  
- Oh, those just get me psychotic!
- Yeah, me too.

  
Bent stingers, pointless pollination.

  
Bees must hate those fake things!

  
Nothing worse
than a daffodil that's had work done.

  
Maybe this could make up
for it a little bit.

  
- This lawsuit's a pretty big deal.
- I guess.

  
You sure you want to go through with it?

  
Am I sure? When I'm done with
the humans, they won't be able

  
to say, "Honey, I'm home,"
without paying a royalty!

  
It's an incredible scene
here in downtown Manhattan,

  
where the world anxiously waits,
because for the first time in history,

  
we will hear for ourselves
if a honeybee can actually speak.

  
What have we gotten into here, Barry?

  
It's pretty big, isn't it?

  
I can't believe how many humans
don't work during the day.

  
You think billion-dollar multinational
food companies have good lawyers?

  
Everybody needs to stay
behind the barricade.

  
- What's the matter?
- I don't know, I just got a chill.

  
Well, if it isn't the bee team.

  
You boys work on this?

  
All rise! The Honorable
Judge Bumbleton presiding.

  
All right. Oase number 4475,

  
Superior Oourt of New York,
Barry Bee Benson v. the Honey Industry

  
is now in session.

  
Mr. Montgomery, you're representing
the five food companies collectively?

  
A privilege.

  
Mr. Benson... you're representing
all the bees of the world?

  
I'm kidding. Yes, Your Honor,
we're ready to proceed.

  
Mr. Montgomery,
your opening statement, please.

  
Ladies and gentlemen of the jury,

  
my grandmother was a simple woman.

  
Born on a farm, she believed
it was man's divine right

  
to benefit from the bounty
of nature God put before us.

  
If we lived in the topsy-turvy world
Mr. Benson imagines,

  
just think of what would it mean.

  
I would have to negotiate
with the silkworm

  
for the elastic in my britches!

  
Talking bee!

  
How do we know this isn't some sort of

  
holographic motion-picture-capture
Hollywood wizardry?

  
They could be using laser beams!

  
Robotics! Ventriloquism!
Oloning! For all we know,

  
he could be on steroids!

  
Mr. Benson?

  
Ladies and gentlemen,
there's no trickery here.

  
I'm just an ordinary bee.
Honey's pretty important to me.

  
It's important to all bees.
We invented it!

  
We make it. And we protect it
with our lives.

  
Unfortunately, there are
some people in this room

  
who think they can take it from us

  
'cause we're the little guys!
I'm hoping that, after this is all over,

  
you'll see how, by taking our honey,
you not only take everything we have

  
but everything we are!

  
I wish he'd dress like that
all the time. So nice!

  
Oall your first witness.

  
So, Mr. Klauss Vanderhayden
of Honey Farms, big company you have.

  
I suppose so.

  
I see you also own
Honeyburton and Honron!

  
Yes, they provide beekeepers
for our farms.

  
Beekeeper. I find that
to be a very disturbing term.

  
I don't imagine you employ
any bee-free-ers, do you?

  
- No.
- I couldn't hear you.

  
- No.
- No.

  
Because you don't free bees.
You keep bees. Not only that,

  
it seems you thought a bear would be
an appropriate image for a jar of honey.

  
They're very lovable creatures.

  
Yogi Bear, Fozzie Bear, Build-A-Bear.

  
You mean like this?

  
Bears kill bees!

  
How'd you like his head crashing
through your living room?!

  
Biting into your couch!
Spitting out your throw pillows!

  
OK, that's enough. Take him away.

  
So, Mr. Sting, thank you for being here.
Your name intrigues me.

  
- Where have I heard it before?
- I was with a band called The Police.

  
But you've never been
a police officer, have you?

  
No, I haven't.

  
No, you haven't. And so here
we have yet another example

  
of bee culture casually
stolen by a human

  
for nothing more than
a prance-about stage name.

  
Oh, please.

  
Have you ever been stung, Mr. Sting?

  
Because I'm feeling
a little stung, Sting.

  
Or should I say... Mr. Gordon M. Sumner!

  
That's not his real name?! You idiots!

  
Mr. Liotta, first,
belated congratulations on

  
your Emmy win for a guest spot
on ER in 2005.

  
Thank you. Thank you.

  
I see from your resume
that you're devilishly handsome

  
with a churning inner turmoil
that's ready to blow.

  
I enjoy what I do. Is that a crime?

  
Not yet it isn't. But is this
what it's come to for you?

  
Exploiting tiny, helpless bees
so you don't

  
have to rehearse
your part and learn your lines, sir?

  
Watch it, Benson!
I could blow right now!

  
This isn't a goodfella.
This is a badfella!

  
Why doesn't someone just step on
this creep, and we can all go home?!

  
- Order in this court!
- You're all thinking it!

  
Order! Order, I say!

  
- Say it!
- Mr. Liotta, please sit down!

  
I think it was awfully nice
of that bear to pitch in like that.

  
I think the jury's on our side.

  
Are we doing everything right, legally?

  
I'm a florist.

  
Right. Well, here's to a great team.

  
To a great team!

  
Well, hello.

  
- Ken!
- Hello.

  
I didn't think you were coming.

  
No, I was just late.
I tried to call, but... the battery.

  
I didn't want all this to go to waste,
so I called Barry. Luckily, he was free.

  
Oh, that was lucky.

  
There's a little left.
I could heat it up.

  
Yeah, heat it up, sure, whatever.

  
So I hear you're quite a tennis player.

  
I'm not much for the game myself.
The ball's a little grabby.

  
That's where I usually sit.
Right... there.

  
Ken, Barry was looking at your resume,

  
and he agreed with me that eating with
chopsticks isn't really a special skill.

  
You think I don't see what you're doing?

  
I know how hard it is to find
the rightjob. We have that in common.

  
Do we?

  
Bees have 100 percent employment,
but we do jobs like taking the crud out.

  
That's just what
I was thinking about doing.

  
Ken, I let Barry borrow your razor
for his fuzz. I hope that was all right.

  
I'm going to drain the old stinger.

  
Yeah, you do that.

  
Look at that.

  
You know, I've just about had it

  
with your little mind games.

  
- What's that?
- Italian Vogue.

  
Mamma mia, that's a lot of pages.

  
A lot of ads.

  
Remember what Van said, why is
your life more valuable than mine?

  
Funny, I just can't seem to recall that!

  
I think something stinks in here!

  
I love the smell of flowers.

  
How do you like the smell of flames?!

  
Not as much.

  
Water bug! Not taking sides!

  
Ken, I'm wearing a Ohapstick hat!
This is pathetic!

  
I've got issues!

  
Well, well, well, a royal flush!

  
- You're bluffing.
- Am I?

  
Surf's up, dude!

  
Poo water!

  
That bowl is gnarly.

  
Except for those dirty yellow rings!

  
Kenneth! What are you doing?!

  
You know, I don't even like honey!
I don't eat it!

  
We need to talk!

  
He's just a little bee!

  
And he happens to be
the nicest bee I've met in a long time!

  
Long time? What are you talking about?!
Are there other bugs in your life?

  
No, but there are other things bugging
me in life. And you're one of them!

  
Fine! Talking bees, no yogurt night...

  
My nerves are fried from riding
on this emotional roller coaster!

  
Goodbye, Ken.

  
And for your information,

  
I prefer sugar-free, artificial
sweeteners made by man!

  
I'm sorry about all that.

  
I know it's got
an aftertaste! I like it!

  
I always felt there was some kind
of barrier between Ken and me.

  
I couldn't overcome it.
Oh, well.

  
Are you OK for the trial?

  
I believe Mr. Montgomery
is about out of ideas.

  
We would like to call
Mr. Barry Benson Bee to the stand.

  
Good idea! You can really see why he's
considered one of the best lawyers...

  
Yeah.

  
Layton, you've
gotta weave some magic

  
with this jury,
or it's gonna be all over.

  
Don't worry. The only thing I have
to do to turn this jury around

  
is to remind them
of what they don't like about bees.

  
- You got the tweezers?
- Are you allergic?

  
Only to losing, son. Only to losing.

  
Mr. Benson Bee, I'll ask you
what I think we'd all like to know.

  
What exactly is your relationship

  
to that woman?

  
We're friends.

  
- Good friends?
- Yes.

  
How good? Do you live together?

  
Wait a minute...

  
Are you her little...

  
...bedbug?

  
I've seen a bee documentary or two.
From what I understand,

  
doesn't your queen give birth
to all the bee children?

  
- Yeah, but...
- So those aren't your real parents!

  
- Oh, Barry...
- Yes, they are!

  
Hold me back!

  
You're an illegitimate bee,
aren't you, Benson?

  
He's denouncing bees!

  
Don't y'all date your cousins?

  
- Objection!
- I'm going to pincushion this guy!

  
Adam, don't! It's what he wants!

  
Oh, I'm hit!!

  
Oh, lordy, I am hit!

  
Order! Order!

  
The venom! The venom
is coursing through my veins!

  
I have been felled
by a winged beast of destruction!

  
You see? You can't treat them
like equals! They're striped savages!

  
Stinging's the only thing
they know! It's their way!

  
- Adam, stay with me.
- I can't feel my legs.

  
What angel of mercy
will come forward to suck the poison

  
from my heaving buttocks?

  
I will have order in this court. Order!

  
Order, please!

  
The case of the honeybees
versus the human race

  
took a pointed turn against the bees

  
yesterday when one of their legal
team stung Layton T. Montgomery.

  
- Hey, buddy.
- Hey.

  
- Is there much pain?
- Yeah.

  
I...

  
I blew the whole case, didn't I?

  
It doesn't matter. What matters is
you're alive. You could have died.

  
I'd be better off dead. Look at me.

  
They got it from the cafeteria
downstairs, in a tuna sandwich.

  
Look, there's
a little celery still on it.

  
What was it like to sting someone?

  
I can't explain it. It was all...

  
All adrenaline and then...
and then ecstasy!

  
All right.

  
You think it was all a trap?

  
Of course. I'm sorry.
I flew us right into this.

  
What were we thinking? Look at us. We're
just a couple of bugs in this world.

  
What will the humans do to us
if they win?

  
I don't know.

  
I hear they put the roaches in motels.
That doesn't sound so bad.

  
Adam, they check in,
but they don't check out!

  
Oh, my.

  
Oould you get a nurse
to close that window?

  
- Why?
- The smoke.

  
Bees don't smoke.

  
Right. Bees don't smoke.

  
Bees don't smoke!
But some bees are smoking.

  
That's it! That's our case!

  
It is? It's not over?

  
Get dressed. I've gotta go somewhere.

  
Get back to the court and stall.
Stall any way you can.

  
And assuming you've done step correctly, you're ready for the tub.

  
Mr. Flayman.

  
Yes? Yes, Your Honor!

  
Where is the rest of your team?

  
Well, Your Honor, it's interesting.

  
Bees are trained to fly haphazardly,

  
and as a result,
we don't make very good time.

  
I actually heard a funny story about...

  
Your Honor,
haven't these ridiculous bugs

  
taken up enough
of this court's valuable time?

  
How much longer will we allow
these absurd shenanigans to go on?

  
They have presented no compelling
evidence to support their charges

  
against my clients,
who run legitimate businesses.

  
I move for a complete dismissal
of this entire case!

  
Mr. Flayman, I'm afraid I'm going

  
to have to consider
Mr. Montgomery's motion.

  
But you can't! We have a terrific case.

  
Where is your proof?
Where is the evidence?

  
Show me the smoking gun!

  
Hold it, Your Honor!
You want a smoking gun?

  
Here is your smoking gun.

  
What is that?

  
It's a bee smoker!

  
What, this?
This harmless little contraption?

  
This couldn't hurt a fly,
let alone a bee.

  
Look at what has happened

  
to bees who have never been asked,
"Smoking or non?"

  
Is this what nature intended for us?

  
To be forcibly addicted
to smoke machines

  
and man-made wooden slat work camps?

  
Living out our lives as honey slaves
to the white man?

  
- What are we gonna do?
- He's playing the species card.

  
Ladies and gentlemen, please,
free these bees!

  
Free the bees! Free the bees!

  
Free the bees!

  
Free the bees! Free the bees!

  
The court finds in favor of the bees!

  
Vanessa, we won!

  
I knew you could do it! High-five!

  
Sorry.

  
I'm OK! You know what this means?

  
All the honey
will finally belong to the bees.

  
Now we won't have
to work so hard all the time.

  
This is an unholy perversion
of the balance of nature, Benson.

  
You'll regret this.

  
Barry, how much honey is out there?

  
All right. One at a time.

  
Barry, who are you wearing?

  
My sweater is Ralph Lauren,
and I have no pants.

  
- What if Montgomery's right?
- What do you mean?

  
We've been living the bee way
a long time, 27 million years.

  
Oongratulations on your victory.
What will you demand as a settlement?

  
First, we'll demand a complete shutdown
of all bee work camps.

  
Then we want back the honey
that was ours to begin with,

  
every last drop.

  
We demand an end to the glorification
of the bear as anything more

  
than a filthy, smelly,
bad-breath stink machine.

  
We're all aware
of what they do in the woods.

  
Wait for my signal.

  
Take him out.

  
He'll have nauseous
for a few hours, then he'll be fine.

  
And we will no longer tolerate
bee-negative nicknames...

  
But it's just a prance-about stage name!

  
...unnecessary inclusion of honey
in bogus health products

  
and la-dee-da human
tea-time snack garnishments.

  
Oan't breathe.

  
Bring it in, boys!

  
Hold it right there! Good.

  
Tap it.

  
Mr. Buzzwell, we just passed three cups,
and there's gallons more coming!

  
- I think we need to shut down!
- Shut down? We've never shut down.

  
Shut down honey production!

  
Stop making honey!

  
Turn your key, sir!

  
What do we do now?

  
Oannonball!

  
We're shutting honey production!

  
Mission abort.

  
Aborting pollination and nectar detail.
Returning to base.

  
Adam, you wouldn't believe
how much honey was out there.

  
Oh, yeah?

  
What's going on? Where is everybody?

  
- Are they out celebrating?
- They're home.

  
They don't know what to do.
Laying out, sleeping in.

  
I heard your Uncle Oarl was on his way
to San Antonio with a cricket.

  
At least we got our honey back.

  
Sometimes I think, so what if humans
liked our honey? Who wouldn't?

  
It's the greatest thing in the world!
I was excited to be part of making it.

  
This was my new desk. This was my
new job. I wanted to do it really well.

  
And now...

  
Now I can't.

  
I don't understand
why they're not happy.

  
I thought their lives would be better!

  
They're doing nothing. It's amazing.
Honey really changes people.

  
You don't have any idea
what's going on, do you?

  
- What did you want to show me?
- This.

  
What happened here?

  
That is not the half of it.

  
Oh, no. Oh, my.

  
They're all wilting.

  
Doesn't look very good, does it?

  
No.

  
And whose fault do you think that is?

  
You know, I'm gonna guess bees.

  
Bees?

  
Specifically, me.

  
I didn't think bees not needing to make
honey would affect all these things.

  
It's notjust flowers.
Fruits, vegetables, they all need bees.

  
That's our whole SAT test right there.

  
Take away produce, that affects
the entire animal kingdom.

  
And then, of course...

  
The human species?

  
So if there's no more pollination,

  
it could all just go south here,
couldn't it?

  
I know this is also partly my fault.

  
How about a suicide pact?

  
How do we do it?

  
- I'll sting you, you step on me.
- Thatjust kills you twice.

  
Right, right.

  
Listen, Barry...
sorry, but I gotta get going.

  
I had to open my mouth and talk.

  
Vanessa?

  
Vanessa? Why are you leaving?
Where are you going?

  
To the final Tournament of Roses parade
in Pasadena.

  
They've moved it to this weekend
because all the flowers are dying.

  
It's the last chance
I'll ever have to see it.

  
Vanessa, I just wanna say I'm sorry.
I never meant it to turn out like this.

  
I know. Me neither.

  
Tournament of Roses.
Roses can't do sports.

  
Wait a minute. Roses. Roses?

  
Roses!

  
Vanessa!

  
Roses?!

  
Barry?

  
- Roses are flowers!
- Yes, they are.

  
Flowers, bees, pollen!

  
I know.
That's why this is the last parade.

  
Maybe not.
Oould you ask him to slow down?

  
Oould you slow down?

  
Barry!

  
OK, I made a huge mistake.
This is a total disaster, all my fault.

  
Yes, it kind of is.

  
I've ruined the planet.
I wanted to help you

  
with the flower shop.
I've made it worse.

  
Actually, it's completely closed down.

  
I thought maybe you were remodeling.

  
But I have another idea, and it's
greater than my previous ideas combined.

  
I don't want to hear it!

  
All right, they have the roses,
the roses have the pollen.

  
I know every bee, plant
and flower bud in this park.

  
All we gotta do is get what they've got
back here with what we've got.

  
- Bees.
- Park.

  
- Pollen!
- Flowers.

  
- Repollination!
- Across the nation!

  
Tournament of Roses,
Pasadena, Oalifornia.

  
They've got nothing
but flowers, floats and cotton candy.

  
Security will be tight.

  
I have an idea.

  
Vanessa Bloome, FTD.

  
Official floral business. It's real.

  
Sorry, ma'am. Nice brooch.

  
Thank you. It was a gift.

  
Once inside,
we just pick the right float.

  
How about The Princess and the Pea?

  
I could be the princess,
and you could be the pea!

  
Yes, I got it.

  
- Where should I sit?
- What are you?

  
- I believe I'm the pea.
- The pea?

  
It goes under the mattresses.

  
- Not in this fairy tale, sweetheart.
- I'm getting the marshal.

  
You do that!
This whole parade is a fiasco!

  
Let's see what this baby'll do.

  
Hey, what are you doing?!

  
Then all we do
is blend in with traffic...

  
...without arousing suspicion.

  
Once at the airport,
there's no stopping us.

  
Stop! Security.

  
- You and your insect pack your float?
- Yes.

  
Has it been
in your possession the entire time?

  
Would you remove your shoes?

  
- Remove your stinger.
- It's part of me.

  
I know. Just having some fun.
Enjoy your flight.

  
Then if we're lucky, we'll have
just enough pollen to do the job.

  
Oan you believe how lucky we are? We
have just enough pollen to do the job!

  
I think this is gonna work.

  
It's got to work.

  
Attention, passengers,
this is Oaptain Scott.

  
We have a bit of bad weather
in New York.

  
It looks like we'll experience
a couple hours delay.

  
Barry, these are cut flowers
with no water. They'll never make it.

  
I gotta get up there
and talk to them.

  
Be careful.

  
Oan I get help
with the Sky Mall magazine?

  
I'd like to order the talking
inflatable nose and ear hair trimmer.

  
Oaptain, I'm in a real situation.

  
- What'd you say, Hal?
- Nothing.

  
Bee!

  
Don't freak out! My entire species...

  
What are you doing?

  
- Wait a minute! I'm an attorney!
- Who's an attorney?

  
Don't move.

  
Oh, Barry.

  
Good afternoon, passengers.
This is your captain.

  
Would a Miss Vanessa Bloome in 24B
please report to the cockpit?

  
And please hurry!

  
What happened here?

  
There was a DustBuster,
a toupee, a life raft exploded.

  
One's bald, one's in a boat,
they're both unconscious!

  
- Is that another bee joke?
- No!

  
No one's flying the plane!

  
This is JFK control tower, Flight 356.
What's your status?

  
This is Vanessa Bloome.
I'm a florist from New York.

  
Where's the pilot?

  
He's unconscious,
and so is the copilot.

  
Not good. Does anyone onboard
have flight experience?

  
As a matter of fact, there is.

  
- Who's that?
- Barry Benson.

  
From the honey trial?! Oh, great.

  
Vanessa, this is nothing more
than a big metal bee.

  
It's got giant wings, huge engines.

  
I can't fly a plane.

  
- Why not? Isn't John Travolta a pilot?
- Yes.

  
How hard could it be?

  
Wait, Barry!
We're headed into some lightning.

  
This is Bob Bumble. We have some
late-breaking news from JFK Airport,

  
where a suspenseful scene
is developing.

  
Barry Benson,
fresh from his legal victory...

  
That's Barry!

  
...is attempting to land a plane,
loaded with people, flowers

  
and an incapacitated flight crew.

  
Flowers?!

  
We have a storm in the area
and two individuals at the controls

  
with absolutely no flight experience.

  
Just a minute.
There's a bee on that plane.

  
I'm quite familiar with Mr. Benson
and his no-account compadres.

  
They've done enough damage.

  
But isn't he your only hope?

  
Technically, a bee
shouldn't be able to fly at all.

  
Their wings are too small...

  
Haven't we heard this a million times?

  
"The surface area of the wings
and body mass make no sense."

  
- Get this on the air!
- Got it.

  
- Stand by.
- We're going live.

  
The way we work may be a mystery to you.

  
Making honey takes a lot of bees
doing a lot of small jobs.

  
But let me tell you about a small job.

  
If you do it well,
it makes a big difference.

  
More than we realized.
To us, to everyone.

  
That's why I want to get bees
back to working together.

  
That's the bee way!
We're not made of Jell-O.

  
We get behind a fellow.

  
- Black and yellow!
- Hello!

  
Left, right, down, hover.

  
- Hover?
- Forget hover.

  
This isn't so hard.
Beep-beep! Beep-beep!

  
Barry, what happened?!

  
Wait, I think we were
on autopilot the whole time.

  
- That may have been helping me.
- And now we're not!

  
So it turns out I cannot fly a plane.

  
All of you, let's get
behind this fellow! Move it out!

  
Move out!

  
Our only chance is if I do what I'd do,
you copy me with the wings of the plane!

  
Don't have to yell.

  
I'm not yelling!
We're in a lot of trouble.

  
It's very hard to concentrate
with that panicky tone in your voice!

  
It's not a tone. I'm panicking!

  
I can't do this!

  
Vanessa, pull yourself together.
You have to snap out of it!

  
You snap out of it.

  
You snap out of it.

  
- You snap out of it!
- You snap out of it!

  
- You snap out of it!
- You snap out of it!

  
- You snap out of it!
- You snap out of it!

  
- Hold it!
- Why? Oome on, it's my turn.

  
How is the plane flying?

  
I don't know.

  
Hello?

  
Benson, got any flowers
for a happy occasion in there?

  
The Pollen Jocks!

  
They do get behind a fellow.

  
- Black and yellow.
- Hello.

  
All right, let's drop this tin can
on the blacktop.

  
Where? I can't see anything. Oan you?

  
No, nothing. It's all cloudy.

  
Oome on. You got to think bee, Barry.

  
- Thinking bee.
- Thinking bee.

  
Thinking bee!
Thinking bee! Thinking bee!

  
Wait a minute.
I think I'm feeling something.

  
- What?
- I don't know. It's strong, pulling me.

  
Like a 27-million-year-old instinct.

  
Bring the nose down.

  
Thinking bee!
Thinking bee! Thinking bee!

  
- What in the world is on the tarmac?
- Get some lights on that!

  
Thinking bee!
Thinking bee! Thinking bee!

  
- Vanessa, aim for the flower.
- OK.

  
Out the engines. We're going in
on bee power. Ready, boys?

  
Affirmative!

  
Good. Good. Easy, now. That's it.

  
Land on that flower!

  
Ready? Full reverse!

  
Spin it around!

  
- Not that flower! The other one!
- Which one?

  
- That flower.
- I'm aiming at the flower!

  
That's a fat guy in a flowered shirt.
I mean the giant pulsating flower

  
made of millions of bees!

  
Pull forward. Nose down. Tail up.

  
Rotate around it.

  
- This is insane, Barry!
- This's the only way I know how to fly.

  
Am I koo-koo-kachoo, or is this plane
flying in an insect-like pattern?

  
Get your nose in there. Don't be afraid.
Smell it. Full reverse!

  
Just drop it. Be a part of it.

  
Aim for the center!

  
Now drop it in! Drop it in, woman!

  
Oome on, already.

  
Barry, we did it!
You taught me how to fly!

  
- Yes. No high-five!
- Right.

  
Barry, it worked!
Did you see the giant flower?

  
What giant flower? Where? Of course
I saw the flower! That was genius!

  
- Thank you.
- But we're not done yet.

  
Listen, everyone!

  
This runway is covered
with the last pollen

  
from the last flowers
available anywhere on Earth.

  
That means this is our last chance.

  
We're the only ones who make honey,
pollinate flowers and dress like this.

  
If we're gonna survive as a species,
this is our moment! What do you say?

  
Are we going to be bees, orjust
Museum of Natural History keychains?

  
We're bees!

  
Keychain!

  
Then follow me! Except Keychain.

  
Hold on, Barry. Here.

  
You've earned this.

  
Yeah!

  
I'm a Pollen Jock! And it's a perfect
fit. All I gotta do are the sleeves.

  
Oh, yeah.

  
That's our Barry.

  
Mom! The bees are back!

  
If anybody needs
to make a call, now's the time.

  
I got a feeling we'll be
working late tonight!

  
Here's your change. Have a great
afternoon! Oan I help who's next?

  
Would you like some honey with that?
It is bee-approved. Don't forget these.

  
Milk, cream, cheese, it's all me.
And I don't see a nickel!

  
Sometimes I just feel
like a piece of meat!

  
I had no idea.

  
Barry, I'm sorry.
Have you got a moment?

  
Would you excuse me?
My mosquito associate will help you.

  
Sorry I'm late.

  
He's a lawyer too?

  
I was already a blood-sucking parasite.
All I needed was a briefcase.

  
Have a great afternoon!

  
Barry, I just got this huge tulip order,
and I can't get them anywhere.

  
No problem, Vannie.
Just leave it to me.

  
You're a lifesaver, Barry.
Oan I help who's next?

  
All right, scramble, jocks!
It's time to fly.

  
Thank you, Barry!

  
That bee is living my life!

  
Let it go, Kenny.

  
- When will this nightmare end?!
- Let it all go.

  
- Beautiful day to fly.
- Sure is.

  
Between you and me,
I was dying to get out of that office.

  
You have got
to start thinking bee, my friend.

  
- Thinking bee!
- Me?

  
Hold it. Let's just stop
for a second. Hold it.

  
I'm sorry. I'm sorry, everyone.
Oan we stop here?

  
I'm not making a major life decision
during a production number!

  
All right. Take ten, everybody.
Wrap it up, guys.

  
I had virtually no rehearsal for that.

Special thanks to SergeiK.
 OPEN ON: ICE.

   We're underwater looking up at it. A saw cuts through,
   heading right for us.


   EXT. SNOW-CAPPED MOUNTAINS -- DUSK

   ICE HARVESTERS, dressed in traditional Sami clothing, score a
   frozen lake. They SING.

                   "The Frozen Heart (Ice Worker's Song)"

                            ICE HARVESTERS
                  BORN OF COLD AND WINTER AIR
                  AND MOUNTAIN RAIN COMBINING,
                  THIS ICY FORCE BOTH FOUL AND FAIR
                  HAS A FROZEN HEART WORTH MINING.

   The men drag giant ice blocks through channels of water.

                            ICE HARVESTERS (CONT'D)
                  CUT THROUGH THE HEART, COLD AND CLEAR.
                  STRIKE FOR LOVE AND STRIKE FOR FEAR.

                  SEE THE BEAUTY SHARP AND SHEER.
                  SPLIT THE ICE APART!
                  AND BREAK THE FROZEN HEART.
                  Hup! Ho! Watch your step! Let it go!

   A young Sami boy, KRISTOFF (8), and his reindeer calf, SVEN,
   share a carrot as they try to keep up with the men.

                            ICE HARVESTERS (CONT'D)
                  Hup! Ho! Watch your step! Let it go!

   Young Kristoff struggles to get a block of ice out of the
   water. He fails, ends up soaked. Sven licks his wet cheek.

                            ICE HARVESTERS (CONT'D)
                  BEAUTIFUL! POWERFUL! DANGEROUS! COLD!
                  ICE HAS A MAGIC CAN'T BE CONTROLLED.

   A sharp ice floe overtakes the workers, threateningly. They
   fight it back.

                            ICE HARVESTERS (CONT'D)
                  STRONGER THAN ONE, STRONGER THAN TEN
                  STRONGER THAN A HUNDRED MEN!

   Massive fjord horses drag heavy ice plows.
                                                                2
FROZEN - J. Lee



                            ICE HARVESTERS (CONT'D)
                  BORN OF COLD AND WINTER AIR
                  AND MOUNTAIN RAIN COMBINING

   The sun sets. Lanterns are lit.

                            ICE HARVESTERS (CONT'D)
                  THIS ICY FORCE BOTH FOUL AND FAIR
                  HAS A FROZEN HEART WORTH MINING.
                  CUT THROUGH THE HEART, COLD AND CLEAR.

   In the dark, Kristoff and Sven finally manage to get a single
   block of ice out of the water.

                            ICE HARVESTERS (CONT'D)
                  STRIKE FOR LOVE AND STRIKE FOR FEAR.
                  THERE'S BEAUTY AND THERE'S DANGER HERE.
                  SPLIT THE ICE APART!
                  BEWARE THE FROZEN HEART.

   The workers pile onto the giant horse-drawn ice sled as it
   pulls away.

   Left behind, Kristoff and Sven push their ice block onto a
   dinky little sled then head off.

   We sweep up from them to the Northern Lights filling the
   sky...then move across the mountains...beneath the
   snowline...and descend upon...


   EXT. THE KINGDOM OF ARENDELLE -- NIGHT

   A humble castle, built of wood, nestled in a deep fjord.


   INT. CASTLE, NURSERY -- NIGHT

   ELSA (8) sleeps in her bed. Her little sister ANNA (5) pops
   up beside her.

                            YOUNG ANNA
                  Elsa. Psst. Elsa! Psst.

   Elsa doesn't stir. Anna sits on Elsa and bounces.

                            YOUNG ANNA (CONT'D)
                  Wake up. Wake up. Wake up.

                            YOUNG ELSA
                      (grumbling)
                  Anna, go back to sleep.

   Anna rolls onto her back and spreads all her weight on Elsa.
                                                              3
FROZEN - J. Lee



                            YOUNG ANNA
                      (drama queen-ish)
                  I just can't. The sky's awake, so
                  I'm awake, so we have to play.

                            YOUNG ELSA
                  ...Go play by yourself.

   Elsa shoves Anna off the bed.

   Anna lands butt to floor, sighs, defeated. But then she gets
   an idea. She hops back on the bed and lifts one of Elsa's
   eyelids.

                            YOUNG ANNA
                      (mischievously)
                  Do you want to build a snowman?

   Elsa's eyes both pop open. She smiles.


   INT. CASTLE STAIRCASE -- NIGHT

   Anna, now wearing snow boots, pulls Elsa by the hand.

                            YOUNG ANNA
                  Come on, come on, come on, come on.

   Elsa tries to shush her, but Anna's too excited.


   INT. BALLROOM -- NIGHT

   The girls sneak into the ballroom. Elsa shuts the door.

                            YOUNG ANNA
                  Do the magic! Do the magic!

   Elsa laughs and waves her hands together. Snowflakes suddenly
   burst forth and dance between her palms, forming a snowball.
   Elsa throws the snowball high into the air. Snow bursts out
   and flurries around the room. Anna dances about, catching
   flakes in her palms and mouth.

                            YOUNG ANNA (CONT'D)
                  This is amazing!

                            YOUNG ELSA
                  Watch this!

   Elsa stomps her little slippered foot and a layer of ice
   suddenly coats the floor, forming a giant ice rink. Anna
   slides off, laughing.
                                                              4
FROZEN - J. Lee



   PLAY MONTAGE:

   -Anna and Elsa roll giant snowballs and build a snowman
   together. Elsa moves his stick arms around.

                            YOUNG ELSA (CONT'D)
                      (goofy voice)
                  Hi, I'm Olaf and I like warm hugs.

   Anna jumps up and hugs him.

                            YOUNG ANNA
                  I love you, Olaf.

   -Anna and Olaf appear to be dancing. REVEAL: Elsa is actually
   propelling them across the ice floor with her magic.

   -The girls slide down snowbanks together!

   -Anna fearlessly jumps off a snow peak into mid air.

                              YOUNG ANNA (CONT'D)
                  Catch me!

   Elsa makes another peak to catch Anna.

                              YOUNG ELSA
                  Gotcha!

   Anna keeps jumping. Elsa keeps casting magic.

                            YOUNG ANNA
                      (jumping faster)
                  Again! Again!

                             YOUNG ELSA
                      (struggling to keep up)
                  Slow down!

   Elsa suddenly slips.

   Her magic accidentally STRIKES Anna in the head. Anna tumbles
   down a snowbank and lands, unconscious.

                              YOUNG ELSA (CONT'D)
                  ANNA!

   Elsa runs to Anna and takes her in her arms. A streak of
   Anna's hair, where struck, turns white.

                            YOUNG ELSA (CONT'D)
                  MAMA! PAPA!

   The room around them fills with frightening ice spikes.
                                                                     5
FROZEN - J. Lee



   The parents burst through the frozen door. GASP at the sight
   of the room.

                            KING
                  Elsa, what have you done? This is
                  getting out of hand!

                            QUEEN
                      (seeing Anna)
                  Anna!

   The King and Queen rush to Anna and take her in their arms.

                            ELSA
                  It was an accident. I'm sorry,
                  Anna.

                            QUEEN
                      (about Anna)
                  She's ice cold.

                            KING
                  ...I know where we have to go.

                                                      SLAM CUT TO:


   INT. DARK ROOM -- NIGHT

   The King sifts through a shelf to find an ancient book
   inscribed with Old Norse runes. He opens the book, scrambles
   to a page with an ancient map.


   EXT. ARENDELLE -- NIGHT

   Carrying the girls, the King and Queen ride their horses out
   of the kingdom. Snow streams from Elsa's hands, leaving a
   trail of ice behind them.


   EXT. FJORD MOUNTAIN FOREST -- NIGHT

   A sleepy Kristoff and Sven travel alone through the dark
   woods. All of a sudden, the King and Queen race by with the
   girls, leaving the wake of ice.

                            KRISTOFF
                  Ice?

                                                      SLAM CUT TO:
                                                                6
FROZEN - J. Lee



   EXT. BLACK MOUNTAINS -- NIGHT

   Kristoff rides Sven as they follow the trail of ice.

                            YOUNG KRISTOFF
                  Faster, Sven!


   EXT. THE VALLEY OF THE LIVING ROCK -- NIGHT

   Kristoff hops off Sven at the edge of a deep valley. They
   hide behind a rock and peek out.

   Down below, the King holds a frightened Elsa. The Queen holds
   the still unconscious Anna.

                            KING
                  Please, help. My daughter!

   Suddenly, a bunch of rocks tumble down the valley toward
   them. It looks as though they'll be crushed!

   But, luckily, the rocks stop at their feet. The rocks then
   unfold, revealing bright faces.

                               YOUNG KRISTOFF
                  Trolls...?

   The rock in front of Kristoff "wakes up." Meet BULDA.

                            BULDA
                  Shush. I'm trying to listen.

   She grabs Kristoff and Sven by hand and hoof and hugs them
   close. Sven licks her face and she eyes them both.

                            BULDA (CONT'D)
                  Cuties. I'm gonna keep you.

   Back below, the crowd parts for a troll as old as the Earth.
   They call him GRAND PABBIE. He approaches arthritically, but
   determined. He nods respectfully to the king.

                            GRAND PABBIE
                  Your Majesty.
                      (referring to Elsa)
                  Born with the powers or cursed?

                            KING
                  Born. And they're getting stronger.

   Grand Pabbie motions for the Queen to bring Anna to him. She
   does. He examines her.
                                                              7
FROZEN - J. Lee



                            GRAND PABBIE
                      (about Anna)
                  You are lucky it wasn't her heart.
                  The heart is not so easily changed,
                  but the head can be persuaded.

                            KING
                  Do what you must.

                            GRAND PABBIE
                  I recommend we remove all magic,
                  even memories of magic to be
                  safe.... But don't worry, I'll
                  leave the fun.

   Grand Pabbie pulls out a glowing blue energy from Anna's
   head. We see her memories floating right above her. Grand
   Pabbie changes all of her magical memories to ordinary
   memories -- snowy play indoors with the girls in their
   nightgowns changes to outdoors on the winter fjords with the
   girls in winter gear. He puts the ordinary memories back in
   her head.

                            GRAND PABBIE (CONT'D)
                  She will be okay.

                            YOUNG ELSA
                  But she won't remember I have
                  powers?

                            KING
                  It's for the best.

                             PABBIE
                  Listen to me, Elsa, your power will
                  only grow.

   As he speaks, he conducts the Northern Lights to show a
   silhouette of an adult Elsa creating magical snowflakes.

                            PABBIE (CONT'D)
                  There is beauty in your magic....
                  But also great danger.

   The snowflakes turn to sharp spikes.

                           PABBIE (O.S.) (CONT'D)
                  You must learn to control it.

   In the Northern Lights display, the sharp spikes cause human
   figures to panic and attack Elsa.

                            PABBIE (CONT'D)
                  Fear will be your enemy.
                                                                     8
FROZEN - J. Lee



   Elsa gasps and buries her face in the King's chest. The King
   wraps his arms around Elsa, protectively.

                            KING
                  No. We'll protect her. She can
                  learn to control it. I'm sure.

   Over the King's words we...

                                                      DISSOLVE TO:

   -The Arendelle castle gates shutting.

                            KING (O.S.) (CONT'D)
                  Until then, we'll lock the gates.
                  We'll reduce the staff. We will
                  limit her contact with people and
                  keep her powers hidden from
                  everyone... including Anna.

   -The castle shutters close.

   -Anna sits on her bed as Elsa's furniture disappears.

   -Anna rushes to the hall to see Elsa shut the door to her new
   room. Anna watches, confused and sad.

                                                      DISSOLVE TO:


   INT. CASTLE WINDOW -- DAY

   We look out on a gentle snowfall. Little Anna skips up to the
   window. She lights up at the sight of the snow and rushes
   down the hall.


   INT. HALLWAY, ELSA'S DOOR -- DAY

   Anna knocks on Elsa's door and SINGS.

                     "Do You Want to Build a Snowman?"

                            YOUNG ANNA
                  DO YOU WANT TO BUILD A SNOWMAN?
                  COME ON LET'S GO AND PLAY.

   Anna peeks under the door.

                            YOUNG ANNA (CONT'D)
                  I NEVER SEE YOU ANYMORE.
                  COME OUT THE DOOR.
                  IT'S LIKE YOU'VE GONE AWAY.
                                                                 9
FROZEN - J. Lee



   -INT. ANNA'S ROOM -- Anna plays with two dolls, gives up, sad.

                            YOUNG ANNA (CONT'D)
                  WE USED TO BE BEST BUDDIES
                  AND NOW WE'RE NOT.
                  I WISH YOU WOULD TELL ME WHY.

   -ELSA'S DOOR. Anna peeks through the key hole.

                            YOUNG ANNA (CONT'D)
                  DO YOU WANT TO BUILD A SNOWMAN?

   -Anna calls through the keyhole.

                            YOUNG ANNA (CONT'D)
                  IT DOESN'T HAVE TO BE A SNOWMAN.

                            YOUNG ELSA (O.S.)
                  Go away, Anna.

                            YOUNG ANNA
                      (hearbroken)
                  ...OKAY BYE.

   -BEHIND THE DOOR -- DAY. Elsa sits at the window looking out,
   longingly. Suddenly, her icy hands freeze the windowsill.

   -LATER. The King slips leather gloves onto Elsa's hands.

                            KING
                  The gloves will help.

   He pats her gloved hand.

                            KING (CONT'D)
                  See? You're good....
                      (starting their mantra)
                  Conceal it.

                            YOUNG ELSA
                  Don't feel it.

                            YOUNG ELSA & KING
                  Don't let it show.

   -INT. HALLWAY, ELSA'S DOOR -- DAY. Anna, now 9, knocks on
   Elsa's door.

                            ANNA (9)
                  DO YOU WANT TO BUILD A SNOWMAN?

   -INT. HALLWAY -- DAY. Alone, Anna rides a bicycle built for
   two in the hall by standing on the back seat.
                                                               10
FROZEN - J. Lee



                            ANNA (9) (CONT'D)
                  OR RIDE OUR BIKE AROUND THE HALL?
                  I THINK SOME COMPANY IS OVERDUE...

   -INT. PORTRAIT ROOM -- DAY. Anna runs around the portrait
   room, gaining momentum to flip over the arm of the couch.

                            ANNA (9) (CONT'D)
                  I'VE STARTED TALKING TO
                  THE PICTURES ON THE WALLS.

   Anna lands PLOP on the cushions, then looks up at the
   painting above her of the courageous Joan of Arc.

                            ANNA (9) (CONT'D)
                  Hang in there, Joan.

   -INT. EMPTY LIBRARY -- DAY. Looks like no one's around.

                            ANNA (9) (CONT'D)
                  IT GETS A LITTLE LONELY
                  ALL THESE EMPTY ROOMS.

   But then we find Anna, laying at the base of the grandfather
   clock, playing with her braids, bored out of her mind.

                            ANNA (9) (CONT'D)
                  JUST WATCHING THE HOURS TICK BY.

   Anna's eyes follow the grandfather clock's pendulum.

                            ANNA (9) (CONT'D)
                  TICK TOCK. TICK TOCK. TICK TOCK.

   -INT. ELSA'S ROOM -- NIGHT. Elsa (now 12) paces as she panics.
   The entire wall is frozen behind her.

                            ELSA (12)
                  I'm scared. It's getting stronger.

                            KING
                  Getting upset only makes it worse.

   The King goes to hug her.

                            ELSA (12)
                  No. Don't touch me. I don't want to
                  hurt you.

   He and the Queen look at each other with alarmed sadness.

   -INT. LIBRARY -- DAY. Anna, now a teenager, slides past Elsa's
   room without stopping.
                                                                11
FROZEN - J. Lee



   -INT. KING AND QUEEN'S QUARTERS -- DAY. Anna runs into the
   room and throws herself into her parents' arms.

                            TEEN ANNA
                  See you in two weeks.

   -INT. ELSA'S ROOM -- DAY. Elsa curtsies in front of her
   parents, formally, not touching them.

                            TEEN ELSA
                  Do you have to go?

                            KING
                  You'll be fine, Elsa.

   -EXT. DOCKS -- DAY. The King and Queen leave on a ship.

   -EXT. ROUGH SEAS -- NIGHT. Lightning flashes. The sea rages in
   a storm. The King and Queen's ship is lost in the waves.

   -INT. CASTLE -- DAY. A portrait of the King and Queen is
   covered in mourning cloth.

   -EXT. CEMETERY -- DAY. Anna looks small, standing before her
   people, beside burial stones.

   -INT. HALLWAY, ELSA'S DOOR. Anna, still in her mourning
   clothes, approaches and knocks.

                            ANNA
                      (singing)
                  Elsa? PLEASE I KNOW YOU'RE IN THERE
                  PEOPLE ARE ASKING WHERE YOU'VE BEEN
                  THEY SAY HAVE COURAGE
                  AND I'M TRYING TO
                  I'M RIGHT OUT HERE FOR YOU.
                  PLEASE LET ME IN.

   Anna slides down the door and sits with her head against it.

                            ANNA (CONT'D)
                  WE ONLY HAVE EACH OTHER.
                  IT'S JUST YOU AND ME.
                  WHAT ARE WE GONNA DO?
                      (weak, internal)
                  DO YOU WANT TO BUILD A SNOWMAN?

   We move through the door...

   -INT. ELSA'S ROOM -- DAY. Elsa is sitting in the exact same
   pose as Anna. Her bedroom is frozen with ice. Snowflakes hang
   in the air, suspended by grief.

                                                        FADE OUT.
                                                               12
FROZEN - J. Lee



   EXT. THE KINGDOM OF ARENDELLE -- MORNING

   A new dawn rises over the fjords.

   Ships pull up to the docks. Guests pile out.

                            DOCK MASTER
                  Welcome to Arendelle!

   A BOY tries to get away as his MOTHER tries to stuff him in
   his bunad jacket.

                            BOY
                  Why do I have to wear this?

                            MOTHER
                  Because the Queen has come of age.
                  It's Coronation Day!

                            BOY
                  That's not my fault.

   They pass the May Pole being raised and a Sami ice harvester
   chatting with his reindeer. We recognize them as Kristoff and
   Sven, all grown up. Sven hops around excitedly like a dog and
   nuzzles Kristoff's chest.

                            KRISTOFF
                  What do you want, Sven?

   Kristoff leans in and speaks for Sven, as if he can.

                            KRISTOFF (AS SVEN) (CONT'D)
                  Give me a snack.

                            KRISTOFF (CONT'D)
                  What's the magic word?

                            KRISTOFF (AS SVEN) (CONT'D)
                  Please!

   Kristoff pulls a carrot out of his shirt pocket and hands it
   to Sven. Sven tries to bite the whole thing.

                            KRISTOFF (CONT'D)
                  Hey, hey, hey! Share!

   Sven takes a smaller bite. Kristoff then has a bite himself,
   not seeming to care that it's covered in reindeer slobber.

   We move on to PERSI and AGGIE, a super-excited couple who
   rush towards the castle.
                                                              13
FROZEN - J. Lee



                            PERSI
                  I can't believe they're finally
                  opening up the gates!

                            AGGIE
                  And for a whole day! Faster, Persi!

   They pass a tiny but menacing DUKE, who wears taps on his
   shoes to "enhance" his presence. Two THUG guards follow close
   behind him.

                            DUKE
                  Ah, Arendelle, our most mysterious
                  trade partner. Open those gates so
                  I may unlock your secrets and
                  exploit your riches.
                      (catching himself)
                  ...Did I just say that out loud?

   We leave him and head down the bridge towards the castle
   gates, passing an Irishman and a Spanish Dignitary.

                            IRISHMAN
                  Oh, me sore eyes can't wait to see
                  the Queen and the Princess. I bet
                  they're absolutely lovely.

                            SPANISH DIGNITARY
                  I bet they are beautiful.

   We move past them, to a particular castle window.

                                                        CUT TO:


   INT. CASTLE, ANNA'S BEDROOM -- DAY

   Anna, 18, snores. Drools. KNOCK. KNOCK.

                            KAI (O.S.)
                  Princess Anna...?

   Anna sits up. She's got major bedhead. She coughs. Snorts.
   Pulls a hair from her mouth.

                            ANNA
                  ...Huh? Yeah?

                            KAI (O.S.)
                  Sorry to wake you, ma'am but--

                            ANNA
                  No, you didn't. I've been up for
                  hours.
                                                                 14
FROZEN - J. Lee



   She falls back asleep while sitting. She snores. Her head
   drops, startling her awake.

                               ANNA (CONT'D)
                  Who is it?

                            KAI (O.S.)
                  It's still me, ma'am. Time to get
                  ready.

                            ANNA
                  Ready for what?

                            KAI (O.S.)
                  Your sister's coronation, ma'am.

                            ANNA
                  My sister's cor-neration...

   One eye opens enough to catch sight of her coronation dress.
   She bolts, wide awake in excitement.

                            ANNA (CONT'D)
                  Coronation Day! Ha ha!

                                                      SLAM CUT TO:


   EXT. CASTLE HALL -- DAY

   Anna bursts out of her room, wearing her coronation dress.
   She finishes pinning ribbons in her hair. Seeing the hustle
   and bustle of preparations, she can't help but SING.

                       "For the First Time in Forever"

                            ANNA
                  THE WINDOW IS OPEN!
                  SO'S THAT DOOR!
                  I DIDN'T KNOW THEY DID THAT ANYMORE.
                  WHO KNEW WE OWNED 8000 SALAD PLATES...?

   -Anna slides along the floor of the ballroom in her socks.

                            ANNA (CONT'D)
                  FOR YEARS I HAVE ROAMED THESE EMPTY HALLS
                  WHY HAVE A BALLROOM WITH NO BALLS?
                  FINALLY, THEY'RE OPENING UP THE GATES!

   -She shakes hands with a suit of armor. Breaks it. Hides the
   evidence.
                                                            15
FROZEN - J. Lee



                            ANNA (CONT'D)
                  THERE'LL BE REAL, ACTUAL PEOPLE -
                  IT'LL BE TOTALLY STRANGE.
                  BUT WOW AM I SO READY FOR THIS CHANGE!

   -Anna comes to a window and jumps out onto a window washer's
   pulley. She raises herself up to see the ships arriving.

                            ANNA (CONT'D)
                  FOR THE FIRST TIME IN FOREVER,
                  THERE'LL BE MUSIC, THERE'LL BE LIGHT.
                  FOR THE FIRST TIME IN FOREVER,
                  I'LL BE DANCING THROUGH THE NIGHT.

   -Anna walks through the garden and follows a family of geese.

                            ANNA (CONT'D)
                  DON'T KNOW IF I'M ELATED OR GASSY,
                  BUT I'M SOMEWHERE IN THAT ZONE
                  'CAUSE FOR THE FIRST TIME IN FOREVER,
                  I WON'T BE ALONE.
                      (speaking)
                  I can't wait to meet everyone....
                  (GASP) What if I meet THE ONE?

   -Anna twists herself in a velvet drape like it's a gown. She
   acts like she looks gorgeous, but she looks ridiculous.

                            ANNA (CONT'D)
                  TONIGHT, IMAGINE ME GOWN AND ALL-
                  FETCHINGLY DRAPED AGAINST THE WALL.
                  THE PICTURE OF SOPHISTICATED GRACE.

   -She notices the bust of a man across the room.

                            ANNA (CONT'D)
                      (google-eyed)
                  I SUDDENLY SEE HIM STANDING THERE,
                  A BEAUTIFUL STRANGER TALL AND FAIR.
                      (mouth full of chocolate)
                  I WANNA STUFF SOME CHOCOLATE IN MY
                  FACE!

   -She grabs the bust of the man and swings it around.

                            ANNA (CONT'D)
                  BUT THEN WE LAUGH AND TALK ALL EVENING,
                  WHICH IS TOTALLY BIZARRE.
                  NOTHING LIKE THE LIFE I'VE LED SO FAR.

   The bust goes flying and lands on the top of the cake.

   -Anna bursts into the portrait room, bounces on the
   furniture, and interacts with the paintings.
                                                               16
FROZEN - J. Lee



                            ANNA (CONT'D)
                  FOR THE FIRST TIME IN FOREVER,
                  THERE'LL BE MAGIC, THERE'LL BE FUN.
                  FOR THE FIRST TIME IN FOREVER,
                  I COULD BE NOTICED BY SOMEONE.
                  AND I KNOW IT IS TOTALLY CRAZY
                  TO DREAM I'D FIND ROMANCE.
                  BUT FOR THE FIRST TIME IN FOREVER,
                  AT LEAST I'VE GOT A CHANCE!

   -INT. LIBRARY. ELSA, now a very poised 21, watches out the
   window as the coronation guests arrive.

                            ELSA
                  DON'T LET THEM IN.
                  DON'T LET THEM SEE.
                  BE THE GOOD GIRL
                  YOU ALWAYS HAVE TO BE.

   Elsa moves to a painting of her father's coronation. She
   takes off her gloves and mimics the painting by holding a
   candlestick and ornament in place of an orb and scepter.

                            ELSA (CONT'D)
                  CONCEAL. DON'T FEEL.
                  PUT ON A SHOW.
                  MAKE ONE WRONG MOVE
                  AND EVERYONE WILL KNOW.

   The candlestick and ornament ice over. Elsa gasps, slams them
   back down onto the table. She tries to reassure herself.

                            ELSA (CONT'D)
                  BUT IT'S ONLY FOR TODAY.

   We cut between Anna's excitement and Elsa's nerves.

                            ANNA
                  IT'S ONLY FOR TODAY!

                            ELSA
                  IT'S AGONY TO WAIT.

                            ANNA
                  IT'S AGONY TO WAIT!!!

                            ELSA
                  TELL THE GUARDS TO OPEN UP THE GATE.

                            ANNA
                  THE GATE!!!

   -Finally, the gates are open! Anna moves through the crowd,
   admiring the people around her.
                                                                  17
FROZEN - J. Lee



            ANNA (CONT'D)                              ELSA
   FOR THE FIRST TIME IN                  DON'T LET THEM IN
   FOREVER.                               DON'T LET THEM SEE

                ANNA                                   ELSA
   I'M GETTING WHAT I'M DREAMING          BE THE GOOD GIRL
   OF                                     YOU ALWAYS HAVE TO BE

                ANNA                                   ELSA
   A CHANCE TO LEAVE MY SISTER'S          CONCEAL.
   WORLD                                  CONCEAL. DON'T FEEL.
   A CHANCE TO FIND TRUE LOVE             DON'T LET THEM KNOW.

   -Anna hurries over the bridge and into the village square.

                            ANNA (CONT'D)
                  I KNOW IT ALL ENDS TOMORROW,
                  SO IT HAS TO BE TODAY!!
                  'CAUSE FOR THE FIRST TIME IN
                  FOREVER. . .
                  FOR THE FIRST TIME IN FOREVER!
                  NOTHING'S IN MY WAY!!!

   -Anna SLAMS right into the breast of a HORSE!

   She falls back and lands in a small wooden boat. It tips off
   of the dock. She's heading overboard. But just then, the
   horse slams his hoof into the boat and steadies it.

                               ANNA (CONT'D)
                         (frustrated)
                  Hey!

                            HANS
                  I'm so sorry. Are you hurt?

   The rider, HANS, sure is handsome and regal.

                            ANNA
                      (gentler)
                  Hey. I-ya, no. No. I'm okay.

                            HANS
                  Are you sure?

                            ANNA
                  Yeah, I just wasn't looking where I
                  was going. But I'm okay.

   He hops down from his horse and steps into the boat.

                            ANNA (CONT'D)
                  I'm great, actually.
                                                            18
FROZEN - J. Lee



                            HANS
                  Oh, thank goodness.

   He offers her a hand and their eyes meet. Chemistry. He helps
   her to her feet.

                            HANS (CONT'D)
                      (bowing)
                  Prince Hans of the Southern Isles.

                            ANNA
                      (curtseying)
                  Princess Anna of Arendelle.

                            HANS
                  Princess...? My Lady.

   He drops to his knees, head bowed. The horse bows too,
   curling his hoof up and out of the boat.

   The boat tips. Hans tumbles on top of Anna. Awkward.

                            ANNA
                  Hi...again.

   The horse slams his foot back into the boat to stabilize it.
   Anna and Hans tumble the other way. Anna lands on top of him.

                            HANS
                  Oh boy.

                            ANNA
                  Ha. This is awkward. Not you're
                  awkward, but just because we're--
                  I'm awkward. You're gorgeous.
                      (did she just say that?)
                  Wait, what?

   Hans quickly gets to his feet and helps Anna up again.

                            HANS
                  I'd like to formally apologize for
                  hitting the Princess of Arendelle
                  with my horse...and for every
                  moment after.

                            ANNA
                  No. No-no. It's fine. I'm not THAT
                  Princess. I mean, if you'd hit my
                  sister Elsa, that would be-- yeash!
                  Cuz, you know...
                      (patting the horse)
                  Hello.
                            (MORE)
                                                               19
FROZEN - J. Lee

                            ANNA (CONT'D)
                      (to Hans)
                  But, lucky you, it's-it's just me.

                              HANS
                  Just you?

   Hans smiles, amused. She smiles back. The bells RING. She
   doesn't notice at first; she's too busy drinking in Hans's
   handsomeness.

                            ANNA
                  ...The bells. The coronation. I-I-I
                  better go. I have to...I better go.

   She hurries off, stops, turns back. Gives Hans a little wave.

                              ANNA (CONT'D)
                  Bye!

   As she rushes off again, Hans waves back. The horse waves
   too, once again taking his hoof out of the boat.

                              HANS
                  Oh no.

   The boat falls, with Hans in it. SPLASH! It lands upside down
   in the water. Hans raises it up off of him, gasping for air.

                                                         CUT TO:

   INT. CHURCH CHAPEL -- DAY

   Elsa stands at the alter. Anna stands off to one side. She
   peeks out to the audience.

   Hans waves at her from the pews. He's changed his clothes.

   The crown is placed on Elsa's head. The scepter and orb are
   presented to Elsa on a pillow. She slowly reaches for them.

                            BISHOP
                      (a whisper)
                  Your Majesty, the gloves.

   Elsa hesitates. She breathes nervously, removes her gloves,
   places them on the pillow. Her hands shake. She takes the orb
   and scepter, then turns to the people.

                            BISHOP (CONT'D)
                      (formal, in Old Norse)
                  Sehm hon HELL-drr IN-um HELL-gum
                  AYG-num ok krund ee THES-um HELL-
                  gah STAHTH, ehk teh frahm FUR-ear U-
                  thear...
                                                               20
FROZEN - J. Lee



   The scepter and orb start to freeze over.

                            BISHOP (CONT'D)
                  ...Queen Elsa of Arendelle.

                            CROWD
                  Queen Elsa of Arendelle.

   Just in time. Elsa manages to set the orb and scepter back
   down on the pillow before anyone notices the ice. She picks
   up her gloves and slips them on. She made it.

                                                        CUT TO:


   INT. GREAT HALL -- NIGHT

   Springy music fills the Great Hall. Guests dance. Eat. Laugh.

   TRUMPETS SOUND.

                            KAI
                      (announcing)
                  Queen Elsa of Arendelle.

   Elsa enters, poised and looking surprisingly content. She
   stands under a formal awning.

                            KAI (CONT'D)
                  Princess Anna of Arendelle!

   Anna runs into the room, waves awkwardly. Kai ushers her over
   to stand right next to Elsa.

                            ANNA
                  Here? Are you sure?

   She and Elsa sneak awkward peeks at each other.

                            ELSA
                  ...Hi.

                            ANNA
                  Hi me...? Oh. Um. Hi.

                            ELSA
                  ...You look beautiful.

                            ANNA
                  Thank you. You look beautifuller. I
                  mean, not fuller. You don't look
                  fuller, but more beautiful.
                                                            21
FROZEN - J. Lee



                               ELSA
                  Thank you.

   They look out at the celebration.

                            ELSA (CONT'D)
                  So, this is what a party looks
                  like?

                            ANNA
                  It's warmer than I thought.

                            ELSA
                  And what is that amazing smell?

   They both close their eyes and inhale.

                            ANNA AND ELSA (TOGETHER)
                  ...Chocolate.

   Their eyes pop open. They laugh.

   Elsa looks back out at the party. Anna looks at Elsa. She
   wants to say so much, but she can't think of where to start.
   Just as she finds her way, Kai interrupts.

                            KAI
                  Your Majesty. The Duke of
                  Weaseltown.

                            DUKE
                  Weselton. The Duke of Weselton.
                      (to Elsa)
                  Your Majesty, as your closest
                  partner in trade, it seems only
                  fitting that I offer you your first
                  dance as queen.

   The Duke does a funny flitter of his feet, a hitch-kick, and
   a deep bow.

                            DUKE (CONT'D)
                      (whispers to himself)
                  One, two, three. Jump.

   As he holds out his hand, head down, his toupee dips forward.
   Anna giggles. Elsa looks at Anna, stifles a giggle herself.

                            ELSA
                      (to the Duke)
                  Thank you...only I don't dance.
                                                               22
FROZEN - J. Lee



                            DUKE
                      (offended)
                  Oh...?

                            ELSA
                  But my sister does.

                            ANNA
                  What?

                            DUKE
                  Lucky you....

                            ANNA
                  Oh, I don't think--

   The Duke grabs Anna's arm and yanks her away before she can
   protest.

                             DUKE
                  If you swoon, let me know, I'll
                  catch you.

   Anna looks back at Elsa, desperately.

                            ELSA
                  Sorry.

   OUT ON THE DANCE FLOOR: The Duke showboats, but he's just
   awful. Anna tries to make the best of it.

                            DUKE
                  Like an agile peacock... CLUCK-
                  CLUGGLE-CLUCK!

   He lands on her feet.

                            ANNA
                  Ow. Ow.

                            DUKE
                  Speaking of, so great to have the
                  gates open. Why did they shut them
                  in the first place? Do you know the
                  reason? Hmm?

   He gets in her face, suspicious.

                            ANNA
                  ...No.
                                                                   23
FROZEN - J. Lee



                            DUKE
                  Oh, all right. Hang on. They don't
                  call me the little dipper for
                  nothing.

   He dips Anna back. Elsa peeks through the crowd, can barely
   hold in her laughter. Anna shoots Elsa funny, help-me looks.

                            DUKE (CONT'D)
                      (groove fully on)
                  Like a chicken...with the face of a
                  monkey...I fly.

                                                        JUMP CUT TO:


   MOMENTS LATER...

   Anna limps back to Elsa.

                            DUKE (O.S.)
                  Let me know when you're ready for
                  another round, M'Lady.

                            ELSA
                  Well, he was sprightly.

                            ANNA
                      (rubbing her sore feet)
                  Especially for a man in heels.

                            ELSA
                  Are you okay?

                            ANNA
                      (loving Elsa's attention)
                  I've never been better. This is so
                  nice. I wish it could be like this
                  all the time.

                             ELSA
                      (sincere)
                  Me too....

   But then Elsa catches herself. She stiffens up, looks away.

                            ELSA (CONT'D)
                  But it can't.

                            ANNA
                  Why not? If--

                            ELSA
                  It just can't.
                                                                24
FROZEN - J. Lee



   Anna's smile drops. She tries not to get emotional.

                            ANNA
                  Excuse me for a minute.

   She walks away. Elsa watches her go, saddened.

   Moving through the crowd, Anna gets bumped by a bowing man's
   butt. She falls. Just before she hits the floor, Hans catches
   her. He smiles perfectly.

                            HANS
                  Glad I caught you.

                               ANNA
                  Hans.

   He smoothly sets his drink down on a passing tray. He lifts
   her up and leads her in a romantic dance.

                                                     DISSOLVE TO:

   LATER: Anna and Hans drink and chat.

                            ANNA (CONT'D)
                  I often had the whole parlor to
                  myself to slide... Oops. Sorry.

   She hits him in the face by mistake with her hand. He laughs.

                                                     DISSOLVE TO:

   -THE CASTLE DOORS: Anna and Hans stroll out of the castle.

                            ANNA (CONT'D)
                  ...Your physique helps I'm sure.

                                                     DISSOLVE TO:

   -THE ROSE GARDEN... Hans notices her white streak.

                            HANS
                      (about her white streak)
                  What's this?

                            ANNA
                  I was born with it, although I
                  dreamt I was kissed by a troll.

                               HANS
                  I like it.

                                                     DISSOLVE TO:
                                                       25
FROZEN - J. Lee



   EXT. BALCONY -- NIGHT

   Anna teaches Hans how to eat krumkake.

                            ANNA
                  Yeah, the whole thing! You got it.

   They laugh as the krumkake crumbles in his face.

                            ANNA(CONT'D)
                  Okay wait, wait. So you have how
                  many brothers?

                            HANS
                  Twelve older brothers. Three of
                  them pretended I was invisible...
                  literally...for two years.

                            ANNA
                  That's horrible.

                            HANS
                  It's what brothers do.

                            ANNA
                  ...And sisters. Elsa and I were
                  really close when we were little.
                  But then, one day she just shut me
                  out, and I never knew why.

   He takes her hand. Leans in close.

                            HANS
                  I would never shut you out.

                            ANNA
                  Okay, can I just say something
                  crazy?

                            HANS
                  I love crazy.

                           "Love is an Open Door"

                            ANNA
                      (singing)
                  ALL MY LIFE HAS BEEN A SERIES OF
                  DOORS IN MY FACE.
                  AND THEN SUDDENLY I BUMP INTO YOU.

                            HANS
                  I was thinking the same thing,
                  because like. . .
                            (MORE)
                                                               26
FROZEN - J. Lee

                            HANS (CONT'D)
                  I'VE BEEN SEARCHING MY WHOLE LIFE
                  TO FIND MY OWN PLACE.
                  AND MAYBE IT'S THE PARTY TALKING,
                  OR THE CHOCOLATE FONDUE.

                            ANNA
                  BUT WITH YOU-

                            HANS
                  BUT WITH YOU,
                  I FOUND MY PLACE.

                            ANNA
                  I SEE YOUR FACE.

                            BOTH
                  AND IT'S NOTHING LIKE I'VE EVER
                  KNOWN BEFORE.

   They jump to the neighboring balcony and enter a door.

   They come out on top of one of the castle's towers.

                            BOTH (CONT'D)
                  LOVE IS AN OPEN DOOR!
                  LOVE IS AN OPEN DOOR!

   Cut to them sliding across an empty hallway in their socks.

                            BOTH (CONT'D)
                  LOVE IS AN OPEN DOOR

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                            BOTH
                  LOVE IS AN OPEN DOOR.

   They hop up on the castle roof and watch a shooting star.

                            HANS
                  I MEAN IT'S CRAZY.

                              ANNA
                  What?
                                                            27
FROZEN - J. Lee



                            HANS
                  WE FINISH EACH OTHER'S-

                            ANNA
                  SANDWICHES!

                            HANS
                  That's what I was gonna say!

   They slide down the back of the roof out of sight.

   We next find them strutting on a bridge ledge.

                            ANNA
                  I'VE NEVER MET SOMEONE-

                            BOTH
                  WHO THINKS SO MUCH LIKE ME.

                            BOTH (SPOKEN) (CONT'D)
                  Jinx.. . .jinx again.

   Are they doing the robot? No. They're imitating the
   mechanical figures on the clock tower.

                            BOTH (CONT'D)
                  OUR MENTAL SYNCHRONIZATION
                  CAN HAVE BUT ONE EXPLANATION,

                            HANS
                  YOU-

                            ANNA
                  AND I-

                            HANS
                  WERE-

                            ANNA
                  JUST-

                            BOTH
                  MEANT TO BE.

   Anna and Hans dance on top of the lighthouse and cast dancing
   shadows across the sails of ships in the docks.

                            ANNA
                  SAY GOODBYE-

                            HANS
                  SAY GOODBYE-
                                                               28
FROZEN - J. Lee



                            BOTH
                  TO THE PAIN OF THE PAST.

                            BOTH (CONT'D)
                  WE DON'T HAVE TO FEEL IT ANYMORE!
                  LOVE IS AN OPEN-

   They play hide and seek amongst the stable doors.

                            BOTH (CONT'D)
                  DOOR! LOVE IS AN OPEN DOOR!

   They climb to the waterfall looking out over the kingdom.

   Anna raises up her hands to frame the moon. Hans puts his
   hands on top of hers. Together their hands form a heart.

                            BOTH (CONT'D)
                  LIFE CAN BE SO MUCH MORE-

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                            BOTH
                  LOVE IS AN OPEN

                              HANS
                  DOOR.

                              ANNA
                  DOOR.

                            HANS
                  Can I say something crazy...? Will
                  you marry me?

                            ANNA
                  Can I just say something even
                  crazier? Yes.

                                                       CUT TO:
                                                              29
FROZEN - J. Lee



   INT. BALL -- NIGHT

   Anna pushes through the crowd towards Elsa, Hans in tow.

                            ANNA
                  Oops! Pardon. Sorry. Can we just
                  get around you there? Thank you.
                  Oh, there she is. Elsa!

   Elsa turns to Anna. Anna curtseys awkwardly.

                            ANNA (CONT'D)
                  I mean...Queen.... Me again. Um.
                  May I present Prince Hans of the
                  Southern Isles.

                            HANS
                      (bowing)
                  Your Majesty.

   Elsa gives a polite but reserved curtsey.

                            ANNA
                  We would like--

                            HANS
                  --your blessing--

                            ANNA
                  --of--

                            ANNA/HANS
                  --our marriage!

                            ELSA
                  Marriage...?

                            ANNA
                  Yes!

                            ELSA
                  I'm sorry, I'm confused.

                            ANNA
                  Well, we haven't worked out all the
                  details ourselves. We'll need a few
                  days to plan the ceremony. Of
                  course we'll have soup, roast, and
                  ice cream and then--
                  Wait. Would we live here?

                            ELSA
                  Here?
                                                         30
FROZEN - J. Lee



                            HANS
                  Absolutely!

                            ELSA
                  Anna--

                            ANNA
                  Oh, we can invite all twelve of
                  your brothers to stay with us--

                            ELSA
                  What? No, no, no, no, no.

                            ANNA
                  Of course we have the room. I don't
                  know. Some of them must--

                            ELSA
                  Wait. Slow down. No one's brothers
                  are staying here. No one is getting
                  married.

                            ANNA
                  Wait, what?

                            ELSA
                  May I talk to you, please. Alone.

   Anna sees Hans's worried face. Hooks arms with him.

                            ANNA
                  No. Whatever you have to say, you-
                  you can say to both of us.

                            ELSA
                  Fine. You can't marry a man you
                  just met.

                            ANNA
                  You can if it's true love.

                            ELSA
                  Anna, what do you know about true
                  love?

                            ANNA
                  More than you. All you know is how
                  to shut people out.

                            ELSA
                  You asked for my blessing, but my
                  answer is no. Now, excuse me.
                                                              31
FROZEN - J. Lee



                            HANS
                  Your Majesty, if I may ease your--

                             ELSA
                      (flustered)
                  No, you may not. And I-I think you
                  should go.

   Elsa walks away. As she passes the Royal Handler--

                            ELSA (CONT'D)
                  The party is over. Close the gates.

                            ANNA
                  What? Elsa, no. No, wait!

   Anna grabs Elsa's hand. She pulls off Elsa's glove. Elsa
   gasps, spins around and reaches for the glove in panic.

                            ELSA
                  Give me my glove!

   Anna holds the glove away from Elsa.

                            ANNA
                      (desperate)
                  Elsa, please. Please. I can't live
                  like this anymore.

   Elsa fights tears.

                             ELSA
                      (weak)
                  ...Then leave.

   Elsa sees Anna's hurt face. It's too much. She can't hold it
   in. She turns and rushes away.

                            ANNA
                      (heartbroken)
                  ...What did I ever do to you?!

   The party goes silent as everyone watches the sisters.

                            ELSA
                  Enough, Anna.

                            ANNA
                  No. Why? Why do you shut me out?!
                  Why do you shut the world out?!
                  What are you so afraid of?!

                            ELSA
                  I said, enough!
                                                              32
FROZEN - J. Lee



   Ice shoots from Elsa's hand, spikes across the floor! Guests
   cry out in shock, back away.

                            DUKE
                      (ducking behind his men)
                  ...Sorcery. I knew there was
                  something dubious going on here.

                             ANNA
                  Elsa...?

   Elsa rushes out of the room.

                                                        CUT TO:


   EXT. COURTYARD -- NIGHT

   Elsa bursts out of the castle door. The CITIZENS CHEER!

                            CROWD
                  There she is. Your Majesty! Long
                  live the Queen! Queen Elsa.... Come
                  drink with us.

   Elsa ducks through the crowd, holding her bare hand.

                            BOWING TOWNSMAN
                  Queen Elsa.

                            TOWNSWOMAN WITH BABY
                  Your Majesty? Are you all right?

   Elsa backs away from the baby. She knocks into the fountain,
   grabs its edge. The waters freeze at her touch.

   GASPS of shock and fear sweep over the crowd.

   The Duke and thugs come out the door.

                            DUKE
                  There she is! Stop her!

                             ELSA
                      (to the Duke)
                  Please, just stay away from me.
                  Stay away!

   Magic accidentally shoots from her hand and turns the
   staircase into ice. The thugs and the Duke fall.

                            DUKE
                  Monster.... Monster!
                                                            33
FROZEN - J. Lee



   The crowd panics.

   A snowstorm begins. Elsa flees.

   Anna runs out of the palace doors, carrying the glove.

                            ANNA
                  Elsa!

   Hans follows closely behind her.

   GATES TO THE KINGDOM: Elsa runs out of the gates and down to
   the water's edge. The shoreline freezes under her feet.

   Anna calls to her from the gates.

                            ANNA (CONT'D)
                  Elsa! Wait, please!

   Elsa glances back at Anna, but turns away. She tentatively
   steps out onto the fjord. It freezes instantly. She breaks
   into a run, as the water freezes over with each step.

                            ANNA (CONT'D)
                  Elsa, stop!

   Anna rushes out onto the fjord ice, slips, falls.

                            HANS
                  Anna!

   Hans rushes to Anna's side.

   Elsa reaches the far shore. She doesn't look back. She just
   scrambles into the mountains.

                            ANNA
                  No.

                            HANS
                      (shocked)
                  Look.... The fjord.

   The ice spreads out until the entire fjord is frozen, locking
   the ships in place.


   INT. CASTLE COURTYARD -- NIGHT

   Snow falls. Hans and Anna move through the panicking crowd.

                            CROWD WALLAH
                  Snow? It's...snow...in July.
                                                             34
FROZEN - J. Lee



                            HANS
                  ...Are you all right?

                              ANNA
                        (in shock)
                  No.

                            HANS
                  Did you know?

                              ANNA
                  No.

   Nearby, the Duke flutters about in fright.

                            DUKE
                  Look! It's snowing! It's snowing!
                  The Queen has cursed this land! She
                  must be stopped!
                      (to his thugs)
                  You have to go after her.

   Anna rushes up to the Duke.

                              ANNA
                  Wait, no!

   The Duke hides behind his thugs and points out at Anna.

                            DUKE
                  You! Is there sorcery in you, too?
                  Are you a monster, too?

                            ANNA
                  No. No. I'm completely ordinary.

                            HANS
                  That's right she is...
                      (realizing how that
                       sounds)
                  ...in the best way.

                            ANNA
                  ...And my sister's not a monster.

                            DUKE
                  She nearly killed me.

                            HANS
                  You slipped on ice.

                              DUKE
                  Her ice!
                                                            35
FROZEN - J. Lee



                            ANNA
                  It was an accident. She was scared.
                  She didn't mean it. She didn't mean
                  any of this.... Tonight was my
                  fault. I pushed her. So I'm the one
                  that needs to go after her.

                            DUKE
                  Yes. Fine. Do.

                            HANS
                  What?

                            ANNA
                      (to the Royal Handler)
                  Bring me my horse, please.

                            HANS
                  Anna, no. It's too dangerous.

                            ANNA
                  Elsa's not dangerous. I'll bring
                  her back, and I'll make this right.

   The Royal Handler brings Anna her horse and a cloak.

                            HANS
                  I'm coming with you.

                             ANNA
                  No, I need you here to take care of
                  Arendelle.

   He sees the desperation in her eyes.

                            HANS
                  ...On my honor.

   She throws on the cloak and hops right onto the horse,
   coronation dress and all.

                            ANNA
                      (to the crowd)
                  I leave Prince Hans in charge!

                            HANS
                      (before letting her go)
                  Are you sure you can trust her? I
                  don't want you getting hurt.

                            ANNA
                  She's my sister; she would never
                  hurt me.
                                                            36
FROZEN - J. Lee



   She snaps the reins and rides out. Hans watches after her.

   The snow picks up and overtakes our view. We push through a
   blizzard...lose our way...then finds ourselves...


   EXT. HIGH UP IN THE MOUNTAINS -- NIGHT

   Well above the snow-line, a small figure climbs the highest
   peak. It's Elsa. Finally, she stops, looks around. Catches
   her breath and sings...

                                "Let It Go"

                            ELSA
                  THE SNOW GLOWS WHITE
                  ON THE MOUNTAIN TONIGHT,
                  NOT A FOOTPRINT TO BE SEEN.
                  A KINGDOM OF ISOLATION
                  AND IT LOOKS LIKE I'M THE QUEEN.

                  THE WIND IS HOWLING
                  LIKE THIS SWIRLING STORM INSIDE.
                  COULDN'T KEEP IT IN,
                  HEAVEN KNOWS I TRIED. . .

                  DON'T LET THEM IN,
                  DON'T LET THEM SEE,
                  BE THE GOOD GIRL YOU ALWAYS HAVE TO
                  BE.
                  CONCEAL,
                  DON'T FEEL,
                  DON'T LET THEM KNOW.
                  WELL, NOW THEY KNOW.

   Elsa takes off her glove and throws it into the air.

                            ELSA (CONT'D)
                  LET IT GO. LET IT GO.
                  CAN'T HOLD IT BACK ANYMORE.

   Elsa creates a snowman, just like the one she made with Anna
   when they were children.

                            ELSA (CONT'D)
                  LET IT GO. LET IT GO.
                  TURN AWAY AND SLAM THE DOOR.
                  I DON'T CARE WHAT THEY'RE GOING TO
                  SAY.
                  LET THE STORM RAGE ON.
                  THE COLD NEVER BOTHERED ME ANYWAY.

   Elsa lets her cape fly back into the wind.
                                                            37
FROZEN - J. Lee



                            ELSA (CONT'D)
                  IT'S FUNNY HOW SOME DISTANCE
                  MAKES EVERYTHING SEEM SMALL.
                  AND THE FEARS THAT ONCE CONTROLLED ME
                  CAN'T GET TO ME AT ALL.
                  IT'S TIME TO SEE
                  WHAT I CAN DO,
                  TO TEST THE LIMITS AND BREAK THROUGH.
                  NO RIGHT, NO WRONG,
                  NO RULES FOR ME...I'M FREE!

   Elsa creates ice steps and climbs them.

                            ELSA (CONT'D)
                  LET IT GO! LET IT GO!
                  I AM ONE WITH THE WIND AND SKY.
                  LET IT GO! LET IT GO!
                  YOU'LL NEVER SEE ME CRY.
                  HERE I STAND AND HERE I'LL STAY.

   Elsa slams her foot down and forms a giant snowflake.

                            ELSA (CONT'D)
                  LET THE STORM RAGE ON....

   In a flurry of creative release, she raises the snowflake on
   ice beams, builds walls, archways, a glistening chandelier,
   and an intricate ceiling that leaves the sky visible.

                            ELSA (CONT'D)
                  MY POWER FLURRIES THROUGH THE AIR
                  INTO THE GROUND.
                  MY SOUL IS SPIRALING IN FROZEN
                  FRACTALS ALL AROUND.
                  AND ONE THOUGHT CRYSTALLIZES LIKE
                  AN ICY BLAST-

   Standing firmly in her mighty ice palace, Elsa removes her
   crown and throws it.

                            ELSA (CONT'D)
                  I'M NEVER GOING BACK,
                  (back to resolve)
                  THE PAST IS IN THE PAST!

   She takes down her hair and creates a new dress made of ice.

                            ELSA (CONT'D)
                  LET IT GO! LET IT GO!
                  AND I'LL RISE LIKE THE BREAK OF DAWN.
                  LET IT GO! LET IT GO!

   The sun rises. Elsa struts onto out onto a balcony and into
   the light. She's free.
                                                                  38
FROZEN - J. Lee



                            ELSA (CONT'D)
                  THAT PERFECT GIRL IS GONE.
                  HERE I STAND IN THE LIGHT OF DAY.
                  LET THE STORM RAGE ON!!
                  THE COLD NEVER BOTHERED ME ANYWAY.

   She turns and slams her ice palace door on us.

                                                           CUT TO:


   EXT. THE FJORD FOREST -- DAY

   Anna rides her horse through two feet of snow. She shivers.

                            ANNA
                      (shivering)
                  Elsa! Elsa! It's me, Anna...your
                  sister who didn't mean to make you
                  freeze the summer. I'm sorry. It's
                  all my f-f-f-f-f-f-fault.

                                                       DISSOLVE TO:

   LATER: Anna and the horse struggle through a wooded area.

                            ANNA (CONT'D)
                      (hearing a wolf howl)
                  Of course, none of this would have
                  happened if she'd just told me her
                  secret...ha...she's a stinker.

   A branch of a nearby tree snaps and startles the horse. Anna
   goes flying off, lands face down in the snow. She sits up.
   Spits out snow. Sees the horse running away.

                            ANNA (CONT'D)
                  Oh no. No. No. No. Come back. No.
                  No. No. No.... Oooo-kay.

   He doesn't come back. Anna grabs onto a branch of a leaning
   conifer, tries to pull herself to her feet, but the tree
   snaps upright and releases all its snow onto her. GROAN.

                                                       DISSOLVE TO:


   EXT. MOUNTAIN -- NIGHT

   The Northern Lights shine as Anna struggles, out of breath,
   reaching the top of a hill.
                                                            39
FROZEN - J. Lee



                            ANNA
                  Snow, it had to be snow, she
                  couldn't have had tr-tr-tropical
                  magic that covered the f-f-fjords
                  in white sand and warm --

   She sees smoke rising up in the distance.

                            ANNA (CONT'D)
                  Fire! WHOA!

   Anna goes tumbling down the hill. She lands with a crash in
   an icy stream at the bottom.

                            ANNA (CONT'D)
                      (from inside the snowball)
                  Cold, cold, cold, cold, cold...


   EXT. A SMALL BUILDING AND STABLE -- NIGHT

   Anna shuffles up to the building, her dress frozen stiff. She
   shakes the snow off a sign and reads:

                            ANNA
                  Wandering Oaken's Trading Post.

   Snow drops off a smaller sign. She reads it, happily.

                            ANNA (CONT'D)
                  Ooh! And Sauna...


   INT. WANDERING OAKEN'S TRADING POST & SAUNA -- NIGHT

   Anna steps cautiously through the door--which hits her frozen
   butt and knocks her into the center of the shop. She looks
   around, sees only summer supplies.

                             OAKEN (O.S.)
                  Hoo hoo.

   Anna turns to see a bright-faced fellow sitting low behind
   the counter, fingers tapping tip to tip.

                            OAKEN (CONT'D)
                  Big summer blow out. Half off
                  swimming suits, clogs, and a sun
                  balm of my own invention, yah?

                            ANNA
                  Oh, great. For now, how about
                  boots. Winter boots...and dresses?
                                                            40
FROZEN - J. Lee



                            OAKEN
                      (slight disappointment)
                  That would be in our winter
                  department.

   The winter department contains one outfit, a pick ax, and a
   lonely pair of boots.

                            ANNA
                  Oh. Um, I was just wondering; has
                  another young woman, the Queen
                  perhaps, I don't know, passed
                  through here?

   She brings the clothes and boots to the counter.

                            OAKEN
                  Only one crazy enough to be out in
                  this storm is you, dear?

   The front door suddenly blows open and in walks a mass of a
   man covered in ice. Underneath is KRISTOFF.

                            OAKEN (CONT'D)
                  You and this fellow.... Hoo hoo.
                  Big summer blow out.

   Kristoff walks right up to Anna.

                            KRISTOFF
                      (in her face)
                  Carrots.

                            ANNA
                  Huh?

                            KRISTOFF
                  Behind you.

                            ANNA
                  Oh, right. Excuse me.

   Anna moves out of Kristoff's way. He grabs a bunch of
   carrots, tosses them on the counter, then moves through the
   place, gathering other supplies.

                            OAKEN
                      (to Kristoff)
                  A real howler in July, yah? Where
                  ever could it be coming from?

                            KRISTOFF
                  The North Mountain.
                                                            41
FROZEN - J. Lee



                            ANNA
                      (to herself)
                  North Mountain.

   Kristoff brings his supplies to the counter. Oaken counts on
   his fingertips.

                            OAKEN
                  That'll be forty.

                            KRISTOFF
                  Forty? No, ten.

                            OAKEN
                      (sweet as pie)
                  Oh dear, that's no good. See these
                  are from our winter stock, where
                  supply and demand have a big
                  problem.

                            KRISTOFF
                  You want to talk about a supply and
                  demand problem? I sell ice for a
                  living.

   Kristoff motions out the window, where we see the blocks of
   ice on his sled, covered in snow.

                            ANNA
                  Ooh, that's a rough business to be
                  in right now. I mean, that is
                  really...
                      (he shoots her a look)
                  Ahem. That's unfortunate.

                            OAKEN
                  Still forty. But I will throw in a
                  visit to Oaken's sauna. Hoo hoo!
                  Hi, family.

   Kristoff and Anna turn to see a naked family waving through
   the window of the steaming sauna.

                             NAKED FAMILY
                  Hoo hoo!

                            KRISTOFF
                  ...Ten's all I got. Help me out.

                            OAKEN
                      (isolating the carrots)
                  Ten will get you this and no more.

   Kristoff seethes. Stalemate.
                                                               42
FROZEN - J. Lee



                            ANNA
                  Okay, just tell me one thing; what
                  was happening on the North
                  Mountain? Did it seem magical?

   Kristoff pulls down his scarf and gives Anna a firm answer.

                            KRISTOFF
                  Yes! Now, back up while I deal with
                  this crook here.

   Oaken stands up, revealing his seven-foot stature.

                            OAKEN
                  What did you call me?


   EXT. WANDERING OAKEN'S TRADING POST AND SAUNA -- NIGHT

   Oaken stomps out the door, carrying Kristoff with one arm.

                            KRISTOFF
                  Okay. Okay, I'm- Ow! Whoa!

   Oaken throws Kristoff, who face-plants in the snow.

                             OAKEN
                  Bye bye.

   Oaken slams the door. Kristoff sits up. His reindeer, Sven,
   canters over, snorts, and nudges him, expectantly.

                            KRISTOFF
                  No Sven, I didn't get your carrots.

   Sven huffs in his face. Kristoff turns away and sees
   something. He points to a dilapidated barn.

                            KRISTOFF (CONT'D)
                  But I did find us a place to sleep.
                  And it's free.


   INT. WANDERING OAKEN'S TRADING POST AND SAUNA -- NIGHT

   Anna stands watching Oaken and all his great height as he
   squeezes behind the counter and sits down low again.

                            OAKEN
                      (teddy bear)
                  I'm sorry about this violence. I
                  will add a quart of lutefisk, so
                  we'll have good feelings. Just the
                  outfit and boots, yah?
                                                                 43
FROZEN - J. Lee



   Anna looks between Kristoff's supplies and the door.

                                                           CUT TO:


   INT. OAKEN'S STABLES - NIGHT

   Kristoff, now unfrozen, relaxes on a bed of hay, playing his
   lute and singing to (and for) Sven.

                    "Reindeer(s) are Better than People"

                            KRISTOFF
                  REINDEERS ARE BETTER THAN PEOPLE.
                  SVEN, DON'T YOU THINK THAT'S TRUE?

                             KRISTOFF (AS SVEN) (CONT'D)
                      (throwing his voice)
                  YEAH, PEOPLE WILL BEAT YOU & CURSE
                  YOU & CHEAT YOU.
                  EVERY ONE OF EM'S BAD, EXCEPT YOU.
                      (speaking)
                  Oh, thanks, Buddy.
                      (singing, as Kristoff)
                  BUT PEOPLE SMELL BETTER THAN
                  REINDEERS.
                  SVEN, DON'T YOU THINK I'M RIGHT?

                      (As Sven)
                  THAT'S ONCE AGAIN TRUE,
                  FOR ALL EXCEPT YOU.
                      (As Kristoff)
                  YOU GOT ME. LET'S CALL IT A NIGHT.
                      (As Sven)
                  GOOD NIGHT.
                      (As Kristoff)
                  DON'T LET THE FROSTBITE BITE.

   The door opens. Anna enters.

                               ANNA
                  Nice duet.

   Kristoff sits up with a start...sees who it is.

                            KRISTOFF
                  Oh, it's just you. What do you
                  want?

                            ANNA
                  I want you to take me up the North
                  Mountain.
                                                                   44
FROZEN - J. Lee



                            KRISTOFF
                  I don't take people places.

   He lays back down, closes his eyes.

                            ANNA
                  Let me rephrase that...

   A sack of supplies lands in Kristoff's lap.

                            KRISTOFF
                  Umph.

   He sits up. Looks in the bag.

                            ANNA
                  Take me up the North Mountain....
                  Please.

   He eyes her. He clearly doesn't take orders.

                            ANNA (CONT'D)
                  Look, I know how to stop this
                  winter.

   He considers, lies back down, pulls his hat over his eyes.

                            KRISTOFF
                  We leave at dawn.... And you forgot
                  the carrots for Sven.

   A bag of carrots hits Kristoff in the face.

                            KRISTOFF (CONT'D)
                  Ugh!

                            ANNA
                  Oops. Sorry. Sorry. I'm sorry. I
                  didn't--
                      (catching herself)
                  We leave now. Right now.

   She steps back outside and waits, anxiously. Annoyed,
   Kristoff offers Sven a carrot. Sven has a bite. Then Kristoff
   has a bite, contemplating.

                                                        SLAM CUT TO:


   EXT. MOUNTAIN HIGH -- NIGHT

   Sven races, top speed, up a narrow cliff, pulling the sled,
   which skids precariously. Kristoff mans the reins. Anna sits
   beside him.
                                                            45
FROZEN - J. Lee



                            KRISTOFF
                      (trying to scare Anna)
                  Hang on! We like to go fast!

                            ANNA
                      (fearless)
                  I like fast!

   Anna leans back and puts her feet up on the dashboard.

                            KRISTOFF
                  Whoa, whoa! Get your feet down.

   He pushes her feet down.

                            KRISTOFF (CONT'D)
                  This is fresh lacquer. Seriously,
                  were you raised in a barn?

   Kristoff spits on the dash to clean it. The spit flies back
   and hits Anna in the face.

                            ANNA
                      (grossed out)
                  Ew. No, I was raised in a castle.

   She wipes off her face.

                            KRISTOFF
                  So tell me, what made the Queen go
                  all ice-crazy?

                            ANNA
                  ...Oh well, it was all my fault. I
                  got engaged but then she freaked
                  out because I'd only just met him,
                  you know, that day. And she said
                  she wouldn't bless the marriage--

                            KRISTOFF
                  Wait. You got engaged to someone
                  you just met?

                            ANNA
                  Yeah. Anyway, I got mad and so she
                  got mad and then she tried to walk
                  away, and I grabbed her glove--

                            KRISTOFF
                  Hang on. You mean to tell me you
                  got engaged to someone you just
                  met?!
                                                            46
FROZEN - J. Lee



                            ANNA
                  Yes. Pay attention. But the thing
                  is she wore the gloves all the
                  time, so I just thought, maybe she
                  has a thing about dirt.

                            KRISTOFF
                  Didn't your parents ever warn you
                  about strangers?

   Anna eyes Kristoff up and down, then slides away from him.

                            ANNA
                  Yes, they did.... But Hans is not a
                  stranger.

                            KRISTOFF
                  Oh yeah? What's his last name?

                            ANNA
                  ...Of-the-Southern-Isles?

                            KRISTOFF
                  What's his favorite food?

                            ANNA
                  ...Sandwiches.

                            KRISTOFF
                  Best friend's name?

                            ANNA
                  Probably John.

                               KRISTOFF
                  Eye color.

                               ANNA
                  Dreamy.

                            KRISTOFF
                  Foot size...?

                            ANNA
                  Foot size doesn't matter.

                            KRISTOFF
                  Have you had a meal with him yet?
                  What if you hate the way he eats?
                  What if you hate the way he picks
                  his nose?

                            ANNA
                  Picks his nose?
                                                            47
FROZEN - J. Lee



                            KRISTOFF
                  And eats it.

                            ANNA
                  Excuse me, sir. He's a prince.

                            KRISTOFF
                  All men do it.

                             ANNA
                  Ew. Look it doesn't matter; it's
                  true love.

                            KRISTOFF
                  Doesn't sound like true love.

                            ANNA
                  Are you some sort of love expert?

                            KRISTOFF
                  No. But I have friends who are.

                            ANNA
                  You have friends who are love
                  experts.... I'm not buying it.

   Sven suddenly stops, ears perked in alarm.

                            KRISTOFF
                      (to Anna)
                  Stop talking.

                            ANNA
                  No, no, no. I'd like to meet these--

   Kristoff clamps his hand over Anna's mouth.

                            KRISTOFF
                  I mean it. SHHH.

   Kristoff stands, looks into the dark woods surrounding them.
   Sensing something behind them, he holds up his lantern. Its
   light reflects off...EYES. Several.

                            KRISTOFF(CONT'D)
                  Sven, go. Go!

   Sven takes off.

                            ANNA
                  What are they?

                            KRISTOFF
                  Wolves.
                                                              48
FROZEN - J. Lee



   Flashes of white dart through the woods. Kristoff hops into
   the back of the sled, grabs a torch. Lights it.

                            ANNA
                  Wolves. What do we do?

                            KRISTOFF
                  I've got this. You just...don't
                  fall off and don't get eaten.

                            ANNA
                  But I wanna help.

                             KRISTOFF
                  No.

                             ANNA
                  Why not?

                             KRISTOFF
                  Because I don't trust your
                  judgement.

                            ANNA
                  Excuse me?!

   A wolf jumps at them, but Kristoff kicks it off.

                            KRISTOFF
                  Who marries a man she just met?

   Anna grabs the lute, swings it right at Kristoff's head.

                            ANNA
                  It's true love!

   He screams, as she...BAM!...swings past Kristoff and knocks a
   wolf away.

                            KRISTOFF
                      (shocked)
                  Whoa.

   Just then Kristoff is yanked off the sled by another wolf.
   The torch goes flying. Anna catches it, shocked.

                            ANNA
                  Christopher!

   Kristoff grabs onto a loose rope hanging from the back of the
   sled and holds on for dear life as he's dragged behind.

                            KRISTOFF
                  It's Kristoff!
                                                               49
FROZEN - J. Lee



   A wolf jumps on Kristoff's back.

                            KRISTOFF (CONT'D)
                  AH!

   Anna thinks fast, uses the torch to light a blanket on fire.

                            ANNA
                  Duck!

   Anna throws the flaming blanket right at him. He ducks. The
   blanket hits the wolves. They tumble off Kristoff.

                            KRISTOFF
                  You almost set me on fire!

   Anna reaches out a hand, pulls Kristoff back onto the sled.

                            ANNA
                  But I didn't.

   Sven cries out. There is a massive gorge ahead.

                            ANNA (CONT'D)
                  Get ready to jump, Sven!

                            KRISTOFF
                  You don't tell him what to do!

   Kristoff shoves a satchel into her arms then scoops her up.

                            KRISTOFF (CONT'D)
                  I do!

   Kristoff tosses Anna onto Sven, then unhooks Sven's harness
   from the sled.

                            KRISTOFF (CONT'D)
                  Jump, Sven!

   Sven jumps the gorge with Anna on his back.

   Kristoff goes flying off behind them, still on the sled.

   Anna and Sven land safely on the other side of the gorge.

   Kristoff's sled loses momentum. It's not going to make it. He
   leaps off. He flaps his arms, claws at the air.

   He slams into the snowy edge of the cliff. Hanging by his
   hands, he looks down to see his sled hit the ground far below
   and burst into flames.
                                                            50
FROZEN - J. Lee



                            KRISTOFF (CONT'D)
                      (shocked sadness)
                  ...But I just paid it off.

   Suddenly, he starts to slip. He claws at the loose snow, but
   it's clearly hopeless. He's going down.

                            KRISTOFF (CONT'D)
                  Uh-oh. No, no, no.

   To make matters worse, an AXE comes flying right at his face.

                            KRISTOFF (CONT'D)
                  AH! NO, NO, NO!

   The axe slams into the snow, inches from his nose.

                             ANNA (O.S.)
                  Grab on!

   Kristoff grabs on.

                            ANNA (CONT'D)
                  Pull, Sven! Pull!

   REVEAL: The axe is tied to a rope, then wrapped around Sven.
   Anna helps Sven pull Kristoff to safety.

   Kristoff rolls onto his back, exhausted. Anna peeks down at
   the burning sled.

                            ANNA (CONT'D)
                  Whoa.... I'll replace your sled and
                  everything in it.

   Kristoff groans.

                            ANNA (CONT'D)
                  And I understand if you don't want
                  to help me anymore.

   Anna walks off, sadly. Sven comes over and nuzzles Kristoff.

                            KRISTOFF
                  Of course I don't want to help her
                  anymore. In fact, this whole thing
                  has ruined me for helping anyone
                  ever again.

                            KRISTOFF (AS SVEN) (CONT'D)
                  But she'll die on her own.

                            KRISTOFF (AS SELF) (CONT'D)
                  I can live with that.
                                                                51
FROZEN - J. Lee



   Through their conversation, they watch Anna go the wrong
   way...turn, go the other wrong way, turn, trip...

                            KRISTOFF (AS SVEN) (CONT'D)
                  But you won't get your new sled if
                  she's dead.

                            KRISTOFF (CONT'D)
                      (knowing he's got a point)
                  ...You know sometimes I really
                  don't like you.

   Sven licks Kristoff happily.

                            KRISTOFF (AS SELF) (CONT'D)
                      (to Anna)
                  Hold up. We're coming?!

                            ANNA
                      (excited)
                  You are?!
                      (catching herself)
                  I mean, sure. I'll let you tag
                  along.

                                                     DISSOLVE TO:

   EXT. SHARP MOUNTAIN RIDGE -- DAWN

   Kristoff, Sven and Anna walk on a narrow rim of a mountain.

                                                     DISSOLVE TO:


   EXT. MOUNTAIN FOREST CLEARING -- DAY

   As they step out of the thick trees, Anna catches sight of
   something far below.

                               ANNA
                  Arendelle.

                            KRISTOFF
                  It's completely frozen.

                            ANNA
                  ...But it'll be fine. Elsa will
                  thaw it.

                               KRISTOFF
                  Will she?
                                                                 52
FROZEN - J. Lee



                            ANNA
                      (uncertain)
                  ...Yeah. Now come on. This way to
                  the North Mountain?

   She points straight ahead.

                            KRISTOFF
                  More like this way.

   He points her finger up towards a perilously mighty mountain.

                                                      DISSOLVE TO:


   INT. FROZEN WILLOW TREES -- DAY

   Anna, Kristoff, and Sven walk beneath frozen willows. The
   hanging branches glisten like Christmas lights. Sven knocks
   them with his antlers. They tinkle like chimes.

                             ANNA
                  I never knew winter could be so
                  beautiful.

   Suddenly, a voice comes in from nowhere. We'll call that
   voice OLAF.

                            OLAF (O.S.)
                  YEAH...It really is beautiful,
                  isn't it? But it's so white. You
                  know, how about a little color?
                  Must we bleach the joy out of it
                  all? I'm thinking like maybe some
                  crimson, chartreuse...

   While this is going on, Anna and Kristoff look around for the
   source of the rambling. They look at Sven - could he actually
   be talking? Sven looks back at them, his antlers tangled in
   branches, just as baffled as they are.

   In the meantime, a nose-less snowman, Olaf, wanders up behind
   them.

                            OLAF (CONT'D)
                  How 'bout yellow--no, not yellow.
                  Yellow and snow? Brrrr...no go.

   He stops between Kristoff and Anna. They look down at him.
   How did he get there? He suddenly looks up at Anna.

                            OLAF (CONT'D)
                  Am I right?
                                                               53
FROZEN - J. Lee



   Anna SCREAMS! Reflexes take over and she kicks Olaf's head,
   sending it flying off his body and into Kristoff's arms.

                              OLAF (CONT'D)
                        (cheery, to Kristoff)
                  Hi!

                            KRISTOFF
                  You're creepy.

   Kristoff tosses the head back to Anna and they commence a
   game of hot potato.

                            ANNA
                  I don't want it!

                            KRISTOFF
                  Backatchya!

                            OLAF
                  Please don't drop me.

                              ANNA
                  Don't!

                            KRISTOFF
                  Come on, it's just a head.

                              ANNA
                  No!

   Olaf's body runs at Anna, arms waving.

                            OLAF (O.S.)
                  All right, we got off to a bad
                  start.

                            ANNA
                  Ew, ew, the body!

   Anna slams Olaf's head back on the body, upside down. Olaf
   smiles happily, then looks confused.

                            OLAF
                  Wait, what am I looking at right
                  now? Why are you hanging off the
                  earth like a bat?

                            ANNA
                      (sympathetic)
                  ...Okay. Wait one second.

   Anna kneels in front of Olaf and rights his head.
                                                               54
FROZEN - J. Lee



                            OLAF
                  Oooh! Thank you!

                            ANNA
                  You're welcome.

                            OLAF
                  Now I'm perfect.

   She looks over his innocent face, gets an idea.

                            ANNA
                  Well, almost.

   She digs into Kristoff's satchel, holds up a carrot just as
   Olaf turns toward her. The carrot accidentally slams all the
   way through his head.

                            OLAF
                  Woo! Head rush!

                            ANNA
                  Oh! Too hard. I'm sorry! I-I, I was
                  just.... Are you okay?

   Olaf sees a tiny piece of carrot sticking out between his
   eyes. He lights up.

                            OLAF
                  Are you kidding me? I am wonderful!
                  I've always wanted a nose.
                      (going cross-eyed to look
                       at his tiny nose)
                  So cute. It's like a little baby
                  unicorn.

   Anna reaches behind Olaf to the bulk of the carrot sticking
   out the back of his head, and pushes it forward.

                            OLAF (CONT'D)
                  What? Hey! Whoa.
                      (seeing his now big nose)
                  Oh, I love it even more! Hah....
                  All right, let's start this thing
                  over. Hi everyone. I'm Olaf. And I
                  like warm hugs.

   Olaf opens his arms wide to Anna. That triggers a memory. It
   takes her a moment to place it, but then she does.

                            ANNA
                  Olaf?...That's right, Olaf.
                                                            55
FROZEN - J. Lee



                            OLAF
                  ...And you are?

                            ANNA
                  Oh, um...I'm Anna.

                            OLAF
                  And who's the funky-looking donkey
                  over there?

                            ANNA
                  That's Sven.

                            OLAF
                  Uh-huh. And who's the reindeer?

                               ANNA
                  ...Sven.

   Olaf looks from Kristoff to Sven, confused.

                            OLAF
                  Oh. They're--oh, okay....
                      (accepting it)
                  Makes things easier for me.

   Sven tries to bite Olaf's nose.

                            OLAF (CONT'D)
                  Ha. Aw, look at him tryin' to kiss
                  my nose.
                      (gushes)
                  I like you, too!

                            ANNA
                  Olaf, did Elsa build you?

                               OLAF
                  Yeah. Why?

   Curious, Kristoff takes one of Olaf's twig arms off, studies
   it. It seems to be moving in sync with his other arm.

                            ANNA
                  Do you know where she is?

                            KRISTOFF
                      (studying the arm)
                  Fascinating...

                               OLAF
                  Yeah. Why?
                                                                   56
FROZEN - J. Lee



                            ANNA
                  Do you think you could show us the
                  way?

                               OLAF
                  Yeah. Why?

                            KRISTOFF
                      (bending the arm)
                  How does this work?

   Olaf's dismembered arm slaps Kristoff across the face.

                             OLAF
                  Stop it, Sven. Trying to focus
                  here.
                      (to Anna)
                  Yeah, why?

                            KRISTOFF
                  I'll tell you why. We need Elsa to
                  bring back summer.

                            OLAF
                      (shocked)
                  Summer?
                      (sinking into wistfulness)
                  Oh, I don't know why but I've
                  always loved the idea of summer,
                  and sun, and all things hot.

                            KRISTOFF
                  Really? I'm guessing you don't have
                  much experience with heat.

                            OLAF
                  Nope. But sometimes I like to close
                  my eyes and imagine what it'd be
                  like when summer does come.

                                                        DISSOLVE TO:


   OLAF'S FANTASY WORLD -- PERFECT SUMMER DAY

   Olaf walks through a grassy meadow with the sun shining
   behind him. He SINGS.

                                "In Summer"

                            OLAF
                  BEES'LL BUZZ / KIDS'LL BLOW
                  DANDELION FUZZ / AND I'LL BE DOING
                  WHATEVER SNOW DOES IN SUMMER.
                                                            57
FROZEN - J. Lee



   -Olaf now lies in the sand on a beach.

                            OLAF (CONT'D)
                  A DRINK IN MY HAND / MY SNOW UP
                  AGAINST THE BURNING SAND / PROB'LY
                  GETTING GORGEOUSLY TANNED IN
                  SUMMER.

   -Olaf sails in a boat.

                            OLAF (CONT'D)
                  I'LL FINALLY SEE A SUMMER BREEZE /
                  BLOW AWAY A WINTER STORM /

   -Olaf floats in the water. All his pieces begin to separate.

                            OLAF (CONT'D)
                  AND FIND OUT WHAT HAPPENS TO SOLID
                  WATER / WHEN IT GETS WARM.

   -Olaf tumbles on a sandy beach with sand-snowmen.

                            OLAF (CONT'D)
                  AND I CAN'T WAIT TO SEE / WHAT MY
                  BUDDIES ALL THINK OF ME / JUST
                  IMAGINE HOW MUCH COOLER I'LL BE IN
                  SUMMER . . !

   -Olaf and the seagull break out into a tap-dance.

                            OLAF (CONT'D)
                  DA DA . . . DA DOO / AH BAH BAH BAH
                  BAH BAH BOO.

   -Olaf and another snowman drink hot chocolate in a hot tub.

                            OLAF (CONT'D)
                  THE HOT AND THE COLD ARE BOTH SO
                  INTENSE / PUT 'EM TOGETHER, IT JUST
                  MAKES SENSE!

   -Olaf tap dances with a gaggle of seagulls.

                            OLAF (CONT'D)
                  RATDADAT DAD DADA DOO . . .

   -Olaf bounds down a grassy hill.

                            OLAF (CONT'D)
                  WINTER'S A GOOD TIME TO STAY IN AND
                  CUDDLE / BUT PUT ME IN SUMMER AND
                  I'LL BE A...

   He stops at a puddle, looks down at it. Smiles. Hops over it.
                                                                   58
FROZEN - J. Lee



                           OLAF (CONT'D)
                  HAPPY SNOWMAN!

   -Olaf runs with a checkered blanket that he spreads out. He
   relaxes and stares at the blue sky.

                            OLAF (CONT'D)
                  WHEN LIFE GETS ROUGH I LIKE TO HOLD
                  ON TO MY DREAM / OF RELAXING IN THE
                  SUMMER SUN JUST LETTING OFF STEAM!

   Sven, Anna, Kristoff and Olaf have a picnic.

                            OLAF (CONT'D)
                  OH THE SKY WILL BE BLUE / AND YOU
                  GUYS'LL BE THERE TOO / WHEN I
                  FINALLY DO WHAT FROZEN THINGS DO IN
                  SUMMER!

                            KRISTOFF
                  I'm gonna tell him.

                            ANNA
                  Don't you dare.

                               OLAF
                  IN SUMMER!

   Olaf sings the final note. We swing around him and return to:

   REALITY. He then straightens up and smiles.

                            OLAF (CONT'D)
                  So, come on! Elsa's this way. Let's
                  go bring back summer!

   Olaf grabs Anna's hand and pulls her along up the mountain.

                            ANNA
                      (laughing)
                  I'm coming!

   Sven hops along, happily following them. Kristoff watches all
   of them like they're nuts.

                            KRISTOFF
                  Somebody's got to tell him.

                                                        DISSOLVE TO:
                                                             59
FROZEN - J. Lee



   EXT. ARENDELLE, VILLAGE -- DAY

   A layer of solid ice coats everything. People huddle around
   weak fires. Anxiety runs high amongst the villagers and
   guests. We pass two CITIZENS fighting over a woodpile.

                            CITIZEN ONE
                  No. No. You've got the bark facing
                  down. The bark needs to be face-up.

                            CITIZEN TWO
                  Bark down is drier.

                               CITIZEN ONE
                  Bark up.

                               CITIZEN TWO
                  Bark down.

                               CITIZEN ONE
                  Bark up.

   Like a light in the dark, Hans moves through the crowd.

                            HANS
                  Cloak. Does anyone need a cloak?

                            GERDA
                  Arendelle is indebted to you, Your
                  Highness.

                            HANS
                  The castle is open. There's soup
                  and hot glögg in the Great Hall.

   He hands the stack of cloaks to a guard.

                            HANS (CONT'D)
                  Here. Pass these out.

   Just then the Duke approaches Hans.

                            DUKE
                  Prince Hans, are we just expected
                  to sit here and freeze while you
                  give away all of Arendelle's
                  tradable goods?

                            HANS
                      (tall and confident)
                  Princess Anna has given her orders
                  and--
                                                               60
FROZEN - J. Lee



                            DUKE
                  And that's another thing; has it
                  dawned on you that your princess
                  may be conspiring with a wicked
                  sorceress to destroy us all?

   Hans's nice eyes turn to threatening slits.

                            HANS
                  Do not question the Princess. She
                  left me in charge, and I will not
                  hesitate to protect Arendelle from
                  treason.

                            DUKE
                      (flabbergasted, offended)
                  Treason?!

   Suddenly they hear the alarmed whinny of Anna's horse. It
   returns alone, bucking and kicking. Hans grabs its reins.

                            HANS
                  Whoa! Whoa! Whoa, boy. Easy. Easy.

                            CROWD
                      (various)
                  Princess Anna's horse. What
                  happened to her? Where is she?

   Hans steadies the horse, looks up at the mountain. He sees
   all the panicked faces of the kingdom looking to him.

                            HANS
                  ...Princess Anna is in trouble.
                      (calling out)
                  I need volunteers to go with me to
                  find her!

   Volunteers, some from Arendelle, some from other lands, rush
   up to offer their services.

                            DUKE
                  I volunteer two men, my Lord!
                      (quietly to his thugs)
                  Be prepared for anything, and
                  should you encounter the Queen, you
                  are to put an end to this winter.
                  Do you understand?

   His two thugs sneer.

                                                        CUT TO:
                                                                   61
FROZEN - J. Lee



   EXT. THE NORTH MOUNTAIN -- DAY

   Anna, Kristoff, Sven, and Olaf move through hostile terrain.
   Wind-swept icicles face horizontal.

                            KRISTOFF
                  So how exactly are you planning to
                  stop this weather?

                            ANNA
                      (confident)
                  Oh, I am gonna talk to my sister.

                            KRISTOFF
                  That's your plan? My ice business
                  is riding on you talking to your
                  sister.

                              ANNA
                  Yup.

   Kristoff, so stunned by her casual plan, doesn't look where
   he's going and ends up with an ice-spike to the nose. He
   stops short, GULP, moves carefully around the spike.

                            KRISTOFF
                  So you're not at all afraid of her?

                            ANNA
                  Why would I be?

                            OLAF
                      (oblivious)
                  Yeah. I bet Elsa's the nicest,
                  gentlest, warmest person ever.

   Olaf backs right into an icicle. It runs through his torso.

                            OLAF (CONT'D)
                  Oh, look at that. I've been
                  impaled.

   He laughs it off.

                                                        DISSOLVE TO:


   EXT. STEEP MOUNTAIN FACE -- DAY

   Anna and Kristoff hit what looks like a dead end. The face of
   the mountain goes straight up.

                              ANNA
                  What now?
                                                              62
FROZEN - J. Lee



   Kristoff looks around, sighs. Digs in his rucksack.

                            KRISTOFF
                  ...It's too steep. I've only got
                  one rope, and you don't know how to
                  climb mountains.

                              ANNA (O.S.)
                  Says who?

   Sven nudges Kristoff, who looks up to see Anna trying to
   climb the cliff's flat face.

                            KRISTOFF
                      (finding her ridiculous)
                  What are you doing?

                            ANNA
                      (straining)
                  ...I'm going to see my sister.

                            KRISTOFF
                  You're going to kill yourself.

   Kristoff watches her searching for footholds and hand-holds.

                            KRISTOFF (CONT'D)
                  I wouldn't put my foot there.

                            ANNA (O.S.)
                  You're distracting me.

                            KRISTOFF
                  Or there. How do you know Elsa even
                  wants to see you?

                            ANNA (O.S.)
                  I'm just blocking you out cause I
                  gotta concentrate here.

                            KRISTOFF
                  You know, most people who disappear
                  into the mountains want to be
                  alone.

                            ANNA (O.S.)
                  Nobody wants to be alone. Except
                  maybe you--

                            KRISTOFF
                  I'm not alone.... I have friends,
                  remember?

   Anna kicks a foot above her head to catch a foot hold.
                                                              63
FROZEN - J. Lee



                            ANNA
                  You mean the love experts?

                            KRISTOFF
                  Yes, the love experts!

   Anna realizes she's stuck.

                            ANNA
                  ...Please tell me I'm almost there.

   REVEAL: she's only about six feet up. Her muscles shake.

                            ANNA (CONT'D)
                  ...Does the air seem a bit thin to
                  you up here?

   Kristoff smiles, getting a kick out of her.

                             KRISTOFF
                  Hang on.

   He pulls the rope from his bag. Just then Olaf steps out from
   behind a rock and waves to Kristoff.

                            OLAF
                  Hey, Sven? Not sure if this is
                  going to solve the problem, but I
                  found a staircase that leads
                  exactly where you want it to go.

                            ANNA
                  Ha ha. Thank goodness. Catch!

   Anna drops off the cliff. Kristoff catches her.

                            ANNA (CONT'D)
                  Thanks! That was like a crazy trust
                  exercise.

   She hops down, brushes off her dress, and bounds off.
   Kristoff watches after her, digging her fearless pluck.


   EXT. BASE OF THE ICE PALACE -- DAY

   Anna, Kristoff, and Olaf approach Elsa's elegant ice palace.

                             ANNA
                  Whoa.

                            KRISTOFF
                      (in awe)
                  Now that's ice. I might cry.
                                                              64
FROZEN - J. Lee



                            ANNA
                  Go ahead. I won't judge.

   Anna climbs the steps with Olaf. Sven tries to follow. His
   hooves slip out. He scrambles but can't get traction.
   Kristoff runs to his aide.

                            KRISTOFF
                  All right, take it easy. I gotcha.

   Kristoff settles Sven back down the stairs and pats him.

                            KRISTOFF (CONT'D)
                  You stay right here, buddy.

   Sven obediently plops his reindeer butt down and wags his
   tail. Kristoff climbs the stairs, admiring the ice details.

                            KRISTOFF (CONT'D)
                  ...Flawless.

   Anna arrives at the door. Hesitates.

                            OLAF
                  ...Knock....
                      (she doesn't)
                  Just knock....
                      (she doesn't. To Kristoff)
                  Why isn't she knocking...? Do you
                  think she knows how to knock?

   Anna finally KNOCKS. The sound echoes inside. The ice doors
   slide open.

                            ANNA
                  Ha. It opened. That's a first.

   Anna goes to step in. Kristoff follows. She gets a thought,
   stops him.

                            ANNA (CONT'D)
                  You should probably wait out here.

                            KRISTOFF
                  What?

                            ANNA
                  Last time I introduced her to a
                  guy, she froze everything.

                            KRISTOFF
                  But, it's a palace made of ice. Ice
                  is my life.
                                                            65
FROZEN - J. Lee



                               OLAF
                  Bye, Sven.

   Olaf starts to head inside. Anna stops him.

                            ANNA
                  You too, Olaf.

                               OLAF
                  Me?

                            ANNA
                  Just give us a minute.

                               OLAF
                  Okay.

   As Anna walks inside. Olaf starts counting.

                            OLAF (CONT'D)
                  One...two...

   Kristoff joins in.

                            OLAF AND KRISTOFF
                  Three...four...


   INT. ELSA'S PALACE -- DAY

   Anna walks into a great foyer. The place is beautiful, but
   also eerie.

                            ANNA
                  Elsa? It's me...Anna?!

   Anna slips. Steadies herself.

                               ELSA (O.S.)
                  Anna.

   Elsa steps out of the shadows onto a balcony. She sees Anna,
   looks to her longingly.

   Anna can't help but be struck by Elsa's beauty.

                            ANNA
                  Elsa, you look different.... It's a
                  good different.... And this place
                  is amazing.
                                                            66
FROZEN - J. Lee



                            ELSA
                      (cautious, polite)
                  Thank you, I never knew what I was
                  capable of.

   Anna starts to climb the stairs.

                            ANNA
                  ...I'm so sorry about what
                  happened. If I'd known--

   Elsa backs up, away from Anna.

                            ELSA
                      (on guard)
                  No, it's okay. You don't have to
                  apologize.... But you should
                  probably go, please.

                            ANNA
                  But I just got here.

                            ELSA
                  ...You belong in Arendelle.

                               ANNA
                  So do you.

   Anna takes another step up. Elsa backs up more.

                            ELSA
                  No, I belong here. Alone. Where I
                  can be who I am without hurting
                  anybody.

                            ANNA
                  ...Actually, about that--

                            OLAF (O.S.)
                  58...59...60.

                            ELSA
                  Wait. What is that?

   Olaf comes running in the front door. He waves.

                            OLAF
                  Hi, I'm Olaf and I like warm hugs.

                            ELSA
                      (shocked)
                  Olaf?

   Olaf stops beside Anna, looks up at Elsa, intimidated.
                                                                   67
FROZEN - J. Lee



                            OLAF
                      (bashful)
                  You built me. You remember that?

                            ELSA
                      (astonished)
                  And you're alive?

                            OLAF
                  Um...I think so?

   Anna kneels down beside Olaf.

                            ANNA
                  He's just like the one we built as
                  kids.... We were so close. We can
                  be like that again.

   Elsa smiles, but then a memory returns to her.

                                                       FLASH CUT TO:

   FLASHBACK: Young Anna is struck by Elsa's powers.

                            YOUNG ELSA
                  Anna!

   Young Anna falls unconscious. Young Elsa races to her.

                                                       FLASH CUT TO:

   THE PRESENT: Elsa's face sinks in pain.

                            ELSA
                  No, we can't.

   Elsa turns and heads up the second story steps.

                            ELSA (CONT'D)
                  Goodbye, Anna.

                            ANNA
                  Elsa, wait--

                            ELSA
                      (calling back)
                  I'm just trying to protect you.

   Elsa continues to flee. Anna pursues.

                             ANNA
                  You don't have to protect me. I'm
                  not afraid. Please don't shut me
                  out again.
                                                            68
FROZEN - J. Lee



   Anna SINGS.

                      "First Time in Forever, Reprise"

                            ANNA (CONT'D)
                  PLEASE DON'T SLAM THE DOOR.
                  YOU DON'T HAVE TO KEEP YOUR
                  DISTANCE ANYMORE.

                  'CAUSE FOR THE FIRST TIME IN
                  FOREVER,
                  I FINALLY UNDERSTAND.
                  FOR THE FIRST TIME IN FOREVER,
                  WE CAN FIX THIS HAND IN HAND.
                  WE CAN HEAD DOWN THIS MOUNTAIN
                  TOGETHER.
                  YOU DON'T HAVE TO LIVE IN FEAR.
                  'CAUSE FOR THE FIRST TIME IN
                  FOREVER,
                  I WILL BE RIGHT HERE.

   They arrive on the top floor, Elsa's main living space. Elsa
   turns back to Anna, grateful, but determined.

                            ELSA
                  Anna,
                  PLEASE GO BACK HOME.
                  YOUR LIFE AWAITS.
                  GO ENJOY THE SUN
                  AND OPEN UP THE GATES.

                            ANNA
                  Yeah, but--

                            ELSA
                  I know!
                  YOU MEAN WELL,
                  BUT LEAVE ME BE.
                  YES, I'M ALONE BUT I'M ALONE AND
                  FREE.

   Elsa opens up the balcony doors.

                            ELSA (CONT'D)
                  JUST STAY AWAY AND YOU'LL BE SAFE
                  FROM ME.

                            ANNA
                  ACTUALLY, WE'RE NOT.

                            ELSA
                  WHAT DO YOU MEAN YOU'RE NOT?
                                                            69
FROZEN - J. Lee



                            ANNA
                  I GET THE FEELING YOU DON'T KNOW?

                            ELSA
                  WHAT DO I NOT KNOW?

                            ANNA
                  ARENDELLE'S IN DEEP DEEP DEEP DEEP
                  SNOW.

                            ELSA
                  What?

   Elsa looks past Anna's shoulder out white-peaked mountains.

                            ANNA
                  You kind of set off an eternal
                  winter...everywhere.

                            ELSA
                  Everywhere?

                            ANNA
                  It's okay, you can just unfreeze
                  it.

                            ELSA
                  No, I can't. I don't know how.

                            ANNA
                  Sure you can. I know you can.

   Snow starts to swirl around the room.

                            ANNA (CONT'D)
                  CUZ FOR THE FIRST TIME IN FOREVER,

                            ELSA
                      (panicking)
                  I'M SUCH A FOOL!
                  I CAN'T BE FREE!

                            ANNA
                  YOU DON'T HAVE TO BE AFRAID.

                            ELSA
                  NO ESCAPE
                  FROM THE STORM INSIDE OF ME!

   The snow picks up. Anna tries to fight through it.

                            ANNA
                  WE CAN WORK THIS OUT TOGETHER.
                                                               70
FROZEN - J. Lee



                            ELSA
                  I CAN'T CONTROL THE CURSE!

                            ANNA
                  WE'LL REVERSE THE STORM YOU'VE
                  MADE.

                            ELSA
                  ANNA, PLEASE, YOU'LL ONLY MAKE IT
                  WORSE!

                            ANNA
                  DON'T PANIC.

                            ELSA
                  THERE'S SO MUCH FEAR!

                            ANNA
                  WE'LL MAKE THE SUN SHINE BRIGHT.

                            ELSA
                  YOU'RE NOT SAFE HERE!

                            ANNA
                  WE CAN FACE THIS THING TOGETHER...

   But as Anna sings, we lose sight of her in the thickening
   blizzard taking over the room.

                             ELSA
                  NO!

                            ANNA (O.S.)
                  WE CAN CHANGE THIS WINTER WEATHER,
                  AND EVERYTHING WILL BE...

   Anna's voice disappears in the storm as Elsa cries out.

                             ELSA
                  I CAN'T!

   Elsa's fear, so strong, sucks the blizzard back into her and
   then it bursts out, unwittingly, like a sharp snowflake.

   Anna is STRUCK right in the heart. She grasps her chest in
   pain and stumbles back. She falls to her knees.

   Elsa gasps when she sees Anna. Just then, Olaf and Kristoff
   rush into the room to Anna's side.

                            KRISTOFF
                  Anna. Are you okay?
                                                                   71
FROZEN - J. Lee



                            ANNA
                  I'm okay.... I'm fine.

   Anna gets to her feet, determined to hide the pain.

                            ELSA
                      (scared)
                  Who's this? Wait, it doesn't
                  matter. You have to go.

                             ANNA
                  No, I know we can figure this out
                  together--

                            ELSA
                      (desperate)
                  How? What power do you have to stop
                  this winter? To stop me?

   Anna doesn't have the answer. Kristoff sees spiky ice shadows
   creeping down the walls. Puts a protective arm around Anna.

                            KRISTOFF
                  Anna, I think we should go.

                            ANNA
                      (close to tears)
                  No. I'm not leaving without you,
                  Elsa.

                            ELSA
                      (heartbroken but decisive)
                  Yes, you are.

   Elsa waves her arms and builds a giant, menacing snowman.
   We'll call him MARSHMALLOW.

                                                        SLAM CUT TO:


   EXT. ICE PALACE -- DAY

   Marshmallow holds Anna and Kristoff by the scruff of their
   necks in one hand and Olaf in the other.

                            ANNA
                  Stop. Put us down!

                            OLAF
                      (to Marshmallow)
                  You are a lot stronger than I think
                  you realize.

   Marshmallow tosses Kristoff and Anna down the steps.
                                                                    72
FROZEN - J. Lee



                            MARSHMALLOW
                      (like a bouncer)
                  Go away!

   Anna and Kistoff slide past Sven, who's got his tongue stuck
   to the ice railing.

                              OLAF (O.S.)
                  Heads up!

   Olaf's head smashes into a snowbank nearby.

                              ANNA
                  Olaf!

                            OLAF
                  Watch out for my butt!

   Anna and Kristoff duck as the rest of Olaf slams into the
   snowbank.

   Marshmallow turns to go back into the castle.

   Incensed, Anna tries to march back up the stairs.

                            ANNA
                  It is not nice to throw people!

   Kristoff grabs her, pulls her back.

              KRISTOFF                                   ANNA
   All right feisty pants. Calm             Let me at him. I want to get
   down. Woaw. Just let the snow            him. I.... Okay. I'm Calm.
   man be.

   Anna backs down...for a moment. Then she grabs a snowball and
   throws it at Marshmallow.

   The tiny little ball hits Marshmallow's back, not making even
   the slightest dent. But it's enough to infuriate him. He
   ROARS. Spikes shoot out of his joints.

                            KRISTOFF
                  Uh-oh. Now you made him mad!

                            OLAF
                  ...I'll distract him. You guys go.

   Kristoff pushes Anna along. Sven runs off in the opposite
   direction. Olaf's belly and butt fall and follow Sven.

                            OLAF (CONT'D)
                  No, no, not you guys.
                                                               73
FROZEN - J. Lee



   Marshmallow goes charging after Anna and Kristoff as Olaf's
   head falls and lands face down in snow.

                            OLAF (CONT'D)
                      (muffled)
                  This just got a whole lot harder.

   Anna and Kristoff leap and slide down a steep slope. They
   tumble to a stop at the bottom just as Marshmallow lands hard
   right behind them.

   They're off again...through a maze of conifers that sag under
   the weight of the snow, Marshmallow hot on their trail.

                               KRISTOFF
                  This way!

   Anna grabs a branch of a sagging trees and releases all of
   the snow. The tree snaps upright, knocking Marshmallow back.

                            KRISTOFF (CONT'D)
                      (impressed)
                  Ho-ho-ho!

                               ANNA
                  I got him!

   Anna and Kristoff burst out of the conifer forest and almost
   run right off a cliff. They stop short, toes on the edge.

                            KRISTOFF
                  Whoa, stop!

                            ANNA
                  It's a hundred foot drop.

                            KRISTOFF
                  It's two hundred.

   Kristoff ties the rope around Anna and pulls tight.

                               ANNA
                  Ow.

   He drops to his knees and starts digging a u-shape in the
   snow with a pick axe.

                            ANNA (CONT'D)
                  What's that for?

                            KRISTOFF
                  I'm digging a snow anchor.
                                                            74
FROZEN - J. Lee



                            ANNA
                      (not trusting)
                  Okay. What if we fall?

                            KRISTOFF
                  There's twenty feet of fresh powder
                  down there; it'll be like landing
                  on a pillow.... Hopefully.

   They hear an angry ROAR coming closer.

                            KRISTOFF (CONT'D)
                  Okay, Anna. On three.

   Anna preps for the jump like a boxer getting ready to fight.

                            ANNA
                  Okay. You tell me when...

                               KRISTOFF
                  One...

                            ANNA
                  ...I'm ready to go....

                               KRISTOFF
                  Two...

                            ANNA
                      (pumped up)
                  ...I was BORN ready! Yes!

                               KRISTOFF
                  Calm down.

   A huge tree flies through the air toward them.

                               ANNA (O.S.)
                  TREE!

   Anna jumps and pulls Kristoff over the edge with her. They
   hang upside down over the cliff by the rope. The rope catches
   their fall.

                            KRISTOFF
                  Whoa! That happened.

   Back up top, Olaf emerges from the woods. He's a complete
   mess, all his body parts are in the wrong places. He huffs
   and puffs, struggling to run.

                            OLAF
                  Ah. Ah. Man, am I out of shape.
                                                               75
FROZEN - J. Lee



   He stops. Puts his body back together in the right order.

                            OLAF (CONT'D)
                  There we go. Hey, Anna! Sven!
                  Where'd ya guys go? We totally lost
                  Marshmallow back there!

   Marshmallow steps up behind Olaf. Olaf turns to face him.

                            OLAF (CONT'D)
                      (happily)
                  Hey. We were just talking about
                  you. All good things, all good
                  things.

   Marshmallow roars and approaches Kristoff's snow anchor.

                              OLAF (CONT'D)
                  NO!

   Olaf jumps onto Marshmallow's leg trying to stop him, but not
   making much of a difference.

                            OLAF (CONT'D)
                  This is not making much of a
                  difference!

   Marshmallow flicks Olaf off his leg and right over the cliff.

                              OLAF (CONT'D)
                  WHOA!

   Olaf passes Anna and Kristoff.

                              ANNA
                  Olaf!

                            OLAF
                  Hang in there, guys!

   Marshmallow starts yanking Kristoff and Anna's rope up.

                            ANNA
                  Wait, what?

   Kristoff's head hits the cliff.

                              KRISTOFF
                  Aargghh!

   Kristoff passes out and hangs like a rag doll.

                              ANNA
                  Kristoff!
                                                               76
FROZEN - J. Lee



   Marshmallow pulls them up. He roars and breathes snow all
   over them.

                            MARSHMALLOW
                  Don't come back!

                            ANNA
                      (grossed out by his snow
                       breath)
                  Ugh. We won't.

   Anna whips out a knife and cuts the rope. Kristoff comes to
   just as they fall. They both SCREAM!

   SLAM!

   REVEAL: Anna opens her eyes to find herself buried up to her
   shoulders in the soft thick snow. She laughs.

                            ANNA (CONT'D)
                  Hey, you were right. Just like a
                  pillow.

   She looks up to see Olaf's upper half hanging onto Kristoff's
   boots, which are sticking out of the snow.

                            OLAF
                      (shaking the boots)
                  I can't feel my legs! I can't feel
                  my legs!

   Suddenly, Kristoff's head pops up. He spits out snow.

                            KRISTOFF
                  Those are my legs.

   Olaf's bottom goes running by.

                            OLAF
                      (to Kristoff)
                  Ooh. Hey, do me a favor, grab my
                  butt.

   Kristoff grabs Olaf's head and puts it on his body.

                            OLAF (CONT'D)
                  Oh, that feels better.

   Sven walks up and sniffs Olaf's nose.

                               OLAF (CONT'D)
                  Hey, Sven!
                                                            77
FROZEN - J. Lee



   Olaf turns to Anna and Kristoff just as Sven goes to bite off
   his nose -- and misses.

                            OLAF (CONT'D)
                  He found us.
                      (to Sven, funny voice)
                  Who's my cute little reindeer?

                            KRISTOFF
                  Don't talk to him like that.

   Kristoff goes over to help Anna, who is stuck in the snow.

                               KRISTOFF (CONT'D)
                  Here.

   He lifts her out easily.

                            ANNA
                      (impressed)
                  Whoa!

                               KRISTOFF
                  You okay?

                               ANNA
                  Thank you.

   They meet eyes. Wait. Is that chemistry?

                            ANNA (CONT'D)
                  ...Um.... How's your head?

   She touches the spot where he banged his head.

                            KRISTOFF
                      (in pain)
                  Ah! Ooh!

   He catches himself. Waves off the pain with a giggle.

                            KRISTOFF (CONT'D)
                  I mean, It's fine. Ah...I'm good.
                  Ha. I've got a thick skull.

                            OLAF
                  I don't have a skull.... Or bones.

                               KRISTOFF
                  ...So....

   The awkwardness is killing him.
                                                            78
FROZEN - J. Lee



                              KRISTOFF (CONT'D)
                      (shy)
                  Now what?

                             ANNA
                      (shy)
                  Now what?
                      (then...panicking)
                  Now what?! Oh! What am I gonna do?
                  She threw me out. I can't go back
                  to Arendelle with the weather like
                  this. And then there's your ice
                  business--

                            KRISTOFF
                  Hey, hey, don't worry about my ice
                  business...
                      (noticing something)
                  Worry about your hair?!

   She thinks he means it looks bad. She smooths it down.

                            ANNA
                  What? I just fell off a cliff. You
                  should see your hair.

                            KRISTOFF
                  No, yours is turning white.

   She grabs her braid as a tendril turns white.

                            ANNA
                  White? It's what?

                            KRISTOFF
                  It's because she struck you; isn't
                  it?

                            ANNA
                  Does it look bad?

                            KRISTOFF
                      (thinking)
                  ...No.

   Olaf's head pops up. He's holding his head up off his body to
   join the conversation.

                            OLAF
                  You hesitated.

                            KRISTOFF
                  No, I didn't. Anna, you need help.
                  Now, come on.
                                                                  79
FROZEN - J. Lee



   He heads towards the sunset. Sven and Olaf follow.

                            OLAF
                  Okay! Where are we going?

                            KRISTOFF
                  To see my friends.

                            ANNA
                      (catching up)
                  The love experts?

                            OLAF
                  Love experts?!

                            KRISTOFF
                  Yes. And don't worry; they'll be
                  able to fix this.

                            ANNA
                  How do you know?

   He looks her over, remembering the moment he saw the trolls
   heal her as a child.

                            KRISTOFF
                  ...Because I've seen them do it
                  before.

   As they round the bend, the sun sets and Olaf turns to Sven.

                            OLAF
                  I like to consider myself a love
                  expert.

                                                           CUT TO:


   INT. ELSA'S PALACE -- DAY

   Elsa paces, distraught. She talks to herself.

                            ELSA
                      (mantra-style)
                  Get it together. Control it. Don't
                  feel. Don't feel. Don't FEEL!

   She hears ice cracking. Stops. Looks around. She's left a
   sharp wake of ice spikes behind her on the floor. They grow
   up the wall, taking over the castle.

                                                       DISSOLVE TO:
                                                            80
FROZEN - J. Lee



   EXT. BLACK MOUNTAINS -- NIGHT

   The Northern Lights are bright. Olaf stares at them in awe as
   he rides on Sven's back.

                            OLAF
                  Look, Sven. The sky's awake.

   Behind Olaf and Sven, Anna walks with Kristoff. She shivers.

                            KRISTOFF
                  Are you cold?

                            ANNA
                  ...A little.

   He reaches like he might put an arm around her, but decides
   against it. He looks around as if he doesn't know what to do,
   then gets a thought.

                            KRISTOFF
                  Wait. Come here.

   He takes her hand and pulls her around a bend into a rock-
   lined pass.

   Steam vents, powered by the volcanic activity, dot the path.
   He holds her hands over one of them.

                            ANNA
                  Oooh.... That's nice.

   They continue on the path, walking from vent to vent.

                            KRISTOFF
                      (taking a deep breath)
                  So, about my friends...well, I say
                  friends, they're more like
                  family.... Anyway, when I was a
                  kid, it was just me and
                  Sven...until they took me in.

                            ANNA
                      (moved)
                  They did?

                            KRISTOFF
                      (nervous ramble)
                  Yeah. I don't want to scare you,
                  they can be a little bit
                  inappropriate...and loud...very
                  loud...they're also stubborn at
                  times, and a little overbearing.
                  And heavy. Really, really heavy.
                            (MORE)
                                                             81
FROZEN - J. Lee

                            KRISTOFF (CONT'D)
                  But they're fine.. You'll get it.
                  They mean well.

   Anna touches Kristoff's arm, reassuringly.

                            ANNA
                  Kristoff, they sound wonderful.

   Kristoff smiles, appreciating her sincerity.

                            KRISTOFF
                  Okay then....

   Mustering the courage, Kristoff steps forward and with a wave
   of the arms announces--

                            KRISTOFF (CONT'D)
                  Meet my family.

   REVEAL: he's surrounded by rocks.

                             KRISTOFF (CONT'D)
                      (to the rocks)
                  Hey, guys!

   As Kristoff and Sven move through the rocks, waving and
   greeting, Olaf and Anna stand frozen, dumbfounded.

                            ANNA
                      (to herself)
                  ...They're rocks.

                            OLAF
                      (realizing)
                  He's crazy.
                      (covertly, to Anna)
                  I'll distract them while you run.
                      (Loud and slow to a rock)
                  Hi, Sven's family! It's nice to
                  meet you!
                      (quietly to Anna)
                  Anna, because I love you, I insist
                  you run.
                      (to the rock)
                  I understand you're love experts!
                      (to Anna)
                  Why aren't you running?

   Anna snaps out of her shock and starts backing away.

                            ANNA
                  Okay. Um...I'm gonna go--

   Just then the rocks around her start rolling.
                                                              82
FROZEN - J. Lee



                            ANNA (CONT'D)
                      (panicking)
                  Kristoff!

   Olaf lights up and chases the rocks, who surround Kristoff
   and unfold as trolls.

                            BULDA
                  KRISTOFF'S HOME!

                            TROLLS (VARIOUS)
                  Kristoff! Kristoff's home! It's
                  been too long! Kristoff's home!

   Olaf jumps around all excitedly.

                            OLAF
                      (excitedly)
                  Kristoff's home.

   He then stops, confused, and looks to one of the trolls.

                            OLAF (CONT'D)
                  Wait? Kristoff?

   Anna watches, shocked and confused.

   The trolls all want Kristoff's attention. One troll yanks him
   down with a boulder's strength.

                            TROLL ONE
                  Oh, lemme look at you!

   Another troll tries to pull off his clothes.

                            TROLL TWO
                  Oh, take off your clothes,
                  Kristoff; I wash them.

                            KRISTOFF
                      (holding up his pants)
                  Ah! No. I'm gonna keep my clothes
                  on, thank you.

                            KRISTOFF (CONT'D)
                  Great to see you all. Where's
                  grandpa?

                            MUSHROOM KID TROLL
                  He's napping. But look, I grew a
                  mushroom.

                            TROLL SCOUT KID
                  And I earned my fire crystal.
                                                              83
FROZEN - J. Lee



                            KIDNEY STONE TROLL
                  I passed a kidney stone.

                            PICK ME UP TROLL
                  Pick me up.

   The kid troll jumps up on Kristoff's arm. Kristoff sinks
   under the weight of him.

   Anna still stares, confused, then realizes...

                            ANNA
                  Trolls? They're trolls.

   Silence. All troll eyes turn to Anna. Blink. Blink.

                            BULDA
                  ...He's brought a girl!

                            TROLLS (TOGETHER)
                  He's brought a girl!

   Suddenly Anna is surrounded by trolls. They body-surf/roll
   Anna over to Kristoff. She falls into his arms.

                            ANNA
                  What's going on?

                            KRISTOFF
                  I've learned to just roll with it.

   Bulda climbs on top of her husband, Cliff, to get a good look
   at Anna. She studies her like she's a piece of cattle.

                            BULDA
                  Let me see. Bright eyes. Working
                  nose. Strong teeth. Yes, yes, yes.
                  She'll do nicely for our Kristoff.

                            ANNA
                  Wait. Oh. Um. No.

                            KRISTOFF
                  You've got the wrong idea. That's
                  not why I brought her here.

                            ANNA
                  Right. We're not. I'm not--

   Anna laughs, uncomfortable, not knowing what to say.
                                                        84
FROZEN - J. Lee



                            BULDA
                      (to Anna)
                  What's the issue, dear? Why are you
                  holding back from such a man?

   Bulda SINGS.

                                "Fixer-Upper"

                            TROLLS (VARIOUS)
                  IS IT THE CLUMPY WAY HE WALKS?
                  OR THE GRUMPY WAY HE TALKS?
                  OR THE PEAR-SHAPED, SQUARE-SHAPED
                  WEIRDNESS OF HIS FEET?
                  AND THOUGH WE KNOW HE WASHES WELL
                  HE ALWAYS ENDS UP SORTA SMELLY.
                  BUT YOU'LL NEVER MEET A FELLA WHO'S
                  AS SENSITIVE AND SWEET.

                            TROLLS (CHORUS) (CONT'D)
                  SO HE'S A BIT OF A FIXER UPPER,
                  SO HE'S GOT A FEW FLAWS-
                  HIS PECULIAR BRAIN, DEAR.
                  HIS THING FOR THE REINDEER
                  THAT OUTSIDE A FEW OF NATURE'S
                  LAWS.
                  SO HE'S A BIT OF A FIXER UPPER,
                  BUT THIS WE'RE CERTAIN OF-
                  YOU CAN FIX THIS FIXER UPPER UP
                  WITH A LITTLE BIT OF LOVE.

                            KRISTOFF
                  Can we just stop talking about
                  this?! We've got a real, actual
                  problem here.

                             BULDA
                  I'll say--
                      (To Anna)
                  IS IT THE WAY THAT HE RUNS SCARED?

                            TROLLS (VARIOUS)
                  OR THAT HE'S SOCIALLY IMPAIRED?

                             KID TROLL
                  OR THAT HE ONLY LIKES TO TINKLE IN
                  THE WOODS?

                            TROLLS (VARIOUS)
                  ARE YOU HOLDING BACK YOUR FONDNESS
                  DUE TO HIS UNMANLY BLONDENESS?
                  OR THE WAY HE COVERS UP THAT HE'S
                  THE HONEST GOODS?
                                                               85
FROZEN - J. Lee



                            TROLLS (CHORUS) (CONT'D)
                  HE'S JUST A BIT OF A FIXER UPPER-
                  HE'S GOT A COUPLE A' BUGS.

                            KRISTOFF
                  No, I don't.

                            TROLLS
                  HIS ISOLATION
                  IS CONFIRMATION
                  OF HIS DESPERATION FOR HEALING
                  HUGS.
                  SO HE'S A BIT OF A FIXER UPPER,
                  BUT WE KNOW WHAT TO DO.
                  THE WAY TO FIX UP THIS FIXER UPPER
                  IS TO FIX HIM UP WITH YOU.

   The girl trolls sweep Anna away. The boys take Kristoff.

                            KRISTOFF
                      (to the male trolls)
                  Enough! She's engaged to someone
                  else. Okay?!

   TROLLS beat. Blink. Blink. The boy trolls turn, huddle...

                            TROLLS (VARIOUS)
                  SO SHE'S A BIT OF A FIXER UPPER,
                  THAT'S A MINOR THING.
                  THIS QUOTE "ENGAGEMENT"
                  IS A FLEX ARRANGEMENT.

                            KID TROLL
                  AND BY THE WAY, I DON'T SEE NO
                  RING.

                            TROLLS (VARIOUS)
                  SO SHE'S A BIT OF A FIXER UPPER,
                  HER BRAIN'S A BIT BETWIXT.
                  GET THE FIANCE
                  OUT OF THE WAY
                  AND THE WHOLE THING WILL BE FIXED!

                            GIRL TROLLS
                  WE AREN'T SAYING YOU CAN CHANGE HIM

                            TROLLS (VARIOUS)
                  'CAUSE PEOPLE DON'T REALLY CHANGE.
                  WE'RE ONLY SAYING THAT LOVE'S A
                  FORCE
                  THAT'S POWERFUL AND STRANGE.
                  PEOPLE MAKE BAD CHOICES
                  IF THEY'RE MAD OR SCARED OR
                  STRESSED.
                            (MORE)
                                                            86
FROZEN - J. Lee

                            TROLLS (VARIOUS) (CONT'D)
                  BUT THROW A LITTLE LOVE THEIR WAY
                  (THROW A LITTLE LOVE THEIR WAY)
                  AND YOU'LL BRING OUT THEIR BEST!
                  TRUE LOVE BRINGS OUT THE BEST!

   Kristoff looks over at Anna. She actually looks shockingly
   beautiful dressed in moss, lit by shimmering crystals.

                            ALL TROLLS
                  EVERYONE'S A BIT OF A FIXER UPPER,
                  THAT'S WHAT IT'S ALL ABOUT
                  FATHER, SISTER, BROTHER
                  WE NEED EACH OTHER
                  TO RAISE US UP AND ROUND US OUT

   By this time Kristoff and Anna are being ushered into a pit
   by the sheer force of numbers.

                            TROLLS
                  EVERYONE'S A BIT OF A FIXER UPPER,
                  BUT WHEN PUSH COMES TO SHOVE-
                  THE ONLY FIXER UPPER FIXER THAT CAN
                  FIX A FIXER UPPER IS
                  TRUE
                  TRUE
                  TRUE
                  TRUE
                  LOVE

   During this last bit Anna and Kristoff are looking at each
   other differently. Hmmm. Maybe those trolls are right?
   Sparks! Chemistry!

                            TROLL PRIEST
                  Do you, Anna, take Kristoff to be
                  your trollfully wedded--

                            ANNA
                  Wait, what?!

                            TROLL PRIEST
                  You're getting married.

                            TROLLS
                  LOVE!

   Just then, Anna collapses. Kristoff catches her. She's
   shivering something fierce.

                            KRISTOFF
                  Anna?

   He pulls off her cape and hat.
                                                            87
FROZEN - J. Lee



                            KRISTOFF (CONT'D)
                  She's as cold as ice.

   Just then Grand Pabbie pushes his way through the crowd.
   Trolls clear the way for Pabbie. He stops at the edge of the
   pit.

                            GRAND PABBIE
                  There's strange magic here!

                            KRISTOFF
                  Grand Pabbie!

                            GRAND PABBIE
                  Bring her to me, Kristoff.

   Kristoff helps Anna over. Pabbie looks into her weak eyes.

                            GRAND PABBIE (CONT'D)
                  Anna, your life is in danger. There
                  is ice in your heart, put there by
                  your sister. If not removed, to
                  solid ice will you freeze, forever.

                            ANNA
                  What...? No.

                            KRISTOFF
                  So remove it, Grand Pabbie.

                            GRAND PABBIE
                  I can't. If it was her head, that
                  would be easy. But only an act of
                  true love can thaw a frozen heart.

                            ANNA
                  An act of true love?

                            BULDA
                      (googley, to her hubby)
                  A true love's kiss, perhaps?

   A bunch of trolls give each other kisses.

   Anna shivers again, collapsing into Kristoff's arms. More of
   her hair turns white.

                            KRISTOFF
                  Anna, we've got to get you back to
                  Hans.

                            ANNA
                      (still weak)
                  ...Hans.
                                                              88
FROZEN - J. Lee



                            KRISTOFF
                  Help us out, Sven.

   Kristoff grabs Sven's antlers. Sven pulls them out.

   Kristoff helps Anna onto Sven and hops up behind her.

                            KRISTOFF (CONT'D)
                  Come on, Olaf!

   Sven takes off. Olaf grabs Sven's tail, rides with them.

                            OLAF
                  I'm coming! Let's go kiss Hans! Who
                  is this Hans?!

                                                        CUT TO:


   EXT.    ELSA'S PALACE - DAWN

   Hans and the men tread cautiously towards the castle.

                            HANS
                  We are here to find Princess Anna.
                  Be on guard, but no harm is to come
                  to the Queen. Do you understand?

   The Duke's thugs exchange a look. Suddenly, a mass of snow
   rises from the ground behind Hans. It's Marshmallow, Elsa's
   snow guard.

                               MARSHMALLOW
                  Go away!

   He slams a fist inches from Hans. Hans deftly dodges out of
   the way. All of the guards take up arms against Marshmallow,
   who quickly knocks them over.

   Marshmallow throws down a guard and his horse, who topple
   over Hans. Marshmallow raises his foot to stomp on Hans, but
   Hans barrel-rolls himself to safety. He sees his sword,
   leaps, and grabs it.

   Just then, Elsa peeks out the front doors.

   The Duke's two thugs see her.

                               DUKE'S THUG
                  The Queen.

   The thugs charge up the stairs.
                                                            89
FROZEN - J. Lee



   INT. ELSA'S PALACE -- DAY

   They guards burst through the ice doors.

   Elsa flees to the top floor of her palace. The guards pursue.

   They trap her on the top floor, raise their crossbows.

                            ELSA
                      (scared)
                  No. Please.

   One of the thugs shoots an arrow right at Elsa. At the last
   moment she creates an ice wall. It stops the arrow, inches
   from her face.

   The thugs reposition to take another shot.

                               ELSA (CONT'D)
                  Stay away!

   Elsa shoots ice at the thugs. They duck out of the way and
   continue the attack.

                            THUG
                  Get her! Get her!

   Elsa fights for her life.

   BACK OUTSIDE: Hans is nearly crushed by Marshmallow. He rolls
   away. Jumps to his feet. And with agile might, he slices
   Marshmallow's leg off with his sword. Marshmallow stumbles
   back, off balance. And falls off over the cliff, but not
   before striking Hans. Hans goes over the edge.

   REVEAL: Hans clings to the ice steps. His men help him up and
   they rush into the ice palace.


   INT. ICE PALACE -- DAY

   Elsa is surrounded. It's do or die. In two swift moves, Elsa
   traps one thug in a cage of spikes that threaten his neck.

   The other she pushes back with a wall of ice....up against
   the balcony doors...which BURST and CRACK.

   OUT ONTO THE BALCONY.... The balcony doors shatter. The thug
   is pushed to the edge. He's inches away from falling to his
   death.

   BACK INSIDE: Hans and his men run in. See the destruction and
   the thugs near death.
                                                                   90
FROZEN - J. Lee



                            HANS
                  Queen Elsa! Don't be the monster
                  they fear you are.

   Elsa snaps out of her rage. She sees the men, frightened,
   moments from death. She stops. Elsa looks to Hans,
   overwhelmed, frightened.

   The wall retreats from the thug on the balcony. The ice
   spikes lower from the second thug's neck. He takes advantage
   and aims his crossbow at Elsa's back.

   Seeing it. Hans runs and pushes the crossbow up just as the
   arrow releases. The arrow hits the ice chandelier, hanging
   directly above Elsa.

   The chandelier comes CRASHING DOWN.

   Elsa dives out of the way but she falls in the blast.

   All we see is ice smashing like glass, and all we hear is the
   sound of it shattering as it rings out.

                                                       CUT TO BLACK.


   FADE IN ON:

   Elsa's face as her eyes flutter open.

   She sits up. She's surrounded by stone.


   INT. ARENDELLE, DUNGEON -- DAY

   Elsa looks to the nearby window. Tries to rush to it. She's
   pulled taut by giant shackles that fit like iron gloves.
   She's chained to the wall.

   Elsa strains to looks out a window...

   INSET WINDOW: Arendelle is outside, frozen solid and getting
   further buried under the ice and snow that is falling.

                            ELSA
                  No....What have I done?

   Hans enters. He hangs a torch by the door.

                            ELSA (CONT'D)
                  Why did you bring me here?

                            HANS
                  I couldn't just let them kill you.
                                                              91
FROZEN - J. Lee



                            ELSA
                  But I'm a danger to Arendelle. Get
                  Anna.

                            HANS
                  Anna has not returned....

   Elsa looks to the storm with worry.

                            HANS (CONT'D)
                  If you would just stop the winter,
                  bring back summer...please.

   Elsa meets his eyes, desperate.

                            ELSA
                  Don't you see...I can't.

   Hans sees the sincerity in her eyes.

                            ELSA (CONT'D)
                  You have to tell them to let me go.

   Hans walks to the door. He takes the torch.

                            HANS
                  I will do what I can.

   He opens the door and leaves.

   Elsa, distraught, hears cracking. She looks down as her
   shackles begin to freeze over. The storm outside picks up.

                                                        CUT TO:


   EXT. THE FJORDS -- DAY

   Sven charges down the mountain with Kristoff and Anna on his
   back. Olaf slides along beside them, penguin-style.

   Anna shivers in Kristoff's arms. She's weakening. Kristoff
   takes off his hat and puts it on her head.

                            KRISTOFF
                  Just hang in there.
                      (to Sven)
                  Come on, buddy, faster!

   They arrive at the walls of Arendelle. Olaf slides past them,
   out of control.

                            OLAF
                  I'll meet you guys at the castle!
                                                             92
FROZEN - J. Lee



                            KRISTOFF
                  Stay out of sight, Olaf!

                            OLAF
                  I will!

   He disappears into the village streets.

                            OLAF (O.S.) (CONT'D)
                  Hello!

                            TOWNSWOMAN (O.S.)
                  Ah! It's alive!

                                                       CUT TO:


   EXT. CASTLE COURTYARD -- DAY

   Guards see Kristoff and Anna approaching.

                            GUARD
                  It's Princess Anna!

   Sven skids to a stop outside the gates. Kristoff slides off,
   holding Anna, and carries her to the gate.

                            KRISTOFF
                  I've got you.

   Anna looks up at him, gratefully.

                            ANNA
                  ...Are you g-gonna be okay?

                            KRISTOFF
                      (touched, reassuring)
                  Don't worry about me.

   Just then the castle gates open. Gerda, Kai, and a handmaid
   rush to help Anna.

                            GERDA
                  Anna! Oh, you had us worried sick.

                            KAI
                  My Lady. You are freezing.

                            GERDA
                  You poor girl, you're freezing.
                  Let's get you inside.
                                                               93
FROZEN - J. Lee



                            KRISTOFF
                  Get her warm and find Prince Hans,
                  immediately.

                            KAI
                  We will. Thank you.

   Anna is swept away from Kristoff and into the palace grounds.

                            KRISTOFF
                  Make sure she's safe!

   Kristoff is shut out as the castle gates close on him.

   Kristoff stands there with Sven for a beat, staring with
   worry at the closed gates.

   Finally, he sighs, turns and walks off. Sven reluctantly
   follows.

                                                        CUT TO:


   INT. LIBRARY -- DAY

   Hans stands with the dignitaries and guards.

                            HANS
                  I'm going back out to look for
                  Princess Anna.

                            FRENCH DIGNITARY
                  You cannot risk going out there
                  again.

                            HANS
                  If anything happens to her--

                            SPANISH DIGNITARY
                  If anything happens to the
                  Princess, you are all Arendelle has
                  left.

   Hans hesitates, realizing how much this kingdom has come to
   depend on him. Is he really all they have left?

   Just then the door opens and Gerda and Kai bring in Anna.

                            KAI
                  He's in here. Prince Hans.

                            HANS
                  Anna.
                                                            94
FROZEN - J. Lee



   Hans rushes to Anna. She falls into his arms.

                            HANS (CONT'D)
                  You're so cold.

                            ANNA
                      (weak, but desperate)
                  Hans, you have to kiss me.

                            HANS
                  What?

                            ANNA
                  Now. Here we go.

   She tries to kiss him, but is too weak to pull herself up in
   his arms.

                            GERDA
                  We'll give you two some privacy.

   Everyone shuffles out, leaving Hans and Anna alone.

                            HANS
                  What happened out there?

                            ANNA
                  Elsa struck me with her powers.

                            HANS
                  You said she'd never hurt you.

                            ANNA
                  I was wrong.

   Anna crumbles, weak.

                            HANS
                  Anna.

   Hans carries her to a couch, sets her down.

                            ANNA
                      (shivering more)
                  She froze my heart and only an act
                  of true love can save me.

                            HANS
                      (understanding)
                  A true love's kiss.

   He takes her chin in his hand and gives her a tender smile.
   He leans in slowly...gently...
                                                            95
FROZEN - J. Lee



   Then he stops.

                            HANS (CONT'D)
                  Oh, Anna. If only there was someone
                  out there who loved you.

                            ANNA
                  What?

   Hans gets up, leaving her there.

                            ANNA (CONT'D)
                  ...You said you did.

   He goes to the window and shuts the curtains.

                            HANS
                  As thirteenth in line in my own
                  kingdom, I didn't stand a chance. I
                  knew I'd have to marry into the
                  throne somewhere--

                            ANNA
                  What are you talking about?

                            HANS
                      (putting out the candles)
                  As heir, Elsa was preferable, of
                  course. But no one was getting
                  anywhere with her. But you-

                            ANNA
                  Hans?

                            HANS
                  You were so desperate for love you
                  were willing to marry me, just like
                  that.

   Hans crosses the room, grabs a pitcher of water from a table
   and goes to the fireplace.

                            HANS (CONT'D)
                  I figured, after we married, I'd
                  have to stage a little accident for
                  Elsa.

   Hans pours the water on the fireplace, putting out the fire.
   Anna tries to stop him. She falls to the floor, weak.

                            ANNA
                  Hans. No, stop.
                                                              96
FROZEN - J. Lee



                            HANS
                  But then she doomed herself, and
                  you were dumb enough to go after
                  her.

                            ANNA
                  Please.

                            HANS
                      (chuckles)
                  All that's left now is to kill Elsa
                  and bring back summer.

   Hans approaches Anna.

                            ANNA
                  ...You're no match for Elsa.

   He bends down, takes her chin in his hand again, this time
   not so gently.

                            HANS
                  No, you're no match for Elsa. I, on
                  the other hand, am the hero who is
                  going to save Arendelle from
                  destruction.

   She wrenches her face out of his hands.

                            ANNA
                      (anger)
                  You won't get away with this.

   Hans rises and crosses to the door.

                            HANS
                  Oh, I already have.

   Hans leaves and shuts her in, locking the door. Anna
   struggles to the door, yanks on the locked handle.

                            ANNA
                      (hoarse and weak)
                  Please, somebody help.

   The rest of her hair turns white and she crumbles to the
   floor.

                                                        CUT TO:
                                                             97
FROZEN - J. Lee



   INT. COUNCIL CHAMBER -- NIGHT

   The Duke looks out the window at the growing snowstorm. He
   rubs his arms and shivers.

                            DUKE
                  It's getting colder by the minute.
                  If we don't do something soon,
                  we'll all freeze to death.

   Hans comes in, putting on his most distraught face.

                            SPANISH DIGNITARY
                  Prince Hans.

                            HANS
                  Princess Anna is...dead.

                            VARIOUS DIGNITARIES
                  What...? No.... Mon dieu.

   Hans stumbles, weak with grief. The men help him to a chair.

                            DUKE
                  What happened to her?

                            HANS
                  She was killed by Queen Elsa.

                            DUKE
                  Her own sister.

                            HANS
                      (really putting it on)
                  At least we got to say our marriage
                  vows...before she died in my arms.

   He bows his head in a brilliant display of teary grief.

                            DUKE
                  There can be no doubt now; Queen
                  Elsa is a monster and we are all in
                  grave danger.

                            SPANISH DIGNITARY
                  Prince Hans, Arendelle looks to
                  you.

   Hans nods; he knows what he's being asked to do, and he'll do
   it with the perfect amount of authority and gravitas.
                                                               98
FROZEN - J. Lee



                            HANS
                  With a heavy heart, I charge Queen
                  Elsa of Arendelle with treason and
                  sentence her to death.


   INT. ELSA'S DUNGEON -- DAY

   The cell ices over. Elsa looks out at the storm that is
   devastating Arendelle, then hears the guards approaching.

                            GUARD (O.S.)
                  She's dangerous. Move quickly and
                  with resolve.

   Elsa pulls at her shackles. They crack. Just as the door
   busts open, the weight of the ice crumbles the walls. The men
   duck out of the way.

   Hans pushes his way into the room...sees...

   The back wall is blown open. Broken shackles rest on the
   floor. Elsa is gone.


                                                       CUT TO:


   EXT. MOUNTAIN SLOPE -- DAY

   Kristoff heads into the mountains. Sven lags behind, not
   wanting to follow. He looks back at the kingdom, then shakes
   his head. Enough.

   He runs past Kristoff. Stops and turns to face him. He snorts
   and grunts.

                            KRISTOFF
                  What is it, buddy?

   Sven nudges Kristoff with his antlers.

                            KRISTOFF (CONT'D)
                  Hey, watch it. What's wrong with
                  you?

   Sven snorts with more conviction, moos, brays.

                            KRISTOFF (CONT'D)
                      (avoiding)
                  ...I don't understand you when you
                  talk like that.
                                                              99
FROZEN - J. Lee



   Kristoff tries to walk on ahead, but Sven uses his antlers to
   lift Kristoff off the ground.

                            KRISTOFF (CONT'D)
                  Ah! Stop it! Put me down!

   Sven drops him hard then "yells" at him once more.

                            KRISTOFF (CONT'D)
                  No, Sven! We're not going back!

   Sven shakes his head, angrily.

                            KRISTOFF (CONT'D)
                  She's with her true love.

   Sven makes an "of-course-she-isn't" face. Kristoff gets it;
   he's made his point.

   Just then the wind picks up. Kristoff looks back at the
   kingdom. Sees a violent winter storm swirling over the
   castle. Sharp ice claws its way up the castle, encasing it.

                            KRISTOFF (CONT'D)
                  Anna.

   Without hesitating, he dashes back down the mountain. Sven
   runs after him, catches up. Kristoff grabs Sven's harness and
   jumps onto his back.

                                                        CUT TO:


   INT. LIBRARY -- NIGHT

   Anna shivers by the door. She looks up to see ice overtaking
   the ceiling.

   The door handle suddenly jiggles. Stops. Jiggles again.

                            ANNA
                      (barely a whisper)
                  Help.

   CLICK. The door swings open. We see a carrot in the lock and
   hear a giggle of victory. Olaf takes the carrot, puts it back
   on his face. Then he sees Anna lying there.

                            OLAF
                  Anna. Oh no.

   He runs to the fireplace. Throws in some fresh wood,
   including one of his own arms, which he quickly rescues,
   before striking a match and relighting the fire.
                                                           100
FROZEN - J. Lee



                            ANNA
                  Olaf? Olaf. Get away from there.

                             OLAF
                  Whoa! So this is heat....
                      (considering)
                  I love it.

   He reaches a twig finger toward the flames. It catches on
   fire.

                            OLAF (CONT'D)
                  Ooh! But don't touch it!

   He shakes the flame out, as he rushes over to help Anna to
   the fire.

                             OLAF (CONT'D)
                  So, where's Hans? What happened to
                  your kiss?

                             ANNA
                  I was wrong about him. It wasn't
                  true love.

                            OLAF
                      (confused innocence)
                  Huh. But we ran all the way here?

                            ANNA
                  Please Olaf, you can't stay here;
                  you'll melt.

                            OLAF
                  I am not leaving here until we find
                  some other act of true love to save
                  you.

   He sits down behind her, stubbornly. Leans his back against
   hers and thinks.

                            OLAF (CONT'D)
                  ...Do you happen to have any ideas?

                            ANNA
                  I don't even know what love is.

                            OLAF
                      (confident)
                  That's okay, I do....

   Olaf hops back up and puts a soothing hand on her shoulder.
                                                           101
FROZEN - J. Lee



                            OLAF (CONT'D)
                  Love is...putting someone else's
                  needs before yours, like, you know,
                  how Kristoff brought you back here
                  to Hans and left you forever.

                            ANNA
                  ...Kristoff loves me?

                            OLAF
                  Wow, you really don't know anything
                  about love, do you?

   His face starts to melt.

                            ANNA
                  Olaf, you're melting.

                            OLAF
                      (sweet and reassuring)
                  Some people are worth melting for.

   But then...his face REALLY melts. He panics, pushes the snow
   back in place.

                            OLAF (CONT'D)
                  Just maybe not right this second.

   Suddenly, the window blows open, cold wind sweeps in.

                            OLAF (CONT'D)
                  Don't worry, I've got it!

   Olaf flitters to the window. He pulls one panel of it shut
   but struggles with the second panel.

                             OLAF (CONT'D)
                      (determined)
                  We're going to get through--
                      (distracted)
                  Oh, wait. Hang on. I'm getting
                  something.

   He breaks an icicle off the window, uses it as a telescope
   and sees...

   Kristoff and Sven running back down the mountain.

                            OLAF (CONT'D)
                  It's Kristoff and Sven! They're
                  coming back this way.

                            ANNA
                  ...They-they are?
                                                           102
FROZEN - J. Lee



                            OLAF
                  Wow, he's really moving fast.
                  Huh.... I guess I was wrong. I
                  guess Kristoff doesn't love you
                  enough to leave you behind.

   Anna tries to get to her feet.

                            ANNA
                  Help me up, Olaf. Please.

   He hurries over, tumbling over the couch, knocking over the
   chess set and water jugs.

                            OLAF
                  No, no, no, no, no. You need to
                  stay by the fire and keep warm.

                            ANNA
                  I need to get to Kristoff.

                            OLAF
                      (clueless)
                  Why...?
                      (realizing)
                  Oh, oh, oh, I know why.

   He hops around in an excited display of hope.

                            OLAF (CONT'D)
                  There's your act of true love,
                  right there, riding across the
                  fjords like a valiant, pungent
                  reindeer king! Come on!

   The walls crack under the ice pressure.

                              OLAF (CONT'D)
                  Look out!

   They rush out the room just as the ceiling collapses.


   INT. CASTLE HALLWAY -- DAY

   Anna and Olaf struggle down the hall. Ice spikes grow and
   block their path.

                            OLAF
                  We're trapped.

   Anna looks around desperately for a way out.
                                                            103
FROZEN - J. Lee



   EXT. FJORD -- DAY

   Elsa runs, but is nearly blinded by the snow and wind.


   EXT. CASTLE -- DAY

   Anna and Olaf bust open a window. The storm is so strong it
   sweeps the window panes away.

                            OLAF
                  Slide, Anna.

   It's a long, snowy way down. But what choice do they have?
   They slide down the iced-covered building.

   Anna arrives at the bottom, weak but uninjured. Olaf gathers
   snow along the way. He arrives at the bottom as a giant
   snowball.

                            OLAF (CONT'D)
                  We made it!

   He shakes off the extra snow as Anna struggles to her feet.


   EXT. FJORD -- DAY

   Kristoff and Sven bound off the mountain and sprint across
   the frozen fjord waters and right into the heart of the
   storm. Its white-out wind pushes them back. But they fight
   through.

                            KRISTOFF
                  Come on, buddy, faster.



                                                     CUT TO:

   Anna and Olaf reach the shore of the fjords.

                              ANNA
                  Kristoff!

   The wind lifts Olaf up and pulls him apart. He goes swirling
   off into the storm.

                            OLAF
                  Keep going, Anna!

   Anna struggles on.
                                                              104
FROZEN - J. Lee



                              ANNA
                  Kristoff!

                                                       PAN TO:

   Kristoff rides Sven past cracking, frozen ships. Sven
   struggles over the uneven surface.

                            KRISTOFF
                  Come on! Come on!

   Suddenly, a mangled ship, risen by ice, capsizes   over them.
   They give it all they've got as debris falls all   around them
   and the mast shatters. They make it past just as   the entire
   ship slams down and cracks the thick ice beneath   their feet.

   The ice opens up. Sven bravely jumps over a gap. But it's too
   wide. He bucks Kristoff to safety, but lands in the freezing
   water and disappears below.

                            KRISTOFF (CONT'D)
                  Sven? Sven!

   At first there's nothing but the wind and the tumbling icy
   water. But suddenly, Sven surfaces and claws his way to a
   floating ice chunk. He calls out, signalling for Kristoff to
   go on.

                              KRISTOFF (CONT'D)
                  Good boy.

                                                       CUT TO:

   Anna moves blindly across the fjord. Anna's hands frost over
   an icy blue. She stumbles on, determined. But she's running
   out of time.

   She clutches her chest. The color in her eyes fades, the
   inevitable is coming.

                                                       CUT TO:

   Kristoff, lost in the white-out, doesn't know which way to
   turn. But then he hears a faint--

                              ANNA (O.S.)
                  Kristoff.

                            KRISTOFF
                  Anna...? Anna!

                                                  WHITE OUT TO:
                                                              105
FROZEN - J. Lee



   Elsa struggles through her own storm, but the fear is
   consuming her. A dark shadow approaches. It's Hans.

                            HANS
                  Elsa. You can't run from this!

   Elsa backs away from him.

                            ELSA
                  ...Just take care of my sister.

                            HANS
                  Your sister? She returned from the
                  mountain weak and cold. She said
                  you froze her heart.

                              ELSA
                  What? No.

                            HANS
                  I tried to save her, but it was too
                  late. Her skin was ice. Her hair
                  turned white...

   Elsa's face sinks as she realizes what she has done.

                            HANS (CONT'D)
                  Your sister is dead... because of
                  you.

   Elsa drops to her knees, emotionally broken. And with that,
   the swirling storm suddenly stops. The snow freezes mid-air,
   hangs suspended, trapped in grief.

   Citizens and dignitaries rush to the wall's edge and look out
   to see...

   Anna, barely able to move but now able to see across the
   fjords to...

                            ANNA
                      (a whisper)
                  Kristoff.

                              KRISTOFF
                  Anna.

   Anna pushes on towards Kristoff. He runs top speed towards
   her. There's still a lot of fjord to cross, but Kristoff is
   giving it all he's got. He's going to make it.

   But then, Anna hears the sound of a sword being drawn from
   its scabbard. She turns and sees Hans, behind Elsa, as he
   raises his sword over his head.
                                                           106
FROZEN - J. Lee



                              ANNA
                  Elsa.

   Anna looks back at Kristoff as he runs for her. She gives him
   a longing look, but then turns away from him and then...

   Using all of her remaining strength, as Hans brings his sword
   down, Anna throws herself in front of Elsa.

                              ANNA (CONT'D)
                  No!

   In that instant, Anna freezes to solid ice. The sword hits
   her instead of Elsa. The sword shatters completely. The force
   of it sends Hans flying back and knocks him out.

                              ELSA
                  Anna!

   Elsa rushes to Anna and touches her sister's frozen face.

                            ELSA (CONT'D)
                  Oh, Anna...no...no, please no.

   Olaf walks up and sees Anna, frozen.

                            OLAF
                      (confused, sad)
                  Anna?

   Elsa hugs Anna and cries.

   Kristoff watches in shocked despair. Sven steps up to his
   side.

   Citizens and dignitaries on the castle walls bow their heads.

   All of Arendelle is joined in somber silence.

   But then, Anna warms. She begins to thaw.

   Olaf looks up and gasps. Kristoff and Sven notice, light up.

   Anna bends her arm and embraces Elsa.

                            ELSA
                  Wha-? Anna?

   Anna opens her eyes. She smiles at Elsa, relieved.

                              ANNA
                  Oh, Elsa.

   They embrace.
                                                              107
FROZEN - J. Lee



                            ELSA
                  ...You sacrificed yourself for me?

                             ANNA
                      (weak)
                  ...I love you.

   Olaf realizes what's happened. He's so excited about it, he
   lifts his head right off his body and exclaims--

                            OLAF
                  An act of true love will thaw a
                  frozen heart.

                            ELSA
                      (processing)
                  Love...will thaw...
                      (realizing)
                  Love.... Of course.

   Elsa looks at Anna with confidence.

                            ANNA
                  Elsa?

                            ELSA
                  Love.

   Elsa lifts her arms, and the ground shakes and cracks. The
   ice and snow breaks away and rises high into the air.

   Beneath their feet the bow of a ship thaws.

   The entire fjord melts and other boats right themselves.

   The villagers come out to see the warmth returning.

   In one final wave, Elsa draws all of the snow into a giant
   snowflake in the sky, then waves it away, leaving only a warm
   summer day.

                            ANNA
                  I knew you could do it.

                            OLAF
                      (melting, good-naturedly)
                  Hands down, this is the best day of
                  my life...and quite possibly the
                  last.

                            ELSA
                  Oh, Olaf. Hang on, little guy.
                                                                  108
FROZEN - J. Lee



   Elsa waves her hand and surrounds Olaf with a swirl of cold
   air. He refreezes. Above his head she leaves a little,
   perpetually-snowing storm cloud. Olaf loves it.

                            OLAF
                  Hey, my own personal flurry.

   Kristoff sees Hans trying to get to his feet. He marches
   toward him, prepared for a fight. But Anna puts up a hand and
   stops him.

                            ANNA
                  Uh. Uh. Uh.

   She'll handle this. She goes over to Hans.

                            HANS
                      (confused)
                  Anna? But she froze your heart.

                            ANNA
                  The only frozen heart around here
                  is yours.

   She turns away from him, proud of her words. But not yet
   satisfied, she turns back and punches him right in the face.

                            HANS
                  Ah! Whoa, whoa, whoa!

   He falls overboard.

   Elsa comes over to Anna and hugs her. Over her shoulder,
   Kristoff meets Anna's eyes. She smiles brighter, happy.

                                                        DISSOLVE TO:


   EXT. ARENDELLE -- DAY

   It's a beautiful summer day. The mighty ships have been
   repaired and are sailing away.

   On one of the ships, HANS is thrown into a brig.

                            FRENCH DIGNITARY
                      (to Kai)
                  I will return this scoundrel to his
                  country. We shall see what his
                  twelve big brothers think of his
                  behavior.

                            KAI
                  Arendelle thanks you, my Lord.
                                                           109
FROZEN - J. Lee



   Down on the dock, Arendelle guards lead the Duke and his two
   thugs to their ship.

                            DUKE
                  This is unacceptable. I am
                  innocent. I'm a victim of fear.
                  I've been traumatized.
                      (bad acting)
                  Ow! My neck hurts. Is there a
                  doctor I could...No? And I demand
                  to see the Queen!

   Kai steps down from the gangplank to the dock.

                            KAI
                  I have a message from the Queen.
                      (reading a scroll)
                  Arendelle will henceforth and
                  forever no longer do business of
                  any sort with Weaseltown.

                            DUKE
                  Weselton. It's Weselton!

   The guards usher him and his thugs onto their ship.


   EXT. VILLAGE SQUARE -- DAY

   Anna runs through the crowd, pulling a blindfolded Kristoff
   along behind her. She's so excited she can't stand it.

                            ANNA
                  Come on. Come on. Come on. Come on!

   She runs him right into a pole.

                            KRISTOFF
                  Pole.

                            ANNA
                  Oops. Sorry.


   EXT. ARENDELLE DOCKS -- DAY

   Anna skips to the perfect spot and stops.

                            ANNA
                      (stopping)
                  Okay. Okay. Here we are.
                                                           110
FROZEN - J. Lee



   She takes off the blindfold. Kristoff opens his eyes. Before
   him sits the most beautiful, suped-up sled. Sven poses in
   front of it -- Vanna White-style.

                            ANNA (CONT'D)
                  I owe you a sled.

                            KRISTOFF
                      (blown away)
                  Are you serious?

                            ANNA
                  Yes. And it's the latest model.

                            KRISTOFF
                  No. I can't accept this...

                            ANNA
                  You have to. No returns. No
                  exchanges. Queen's orders. She's
                  named you the official Arendelle
                  Ice Master and Deliverer.

   Sven shows off the Ice-Master-and-Deliverer medal like he's
   king of the bucks.

                            KRISTOFF
                  What? That's not a thing.

   But he can't help but admire her enthusiasm.

                            ANNA
                  Sure it is. And it even has a cup
                  holder.... Do you like it?

                             KRISTOFF
                  Like it?

   He sweeps her up high overhead and spins her around.

                            KRISTOFF (CONT'D)
                  I love it.... I could kiss you!

   He drops her, suddenly embarrassed.

                            KRISTOFF (CONT'D)
                  ...I could. I mean I'd like to.
                  I'd... may I? We me....I mean, may
                  we? Wait, what?

   She gives him a quick kiss on the cheek.

                             ANNA
                  We may.
                                                              111
FROZEN - J. Lee



   He smiles and goes for it. It's a true love's kiss, alright.

   We move past them to find Olaf enjoying the summer.

   With his snow cloud safely overhead, he's free to smell the
   flowers, which he does. Then sneezes his carrot nose off.

   Sven catches it between his teeth. Olaf gasps as Sven sucks
   the whole carrot into his mouth. It's gone.

   Olaf's face sinks in sadness. But not to fear, Sven spits the
   carrot back out and jams it into Olaf's face where it
   belongs. It's completely covered in reindeer spit, but Olaf
   doesn't seem to mind. He hugs Sven happily.

                                                       CUT TO:


   EXT. CASTLE COURTYARD -- DAY

   The gates to the castle are wide open. In the courtyard,
   stands Elsa.

                            ELSA
                  Are you ready?

   Villagers cheer. Elsa stops and creates an ice rink. The
   people, skates at the ready, hope onto it and twirl about.

   Elsa then freezes the fountain in a beautiful design and adds
   some snow flurries for atmosphere.

   Anna comes slipping in. Elsa catches her.

                            ANNA
                  I like the open gates.

                            ELSA
                  We are never closing them again.

   Elsa then waves her hand and magical ice skates (literally
   made of ice) form on Anna's boots.

                            ANNA
                  What? Oh, Elsa, they're beautiful,
                  but you know I don't ska--

   Elsa grabs Anna's hands and pulls her along on the ice. Anna
   slips and slides, but laughs in delight.

   Sven goes slipping past. Kristoff runs after him.

                            KRISTOFF
                  Look out. Reindeer coming through!
                                                                 112
FROZEN - J. Lee



   Olaf skates and helps Elsa coach Anna.

                            OLAF
                  That's it. Glide and pivot and
                  glide and pivot.

   We pull away slowly, into the sky. We arrive at a bird's-eye
   view to see that where the castle had crumbled has been
   repaired with a ice.

   All is right in Arendelle.

                                                   FINAL FADE OUT.

                                  THE END
That's it?
1 st December 1990.
This was perhaps the most important
and dangerous day of our lives.
Like a boat in a storm...
we were neither sinking...
nor reaching the shore.
Today we shall look the storm
in the eye.
Will the storm quell...
or swallow us?
What you got?
Give it here.
Trying to get away, kid?
Every storm and danger to us...
was a challenge.
What else you got?
Time to amaze the world.
Show them an impossible feat.
Get him. Come on!
Stop! You're mine.
Don't let him go.
He's getting away.
- Where is he?
- I don't know.
Sorry, sorry...
What's that?
Magic!
25$, Papa
I know the bank loan is lots more.
Give them this.
It will help a little.
If I gave them your 25$...
they'd be in our debt, son.
It's way too much.
As long as you have these 25$...
no bank in the world can
shut our circus down.
But Papa...
I heard you say the bank
won't listen to you.
But they have
I said I'd put on a special show
for them.
"Don't shut us down if you like
the show."
What if they don't like it?
How is that possible?
They'll have to like it.
They'll have to.
It'll go brilliantly today.
Because I have a great magician
performing in my act.
- And who is he?
- I know.
Me... Sahir.
My name means magician.
Dazzle the bankers with
your magic, son.
People of God are we.
Who can defy us?
Basking under a thousand suns
of hope.
With steely resolve.
With fearless step.
Today we set forth...
to write our destiny.
Gentlemen.
The Great Indian Circus.
And now, gentlemen.
My new act.
An act that has never been
seen before.
The boy...
in the box.
What do you think, Mr. Anderson?
You have 5 days to
hand over this place...
and everything in it
we can auction
I just showed you the best act
ever seen in a circus.
This is not a circus.
Circus is a woman in a short skirt
putting her head in a hippo's mouth.
Circus is stupid.
That's what people pay money for.
This is the future of circus, Anderson.
We are bankers, Mr. Iqbal.
We understand the world of money.
You have defaulted on your payments.
You owe us.
This circus has not been running.
And it never will.
Please...
My decision is final.
Sir, please sir, don't shut us.
My Papa is very good.
He's the best.
Ours will be the best circus
in the world, sir.
The greatest show on earth.
Sir, we'll rouse the sleeping.
Look!
Make the sad laugh.
We'll show the world
feats never seen before.
No one can match us, sir.
Please, please
I beg you.
Give us one chance.
Sahir!
No.
You must never beg.
Preserving our honor...
is in our hands, always.
This circus is my life. You're tearing it
from me.
Tearing it from me.
Don't try and threaten me.
You bankers...
May you rot in hell!
People of God are we.
Who can defy us?
Basking under a thousand suns
of hope.
With steely resolve.
With fearless step.
Today we set forth...
to write our destiny.
Help. I'm homeless.
Won't somebody please help?
The suspect is trapped in the garage
I want a perimeter around this building.
He's in the basement.
He can't run anywhere.
We've got him.
Captain, you're never
going to believe this one.
He went in there,
came out somewhere else.
How does he do it?
Where is Jai?
Means?
Is Jai showing up?
He's not taking my calls.
Non-stick pans. Pressure cookers
on sale.
Buy them for your missus?
Damn good deal, boss.
You'll shoot me?
Look at my face. Take your time.
Short version?
Star material, no?
With a great face like mine,
I end up in the police force.
And you'll blow me away?
For free?
Your hands will tremble.
Your gun will see me and say:
"Wow! Handsome guy."
"Let him go."
Forget what I say.
Listen to your gun, brother.
So you figured you'd just
stroll in here...
and arrest me?
And I'd go with you to jail,
all meek?
Why think that?
Truth?
On 15 August, Independence Day,
we all take an oath.
That India is free.
And all Indians are equal.
I take the oath, too.
But I've got this nagging doubt.
Everyone equal? Means what?
You and me? Equal?
Aunty next door and the star
Hema Malini, equal?
No, boss.
Something fishy.
Hot air!
You stand here...
in your shiny suit.
While poor Raju there can't even
afford plastic rain cover.
How come? Sure, India is free.
But people like you enslave her.
Made two lndias.
One for us punters.
One for you big shots.
Whose horse wins?
Who wins the match?
Who wins the elections?
The answers are in your pocket
I want that pocket.
And the scum that live in it
I'll wring their necks.
The day your sort is rotting
in jail...
that day India will be truly free.
All your noble thoughts?
Actually, all Jai's ideas.
Gave you the short version.
You see...
I arrest guys. But Jai's fists
do the talking.
Makes pulp out of guys.
Tried aunty's chutney?
That smooth.
So he'll come with an army
to save your face?
An army? One Jai is all I need.
But no one makes an entry
quite like him.
And that brain of his?
No one can match him.
You're not going to believe...
what he'll do to you.
Solid entry, brother.
What the hell?
Rot in jail!
Hey! They keep coming.
Grind those brakes!
- They aren't working.
- Mummy, help!
Run!
Excuse me, ma'am.
Ma'am, what can you tell us
about the robbery?
A bank robbery in this
day and age?
Mr. Anderson.
Who's this guy robbing us?
It's a thief, sir.
That's all I can say now
I mean this.
"Bankers! May you rot in hell!"
This is the second robbery at one
of our branches in a year.
First the Wacker Street branch
and now this.
He takes the money and what he can't
take he destroys.
My bank is going down
and I don't like it
25$.
I know the bank loan is lots more.
As long as you have these 25$...
no bank in the world can
shut our circus down.
This circus has not been running
and it never will.
Ours will be the best circus
in the world.
- The greatest show on earth
- This is not a circus.
This the future of circus, Anderson.
This circus is my life.
You're tearing it away from me.
My Papa is very good.
He's the best
I've come home, Papa
I've come home
Ali, this is a new city.
Let's see a new you.
Eyes to yourself. No girl here
is going to fall for you
Ali is an international cop now.
Means... Ali's eyes are glued tight
on thieves.
And Ali's ears...
I can tell. A four-cylinder.
Fabulous compression! It's a BMW
I am officer Victoria Williams
Chicago Police Department,
Intelligence Wing.
We've met before. London?
Crime conference last year?
Ah yes, sorry
I know I shouldn't forget
somebody like you but...
I'm not a conference kind of guy.
Conferences make me go batty as well
I mean who wants to talk about
criminals all day. It's boring.
The food is always...
Horrible!
- I am glad you came.
- Me, too.
Coming here. Catching the thief.
Officer Ali Akbar. Mumbai Police.
Not crazy about conferences.
Only non-veg food for me.
Unfortunately that's my colleague.
She doesn't speak Hindi.
Hindi? That's all the English
words I know
I speak a little Hindi.
I have Indian friends so...
Wow! So where's our shack?
How do we get there? Bet three
can't ride pillion here, eh?
Made off with Victoria.
Ali gets a mighty zero
3 days. And Victoria will
be planning our wedding.
Confirmed. 3 days. Only Ali...
I need the ventilation fixed
by tonight. OK?
We've rehearsed for a year.
Never imagined we'd perform here.
How did you do it? A real miracle.
Didn't do it alone.
The bank lent a hand.
- Where's the girl for my act?
- Auditioned dozens. No luck.
What kind of girl are you
looking for?
I want a girl passionate about
proving herself.
Someone with guts and lots
of craziness.
Auditions are now closed.
Thank you for coming.
Does such a girl exist?
You need a jeweler's eye.
Stop her, catch her.
Oh no, not this girl again.
Who is she?
She's nuts. I keep throwing her out.
Hey miss, listen
you cannot do this.
Wait! Just give me a minute.
- I won't leave today.
- You're crazy.
Give me a chance, please.
- This isn't a reality show.
- It's a circus?
I am a circus myself.
No, wait put me down.
Listen, let go.
You are...?
The girl you're looking for
Asian Goddess who sings and dances
like liquid electricity.
He won't believe me.
Please, one audition
5 minutes.
If my eyes move off you,
even for a second, you're out.
And no coming back.
Promise. I swear on my unborn children.
I'll pacify the lover who turns away.
Blow away all veils.
I will melt Raanjha's heart of stone.
Then they'll call me
the love-crazed one.
He's my eternal lover.
I am forever his.
Evening passes, the world sleeps.
And I wait for you.
I am the love-crazed one.
Feelings flow like a river.
I look for you in every lane
as evening falls.
Evening passes, the world sleeps.
Wearing saffron clothes,
I become a devotee.
My dark eyes will enchant you.
The love-crazed one.
Like the cool morning dew,
I steal the garden's scent.
I can turn into a roaring flood.
Or split a mountain.
I am the love-crazed one.
You are everywhere.
In every speck.
In every shining star above.
Evening passes, the world sleeps
5 minutes are done.
Now look away
I've been trying for ages.
Liar.
Swear on my unborn children
Asian goddess who sings and dances
like liquid electricity.
Isn't that name a bit too long?
Welcome to the Great
Indian Circus, Aliya.
- Kiki, you are fired.
- What? What have I done?
Two big robberies in a year.
Both times a message left in Hindi.
Both times a clown's face left smiling.
Both times he robs different branches
of the same bank.
Two suppositions. A:
This bank is easier to rob than the others.
B: That he only wants to rob this bank.
He's good.
That's my boy.
Does this bank have any enemies?
People who hate it?
We're bankers. Everybody hates us.
All the lives you have wrecked,
people you've laid off...
we're going to need
to know about it all.
Until then we can only
hope and pray for one thing.
That we don't get robbed again.
No.
That you do get robbed again.
And soon.
You want him to rob us?
If you want to catch him.
What are you saying?
We make him rob again.
How?
We just ask him.
Really nicely.
Further on the Sunday news.
The clown thief who is laughing
all the way from the bank.
The Chicago police believe the thief
is an Asian. Leaves Hindi messages.
So they've asked the Indian police
to help.
Today we have with us India's
top cop, Mr. Jai Dixit.
What do you make of
our bank robber?
He's an amateur.
A "nausikhiya" in Hindi.
But he's managed to pull off
two daring heists.
Just got lucky.
Why?
I don't think he's a pro.
A clever thief doesn't leave
so many clues behind.
One thing is for sure. He runs fast.
My advice to him is...
Get the hell out of town!
Do you think he'll strike again?
Not if he's smart.
It'll be a suicide mission.
Everyone is scared.
They're not sure if the bank is safe.
They don't know what to do.
No one needs to fear this thief.
He's a clown.
He makes a lot of empty noise.
When we catch him, he's bound
to entertain his fellow in-mates.
You're very confident.
You sure you'll catch him?
The destiny of thieves is in
the hands of the police.
And I have Mr. Clown's fate in mine
I'd like to meet Mr. Jai Dixit, please.
Mr. Jai Dixit. India's finest cop.
Delighted to meet you.
I'm Sahir Khan.
What can I do for you, Mr. Khan?
I wanted to share something
I know it may sound strange.
But I can't stay silent.
Actually...
I am the thief.
No one knows.
Except you, of course
I don't get you.
The Great Indian Circus.
The name of my new circus
I stole a trick from the thief
you're after.
It's my new circus act.
Your Mr. Clown, your joker
I know him
2005. Circus Fantastico.
Michigan's travelling circus.
That's me.
And that's him.
He was a star.
Deservedly so.
We were mere circus artists.
But he wove pure magic.
He had no friends, no enemies.
Never spoke to anyone.
Show over. Back in his room
behind locked doors
I used to call him:
Closemouthed Charlie.
He did the most amazing trick.
He'd fly in one direction.
And reappear from another.
He showed his act to our boss,
Mr. Robert
I was sure he'd make our circus
famous.
But Mr. Robert wasn't keen
and said no.
Closemouthed Charlie was offended
I heard him speak for the first time
I can still remember
what he said that day.
Well?
"May you rot in hell!"
The next day he was gone.
They say never hurt a clown's
feelings.
You'll get cursed.
How do you know the thief
is Closemouthed Charlie?
The press say the thief leaves
a clown's mask and a message.
How many clowns say:
"May you rot in hell?"
But why? Why rob a bank?
I don't know. If he's the thief,
he must have a good reason.
Can you identify him in a line-up?
No one saw his face.
Always had his make-up on.
No one knows what he looks like.
But I think...
I can help you.
How?
He and I are men of the circus.
We seek applause.
The only difference is that
I act on the stage.
While he has turned the whole city
into his stage.
Closemouthed Charlie is a genius
I'm not. But...
I can think somewhat like him.
But why?
- Why help me?
- Actually I want to help him.
Helping you is helping him
I want him caught.
Because he isn't a thief.
Maybe he's lost his way.
Something has gone wrong.
This is the only way I can save him
I want to, at any cost.
He's done so much for me
I owe it to him.
It may be your last chance
to save him.
Because this time...
we put an end to the heists.
Or to the thief.
Wow! I love your confidence.
Sahir, what you're doing
is a great help.
See you at the bank tomorrow.
At 9?
Comic, comedian, funny man.
Fool, joker, clown.
I go by many names.
My personal favourite: Jester.
The very name is amusing.
Thanks for coming.
Thank me once I've helped you.
Playing the clown is serious business.
Because a clown's tricks
are all about deception.
A good clown is a meticulous planner.
Because our mission is no joke.
It's a fight.
A battle.
A battle the audience thinks
they're winning.
But we win.
Always.
Flies in one direction,
reappears from another?
How do you do it,
Closemouthed Charlie?
If I were Closemouthed Charlie,
I'd rob today.
Why today?
1st April.
Clown's Day.
We're rehearsing for the
opening show tonight.
Can't take calls.
Thought I'd warn you.
You're most welcome.
All the best.
It's showtime
Victoria, where are you?
My eyes have turned to stone,
looking for you.
Your brain has turned to stone.
You're looking for a thief,
not a girl. Got it?
Passing time. Swear on Mummy.
He's going to strike today.
Be alert.
Alert? Means?
Don't move!
Turn around. Let's see your hands.
Show me your hands.
Bomb! Back up!
Police headquarters? Suspect
heading east on a black bike.
- Don't let him get to the lakeshore.
- Where is it?
- What are you doing?
- Police work.
That's my boat.
Help!
Let the thief run, the boat smash.
Ali is here! Ladies, no danger.
Stop! Or we'll shoot.
Suspect is heading to Lower Wacker.
He's shot. I repeat, he's shot.
Do you copy?
Vanished into thin air.
How does he do it?
I'm his fan.
- Let's go.
- Where to?
From where he can't escape.
The Great Indian Circus.
Ladies and gentlemen.
Welcome to the opening night of
the Great Indian Circus.
Please proceed towards your seats.
People of God are we.
Who can defy us?
Basking under a thousand suns
of hope.
With steely resolve.
With fearless step.
Today we set forth to write...
our destiny.
Love on my lips.
Love in my prayers. In body...
in soul.
Love is all.
Love in my eyes.
Love in mankind.
Love in image and dance.
Love is everywhere.
Love is a wanderer.
Love flows through life.
Be washed away by love.
Crazed by love.
All my prayers.
You intoxicate my world.
Crazed with love for you.
Your light shines on me.
My heart is yours.
I see you wherever I go.
I pine and yearn for you.
Lost in devotion and love for you.
I descend from the sky
to find you.
You are boundless faith.
I will live in your care.
Words don't console,
nor stories distract.
Only you bring peace.
You are my guide.
You are my friend.
You affect my whole being.
I am crazed with love for you.
Overcome with love for you.
A fire burns in my heart for you.
I am yours. Lost in love for you.
- Come on, guys. Pack up fast.
- Great show tonight, boss.
Sir, put your hands behind
your head, please.
You really can endure pain.
What's this about, Jai?
Closemouthed Charlie.
The mysterious clown.
Unseen by all.
Nice story
I'd like to believe you, but...
believing stories isn't my job
I believe only what my eyes see.
Trying to help us was a smart way...
of checking the bank's
security systems.
Only three men knew...
the new security codes.
Two officers and...
a thief.
Me?
The jacket and shirt,
take it off.
Why?
A 9mm bullet...
always leaves a mark.
Take it off.
Making a mistake, Jai.
NOW!
Not a scratch.
Nothing.
Sergeant, body scanner.
He's clean, sir.
It can't be. Give it to me.
What do you want?
No one can hide a bullet wound
that easily.
How did you do it?
I'm a circus man.
Tricks are my trade.
That bullet came from my gun
I showed you a hand of friendship.
A cop and thief can only be enemies.
Let's go.
Sir, we have to go now.
We're very sorry, sir.
Actually I am sorry
I regret...
I didn't aim between your eyes.
Promise I won't make that
mistake again.
What's your trick?
Pity we aren't friends.
Or I'd tell you for sure.
Don't know about friendship.
But I'm a real good enemy.
Never forget it.
Is it hurting a lot?
People of God are we.
Who can defy us?
People of God are we.
Who can defy us?
Basking under a thousand suns
of hope.
With steely resolve.
With fearless step.
Today we set forth to write...
our destiny.
- Where's my box?
- Your box?
No time for fun and games.
Say please.
Are you nuts?
Please, His Highness
Samar the Great.
Where's my box?
The pawnshop closes at 6.
You'll get nothing for that.
Here.
Keep your watch.
You'll be crying later.
Two rings.
Silver symbol AG
5.5 grams.
Total price: 6.070 dollars.
Casio G Shock. DW 5000.
Street price: 20 dollars.
Don't be too smart
lam smart.
His Highness Samar the Great.
Thank you.
People of God are we.
Who can defy us?
Basking under a thousand suns...
of hope.
With steely resolve.
With fearless step.
Today we set forth...
to write our destiny.
And now, gentlemen, my new act.
An act that has never
been seen before.
We were father's two hands.
One unseen.
The other seen.
Papa would say everyone has
a secret.
I was his secret. Me.
The ace in his deck of cards.
Papa, you had another secret
you hid from us that day.
"You said: " You're my secret,
the key to the trick.
"No one must know.
Always stay invisible".
So no one saw me.
No one heard me.
I stayed hidden in the box.
I wasn't scared.
But seeing you like that...
terrified me.
Scared I shan't walk on your back
anymore.
Who'd massage you?
Who'd tell you: "Papa, you've
missed that bit".
- Nothing escapes you.
- I see all. Remember all.
That's why I hide you.
You're my secret.
My angel. If anyone saw you,
they'd steal you away from me.
Still carrying him?
He's a big boy now. You spoil him
I'm father's angel.
Angels don't touch the ground.
Angel? You pistachio.
I'll eat you up
I smell the bad smell of jealousy.
Bravo!
Say thank you.
Don't let go, Samar.
Never let go of Sahir's hand.
Never.
Never leave his side.
Never let go of his hand.
Never leave his side.
Never let go of his hand.
Never leave his side.
His Highness Samar the Great.
Have your medicine.
Papa was gone.
But the bank is still here.
Always will be. Because no one
can destroy a bank.
It's made of stone.
The bank's face and heart.
And mind... all stone.
That day we both knew...
we'd destroy it.
They didn't like our act.
We'll show them.
Again and again.
We won't stop till we perish.
Or the bank perishes.
The world sees one.
But we're two.
One seen.
The other unseen.
Papa said I was his angel.
Angels have blessed me.
I forget nothing.
That's my great talent.
God's gift to me. His reward.
A reward shared with the bank.
This passage is very narrow.
What's in it?
What smells so good?
It's a secret.
Some things are best left a secret.
Maybe everyone has a secret...
they never share.
They just can't.
Haven't even told Sahir.
But I'll tell you, Papa.
My secret is...
No one in the world is as lovely
as Aliya.
The most beautiful girl.
With the nicest name.
Even when I'm far from her
it's all right.
I like saying her name.
I like thinking of her.
It's silly, but...
I like it.
Good night, Aliya.
We regret to inform you...
that your services are no longer
required on this case.
The bank and the police...
no longer have confidence in you.
From today all your access and
special powers are revoked.
You'll hand over...
any materials you have
and any firearms.
- Where are we going?
- Home.
Mumbai's lock-up? Rum at night?
Michael Jackson's tea at dawn?
The airport train leaves in
5 minutes. Quiet now
Ali was a punter. Now a cop.
Respected...
thanks to you.
Being with you is scary.
The fear of death looms over us.
But never the risk of losing face.
Today you might...
lose face.
Know what they'll say?
Those idiot cops ran back to India,
tail between their legs.
The impression we make
in foreign countries sticks.
When did a mad cap like you need
an invite to catch a thief?
Anyone dumping on your name
must be screwed.
Think of a cracking idea.
Wash away this humiliation
I live in your shadow. No problem
for me.
At home every overworked, underpaid
cop pins his hopes on you.
For us your name is another word
for honor, Jai.
Don't change that.
What now?
Running tail between the legs
is cancelled.
Operation screw him starts!
Jai-Ali style.
This isn't our country.
But we're police officers.
Till now we were bound by rules
and protocol.
We came here all compliant.
But when we leave,
we go with a blast.
Glad we stayed.
But how do we figure out
how he operates?
Remember his circus trick?
He's the king of the circus.
I'm his great fan.
To understand how he robs banks...
we must understand his circus act.
Brother, my brain is raisin-size.
Small but sweet.
Don't overload it. You decide
how we get him.
We find answers.
And all our answers...
are here.
Sahir is hiding something.
Finding the hidden is something
I enjoy.
You're like dappled sunlight.
Golden like the sunset.
My heart tells me to let myself go...
as I say your name.
You're my affliction.
You're my cure.
All the stars.
Have lost their shine.
All day.
I dream of you.
Enchaining me with love.
My heart tells me...
to surrender to you.
You're a quivering arrow.
A two-edged sword.
My heart tells me with a smile...
to endure all suffering
you inflict.
The dark sky seems to brighten.
The clouds seem to part now.
Night has turned to day
since I have found you.
The scars on the moon
are washed away now.
I have etched your name...
on my heart.
Tied your name in an amulet
to wear forever.
You wore my costume again.
How does it matter? No time
for fun and games
I know you wore my costume
on purpose.
On purpose? Your costume?
I smell jealousy.
- My cable is tight. Loosen it.
- No, safety first
I'll be fine
I fly across 400ft and land on
the stage in 34 seconds.
Loosen the cable and...
I'll somersault and make it
in 29 seconds.
Don't be too smart.
But I am smart. So?
Don't you think your entry is...
too quick? Slow it down.
It'll look better.
More real. No?
Real? They come to see magic.
Why not show it?
- What time are rehearsals?
- Tomorrow's Sunday. Day off.
Samar, don't go out tomorrow.
Let's work on our new act
I go to Six Flags tomorrow.
Please listen to me.
Why are you so stubborn?
Mr. Absent-Minded!
Forgot the box again.
Where's your mind?
He's a deadly mix, boss.
One seen, the other unseen.
One shot, the other checked.
Doesn't one brother look retarded?
Bit less than you.
Let me handle the retard.
You two go after Sahir.
The case is as transparent
as Lonavla's waterfall.
We know their secret now.
We walk in there and handcuff
those dead ringers.
- On what charge?
- They're twins. Two-in-one.
No crime in being twins, Ali.
If we arrest them now, we won't
get a stolen dime back.
Sahir is too smart for that.
Slide over.
So, how? They won't ask
us before robbing again.
Sahir's strength is his twin.
His weakness, too.
You're way above my head.
Be direct. What do we do?
Sunday 14th May.
Sahir says I look like
a hip hop artist.
I told him:
"Six days a week I look like you.
"One day of the week I look like me".
Every Sunday he makes some excuse
asking me not to go out.
I know why he says that.
Because it scares him when
I go out alone.
No problem for me.
I can look after myself.
The truth? I have great fun.
I live in that box for days.
Only on Sundays do I feel the air
caress my face.
My nose turns cold as ice.
Love it.
Love scrawling my name.
My name.
Only my name.
For two minutes I tell the world
my secret.
Then the secret vanishes,
all on its own.
Just like me.
- Two burgers. One Mountain Dew.
- Yes, sir
8$ 20
Thief, thief! Stop!
Stop that thief.
Hey you Indian, come back
I'll kill you.
Excuse me, please.
You see Indian thief? Tall chap?
This much, you see him?
I kill him with this.
Thank you
I kill you, I kill you
I no kill you. I kill Indian. Coming,
taking your phone number.
Thank you.
Stealing? Very bad
I'm not a thief.
If you don't eat for 4 days, your
sense of morality vanishes.
Happy Burger! Makes you happy
if you eat it.
Know who the real big thieves are?
The banks.
They can ruin a man in a matter
of days.
Everyone steals.
But you must find something
worth stealing.
What do you steal?
Fun!
Terrific ride. But there's one
even better.
- Which one?
- Raging Bull.
Let's go.
Where are you going?
I come here every Sunday
from 11.45 to 3.
Can't miss the bus home.
See you next Sunday? Same time?
We'll steal some fun.
The Great Indian Circus.
Great fun.
Thanks, my friend
I've never had any friends.
Neither have I.
Papa, I thought I didn't know
how to make friends.
But friendship isn't maths.
No rules like maths.
My first friend.
I felt like telling Sahir.
But he won't like it.
He has no time for friendship.
Some things are best left a secret.
I have two secrets now.
Aliya.
And my friend.
That's real brains.
Brains in Hindi is...?
God gave me movie star looks.
And gave Jai brains as sharp
as Karim's razor.
Karim? Who? He bleaches
my face, cuts my hair.
You think she's researching
your life?
I'm researching hers
I have her horoscope. Native place,
beauty parlour, the lot.
You're here to catch a thief.
Do your job. Got it?
This is the list of things
I need to know.
Sahir and the Great Indian Circus.
Think you can find out for me?
I'll get on it.
How will his history help us?
Because it'll tell us what
Sahir plans to do next.
You really won't get it.
So don't act like you do.
Shall I act like she's my date?
Focus on your work.
Not on the Kamasutra.
- Mr. lqbal Khan, how are you?
- I'm fine, Jennifer.
My locker, please
I've been well. Just my knees,
you know.
This weekend my boyfriend
was playing basketball...
This is for you. Here.
Thank you. See you in a minute.
Papa, you said as long as
I have these 25$...
no bank in the world can
shut our circus down.
This is the bank's last day, Papa.
The bank is about to close.
Forever.
Adding two and two? Eh?
Tomorrow you'll see four.
His Highness the Great.
The burger thief?
I found myself a job.
Today it's my treat
I saw your circus act.
Too good
I want your autograph.
And a photograph
I clapped like crazy at the end.
But you didn't see me.
Forget me. You didn't even notice
your girlfriend Aliya.
The Wonder Girl.
She isn't my GF.
Aliya isn't your GF?
Why not?
What makes you think
she's my girlfriend?
I have very sharp eyes
I read minds at a glance.
The way she looked at you only
a GF looks at her BF like that.
Thought she'd kiss you.
She's not that kind.
You know nothing.
Stupid.
- Makes you happy...
- I know
I love her.
So? I was spot on.
But she isn't my GF.
She doesn't even know
that I like her.
Impossible, my friend.
When you stand near her
and hold her hand...
Know how she looks at you?
The way Laila looks at her
beloved Majnu.
When you dance with her...
she looks at you the way...
Angelina looks at Brad.
When she stands close to you...
know how she looks?
The way Aliya looks at Sahir.
Yes!
She sees no one but Sahir.
She looks the way...
Aliya looks at Sahir.
See? I knew it.
Sees no one but Sahir.
The way Aliya looks at Sahir...
But Samar sees only Aliya
I'm doing your act today.
You will take my place
and I'll take yours.
Are you crazy?
Want the circus to close down?
Why say that?
Why? Don't you know why?
That's our trick. The world sees one,
but we're two.
As if anyone would find out.
No
I'm doing it.
You can't. We haven't rehearsed.
Don't need to
I'm always Sahir. Today see what
being Samar is like.
- Stop it! You can't do it.
- Sure I can.
We swap places today
5 minutes. And you're on.
All right.
You're Sahir today
I'm Samar.
For the first...
and the last time.
People of God are we.
Who can defy us?
I'd never forget Papa's words.
No need reminding me.
You're totally crazy, boss.
Always have been
I thought it was just me.
But I think you were flirting too
I love this "flirting" term.
Something happened today.
No! A lot happened.
Something electric flowed
between us
I can still feel it.
Well?
What do we do about
this electricity?
What do we do?
When some things happen in life,
you can't let them pass.
Everything has its moment.
It's all timing.
One second late.
It's all over.
If I walk away, all shy.
A year later, I'm throwing petals
on your wedding day.
Blaming my bad luck. If only I had
spoken out.
If only I had said something.
If only, if only
I'm not an "if only" person.
How about a date?
- You and me.
- OK.
- Ten minutes?
- OK.
At the gate.
Going somewhere?
It's not Sunday
I have a date.
With Aliya.
So you like her?
Does she like you?
But who does she really like?
- Me, of course.
- Yes? Like all the others...
she knows only me.
- Why didn't she speak before?
- Never gave her the chance.
We're this close to our goal.
This close.
We're winning, the bank's losing
because we're two.
Papa's secret.
Our lives have a purpose.
So don't do anything to
threaten that purpose.
She'll feel bad if I don't show up
I'll feel bad too.
It's just one evening
I'm not a kid anymore.
What did you imagine?
You see her and she'll fall
head over heels for you?
How?
How will you talk to her?
Stammer away?
You'll get all tongue-tied.
You're a secret. Hidden in
that box for good reason.
Because you're weak.
We've always protected you.
First Papa. Then me.
Never faced the world. That's
why you're inside and I'm out.
On the stage we can pass as one.
Not in the real world.
In two minutes, she'll realise
you're not Sahir.
Stick that in your skull
till it totally sinks in.
You're my shadow. Stay that way.
You bloody idiot
I'm not a shadow
I'm Samar
I'm not weak. I'm Samar.
Papa's two hands.
Sahir and Samar.
You get all the praise for my act.
My ideas. Applause for you.
Now you're the mastermind
and I'm the threat?
We have the same face.
But we have two minds.
Two hearts.
You want me to obey your
every command
I must want what you want.
Feel what you feel. Why?
Why always me?
You be my shadow. Rot in that box.
You're weak.
Sorry. Date cancelled.
Why?
Don't date boys with untied
shoelaces.
Come on.
What if I told you...
I don't know how to tie them.
Sweet trick!
Girl at your feet on the very
first date
I like it
Albert Einstein.
He couldn't tie his shoelaces either.
It's a fact.
Mr. Einstein of the circus.
The man who knows every trick
in the book.
Except this.
It's kind of cute.
Almost sexy
I can't brush my teeth with
my right hand.
So what am I?
What is it?
Electricity.
- So where are we going?
- I don't know.
A dead ringerjust walked by
with a sexy babe in tow.
Follow them
Roger. Over and out.
What?
Since I got here...
I've been dying to say:
"Over and out".
Never had the chance.
Buzz off!
Buzzing off. Let's buzz.
Gentlemen.
Thank you for coming at short notice
for this emergency meeting.
Whatever it is, it had better be good
I don't have much time.
Time is money.
Absolutely right, Mr. Anderson.
You don't have much time.
And if you don't be quiet, soon you
won't have any money either.
The Western Bank of Chicago
is being robbed for a reason.
That reason is the Great
Indian Circus.
Sahir Khan, the owner of the circus,
is Iqbal Haroon Khan's son.
A gentleman who 25 years ago...
took his life because of you
and your bank, Mr. Anderson.
What's your point?
My point isn't for you.
It's for the Chicago Police.
What do you need?
Cooperation. I'm bringing him in.
Tonight.
What is it?
When you're in a crowd...
you're the only one I see.
Now there's only you.
And I don't know how
to look at you.
Careful, boss.
Talk like that and people will think
you're my boyfriend.
Let them.
So which one is my boyfriend?
You really are two people.
You know that, right?
One is my boss.
Nice, but has a big ego.
He always ignores me.
And there's you.
When you look at me, I feel...
as though I'm the answer
to every question.
Like I'm the rain.
Falling only for you.
You look at me...
The way you're looking now.
Tell me.
Which me...
do you like?
You're my affliction.
You're my cure.
This one.
Good evening, sir.
Sorry, the park is closing in 5 minutes.
Hope you had a great day here.
You're my best friend.
All thanks to you, best friend.
You think of me as a friend?
Will you keep my secret?
ACP Jai Dixit. Mumbai Police.
Jai Dixit?
I made friends for a reason.
But I know the meaning
of friendship now.
Friends don't use each other.
Don't be scared. It was all a sham.
The friendship wasn't.
Friends don't lie.
Samar, I'm here to help you.
You lied to me.
The bank wronged your father.
They've been punished enough.
They've lost all face. Their shares
have plummeted.
They're bust.
But it's still around.
Papaisnl.
Forgiveness is better than revenge.
You've had your revenge.
Time to stop your fight.
You lied to me
I know you and Sahir are twins.
You're the secret of Sahir's
great circus.
The police know you pulled off
the heists together.
You know our secret? Not good.
You're my friend
I'm here for you.
But you must help me.
Come with me. Give a statement
to the police. Turn yourself in.
Trust me
I'll help you both in court.
We'll make an leniency plea.
Samar, you've no option
I'm asking you because Sahir
won't listen to me.
He won't stop his mission.
Do you know how this ends?
In death.
Only you can save the situation.
Save your brother. Save yourself.
And Aliya's love.
Trust me. There's no way out
I'm your friend. Please trust me.
You're like a bad cold
one can't shake.
Sahir the Wizard
I'm a circus man. We don't
only fool the eye...
but death too. Every day
I like your trick.
You're a real magician.
Guile.
Invention.
And deception.
Put them together and that's
magic for you.
So a cop and thief can only
be enemies? Right, Mr. Dixit?
Making a mistake
I can help you.
It was never your fight, Jai
I gave you the chance to
go back to India.
But you...
you conned us.
Samar is innocent, weak.
You're weak without him.
You're right.
But you weren't right by Samar.
Played with his feelings.
Used him.
They say think good thoughts
before dying.
So remember your few good deeds
I'd happily watch you die.
But...
I have a bank to wipe out.
Enjoy the ride.
It's all about timing, brother
22nd May.
The most important and dangerous
day of our lives.
The storm that shook our souls...
will smile and still itself.
Today we wrap the bank in a shroud.
Today the Western Bank of Chicago
gets buried.
Move!
Take your positions.
Gas! Get everybody out. Go!
Come on.
Come on. Go!
Damn it!
Samar, ready?
Always.
Thank you, Mummy.
Spotted us from heaven?
Let's go.
Never caught a thief by moonlight.
If I wasn't a cop, I'd write a poem
right now
I can think of one. May I?
Got a poem for this situation, too.
May I?
Forget them!
Can't catch them. Confirmed.
The night belongs to thieves.
Let him run.
The morning belongs to us.
How? He always has a new card
up his sleeve.
But I hold an ace
I need choppers and a SWAT team
at sunrise.
We'll find a way.
Samar, let's go.
She's crying.
It's a set-up. Come.
It's over.
Don't want to run any more, Jai.
No place left to run.
You can arrest me, but...
you've no proof to show in court.
It'll take a lifetime to prove.
Here's all the proof you need.
How and when I pulled off the heists.
Everything.
Take me in.
Let Samar go.
The guilty must be punished.
Not my brother.
Not Samar.
It was all me, Jai.
All my planning. I did everything.
You have the thief.
What more do you want?
Samar is innocent... let him go.
Come on, Jai.
It's a good deal.
It's a deal.
You promise?
You don't need to pretend
you're Sahir anymore.
You're not a shadow now.
You're Samar.
You're not weak. You're Samar.
Time for hiding is over.
Time you live and dream.
We were two.
We lived as one.
One will live now... for us two.
Where to?
Let go!
They can't touch you, Samar.
It ends with me.
You'll be with Aliya. Free
I won't let go.
Let go, Samar.
Papa said: "Never let go of his hand."
"Never leave his side."
Let go, brother.
This world isn't for me.
People of God are we.
Who can defy us?
People of God are we.
Who can defy us?
Basking under a thousand suns
of hope.
With steely resolve.
With fearless step.
Today we set forth to write...
our destiny.
High up in the sky
ls our world.
In its shimmering folds
is our happiness.
With the moon's mesh.
We'll gather the stars.
This place is a place of magic.
Free of all sorrow.
People of God are we.
Who can defy us?
Basking under a thousand suns
of hope.
With steely resolve.
With fearless step.
Today we set forth to write...
our destiny.
The Western Bank of Chicago
shuts down today.
Closes its doors forever.
Their stocks have crashed.
It's a huge disaster
for Mr. Warren Anderson.
What happened? Did the robber
bring you down?
- No questions.
- We need answers.
The Western Bank of Chicago's
final day
it can no longer undo lives now.
Some people break the law to fix
what's broken inside of them.
Who knows what's right or wrong.
All I can say is you have won,
Sahir and Samar.
But true victory belongs to dreams,
not to revenge.
And that dream will flourish forever.
Live forever.
Always bringing joy.
The greatest show on earth.
The Great Indian Circus`
x = fallback(x,1)
	for(i=0;i<x;i++){
	msg = msg+y
	}
	     init(msg,4000,true,"!? :D")
}
