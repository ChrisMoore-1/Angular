angular.module("arrayApp").controller("arrCtrl", function($scope, svc) {

    $scope.test = "You are the worst!";

    $scope.people = svc.data;

});
