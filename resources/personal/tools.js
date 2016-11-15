//Honestly, this is a bit too much junk.
var tools = {
    //If you don't know what this is, you have problems kiddo
    alphabet:"abcdefghijklmnopqrstuvwxyz".split(""),
    // == String modification functions ==
    //Strings Like This
    titleCase: function(val){
        return val.split(" ").map(function(item){
            return item.substring(0,1).toUpperCase()+item.substring(1,item.length).toLowerCase()
        }).join(" ")
    },
    //sgnirts ekil siht
    reverseWords:function(val){
        return val.split(" ").map(function(item){
            return item.split("").reverse("").join("")
        }).join(" ")
    },
    //siht ekil sgnirts
    reverse:function(val){
        return val.split("").reverse("").join("")
    },
    //sTrInGs LiKe ThIs
    alternate:function(val){
        val = val.split("")
        var toggle = false
        for(i=0;i<val.length;i++){
            if(tools.alphabet.indexOf(val[i].toLowerCase())!=-1){
                if(toggle){
                    val[i] = val[i].toUpperCase()
                } else{
                    val[i] = val[i].toLowerCase()
                }
                toggle = !toggle
            }
        }
        return val.join("")
    }
}
//Aliases, free typos for all
tools.titlecase = tools.titleCase
tools.reversewords = tools.reverseWords
