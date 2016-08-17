$(document).ready(function() {
	//generate background image at index page
	var createBg = function(canvas) {
		var imgWidth = canvas.offsetWidth / 4;
		var imgHeight = canvas.offsetHeight / 4;
		var ctx = canvas.getContext("2d");
		var bgData = ctx.createImageData(imgWidth, imgHeight);
		for (var i = 0; i < bgData.data.length; i+=4) {
			bgData.data[i+0] = 249;
			bgData.data[i+1] = 249;
			bgData.data[i+2] = 249;
			bgData.data[i+3] = 255;
		}
		ctx.putImageData(bgData, 0, 0);
	};
	var $canvas = document.getElementsByClassName("bgCanvas")[0];
	createBg($canvas);
	//adjust the height of information div to be the same as image height
	var fitImgHeight = function() {
		var imgElem = document.getElementById("profile");
		var imgH = $(imgElem).height();
		$(document.getElementById("mainIntro")).height(imgH);
	}
	fitImgHeight();
	$(window).resize(function() {
		fitImgHeight();
	});
	//check if image is hidden on small screens
	var profileImg = $(document.getElementById("profile"));
	var introDiv = $(document.getElementById("mainIntro"));
	profileImg.on("load", function() {
		if (profileImg.offset().left + profileImg.width() > 
			introDiv.offset().left) {
			profileImg.fadeTo(0, 0);
			var widthInc = introDiv.offset().left - profileImg.offset().left;
			var imgX = profileImg.offset().left;
			introDiv.offset({left:imgX});
			introDiv.width(widthInc + introDiv.width());
		}
	});
});

