
var init = 1;
function toggle() {
	console.log("click");
	document.querySelector('main>.site-nav ul').style.display =
		(document.querySelector('main>.site-nav ul').style.display == 'none' || init != 0) ? 'block' : 'none';
	init = 0;
}

document.getElementById('menu-toggle').addEventListener('click', toggle);
const mql = window.matchMedia("(min-aspect-ratio: 1/1)");
mql.onchange = function(e){
	if (e.matches) {
		if(document.querySelector('main>.site-nav ul').style.display == 'none'){
			document.querySelector('main>.site-nav ul').style.display = 'block';
		}
	  } else {
		if(document.querySelector('main>.site-nav ul').style.display == 'block'){
			document.querySelector('main>.site-nav ul').style.display = 'none';
		}
	  }
}
