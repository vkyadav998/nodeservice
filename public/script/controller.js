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

myApp.controller('homeCtrl', ['$scope','$http','$window','$cookies','ADD_SERVICE', function($scope,$http,$window,$cookies,ADD_SERVICE) {

	$scope.ADD_SERVICE=ADD_SERVICE;
	$scope.user = {'date':new Date()};

	$scope.login=function () {
		ADD_SERVICE.login($scope);
	};

	$scope.register=function(form,submitreg){
		ADD_SERVICE.register(form,submitreg,$scope);
	};
	
	$scope.logout=function () {
		ADD_SERVICE.logout($scope);
	}
}]);

myApp.controller('menuCtrl', ['$scope','$http','$window','ADD_SERVICE', function($scope,$http,$window,ADD_SERVICE) {

	$scope.ADD_SERVICE=ADD_SERVICE;

	ADD_SERVICE.getuserdata($scope);

	$scope.logout=function () {
		ADD_SERVICE.logout($scope);
	};
}]);