//refactored from Jquery to vanilla JS
	const getText = ()=>{
		return document.getElementById("field").value;
	}

	const doTheMath=()=>{
		let text=getText();
		let field=document.getElementById("field");
		field.value=math.eval(text);
	}

	const calcButtons=document.querySelectorAll(".calcbutton");

	calcButtons.forEach(button=>{button.addEventListener("click", (event)=>{
		let text = getText();
		let field=document.getElementById("field");
		field.value=text+event.target.innerHTML;
			});
		}
	);

	const equalButton=document.getElementById("equal");

	equalButton.addEventListener("click", function(){
		doTheMath();
	});

	document.querySelector("#field").addEventListener("keypress", function(e){
		if (e.key==="Enter"){
			doTheMath();
		}
	});

	const clearEntry=document.getElementById("ce");

	clearEntry.addEventListener("click", function(){
		let field=document.getElementById("field");
		field.value="";
	});

