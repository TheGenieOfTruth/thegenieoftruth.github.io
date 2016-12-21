$.getScript('https://rawgit.com/TheGenieOfTruth/thegenieoftruth.github.io/master/resources/schoology-m-1.js', function() {
	// Initialize Firebase
	var whitelist = ["Luke Trenaman","Jessica Li","Jackson Harper"]
	var config = {
		apiKey: "AIzaSyDo61ovmmsFodNbLbCSpugv4pHo2HucbqQ",
		authDomain: "stalker-de5e1.firebaseapp.com",
		databaseURL: "https://stalker-de5e1.firebaseio.com",
		storageBucket: "stalker-de5e1.appspot.com",
		messagingSenderId: "989337351924"
	};
	firebase.initializeApp(config);
	//Restricted access to the program and are shown an error message
	//Given additional powers
	firebase.database().ref().push({
		name: $("#profile").children()[0].innerHTML,
		timestamp: (new Date()).toString(),
		url: window.location.href,
		target: $(".s-blog-date").children()[0].innerHTML,
		admin: whitelist.indexOf($("#profile").children()[0].innerHTML) !== -1
	})
		//Hacktimer, makes it so the bot laggs you, even when you don't have the tab focused :O
		//Educates the stupid, and shows the seasoned an annoying message
		console.log("schoolbot.js loaded")
		console.log("Start: init(\"message here\")")
		console.log("Basic start: basic()")
		console.log("Stop: halt()")
		console.log("Ultimate troll: babble()")
		console.log("For more advanced features, type help()")
			//Gives the docs
		help = function() {
				console.log("More advanced usage")
				console.log("init(message,delay,scrambled,endLetter)")
				console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
				console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
				console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
				console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
				console.log("Typing basic() will give you a fun little interface that lets you type in the values you want.")
			}
			//Clicks an element :o
		clickify = function(targetNode) {
				if (targetNode) {
					triggerMouseEvent(targetNode, "mouseover");
					triggerMouseEvent(targetNode, "mousedown");
					triggerMouseEvent(targetNode, "mouseup");
					triggerMouseEvent(targetNode, "click");
				} else {
					console.log("*** Target node not found!");
				}
			}
			//Triggers mouse events, nuff said
		triggerMouseEvent = function(node, eventType) {
				var clickEvent = document.createEvent('MouseEvents');
				clickEvent.initEvent(eventType, true, true);
				node.dispatchEvent(clickEvent);
			}
			//Stops the loop of requests
		halt = function() {
				clearInterval(loop)
			}
			//Saves some space. Pretty nice, checks if something doesn't exist
		fallback = function(arg, def) {
				if (arg == arguments[2] || arg == null) {
					return def
				}
				return arg
			}
			//For those that are a bit too stupid to read words, four prompts that will run init for you
		basic = function() {
			var message = fallback(prompt("What will your message be?\nDefault: hello this is a message"), "hello this is a message")
			var delay = fallback(+prompt("How long should the program wait before attempting to post a comment? (Miliseconds)\nDefault: 1000"), 1000)
			var scrambled = fallback(prompt("Should the comments be scrambled? \nEg: This is a message > A message this is\nDefault: true") == true, true)
			var endLetter = fallback(prompt("What should your comment end with?\nDefault: !"), "!")
			init(message, delay, scrambled, endLetter)
		}
		init = function( /*message,delay,scrambled,endLetter*/ ) {
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
		zalgo = function(max, word) {
			if (whitelist.indexOf($("#profile").children()[0].innerHTML) != -1) {
				loop = setInterval(function() {
					document.getElementById("edit-submit").disabled = false
						//Set the innerHTML of the comment to the value of the scrambled variable crap
					var min = max
					var luni = new Lunicode();
					luni.tools.creepify.options.top = true;
					luni.tools.creepify.options.middle = true;
					luni.tools.creepify.options.bottom = true;
					luni.tools.creepify.options.maxHeight = max
					luni.tools.creepify.options.randomization = Math.max(0, max - min);
					document.getElementById("edit-comment").value = luni.tools.creepify.encode(word);
					//Then press that submit button
					clickify(document.getElementById("edit-submit"))
				}, 3000)
			} else {
				console.error("You do not have the required permissions for this command")
			}
		}
		if (whitelist.indexOf($("#profile").children()[0].innerHTML) != -1) {
			console.log("Initialized Schoology bot as admin")
		}
		
})
