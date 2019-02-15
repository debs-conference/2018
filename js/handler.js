function mobileFunction() {
	var x = document.getElementById("nav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}

window.addEventListener("resize",resizeFunction);

function resizeFunction(){
	var x = document.getElementById("nav");
	if(window.innerWidth>600){ //normal view
		//set nav className back to "navbar"
		if (x.className != "navbar") {
			x.className = "navbar";
		}
		//close all dropdowns
		closeDropdowns();
	}
}

function showContent(obj){
	if(document.getElementById("nav").className!="navbar"){
		var drops = document.getElementsByClassName("dropdown");
		for(var i=0; i<drops.length; i++){
			var x = drops[i].firstElementChild;
			if(obj!=drops[i].firstElementChild){
				x.className= "dropbtn";
				x.nextElementSibling.className = "dropdown-content";
			}else{
				if (x.className === "dropbtn") {
					x.className += " show";
					x.nextElementSibling.className += " show";
				} else {
					x.className = "dropbtn";
					x.nextElementSibling.className = "dropdown-content";
				}
			}
		}
	}
}

function closeFunction(){
	var x = document.getElementById("nav");
	if (x.className === "navbar"){
		closeDropdowns();
	}
}
	
function closeDropdowns(){
	var drops = document.getElementsByClassName("dropdown");
	for(var i=0; i<drops.length; i++){
		var y = drops[i].firstElementChild;
		y.className = "dropbtn";
		y.nextElementSibling.className = "dropdown-content";
	}
}
