var myApp = angular.module('myApp',['ngRoute']);


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



myApp.controller('homeCtrl', ['$scope','$http', function($scope,$http) {
	
	$scope.register=function(){
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
		}).error(function(response) {
			console.log("error");
		});
		
	}

}]);

myApp.controller('menuCtrl', ['$scope', function($scope) {


}]);