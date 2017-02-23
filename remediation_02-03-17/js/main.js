/*function maBoucle (number) {
	var number = 0;

	while (number < 11) {
		var number = prompt("Donnez un nombre");
	}

	document.getElementById("number").innerHTML = number + " > 10";
};

maBoucle();*/

/*var number = 20;
var i = 0;

while (i < 9) {
	number = number + 1;
	console.log(number);
	i++;
}*/

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
