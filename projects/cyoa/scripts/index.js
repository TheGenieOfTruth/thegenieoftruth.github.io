console.log("ay")
var resize = require("./misc/autoresize")
var clip = require("./misc/clip")
function grp() {
    $(".icon-group").prepend($(`
    <div class = "toolbar">
	</div>
	<div class = "menu">
		<div class = "icon-4" data-toggle="tooltip" title="Duplicate this choice and connected items">
			<i class="fa fa-clone fa" aria-hidden="true"></i>
		</div
		><div class = "icon-3" data-toggle="tooltip" title="Remove this choice and connected items">
			<i class="fa fa-times fa" aria-hidden="true"></i>
		</div
		><div class = "icon-2" data-toggle="tooltip" title="Add new choice on same level">
			<i class="fa fa-plus fa" aria-hidden="true"></i>
		</div
		><div class = "icon-1" data-toggle="tooltip" title="Add new choice on next level" data-placement="left">
			<i class="fa fa-indent fa" aria-hidden="true"></i>
		</div>
		
	</div>
	`))
    $(".icon-group").removeClass("icon-group").addClass("ig")
}
grp()
$(".icon-group-start").prepend($(`
	<div class = "toolbar">
	</div>
	<div class = "menu">
		<div class = "icon-1" data-toggle="tooltip" title="Add new choice on next level" data-placement="left">
			<i class="fa fa-indent fa" aria-hidden="true"></i>
		</div>
		
	</div>
	`))
$(".icon-group-start").removeClass("icon-group-start").addClass("ig")

function iconF() {
    grp()
    i1()
    i2()
    i3()
    i4()
    resize()
    $('[data-toggle="tooltip"]').tooltip();
}

function i1() {
    $(".icon-1").unbind('click').click(function() {
        $(`
        <div class = "group">
        <br>
		<div class = "icon-group">
			<div contenteditable = "plaintext-only" class = "form-control">%%opt This is an option%%<br>
You realize that this option was probably an option ` + Math.random() + `</textarea>
		</div>
		</div>
	`).insertAfter($(this).parent().parent())
        iconF()
    })
}

function i2() {
    $(".icon-2").unbind('click').click(function() {
        $(`
        <div class = "group">
        <br>
		<div class = "icon-group">
			<div contenteditable = "plaintext-only" class = "form-control">%%opt This is an option%%<br>
You realize that this option was probably an option ` + Math.random() + `</textarea>
		</div>
		</div>
	`).insertAfter($(this).parent().parent().parent())
        iconF()
    })
}

function i3() {
    $(".icon-3").unbind('click').click(function() {
        $(this).parent().parent().parent().remove()
        $(".tooltip").remove()
    })
}

function i4() {
	$(".icon-4").unbind('click').click(function() {
	var elem = $(this).parent().parent().parent().clone()
	$(elem).insertAfter($(this).parent().parent().parent())
	iconF()
	})
}
$("#export").click(function(){
	var data = {}
	data = JSON.stringify(data)
	$('#clip').modal()
	$("#ct").html(data)
	clip(data)
})
iconF()