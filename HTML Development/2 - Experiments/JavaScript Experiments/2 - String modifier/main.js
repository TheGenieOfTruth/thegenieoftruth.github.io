var alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabet = alphabet.split("")
function change(text){
	var oldText = "text"
	var newText = "text"
	switch(text){
		case 'lowercase':
			document.getElementById(newText).value = document.getElementById(oldText).value.toLowerCase()
		break;
		
		case 'uppercase':
			document.getElementById(newText).value = document.getElementById(oldText).value.toUpperCase()
		break;
		
		case 'alternating':
			var toAlternate = document.getElementById(oldText).value
			var next = ""
			var onOff = false
			var correct = false
			for(i=0;i<toAlternate.length;i++){
				for(j=0;j<alphabet.length;j++){
					if(toAlternate.substring(i,i+1).toLowerCase()==alphabet[j]){
						correct=true
						if(onOff){
							next+=toAlternate.substring(i,i+1).toUpperCase();
							onOff=false;
						}
						else{
							next+=toAlternate.substring(i,i+1).toLowerCase();
							onOff=true;
						}
					}
				}
				if(!correct){
					next+=toAlternate.substring(i,i+1)
				}
				correct = false
			}
			document.getElementById(newText).value=next
		break;
		
		case 'reverseall':
			var toReverse = document.getElementById(newText).value
			var next = ""
			for(i=0;i<=toReverse.length;i++){
				if(toReverse[toReverse.length-i] != undefined){
					next += toReverse[toReverse.length-i]
				}
			}
			document.getElementById(newText).value = next
		break;
		
		case 'reversewords':
			var toReverse = document.getElementById(newText).value.split(" ")
			var next = ""
			for(i=0;i<toReverse.length;i++){
				for(j=0;j<=toReverse[i].length;j++){
					if(toReverse[i][toReverse[i].length-j] != undefined){
					next += toReverse[i][toReverse[i].length-j]
					}
				}
				next = next + " "
			}
			
			document.getElementById(newText).value = next.substring(0,next.length-1)
		break;
		
		case 'titlecase':
			var titleCasify = document.getElementById(newText).value.split(" ")
			var next = ""
			for(i=0;i<titleCasify.length;i++){
				next = next+titleCasify[i].substring(0,1).toUpperCase() + titleCasify[i].substring(1,titleCasify[i].length).toLowerCase() + " "
			}
			document.getElementById(newText).value = next
		
		break;
		
		case 'grammarcase':
			var getGotten = document.getElementById(newText).value
			var tag = false
			for(i=0;i<getGotten.length;i++){
				if(getGotten[i]=="!"||getGotten[i]=="?"||getGotten[i]=="."){
					var count = 0
					while(!tag){
						if(!getgotten[i+count]==undefined){
							if(getGotten[i+count].toLowerCase==alphabet[count].toLowerCase()){
							
							}
						}
						count++
					}
				}
			}
		break;
	}
		
}
function timer(id,property){
	setInterval(function(){
		document.getElementById(id).innerHTML = eval("document.getElementById('text').value." + property)
	},100)
}
timer("length","length")