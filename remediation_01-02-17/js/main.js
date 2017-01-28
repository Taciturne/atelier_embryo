window.addEventListener("load",function(){




	var btn = document.getElementById("swap_color");
	var square = document.getElementById("square");
	var btnClicked = true;

	btn.addEventListener("click", function() {
		if(btnClicked == true) {

			square.classList.add("color_blue");
			square.classList.remove("color_green");

			btnClicked = false;

		}
		else {

			square.classList.add("color_green");
			square.classList.remove("color_blue");

			btnClicked = true;

		};
	});

function $(element){
	return document.querySelector(element);
};


/*********************
    EFFET PARALLAX
**********************/

window.addEventListener('scroll', function(){
	var wScroll = window.scrollY;
	if (wScroll <= document.getElementsByTagName('header')[0].clientHeight) {
		document.getElementsByClassName("title")[0].style.transform = "translate(0px,"+wScroll/10+"%)";
		document.getElementsByTagName("header")[0].style.backgroundPositionY = +wScroll*-1.5+"px";
	}

})

/*********************
    dynamics.JS
**********************/
var path = document.querySelector("svg path"),
		from = path.getAttribute("d"),
		to = path.dataset["to"],
		n = 1,
		flag = true;

animate()
function animate(){
	n=6;
	if(flag){
		flag = false
		dynamics.animate(path, {
				d : to,
		}, {
			type: dynamics.easeOut,
		  duration: 6000,
		  friction: 243
		})
	}
	else {
		flag = true
		dynamics.animate(path, {
				d : from,
		}, {
			type: dynamics.easeOut,
		  duration: 6000,
		  friction: 243
		})
	}
};
setInterval(function(){animate()},6000)
});
