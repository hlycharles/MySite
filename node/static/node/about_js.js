$(document).ready(function() {
	var containers = document.getElementsByClassName("infoEntry");
	var showAllButtons = document.getElementsByClassName("showAllButton");
	var overlays = document.getElementsByClassName("overlay");
	var titles = document.getElementsByClassName("infoTitle");
	var contents = document.getElementsByClassName("infoContent");
	//adjust background height
	var placeholder = $("#placeholder");
	$("#aboutMain").height(placeholder.offset().top + placeholder.height());
	//first hide all buttons and adjust button positions
	for (var i = 0; i < showAllButtons.length; i++) {
		$(showAllButtons[i]).fadeTo(0, 0);
		var newTop = $(titles[i]).offset().top;
		$(showAllButtons[i]).offset({top:newTop});
		$(showAllButtons[i]).height($(titles[i]).height());
		$(showAllButtons[i]).width($(titles[i]).height());
	}
	//handle mouseover events
	var animationDuration = 150;
	for (var i = 0; i < containers.length; i++) {
		function containerMouseEventHandler(currIndex) {
			$(overlays[currIndex]).hover(function() {
				$(showAllButtons[currIndex]).fadeTo(animationDuration, 1);
			}, function() {
				$(showAllButtons[currIndex]).fadeTo(animationDuration, 0);
			});
		}
		containerMouseEventHandler(i);
	}
	//adjust the content div position
	for (var i = 0; i < containers.length; i++) {
		var titleBottom = $(titles[i]).offset().top + $(titles[i]).height();
		var titleH = titleBottom - $(containers[i]).offset().top;
		$(contents[i]).offset({top:titleBottom});
		var contentH = $(contents[i]).height();
		if (contentH + titleH < 210) {
			contentH = 210 - titleH;
		}
		$(contents[i]).height(contentH);
		$(containers[i]).height(titleH + contentH);
	}
	var expanded = new Array(containers.length);
	expanded.fill(-1);
	//test whether the containers are within window display range
	var navItems = document.getElementById("navColList").children;
	var testContainerInRange = function() {
		var margin = 5;
		var bottom = $(window).height();
		for (var i = 0; i < containers.length; i++) {	
			var containerRect = containers[i].getBoundingClientRect();
			if (containerRect.top >= -margin && 
				containerRect.bottom <= bottom + margin) {
				navItems[i].style.fontWeight = "bold";
			}else {
				navItems[i].style.fontWeight = "normal";
			}
		}
	}
	var adjustContainerSize = function(index) {
		var containerRect = containers[index].getBoundingClientRect();
		if (expanded[index] < 0) {
			//shrink the entry
			var originalH = containers[index].offsetHeight;
			var newH = $(contents[index]).offset().top - 
			           $(containers[index]).offset().top;
			$(containers[index]).css("min-height", "0px");
			$(containers[index]).animate({height:newH}, "fast", function() {
				testContainerInRange();
				$(showAllButtons[index]).rotate({duration:500, animateTo:180});
			});
			expanded[index] = originalH;
		}else {
			//retrieve original height and expand entry
			var newH = expanded[index];
			expanded[index] = -1;
			$(containers[index]).animate({height:newH}, "fast", function() {
				$(containers[index]).css("min-height", "210px");
				testContainerInRange();
				$(showAllButtons[index]).rotate({duration:500, animateTo:0});
			});
		}
	};
	for (var i = 0; i < showAllButtons.length; i++) {
		//assign click events to buttons
		function showAllClickHandler(index) {
			$(showAllButtons[index]).click(function() {
				adjustContainerSize(index);
			});
		}
		showAllClickHandler(i);
	}
	//handle window scroll events
	$(window).scroll(function(event) {
		testContainerInRange();
	});
	testContainerInRange();
	//handle navigation button clicks
	for (var i = 0; i < navItems.length; i++) {
		function navItemClickHandler(index) {
			$(navItems[index]).click(function() {
				var startY = $(containers[0]).offset().top;
				var targetY = $(containers[index]).offset().top - startY;
				var body = $("body");
				body.animate({scrollTop:targetY}, "450");
			});
		}
		navItemClickHandler(i);
	}
});