myapp.controller('demo_ctr',["$scope","$http",function($scope,$http){
	$http({
		url:"json/message.json",
		type:"get"
	}).success(function(res){
		$scope.demo = res.demo;
	});
	$scope.mouseenter = function(index){
		$('.demo .main>.caseBox>.caseItem>.mask').eq(index).find('.maskone')
		.css({
			"animation": 'fadeOut 2s forwards'
		}).siblings('div').css({
			"animation": 'fadeIn 2s forwards'
		});;
	};
	$scope.mouseleave = function(index){
		$('.demo .main>.caseBox>.caseItem>.mask').eq(index).find('.maskone').css({
			"animation": 'null'
		}).siblings('div').css({
			"animation": 'null'
		});;
	}
	

}]);