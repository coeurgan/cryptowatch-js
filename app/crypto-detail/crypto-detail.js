'use strict';

angular.module('myApp.cryptoDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crypto-detail', {
    templateUrl: 'crypto-detail/crypto-detail.html',
    controller: 'CryptoDetailCtrl'
  });
}])

.controller('CryptoDetailCtrl', [function() {

}]);