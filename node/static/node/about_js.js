$(document).ready(function() {
	var containers = document.getElementsByClassName("infoEntry");
	var showAllButtons = document.getElementsByClassName("showAllButton");
	var expanded = new Array(containers.length);
	expanded.fill(-1);
	var adjustContainerSize = function(index) {
		var containerRect = containers[index].getBoundingClientRect();
		if (expanded[index] < 0) {
			//shrink the entry
			var originalH = containers[index].offsetHeight;
			var hrRect = containers[index].children[2].getBoundingClientRect();
			var newH = hrRect.top - containerRect.top - 2;
			$(containers[index]).css("min-height", "0px");
			$(containers[index]).animate({height:newH}, "fast");
			expanded[index] = originalH;
		}else {
			//retrieve original height and expand entry
			var newH = expanded[index];
			expanded[index] = -1;
			$(containers[index]).animate({height:newH}, "fast", function() {
				$(containers[index]).css("min-height", "210px");
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
});