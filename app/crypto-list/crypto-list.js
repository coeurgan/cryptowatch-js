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
  $scope.coins = coinListService.getCoins();
  console.log("$scope.coins : " +$scope.coins); 


 
	
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


