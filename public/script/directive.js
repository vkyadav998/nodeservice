/**
 * Created by pc on 21-05-2016.
 */
var app = angular.module('myApp');

app.directive('header', function() {
    return {
        restrict: 'AE',
        templateUrl: 'content/header.html'
    };
});