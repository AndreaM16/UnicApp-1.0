var myScroll;

function loaded () {
	myScroll = new IScroll('#wrapper');
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);