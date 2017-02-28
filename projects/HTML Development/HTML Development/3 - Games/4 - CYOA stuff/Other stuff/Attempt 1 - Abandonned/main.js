function generateOptionsPopover(){
    for(i=0;i<4;i++){
        eval(arguments[i]+"Popover = function(element){$(element).popover('"+arguments[i]+"')}")
    }
}
generateOptionsPopover("delete","show","hide","toggle")
//
function setPopover(element,title,content,killButton,toggled,next,position,onclick,trigger){
    function render(input,fallback){
        if(input==undefined||input=="default"){
            return fallback
        }
        else{
            return input
        }
    }
    function kB(label){
        return '<button onclick = $("'+element+'").click() class = "btn btn-sm" style = "float:right;margin-top:10px;margin-bottom:10px">'+label+"</button><br/><br/>"
    }
    var element = render(arguments[0],"")
    var title = render(arguments[1],"Title")
    var content = render(arguments[2],"Hmmm, there should be stuff here but instead there is the default fallback.")
    var killButton = render(arguments[3],"Close")
    var toggled = render(arguments[4],"false")
    var next = render(arguments[5],"")
    var position = render(arguments[6],"bottom")
    var onclick = render(arguments[7],"")
    var trigger = render(arguments[8],"click")
    $(element).attr('data-content', content + kB(killButton))
    .attr('onclick',onclick)
    .attr('data-trigger',trigger)
    .attr("data-placement",position)
    .attr("data-html",true)
    .attr('title',title)
    .popover('fixTitle')
    if(toggled){
        $(element).popover('show');
    }
    hidePopover(element)
}
var ct = 0
var current = [1]
var viewlocation = "story.s1"
var story = new Object();
story.s1 = {
    lore:"What do you dooo?",
    choices:[
    {name:"Dance",link:"s1"},
    {name:"Quack",link:"s2"},
    {name:"Derp",link:"s3"}
    ]
}
var refresh = function(){
    render(eval(viewlocation))
    $("button").addClass("btn btn-default")
}
var update = function(obj,obj2){
    obj.link = $(obj).val()

}
function render(obj){
    var choices = obj.choices
    var codes = ""
    for(i=0;i<choices.length;i++){
        ct++
        "\"hello\""
        codes = codes+"<button id = "+ct+" style = 'width:"+98/obj.choices.length+"%'>"+obj.choices[i].name+"</button>"
        console.log("#"+ct)

    }
    $("#content").html(obj.lore+"<br/>"+codes)
    for(i=0;i<choices.length;i++){
        var content = ""
        if(obj.choices[i].link){
            content = "Links to "+obj.choices[i].link
        }
        else{
            content = 'This option leads no where.'
        }
        content = content+'<br/><br/><div class="input-group"><span class="input-group-addon" id="basic-addon1">Link</span><input type="text" class="form-control" placeholder="Username" oninput = "update('+obj.choices[i]+',this)" aria-describedby="basic-addon1"></div>'
        setPopover(
        "#"+(ct-i),
        $("#"+(ct-i)).html(),
        content
        )
    }
}
$(function(){

    refresh()
})
