/**
 * Created by pc on 22-05-2016.
 */
var myApp = angular.module('inboxmyApp',['ngRoute','720kb.datepicker', 'ngCookies',]);

myApp.config(['$routeProvider',function($routeProvider) {

    $routeProvider.when('/admin', {
            templateUrl : 'inboxContent/home.html',
            controller : 'homeCtrl'
        })
        .otherwise({
            redirectTo : '/admin'
        });
}]);

myApp.controller('homeCtrl', ['$scope','$http','$window','$cookies','ADMIN_SERVICE', function($scope,$http,$window,$cookies,ADMIN_SERVICE) {
    $scope.user = {'date':new Date()};

    $scope.ADMIN_SERVICE=ADMIN_SERVICE;
    ADMIN_SERVICE.getuser($scope);


    $scope.logout=function($scope){
        window.location.replace('/');
    }

    $scope.user_order=function (email) {
        ADMIN_SERVICE.user_order($scope,email);
    }


    

}]);