$(document).ready(function() {
	var containers = document.getElementsByClassName("infoEntry");
	var showAllButtons = document.getElementsByClassName("showAllButton");
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
			var hrRect = containers[index].children[2].getBoundingClientRect();
			var newH = hrRect.top - containerRect.top - 2;
			$(containers[index]).css("min-height", "0px");
			$(containers[index]).animate({height:newH}, "fast", function() {
				testContainerInRange();
			});
			expanded[index] = originalH;
		}else {
			//retrieve original height and expand entry
			var newH = expanded[index];
			expanded[index] = -1;
			$(containers[index]).animate({height:newH}, "fast", function() {
				$(containers[index]).css("min-height", "210px");
				testContainerInRange();
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