$(document).ready(function() {
	//adjust height of divs according to screen height
	var screenH = $(window).height();
	var minH = 50;
	var margin = 50;
	var distToBot = 200;
	var basicInfoDivs = document.getElementsByClassName("basicInfo");
	var basicInfoTop = $(basicInfoDivs[0]).offset().top;
	var targetH = (screenH - basicInfoTop - margin * 2) / 2;
	if (targetH < minH) {
		targetH = minH;
	}
	for (var i = 0; i < basicInfoDivs.length; i++) {
	    $(basicInfoDivs[i]).height(targetH);
	}
	var socialDiv = document.getElementById("socialDiv");
	$(socialDiv).height(targetH);
	var socialDivY = basicInfoTop + targetH + margin;
	$(socialDiv).offset({top:socialDivY});
	//vertical align the contents of divs
	var innerMargin = 10;
	var alignContentV = function(client) {
		var children = client.children;
		var mid = $(client).offset().top + $(client).height() / 2;
		var title = children[0];
		var titleY = mid - $(title).height() - innerMargin;
		$(title).offset({top:titleY});
		var detailY = mid + innerMargin;
		for (var i = 1; i < children.length; i++) {
			$(children[i]).offset({top:detailY});
		}
	}
	for (var i = 0; i < basicInfoDivs.length; i++) {
		alignContentV(basicInfoDivs[i]);
	}
	alignContentV(socialDiv);
})