var rows = 2
var columns = 2
var focus = {
  x:null,
  y:null
}
var validateContextMenu = false
var currentElement = null
function rep(times){
  var finish = ""
  for(i=0;i<times;i++){
    finish += "<td class = 'square' id = "+rows+"-"+i+" contenteditable oninput = 'getData();register(this)' oncontextmenu = 'cycle(this);register(this); return false' onclick = 'register(this)'></td>"
  }
  return finish
}
function addRow(){
  document.getElementById("table").innerHTML+= "<tr class = 'row'>"+rep(columns)+"</tr>"
  rows++
  document.getElementById("sidebar").setAttribute("rowspan",String(rows+1))
  document.getElementById("footer").focus()
}
function addColumn(){
  var len =document.getElementById("first").children.length
  var elem = document.getElementById("first").children[len-1]
  elem.parentElement.removeChild(elem)
  var elements = document.getElementsByClassName("row")
  for(i=0;i<elements.length;i++){
    elements[i].innerHTML+="<td class = 'square' id = "+i+"-"+columns+" contenteditable oninput = 'getData();register(this)' oncontextmenu = 'cycle(this);register(this); return false' onclick = 'register(this)'></td>"
  }
  columns++
  document.getElementById("footer").setAttribute("colspan",String(columns+1))
  document.getElementById("first").innerHTML+='<td id = "sidebar" rowspan='+rows+' class = "wider btn-default" onclick = "addColumn();getData()" >+</td>'
  document.getElementById("sidebar").focus()
}
function getData(){
    if(validateContextMenu){endContextMenu()}
    var finish = new Array()
    for(i=0;i<rows;i++){
        finish.push(new Array())
        for(j=0;j<columns;j++){
            finish[i].push(document.getElementById(i+"-"+j).textContent)

        }
    }
    document.getElementById("export").innerHTML = JSON.stringify(finish)
    validContextMenu=true
}
function register(element){
/* `
    <h4>Cell type here</h4>
    <div class="btn-group toggle-onoff">
  	<button type="button" class="btn btn-green">ON</button>
  	<button type="button" class="btn btn-default">OFF</button>
  </div>
  `*/
    var elem = element
    var id = element.id.split("-")
    focus.x = Number(id[0])
    focus.y = Number(id[1])
    var name = element.textContent
    var tileData = {
        tiles : "+=>f".split(""),
        names : "Wall Gate Player Finish".split(" ")
    }
    if(tileData.tiles.indexOf(name)===-1){
        document.getElementById("celleditor").innerHTML = `
        <h4>Invalid cell type  <span class = 'text-small'>(`+elem.id+`)</span></h4>
        <p>`+name+` is not a valid cell type. </p>
      `
  } else{
      document.getElementById("celleditor").innerHTML = `
      <h4>`+tileData.names[tileData.tiles.indexOf(name)]+`  <span class = 'text-small'>(`+elem.id+`)</span></h4>
      Fake option
      <div class="btn-group toggle-onoff">
    	<button type="button" class="btn btn-green">ON</button>
    	<button type="button" class="btn btn-default">OFF</button>
    </div>
    <br>
    <br>
    Fake option that you can't use
    <div class="btn-group toggle-onoff">
    <button type="button" class="btn btn-red NA">N/A</button>
  </div>
    `
    toggleInit()
  }
}
function cycle(element){
    var a = element.textContent
    function b(value){
        element.innerHTML = value
    }
    var list = "+=>f".split("")
    var next = Array(list[list.length-1]).concat(list.slice(0,list.length-1)) //f+=>
    if(list.indexOf(a)===-1){
        b("+")
    } else{
        b(next[(next.indexOf(a)+1)%(list.length)])
    }
    currentElement = element
    getData()
    return false;
}
function toggleInit(){

    function ondone(){
        if(toggle){
        	yes.className = "btn btn-green"
       		no.className = "btn btn-default"
        }
        else{
        	yes.className = "btn btn-default"
          no.className = "btn btn-green"
        }
    }
var toggles = document.querySelectorAll(".toggle-onoff")
for(i=0;i<toggles.length;i++){
  var toggle = true
  if(toggles[i].children.length>1){
  var yes = toggles[i].children[0]
	yes.onmousedown = function(){
        toggle = true
        ondone()
  }
  var no = toggles[i].children[1]
  no.onmousedown = function(){
      toggle = false
      ondone()
  }
}

}}
toggleInit()
getData()
