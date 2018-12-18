
var data = [{
    datasets: [{
        data: [95],
        backgroundColor: [
            '#67c2ff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [85],
        backgroundColor: [
            '#67c2ff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [85],
        backgroundColor: [
            '#67c2ff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [50],
        backgroundColor: [
            '#67c2ff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [50],
        backgroundColor: [
            '#67c2ff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
}];
var option = [{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	1.9 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'Photoshop/Illustrator',
        fontSize: 16,
        fontColor: "#666"
    },
    legend: {
        display: false
    }, tooltips :{
        enabled: false
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	1.7 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'Html',
        fontSize: 16,
        fontColor: "#666"
    },
    legend: {
        display: false
    }, tooltips :{
        enabled: false
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	1.7 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'CSS',
        fontSize: 16,
        fontColor: "#666"
    },
    legend: {
        display: false
    }, tooltips :{
        enabled: false
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	1 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'Javascript',
        fontSize: 16,
        fontColor: "#666"
    },
    legend: {
        display: false
    }, tooltips :{
        enabled: false
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	1 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'jQuery',
        fontSize: 16,
        fontColor: "#666"
    },
    legend: {
        display: false
    }, tooltips :{
        enabled: false
    }
}];



var scTop = 0;
var navChk = true;
var page = [];
var nowPage = 0;
var chartChk = true;
$(window).scroll(function(){
	scTop = $(window).scrollTop();
	if(scTop > 150) {
		$(".sc_navs").stop().animate({"left":0}, 100);
	}
	else {
		$(".sc_navs").stop().animate({"left":"-15%"}, 100);
    }
    if($("html,body").scrollTop() > $(".skill").offset().top - 300) {
        if(chartChk) {
            var chart = [];
            var ctx = $(".chart");
            ctx.each(function(i){
                chart[i] = new Chart($(this),{
                    type: 'doughnut',
                    data: data[i],
                    options: option[i]
                })
            });
            chartChk = false;
        }
    }
});


$(window).resize(function(){
    $(".page").each(function(i){
        page[i] = $(this).offset().top;
    });
}).trigger("resize");

$(".navs > li, .sc_navs > li").click(function(){
    nowPage = $(this).index();
    $("html, body").stop().animate({"scrollTop":page[nowPage+1]}, 500, function(){
        $(".sc_navs > li").css({"text-decoration":"none"});
        $(".sc_navs > li").eq(nowPage).css({"text-decoration":"underline"});
    });
});

var p = new SpaAni(".pages",".anis",300);

$(".port").mouseenter(function(){
    $(this).children(".port_hover").stop().animate({"left":"100%"}, 200);
});
$(".port").mouseleave(function(){
    $(this).children(".port_hover").stop().animate({"left":0}, 200);
});

$(".port_bts01").click(function(){
    window.open("https://fldhchdl-coffee.firebaseapp.com/main/main.html");
});
$(".port_bts02").click(function(){
    window.open("https://fldhchdl-magsite.firebaseapp.com/index.html");
});
$(".port_bts03").click(function(){
    window.open("https://fldhchdl-main.firebaseapp.com/main/main.html");
});
