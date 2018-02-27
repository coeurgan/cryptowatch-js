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

    $scope.go = function(coin) {
        $location.path('/crypto-detail/'+coin.code);
    };

}]);


