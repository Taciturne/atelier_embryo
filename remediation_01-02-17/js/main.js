(function Swap_color(){

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
})();