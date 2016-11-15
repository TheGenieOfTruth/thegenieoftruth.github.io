var ideas = ["blaze","cheeze","blazecheese"]
var crappy = ["chez","whez","dez","chezwhez"]
function gen(){
  function grab(arr){
    var length = arr.length
    return arr[Math.floor(Math.random()*length)]
  }
  document.getElementById("lit-div").innerHTML += grab(ideas) + grab(crappy) + "<br>"
}
