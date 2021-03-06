$(document).ready(function() {
	//Display project entries
	var containers = document.getElementsByClassName("project");
	var projects = document.getElementsByClassName("projectBg");
	var contents = document.getElementsByClassName("projectContent");
	var overlays = document.getElementsByClassName("projectOverlay")
	var descriptions = document.getElementsByClassName("projectDscr");
	//adjust the height and position of buttons
	var showMoreButtons = document.getElementsByClassName("showMoreButton");
	var linkButtons = document.getElementsByClassName("linkButton");
	for (var i = 0; i < showMoreButtons.length; i++) {
		var newTop = $(containers[i]).height() * 0.05 + 
		             $(containers[i]).offset().top;
		$(showMoreButtons[i]).offset({top:newTop});
		$(linkButtons[i]).offset({top:newTop});
		var currW = $(showMoreButtons[i]).width();
		$(showMoreButtons[i]).height(currW);
		$(linkButtons[i]).height(currW);
	}
	//set actions for link buttons
	for (var i = 0; i < linkButtons.length; i++) {
		if (projectLinks[i].length > 0) {
			function linkClickHandler(currIndex) {
				$(linkButtons[currIndex]).click(function() {
					window.open(projectLinks[currIndex], "_blank");
				});
			}
			linkClickHandler(i);
		}else {
			$(linkButtons[i]).hide();
		}
	}
	var expanded = new Array(containers.length);
	var fullHeights = new Array(containers.length);
	expanded.fill(false);
	var loadFullContainerHeight = function() {
		//calculate the adjusted height of images
		var width = projects[0].clientWidth;
		var adjustedH = this.height * width / this.width;
		var currIndex = this.projIndex;
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
		//adjust container size to show full text
		var dscr = $(descriptions[currIndex]);
		var textBottom = dscr.offset().top + dscr.height();
		var containerBottom = containerRect.bottom;
		if (textBottom > containerBottom) {
			var diff = textBottom - containerBottom;
			var currContainer = $(containers[currIndex]);
			currContainer.height(currContainer.height() + diff + 5);
			if (currContainer.height() > target) {
				target = currContainer.height();
			}
		}
		fullHeights[currIndex] = target;
	};
	for (var i = 0; i < projects.length; i++) {
		//set the background image for all project entires
		if (imgs[i].length > 0) {
			var url = imgs[i][0] == '/' ? imgs[i] : "/" + imgs[i];
			projects[i].setAttribute("src", url);
			var newImg = new Image();
			newImg.projIndex = i;
			newImg.onload = loadFullContainerHeight;
			newImg.src = url;
		}else {
			$(projects[i]).css("background-color", "white");
			fullHeights[i] = -1;
			$(showMoreButtons[i]).hide();
		}
		//set text for each project
		var titleElem = contents[i].children[0];
		titleElem.innerHTML = projectTitles[i];
		var contentElem = contents[i].children[1];
		contentElem.innerHTML = projectContents[i];
		//setup interactions on projects
		$(overlays[i]).fadeTo(0, 0);
		$(overlays[i]).hover(function() {
			$(this).fadeTo(200, 1);
		}, function() {
			$(this).fadeTo(200, 0);
		});
		//adjust direction of arrow buttons
		$(showMoreButtons[i]).rotate(180);
		function buttonClickHandler(currIndex) {
			$(showMoreButtons[currIndex]).click(function() {
				if (expanded[currIndex]) {
					$(containers[currIndex]).animate({height:"280px"}, "fast", 
						function() {
							$(showMoreButtons[currIndex]).rotate({
								duration:500, animateTo:180
							});
					});
				}else {
					if (fullHeights[currIndex] > 0) {
						var target = fullHeights[currIndex];
						$(containers[currIndex]).animate({height:target}, 
							                              "fast", function() {
							$(showMoreButtons[currIndex]).rotate({
								duration:500, animateTo:0
							});
					    });
					}else {
						$(containers[currIndex]).animate({height:"450px"}, 
							                              "fast", function() {
							$(showMoreButtons[currIndex]).rotate({
								duration:500, animateTo:0
							});
						});
					}
				}
				expanded[currIndex] = !expanded[currIndex];
			});
		}
		buttonClickHandler(i);
	}
	//first show all projects
	var categoryList = document.getElementsByClassName("navColList")[0];
	var allCategories = categoryList.children;
	var categoryAll = allCategories[0];
	categoryAll.style.fontWeight = "bold";
	$(".workContent > p").hide();
	for (var i = 0; i < allCategories.length; i++) {
		function categoryItemClickHandler(currIndex) {
			$(allCategories[currIndex]).click(function() {
				//first turn all categories into normal font
				for (var c = 0; c < allCategories.length; c++) {
					allCategories[c].style.fontWeight = "normal";
				}
				allCategories[currIndex].style.fontWeight = "bold";
				//filter the projects according to categories
				var hasProject = false;
				for (var p = 0; p < containers.length; p++) {
					//show all projects
					if (currIndex == 0 || 
						projectCategories[p] == (currIndex - 1)) {
						$(containers[p]).show();
						if (!hasProject) {
							$(containers[p]).css("margin-top", "100px");
						}else {
							$(containers[p]).css("margin-top", "50px");
						}
						hasProject = true;
					}else {
						$(containers[p]).hide();
					}
				}
				//there is no project that matches the criteria
				if (!hasProject) {
					$(".workContent > p").show();
				}else {
					$(".workContent > p").hide();
				}
			});
		}
		categoryItemClickHandler(i);
	}
	//update the text within navigation column
	var categories = document.getElementById("navColList").children;
	var categoryCounts = new Array(categories.length + 1);
	categoryCounts.fill(0);
	categoryCounts[0] = containers.length;
	for (var i = 0; i < projectCategories.length; i++) {
		//plus 1 to account for the "all" category at the top
		categoryCounts[projectCategories[i] + 1]++;
	}
	for (var i = 0; i < categories.length; i++) {
		var currText = categories[i].innerHTML;
		currText += " (" + categoryCounts[i] + ")";
		categories[i].innerHTML = currText;
	}
});