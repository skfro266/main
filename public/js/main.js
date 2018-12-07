var scTop = 0;
var navChk = true;
$(window).scroll(function(){
	scTop = $(window).scrollTop();
	if(scTop > 150) {
		$(".sc_navs").stop().animate({"left":0}, 100);
	}
	else {
		$(".sc_navs").stop().animate({"left":"-15%"}, 100);
	}
});
