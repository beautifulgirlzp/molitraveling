myapp.controller('imp_ctr', ['$rootScope',function($rootScope){
	$rootScope.currentUser = [];
	if(localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser")){
		$rootScope.loginShow = true;
	}else{
		$rootScope.loginShow = false;
	}
	$rootScope.key = localStorage.currentUser || sessionStorage.currentUser;
	$rootScope.cancelFn = function(){
		alert("退出成功!");
		$rootScope.loginShow = false;
		localStorage.removeItem("currentUser");
		sessionStorage.removeItem("currentUser");
	}
}])