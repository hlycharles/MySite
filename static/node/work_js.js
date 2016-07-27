$(document).ready(function() {
	//Display project entries
	var containers = document.getElementsByClassName("project");
	var projects = document.getElementsByClassName("projectBg");
	var contents = document.getElementsByClassName("projectContent");
	var overlays = document.getElementsByClassName("projectOverlay")
	var expanded = new Array(containers.length);
	var fullHeights = new Array();
	expanded.fill(false);
	var loadFullContainerHeight = function() {
		//calculate the adjusted height of images
		var width = projects[0].clientWidth;
		var adjustedH = this.height * width / this.width;
		var currIndex = fullHeights.length;
		var imgRect = projects[currIndex].getBoundingClientRect();
		var containerRect = containers[currIndex].getBoundingClientRect();
		var diff = containerRect.bottom - imgRect.top;
		if (adjustedH - diff < 50) {
			var containerH = containerRect.bottom - containerRect.top;
			var newTop = containerH - (adjustedH - 50);
			$(projects[currIndex]).animate({top:newTop}, 0);
		}
		//reset the image bounding rect
		imgRect = projects[currIndex].getBoundingClientRect();
		var top = imgRect.top - containerRect.top;
		var target = top + adjustedH;
		fullHeights.push(target);
	};
	for (var i = 0; i < projects.length; i++) {
		//set the background image for all project entires
		if (imgs[i].length > 0) {
			var url = imgs[i][0] == '/' ? imgs[i] : "/" + imgs[i];
			projects[i].setAttribute("src", url);
			//TODO: improve reliability when getting image size
			var newImg = new Image();
			newImg.onload = loadFullContainerHeight;
			newImg.src = url;
		}else {
			$(projects[i]).css("background-color", "white");
			fullHeights.push(-1);
		}
		//set text for each project
		var titleElem = contents[i].children[0];
		titleElem.innerHTML = projectTitles[i];
		var contentElem = contents[i].children[1];
		contentElem.innerHTML = projectContents[i];
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
					if (fullHeights[currIndex] > 0) {
						var target = fullHeights[currIndex];
						$(containers[currIndex]).animate({height:target}, 
							                              "fast");
					}else {
						$(containers[currIndex]).animate({height:"450px"}, 
							                              "fast");
					}
				}
				expanded[currIndex] = !expanded[currIndex];
			});
		}
		overlayClickHandler(i);
	}
});