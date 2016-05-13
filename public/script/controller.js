var myApp = angular.module('myApp',['ngRoute','720kb.datepicker']);


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

myApp.controller('homeCtrl', ['$scope','$http','$window', function($scope,$http,$window) {
	$scope.user = {'date':new Date()};

	$scope.login=function () {
		window.location.replace('#/menu');
		debugger;
		console.log($scope);
		console.log($scope.check);
		//to get value in home page if want
		$http({
			method: 'GET',
			url: '/register'
		}).success(function(res){
			console.log(res);
				return res;
			}).error(function(res) {
			console.log("error");
		});
	}




	$scope.register=function(form,submitreg){
		debugger;

		console.log(form.$valid);
		if(form.$invalid){
			$scope.submitreg=true;
			return;
		}
		console.log($scope.user);
		var reqdata =$scope.user;
		
		$http({
			method : 'POST',
			headers : {                                            //header is optional for first time
				'Content-Type' : "application/json"
			},
			url : '/register',
			data : reqdata
		}).success(function(response) {
			console.log("success");
			alert("DATA Inserted .............!!");
		}).error(function(response) {
			console.log("error");
		});
	}

}]);

myApp.controller('menuCtrl', ['$scope','$http','$window', function($scope,$http,$window) {

// to get value in the menu page
	$http({
		method: 'GET',
		url: '/register'
	}).success(function(res){
		$scope.user=res;
		console.log(res);
		return res;
	}).error(function(res) {
		console.log("error");
	});

	$scope.checkone=function () {
		window.location.replace('#/menu');
		debugger;
		$http({
			method: 'GET',
			url: '/register/vk'
		}).success(function(res){
			$scope.user = {"user":res};
			console.log(res);
			return res;
		}).error(function(res) {
			console.log("error");
		});
	}


}]);