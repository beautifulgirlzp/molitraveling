myapp.controller('cates_ctr', ['$scope','$http','$interval',function($scope,$http,$interval){
	$http({
		url:"json/cates.json",
		type:"get"
	}).success(function(res){
		$scope.showText = res.showText;
		$scope.imgBox = res.cates_main;


		//文字渐隐轮播
		$scope.showIndex = $scope.showText.length-1;
	    var inter = $interval(runloop,2000);
	    function runloop(){
	        $scope.showIndex = ($scope.showIndex+1)%$scope.showText.length;
	    }
	    $scope.end = function(index){
	        $scope.showIndex = index;
	        $interval.cancel(inter);
	    }
	    $scope.start = function(){
	        inter = $interval(runloop,2000);
	    }
	});
}])