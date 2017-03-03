$(function(){
function activate(id,title,content){
$(function () {
  $(id).attr("data-html","true")
  $(id).attr("title",title)
  $(id).attr("data-content",content)
  $(id).popover("show")
})
}
function deactivate(id){
$(function () {
  $(id).attr("title","")
  $(id).attr("data-content","")
  $(id).popover("hide")
})
}
var squaresize = 10
var gridsize = 51
var place = document.getElementById("place")
var add = ""
var colors = ["black"]
	for(y=0;y<gridsize;y++){
	add+="<tr id = "+y+">"
		for(x=0;x<gridsize;x++){
			add+="<td style = 'width:"+squaresize+"px;height:"+squaresize+"px;margin:0px;border:solid 1px gray;display:inline-block;background:"+colors[(y*gridsize+x)%colors.length]+"' id = "+y+"-"+x+"></td>"
		}
	add+="</tr>"
	}
var grid = []
var newgrid = []
var rules = {
	live:{
		under:"rule('x<2',false)",
		live:"rule('x==2||x==3',true)",
		over:"rule('x>3',false)"
	},
	dead:{
		reproduction:"rule('x==3',true)"
	}
}
for(y=0;y<gridsize;y++){
	grid[y] = []
	for(x=0;x<gridsize;x++){
		grid[y][x] = Math.round(Math.random())
	}
}

place.innerHTML = add
function next(){
	for(y=0;y<gridsize;y++){
		newgrid[y] = []
		for(x=0;x<gridsize;x++){
			newgrid[y][x] = 0
		}
	}
//Generate newgrid.
	for(x=0;x<gridsize;x++){
		newgrid[x] = []
		//Continue generating...
		for(y=0;y<gridsize;y++){
			//Generate with values
			newgrid[x][y] = grid[x][y]



		}
	}
	//Generated, run rules
		for(x=0;x<gridsize;x++){
		for(y=0;y<gridsize;y++){
			if(tempx>gridsize){tempx = tempx-gridsize}
				var tempy = y-1
				var tempx = x-1
				if(tempx>gridsize){tempx = tempx-gridsize}
				if(tempx<0){tempx=tempx+gridsize}
				if(tempy>gridsize){tempy = tempy-gridsize}
				if(tempy<0){tempy=tempy+gridsize}
				if(newgrid[x][y]==1){
					newgrid[x][y] = 0
					newgrid[tempx][tempy] = 1
			}


		}
	}
	//Display values
	for(x=0;x<gridsize;x++){
		for(y=0;y<gridsize;y++){
			if(newgrid[x][y]==2){
				color = "yellow"
			}
			if(newgrid[x][y]==1){
				color = "white"
			}
			else if(newgrid[x][y]==0){
				color = "black"
			}
			document.getElementById(x+"-"+y).style.background = color
		}
	}
	grid = newgrid
	newgrid = []
}
setInterval(function(){next()},1)
})
