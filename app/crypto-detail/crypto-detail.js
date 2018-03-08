'use strict';

angular.module('myApp.cryptoDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crypto-detail/:code', {
    templateUrl: 'crypto-detail/crypto-detail.html',
    controller: 'CryptoDetailCtrl'
  });
}])

.controller('CryptoDetailCtrl', ['$scope','$routeParams', 'coinListService', function($scope, $routeParams, coinListService) {
	console.log("CryptoDetailCtrl");
    if (!$scope.coins) {
        console.log("liste vide...");
        coinListService.getCoins(function(coins) {
            $scope.coins = coins;
            handle();
        });
	} else {
        handle();
    }
    
    function handle() {
        $scope.code = $routeParams.code;
        console.log("handle : code = " + $scope.code);
        $scope.coin = $scope.coins.filter(function(value){ return value.code == $scope.code;})[0];
        $scope.isEdit = false;
        
        $scope.originalQuantity = $scope.coin.quantity;
        $scope.originalTarget = $scope.coin.target;
        
    }

	
	$scope.edit = function() {
		console.log("Edit " + $scope.coin.code);
		$scope.isEdit = true;
	};
	$scope.save = function() {
		console.log("Save " + $scope.coin.code);
		$scope.isEdit = false;
	};
	$scope.cancel = function() {
		console.log("Cancel " + $scope.coin.code);
		$scope.coin.quantity = $scope.originalQuantity;
		$scope.coin.target = $scope.originalTarget;
		$scope.isEdit = false;
	};
}]);