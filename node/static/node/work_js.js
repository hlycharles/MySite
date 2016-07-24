$(document).ready(function() {
	//Display project entries
	var prefixPath = "../static/node/";
	var containers = document.getElementsByClassName("project");
	var projects = document.getElementsByClassName("projectBg");
	var contents = document.getElementsByClassName("projectContent");
	var overlays = document.getElementsByClassName("projectOverlay")
	var expanded = new Array(containers.length);
	expanded.fill(false);
	for (var i = 0; i < projects.length; i++) {
		//set the background image for all project entires
		if (imgs[i].length > 0) {
			//var url = "url('" + prefixPath + imgs[i] + "')";
			var url = prefixPath + imgs[i];
			projects[i].setAttribute("src", url);
		}else {
			$(projects[i]).css("background-color", "red");
		}
		//set text for each project
		var description = contents[i].children[0];
		description.innerHTML = imgTitles[i];
		//setup interactions on projects
		$(overlays[i]).fadeTo(0, 0);
		$(overlays[i]).mouseover(function() {
			$(this).fadeTo(100, 0.35);
		});
		$(overlays[i]).mouseout(function() {
			$(this).fadeTo(100, 0);
		});
		function overlayClickHandler(currIndex) {
			$(overlays[currIndex]).click(function() {
				if (expanded[currIndex]) {
					$(containers[currIndex]).animate({height:"280px"}, "fast");
				}else {
					$(containers[currIndex]).animate({height:"450px"}, "fast");
				}
				expanded[currIndex] = !expanded[currIndex];
			});
		}
		overlayClickHandler(i);
	}
});