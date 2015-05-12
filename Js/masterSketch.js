
$(document).ready(function(){
	$("body").append("<div class='container'></div>");
	for(var x = 0; x < 16; x++)
	{
		for(var y = 0; y < 16; y++)
		{
			$(".container").append("<div></div>");
		}
	}
	$(".container > div").hover(function(){
		$(this).addClass("highlight");
	},function(){
		$(this).removeClass("highlight");
	});



});