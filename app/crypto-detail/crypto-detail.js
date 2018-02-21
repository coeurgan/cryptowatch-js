'use strict';

angular.module('myApp.cryptoDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crypto-detail/:id', {
    templateUrl: 'crypto-detail/crypto-detail.html',
    controller: 'CryptoDetailCtrl'
  });
}])

.controller('CryptoDetailCtrl', ['$scope','$routeParams', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
}]);