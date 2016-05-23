/**
 * Created by pc on 22-05-2016.
 */
var myApp = angular.module('inboxmyApp',['ngRoute','720kb.datepicker', 'ngCookies']);

myApp.config(['$routeProvider',function($routeProvider) {

    $routeProvider.when('/admin', {
            templateUrl : 'inboxContent/home.html',
            controller : 'homeCtrl'
        })
        .otherwise({
            redirectTo : '/admin'
        });
}]);

myApp.controller('homeCtrl', ['$scope','$http','$window','$cookies', function($scope,$http,$window,$cookies) {

    $scope.user = {'date':new Date()};

    $scope.logout=function($scope){
        window.location.replace('/');
    }

}]);