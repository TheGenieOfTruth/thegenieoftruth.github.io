//Minified functions, toFixed, abbN, fix, save, and load
function save(e,t){localStorage.setItem(e,t)}function load(e){
  if(localStorage.getItem(e)===null){
    return 0
  } else{
  return localStorage.getItem(e)}}
  function toFixed(e){if(Math.abs(e)<1){var t=parseInt(e.toString().split("e-")[1]);t&&(e*=Math.pow(10,t-1),e="0."+new Array(t).join("0")+e.toString().substring(2))}else{var t=parseInt(e.toString().split("+")[1]);t>20&&(t-=20,e/=Math.pow(10,t),e+=new Array(t+1).join("0"))}return e}function abbN(e){var t=!1;0>e&&(e=Math.abs(e),t=!0),decPlaces=Math.pow(10,3);for(var a=["k","mil","bil","tri","qua","qui","hex","sep","oct","non","dec","duodec","triodec","quadridec","quintidec","hexadec","septadec","octodec","nonodec"],r=a.length-1;r>=0;r--){var n=Math.pow(10,3*(r+1));if(e>=n){e=Math.round(e*decPlaces/n)/decPlaces,e+=a[r];break}}return t?"-"+e:e}function fix(e){return abbN(toFixed(Math.round(e)))}
//This is just a bunch of crap counters for any reason you'd need one...
var counters = {
    c1:0
}
//How many donuts you have :O
var donuts = 0
    //To automate shop item creation
var shop = [{
    type: "robot",
    name: "Robot",
    lore: "I am robot",
    tether:1,
    price: 2,
    benefit: 3,
    scaling:1
}, {
    type: "manual",
    name: "Handses",
    lore: "Improve your handses by buying new ones",
    tether:1,
    price: 100,
    benefit: 3,
    scaling:1
}, {
    type: "specialization",
    name: "Basic specialization",
    lore: "Improve tier one items",
    tether:1,
    price: 300,
    benefit: 3,
	scaling:1
}, {
    type: "science",
    name: "Basic science",
    lore: "Improve overall multiplier and get more science",
    price: 1000,
    benefit: 0.01,
    scaling:1
}, {
    type: "robot",
    name: "Robot",
    lore: "I am robot",
    price: 30,
    benefit: 3,
    scaling:1
}, {
    type: "manual",
    name: "Handses",
    lore: "Improve your handses by buying new ones",
    price: 100000,
    benefit: 3,
    scaling:1
}, {
    type: "specialization",
    name: "Basic specialization",
    lore: "Improve tier one items",
    price: 300,
    benefit: 3,
    scaling:1
}, {
    type: "science",
    name: "Basic science",
    lore: "Improve overall multiplier and get more science",
    price: 1000,
    benefit: 0.01,
    scaling:1
}]
var game = {
  manual:1,
  robot:0
}
function buy(obj,element){

    if(obj.price*Math.pow(obj.scaling,obj.count)<=donuts){
        donuts = donuts-obj.price*Math.pow(obj.scaling,obj.count)
        obj.count+=1
        update()
        calculate()
        obj.update()
        obj.save()
    }
}
function initializeShop() {
    function render(obj) {
      console.log(counters.c1 + " count")
      obj.count = load("Item "+counters.c1)
      obj.id = counters.c1
      obj.save = function(){save("Item "+this.id,this.count);console.log("Saved Item " + this.id)}
      obj.update = function(){document.getElementById("price-"+this.id).innerHTML = "$" + fix(this.price*Math.pow(this.scaling,this.count))
      donuts >= this.price*Math.pow(this.scaling,this.count) ?   this.enable() :this.disable()
  }
      obj.disable = function(){document.getElementById(this.id).className+=" disabled"}
      obj.enable = function(){document.getElementById(this.id).className =
   document.getElementById(this.id).className.replace
      ( /(?:^|\s)disabled(?!\S)/g , '' )}
      obj.count = Number(obj.count)
        function createFunction(name,fn){
            window[name] = fn
       }
       createFunction("buy"+counters.c1,function(){
           buy(obj)
       })
        var final =

            `
            <div class = 'item-sm'>
                        <h4>` +
            obj.name +
            `<span title = "
            <h1 class = nomargin>Info</h1>
            <hr class = margin3>
              <div class = 'text-left'>
                <h5 class = nomargin>
                  <i>`+obj.lore+`</i>
                </h5>

                Price: $`+fix(obj.price*Math.pow(obj.scaling,obj.count))+`<br>
                Type: `+obj.type.substring(0,1).toUpperCase()+obj.type.substring(1,obj.type.length)+`<br>
                Base improvement: `+fix(obj.benefit)+`
                </div>

                " data-html = "true" id = "tooltip-`+obj.id+`" data-toggle = "tooltip" class="glyphicon glyphicon-info-sign pull-right" aria-hidden="true"></span></h4>

            </div>
            <div class = 'item-lg'>
                <h5>` +
            obj.lore +
            `</h5>
            </div>
                <but`+`ton class = "btn palette-4 btn-sm item-button" id = `+obj.id+` onclick = \"buy`+counters.c1+`()\">Buy today for <span id = price-`+obj.id+`>$` + fix(obj.price) +
            `</span></but`+`ton>
            <br>
            <br>
            <br>
        `
        counters.c1++
        document.getElementById(obj.type).innerHTML = document.getElementById(
            obj.type).innerHTML +final
        setTimeout(function(){$("#tooltip-"+obj.id).tooltip()},0)
    }
    shop.forEach(function(obj){
         render(obj)
        obj.update()
    })
}

function update() {
    shop.forEach(function(obj){obj.update()})
    var t = donuts == 1 ? " donut" : " donuts"
    document.getElementById("tissuecount").innerHTML = "You have " +
        fix(donuts) + t
}

function click() {
    donuts = donuts + game.manual
    update()
}
function calculate(){
  var items = shop
  //Gives an array of all items.
  //Now how would I categorize le' objects. THAT'S RIGHT! USE DAT FILTER CRAP
  function filterify(check) {

    return function(val){
      return val['type'] === check
    }
}
  function evaluate(val){
    return val.count*val.benefit*science
  }
  function scienceEvaluate(val){
    return val.count*val.benefit
  }
  function add(a, b) {
    return a + b;
}
  var specialization = items.filter(filterify("specialization"))
  var science = items.filter(filterify("science")).map(scienceEvaluate).reduce(add,0)+1
  var manual = items.filter(filterify("manual")).map(evaluate).reduce(add,0)
  var robot = items.filter(filterify("robot")).map(evaluate).reduce(add,0)
  console.log(manual)
  console.log(robot)
  game.robot = robot
  game.manual = manual+1

}
window.onload = function() {
    initializeShop()
    update()
    document.getElementById("makeDonuts").onclick = function() {
        click();
    }
    setInterval(function(){
      calculate()
      donuts+=game.robot
      update()
    },1000)
}
