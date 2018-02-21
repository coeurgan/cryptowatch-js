'use strict';

angular.module('myApp.cryptoDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crypto-detail/:code', {
    templateUrl: 'crypto-detail/crypto-detail.html',
    controller: 'CryptoDetailCtrl'
  });
}])

.controller('CryptoDetailCtrl', ['$scope','$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
	if (!$rootScope.coins) {
	  $rootScope.coins = [ 
		{ code : "XRB", quantity : "10", target : "10000" }, 
		{ code : "XBY", quantity : "100", target : "5000" },
		{ code : "ETH", quantity : "1", target : "200000" }
		];
	}
    $scope.code = $routeParams.code;
	$scope.coin = $rootScope.coins.filter(function(value){ return value.code == $scope.code;})[0];
}]);