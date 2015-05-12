var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var conHeight = h * .8;
var conWidth = w * .6;
$(document).ready(function(){
	$("body").append("<div class='container'></div>");
	var initial = 16;
	create(initial);
	var divs = $(".container > div");
	divs.hover(function(){
		$(this).addClass("highlighta");
	},function(){

		$(this).fadeTo(400,1,function(){$(this).removeClass("highlighta");});
		

	});
	divs.click(function(){
		$(this).toggleClass("selected");
	});
});

function option()
{
	
	var x =prompt("Enter a number for a new grid from 1 to 128","Enter your number here!");
	if(x > 0 && x < 129)
	{
		$(".container").empty();
		create(x);
		var divs = $(".container > div");
		divs.hover(function(){
			$(this).addClass("highlighta");
		},function(){

			$(this).fadeTo("slow",1,function(){$(this).removeClass("highlighta");});
			

		});
		divs.click(function(){
			$(this).toggleClass("selected");
		});
	}
	else
	{
		window.alert("I'm sorry Dave, I'm afraid I can't do that");
	}
}


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

	$(".container > div").css({"height": "" + conHeight/z + "px","width": "" + conWidth/z + "px"});
}