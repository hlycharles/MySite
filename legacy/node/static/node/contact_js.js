$(document).ready(function() {
	//adjust height of divs according to screen height
	var screenH = $(window).height();
	var minH = 50;
	var margin = 50;
	var distToBot = 200;
	var basicInfoDivs = document.getElementsByClassName("basicInfo");
	var basicInfoTop = $(basicInfoDivs[1]).offset().top;
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
	//adjust for portrait displays
	var testPortraitDisplay = function() {
		if ($(basicInfoDivs[0]).height() > $(basicInfoDivs[0]).width()) {
			for (var i = 0; i < basicInfoDivs.length; i++) {
				$(basicInfoDivs[i]).css("display", "block");
				$(basicInfoDivs[i]).css("width", "90%");
				if (i > 0) {
					var prev = $(basicInfoDivs[i - 1]);
					var prevBottom = prev.offset().top + prev.height();
					var newTop = prevBottom + margin;
					$(basicInfoDivs[i]).offset({top:newTop});
				}
			}
			var last = $(basicInfoDivs[basicInfoDivs.length - 1]);
			var newSocialDivY = last.offset().top + last.height() + margin;
			$(socialDiv).offset({top:newSocialDivY});
			var contactMain = $(document.getElementById("contactMain"));
			contactMain.height($(socialDiv).offset().top + 
				               $(socialDiv).height());
		}
	};
	testPortraitDisplay();
	$(window).resize(function() {
		testPortraitDisplay();
	});
	//add actions for button clicks
	var addLink = function(elem, address) {
		$(elem).click(function() {
			window.open(address, "_blank");
		});
	};
	var githubDiv = document.getElementById("githubLink");
	addLink(githubDiv, "https://github.com/hlycharles");
	var linkedInDiv = document.getElementById("linkedInLink");
	addLink(linkedInDiv, "https://www.linkedin.com/in/luyao-hou-2299a077");
	var facebookDiv = document.getElementById("facebookLink");
	addLink(facebookDiv, "https://www.facebook.com/hlycharles");
})