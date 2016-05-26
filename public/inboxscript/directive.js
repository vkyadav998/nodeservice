/**
 * Created by pc on 26-05-2016.
 */
var app=angular.module("inboxmyApp");
app.directive('header',function () {
    return{
        restrict: 'AE',
        templateUrl:'inboxContent/header.html'
    };
})