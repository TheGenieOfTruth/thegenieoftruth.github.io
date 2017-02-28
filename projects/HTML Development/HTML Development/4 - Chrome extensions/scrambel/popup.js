function scramble(str){
  str = str.toLowerCase().split("")
  var arr = new Array();
  const length = str.length;
  for(i = 0 ; i < length; i ++){
    rand = Math.floor(Math.random()*str.length)
    arr.push(str[rand])
    str.splice(rand,1)
  }
  return arr.join("")
}