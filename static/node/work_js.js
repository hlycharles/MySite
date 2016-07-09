$(document).ready(function() {
	var prefixPath = "../static/node/";
	var projects = document.getElementsByClassName("project");
	for (var i = 0; i < projects.length; i++) {
		if (imgs[i].length > 0) {
			var url = "url('" + prefixPath + imgs[i] + "')";
			$(projects[i]).css("background-image", url);
		}else {
			$(projects[i]).css("background-color", "white");
		}
	}
});