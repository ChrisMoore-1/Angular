angular.module("app3").controller("mainCtrl", function($scope, svc) {

    $scope.test = "My worst nightmare!";

    $scope.person = svc.data;


});
