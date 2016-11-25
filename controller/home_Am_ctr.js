myapp.controller('home_Am_ctr',['$scope','$http','$interval',function($scope,$http,$interval){
	$http({
		url:'json/home.json',
		type:'get'
	}).success(function(res){
		$scope.USA = res.USA;
	});
	$scope.index = 0;
    var timer = $interval(run,3000);
    function run(){
     $scope.index=($scope.index+1)%$scope.USA.imgList.length;
    }
    $scope.clickFn  = function(index){
    	$interval.cancel(timer);
    	$scope.index = index;
    	timer = $interval(run,3000);
    }
}])
