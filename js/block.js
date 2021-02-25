var pos=0;

$("#guy").click(function(){
	if (pos===0) {
		$("#guy").animate({left: "50px"},250);
	}
	if (pos===1) {
		$("#guy").animate({top: "50px"},250);
	}
	if (pos===2) {
		$("#guy").animate({left: "0px"},250);
	}
	if (pos===3) {
		$("#guy").animate({top: "0px"},250,pos=0);
	} else pos++;
});