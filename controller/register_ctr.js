myapp.controller('register_ctr', ['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	$scope.userS = [];
	$scope.userN = [];
	$scope.userP = [];
	$scope.remember = false;
	$scope.registerPhonePShow = false;
	$scope.registerPasswordPShow = false;
	$scope.registerPhoneP = '*请输入正确的手机号码';
	$scope.registerPasswordP = '*密码为6-12位';
	var storage = window.localStorage;
	for(var i=0;i<storage.length;i++){
		$scope.userN.push(JSON.parse(storage.getItem(storage.key(i))).phone);
		$scope.userP.push(JSON.parse(storage.getItem(storage.key(i))).password);
	}
	$scope.rememberMe = function(judge,phone){
		console.log(judge);
		switch (judge) {
			case true:
				localStorage.setItem('currentUser',phone);
				break;
			case false:
				sessionStorage.setItem('currentUser',phone)
				break;
		}
	}
	$scope.rememberClick = function(){
		$scope.remember = !$scope.remember;
	}
	$scope.registerClick = function(){
		$scope.registerPhonePShow = false;
		$scope.registerPasswordPShow = false;
		var m = 0;
		var n = 0;
		for(var i = 0 ; i < $scope.userN.length ; i ++){
			if(userForm.userPhone.value == $scope.userN[i]){
				if(userForm.userPassword.value == $scope.userP[i]){
					$scope.rememberMe($scope.remember,$scope.userN[i]);
					$rootScope.loginShow = !$rootScope.loginShow;
					$state.go('index')
					return;
				}else{
					n++;
					$scope.registerPasswordP = "密码输入错误";
					$scope.registerPasswordPShow = true;
				}
			}else{
				m++;
			}
		}
		if( m == $scope.userN.length){
			$scope.registerPhoneP = "请检查您的手机号";
			$scope.registerPhonePShow = true;
		}
	}
}])