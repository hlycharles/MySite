$(document).ready(function() {
	//generate background image at index page
	var createBg = function(canvas) {
		var imgWidth = canvas.offsetWidth / 4;
		var imgHeight = canvas.offsetHeight / 4;
		var ctx = canvas.getContext("2d");
		var bgData = ctx.createImageData(imgWidth, imgHeight);
		for (var i = 0; i < bgData.data.length; i+=4) {
			bgData.data[i+0] = 12;
			bgData.data[i+1] = 20;
			bgData.data[i+2] = 10;
			bgData.data[i+3] = 255;
		}
		ctx.putImageData(bgData, 0, 0);
	};

	var $canvas = document.getElementsByClassName("bgCanvas")[0];
	createBg($canvas);

	
});

