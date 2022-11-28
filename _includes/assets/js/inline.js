// Add your inline JS here
function changeBackground() {
	var colors = ['#e8b5b5', '#e8dab5', '#d1e8b5', '#b5e8e7', '#c4b5e8', '#e8b5da', '#e8b5b5'];
	var color = colors[Math.floor(Math.random()*colors.length)];
   	document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground() });
