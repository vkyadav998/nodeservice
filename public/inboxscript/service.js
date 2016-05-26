/**
 * Created by pc on 26-05-2016.
 */
var app=angular.module("inboxmyApp");
app.service("ADMIN_SERVICE",function ($http){

    this.getuser=function ($scope) {
        $http({
            method: 'GET',
            url: '/register',
        }).success(function(res){
            console.log('2nd success');
            $scope.user=res;
            console.log( $scope.user);
        }).error(function(res) {
            console.log("error");
        });

    }
    
    this.user_order=function ($scope,email) {
        console.log(email);
    }
    

})