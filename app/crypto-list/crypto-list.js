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

    coinListService.getCoins(function(coins) {
        $scope.coins = coins;
    });

    $scope.go = function(coin) {
        $location.path('/crypto-detail/'+coin.code);
    };
    
    $scope.delete = function(coin) {
        coinListService.delete(coin, function() {
            console.log("coin " + coin.code + " deleted.");
            $location.path('/crypto-list/');
        });
    };
    
    $scope.total = function()
    {
        return coinListService.total($scope.coins);
    };

}]);


