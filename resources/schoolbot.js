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
}
function babble(){
	init(`Share
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
}`,4000,true,"!? :D")
}
