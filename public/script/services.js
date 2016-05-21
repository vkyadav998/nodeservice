/**
 * Created by pc on 14-05-2016.
 */
var app = angular.module('myApp');
app.service('ADD_SERVICE',function($http,$window,$cookies){

   /* /!** TOKEN *!/
    this.saveToken = function(res) {
        $window.localStorage['access-token'] = res;
        $cookies.putObject("access-token", res);
    };

    this.getToken = function() {
        var acessToken = $window.localStorage['access-token'];
        var aret = $cookies.getObject("access-token");
        return aret;
    };

    this.clearToken = function() {
        $cookies.remove("access-token");
    };
*/
    this.login=function ($scope) {
        window.location.replace('#/menu');
        var reqdata =$scope.check;
        console.log(reqdata);
        //to get value in home page if want
        $http({
            method: 'GET',
            headers : {                                            //header is optional for first time
                'Content-Type' : "application/json"
            },
            url: '/register/vk',
            params: {email: reqdata.email}
        }).success(function(res){
            debugger;
            if(res !=null && res.hasOwnProperty('email') && reqdata.email === res.email) {
                $cookies.put('Email', res.email);
                console.log('success');
                $scope.user= {user:res};
            }else{
                console.log('Error');
            }
        }).error(function(res) {
            console.log("error");
        });
    }

    this.getuserdata=function ($scope) {
        var reqdata =$cookies.get('Email');
        console.log(reqdata);
        //to get value in home page if want
        $http({
            method: 'GET',
            headers : {                                            //header is optional for first time
                'Content-Type' : "application/json"
            },
            url: '/register/vk',
            params: {email: reqdata}
        }).success(function(res){
            debugger;
            console.log('2nd success');
            $scope.user= {user:res};
            console.log( $scope.user);
        }).error(function(res) {
            console.log("error");
        });
    }


    this.register=function(form,submitreg,$scope){
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

    this.logout=function($scope){
        $cookies.remove('Email');
    }

});