myapp.controller("buy_ctr",["$scope","$http",function($scope,$http){
	var buycount = 0;
	var timer = setInterval(runLoop,2000);
	function runLoop(){
        buycount++;
        if( buycount == 4){
        	buycount = 0;
        }
        $('#buyBanner img').eq(buycount).fadeIn().siblings('img').fadeOut();
        $('#buyBanner>.indicator span').eq(buycount).addClass('buyactive').siblings('span').removeClass('buyactive')
	};
	$('#buyBanner>.indicator span').on('click',function(){
		clearInterval(timer);
		var buycount = $(this).index();
		$('#buyBanner img').eq(buycount).fadeIn().siblings('img').fadeOut();
        $('#buyBanner>.indicator span').eq(buycount).addClass('buyactive').siblings('span').removeClass('buyactive');
        timer = setInterval( runLoop,2000);
	});
	$('#buyUl li').hover(function() {
		$(this).stop(true).animate({"width": "400px"}).siblings('li').stop(true).animate({"width":"160px"});
	}, function() {
		$(this).stop(true).animate({"width": "200px"}).siblings('li').stop(true).animate({"width":"200px"});
	});

}])