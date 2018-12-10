var scTop = 0;
var navChk = true;
var page = [];
var nowPage = 0;

$(window).scroll(function(){
	scTop = $(window).scrollTop();
	if(scTop > 150) {
		$(".sc_navs").stop().animate({"left":0}, 100);
	}
	else {
		$(".sc_navs").stop().animate({"left":"-15%"}, 100);
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


var data = [{
    datasets: [{
        data: [95, 5],
        backgroundColor: [
            '#67c2ff',
            '#fff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [85, 15],
        backgroundColor: [
            '#67c2ff',
            '#fff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [85, 15],
        backgroundColor: [
            '#67c2ff',
            '#fff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [50, 50],
        backgroundColor: [
            '#67c2ff',
            '#fff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
},{
    datasets: [{
        data: [50, 50],
        backgroundColor: [
            '#67c2ff',
            '#fff'
        ],
        hoverBackgroundColor:[
            '#0031bb'
        ]
    }]
}];
var option = [{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	2 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'Photoshop/Illustrator',
        fontSize: 16,
        fontColor: "#666"
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	2 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'Html',
        fontSize: 16,
        fontColor: "#666"
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	2 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'CSS',
        fontSize: 16,
        fontColor: "#666"
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	2 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'Javascript',
        fontSize: 16,
        fontColor: "#666"
    }
},{
    cutoutPercentage: 40,//그래프의 두께
    rotation: -0.5 * Math.PI,//돌아가는 시작점
    circumference: 	2 * Math.PI,//차지하는 영역(지름)
    animation: {
        animateScale: true//나타날때 돌면서 나타남
    },
    title: {
        display: true,
        text: 'jQuery',
        fontSize: 16,
        fontColor: "#666"
    }
}];
var chart = [];

var ctx = $(".chart");
ctx.each(function(i){
    chart[i] = new Chart($(this),{
        type: 'doughnut',
        data: data[i],
        options: option[i]
    })
});
