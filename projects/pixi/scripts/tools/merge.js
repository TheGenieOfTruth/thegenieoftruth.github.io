module.exports = function(a,b){
    return function(){
        a.call(this,arguments)
        b.call(this,arguments)
    }
}
