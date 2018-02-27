'use strict';

angular.module('myApp.cryptoAdd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crypto-add', {
    templateUrl: 'crypto-add/crypto-add.html',
    controller: 'CryptoAddCtrl'
  });
}])

.controller('CryptoAddCtrl', ['$scope', 'coinListService', '$location', function($scope, coinListService, $location) {
    $scope.coin = {};

    $scope.add = function()
    {
        if ($scope.coin.quantity && $scope.coin.target && $scope.coin.code)
        {
            coinListService.add($scope.coin);
            console.log("coin " + $scope.coin.code + " added.");
            $location.path('/crypto-list/');
        }
    }
}]);


