'use strict';

angular.module('myApp.cryptoList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crypto-list', {
    templateUrl: 'crypto-list/crypto-list.html',
    controller: 'CryptoListCtrl'
  });
}])

.controller('CryptoListCtrl',['$scope', '$rootScope', '$http', '$location', 'coinListService', function($scope, $rootScope, $http, $location, coinListService ) {
  $scope.sortType     = 'code'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
	if (!$rootScope.coins) {
	  $rootScope.coins = [ 
		{ code : "XRB", quantity : "10", target : "10000" }, 
		{ code : "XBY", quantity : "100", target : "5000" },
		{ code : "ETH", quantity : "1", target : "200000" }
		];
	}
   $scope.cmcinfos = [];



 coinListService.getCoins($rootScope.coins);
	
	$scope.go = function(coin) {
	   console.log("go to " + coin.code);	
	   $location.path('/crypto-detail/'+coin.code); 
	};
	
}])

.filter('millionDollarsFilter', function() {
    return function(x) {
        return x/1000000;
    };
});


