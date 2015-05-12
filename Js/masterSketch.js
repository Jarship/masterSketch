var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var conHeight = h * .8;
var conWidth = w * .6;
$(document).ready(function(){
	$("body").append("<div class='container'></div>");
	var initial = 16;
	create(initial);
	var divs = $(".container > div");
	divs.css({"height": "" + conHeight/initial + "px","width": "" + conWidth/initial + "px"});
	divs.hover(function(){
		$(this).addClass("highlighta");
	},function(){

		$(this).fadeTo("slow",1,function(){$(this).removeClass("highlighta");});
		

	});
	divs.click(function(){
		$(this).toggleClass("selected");
	});


});



function create(z)
{
	var count = new Array();
	var num = 0;
	for(var x = 0; x < z; x++)
	{
		for(var y = 0; y < z; y++)
		{
			/*$(".container").append("<div></div>")*/
			count[num] = "<div></div>";
			num++;
		}
	}
	$(".container").append(count);
}