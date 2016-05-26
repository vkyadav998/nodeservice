var myApp = angular.module('myApp',['ngRoute','720kb.datepicker', 'ngCookies']);

myApp.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider.when('/home', {
		templateUrl : 'content/home.html',
		controller : 'homeCtrl'
	})
	.when('/menu', {
		templateUrl : 'content/menu.html',
		controller : 'menuCtrl'
	})
	.otherwise({
		redirectTo : '/home'
	});
}]);

myApp.controller('homeCtrl', ['$scope','$http','$window','$cookies','ADD_SERVICE','$timeout', function($scope,$http,$window,$cookies,ADD_SERVICE,$timeout
) {
	$scope.ADD_SERVICE=ADD_SERVICE;
	$scope.user = {'date':new Date()};

	$scope.register=function(form,submitreg){
		ADD_SERVICE.register(form,submitreg,$scope);
	};

	$scope.login=function () {
		ADD_SERVICE.login($scope);
	};

	$scope.logout=function () {
		ADD_SERVICE.logout($scope);
	}

	$scope.adminlogin=function () {
		ADD_SERVICE.adminlogin($scope);
	};

	/*// this is for if message is using in controller only
    $scope.resetmessage = function($scope) {
		var vm = this;
		$timeout(function(){
			ADD_SERVICE.success=false;
			ADD_SERVICE.error = false;

			ADD_SERVICE.successmsg="";
			ADD_SERVICE.errormsg="";

			/!*$scope.$watch("ADD_SERVICE", function(){
				$scope.ADD_SERVICE = ADD_SERVICE;
			});*!/
		}, 5000);
	};*/

    $scope.msgcall=function () {
       debugger;
        ADD_SERVICE.error=true;
        ADD_SERVICE.errormsg="Message Not successfully Generated.";
		ADD_SERVICE.resetmessage();
    }

	$scope.nmsgcall=function () {
		ADD_SERVICE.success=true;
		ADD_SERVICE.successmsg="Message successfully Generated.";
		ADD_SERVICE.resetmessage();
	}

}]);

myApp.controller('menuCtrl', ['$scope','$http','$window','ADD_SERVICE', function($scope,$http,$window,ADD_SERVICE) {

	$scope.ADD_SERVICE=ADD_SERVICE;

	ADD_SERVICE.getuserdata($scope);

	$scope.logout=function () {
		ADD_SERVICE.logout($scope);
	};

	$scope.adminlogin=function () {
		ADD_SERVICE.adminlogin($scope);
	};
	$scope.itom=ADD_SERVICE.itom;

	$scope.custOrder=function () {
		ADD_SERVICE.custOrder($scope);
	};

	$scope.myorder=function () {
		$scope.morder=true;
		ADD_SERVICE.myorder($scope);
	};

}]);