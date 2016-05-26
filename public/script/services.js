/**
 * Created by pc on 14-05-2016.
 */
var app = angular.module('myApp');
app.service('ADD_SERVICE',function($http,$window,$cookies,$timeout){


    this.resetmessage = function($scope) {
        var vm = this;
        $timeout(function(){
            vm.success=false;
            vm.error = false;

            vm.successmsg="";
            vm.errormsg="";

           /* $scope.$watch("ADD_SERVICE", function(){
             $scope.ADD_SERVICE = vm;
            });*/
        }, 5000);
    };

    this.login=function ($scope) {
        var vm=this;
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
            if(res===null){
                vm.error = true;
                vm.errormsg = "Invalid E-mail ID or Password.";
                vm.resetmessage();
            }else if(res !=null && res.hasOwnProperty('email') && reqdata.email === res.email) {
                $cookies.put('Email', res.email);
                console.log('success');
                vm.success = true;
                vm.successmsg = "You Have Login Successfully.";
                vm.resetmessage();
                window.location.replace('#/menu');
            }else{
                debugger;
                console.log('Error');
            }
        }).error(function(res) {
            console.log("error");
        });
    };

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

            console.log('2nd success');
            $scope.user=res;
            console.log( $scope.user);
        }).error(function(res) {
            console.log("error");
        });
    };

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
        }).success(function(response){
            console.log("success");
            alert("DATA Inserted .............!!");
        }).error(function(response) {
            console.log("error");
        });
    };

    this.logout=function($scope){
        window.location.replace('#/home');
        $cookies.remove('Email');
    };

    this.adminlogin=function($scope){
         window.location.replace('inbox.html');
    };

    this.custOrder=function ($scope) {
        $scope.order.uid=$scope.user._id;
        var reqdata=$scope.order;
        console.log($scope.order)
        $http({
            method : 'POST',
            headers : {                                            //header is optional for first time
                'Content-Type' : "application/json"
            },
            url : '/register/placeorder',
            data : reqdata
        }).success(function(response){
            console.log("success");
            console.log(response);
            alert("Order Placed .............!!");
        }).error(function(response) {
            console.log("error");
        });
    };

    this.myorder=function ($scope) {
        $scope.user.uid=$scope.user._id;
        var reqdata=$scope.user;
        console.log(reqdata)
        $http({
            method : 'GET',
            headers : {                                            //header is optional for first time
                'Content-Type' : "application/json"
            },
            url : '/register/placeorder',
            params : reqdata
        }).success(function(response){
            console.log("success");
            console.log(response);
            $scope.orders=response;
        }).error(function(response) {
            console.log("error");
        });
    };

    this.itom =['A','B','C','D'];

});