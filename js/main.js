$(document).ready(function(){


	$(".calcbutton").click(function(){
		var text=document.getElementById("test").value;
		
		if (text.length<=0){
			$("#test").val($(this).text());
		}
		else{
			$("#test").val(text+=" "+$(this).text());
			
		}

	});
	$("#equal").click(function(){
		var text=document.getElementById("test").value;
		$("#test").val(math.eval(text));
	});
	$("#ce").click(function(){
		$("#test").val("");
	});

});