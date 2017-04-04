module.exports = new function(){
    this["3xhex"] = function(frames){
        return "0123456789abcdef".split("").map(function(val){
        if(frames%200 < 50){
            return "#"+val+val+"0000"
        } else if(frames%200 < 100){
            return "#00"+val+val+"00"
        } else if(frames%200 <150){
            return "#0000"+val+val
        } else{
            return "#"+val+val+val+val+val+val
        }
    })
}

}
