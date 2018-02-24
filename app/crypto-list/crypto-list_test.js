'use strict';

describe('myApp.cryptoList module', function() {

  beforeEach(module('myApp.cryptoList'));

  describe('CryptoListCtrl controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
	  var $scope = {};
      var cryptoListCtrl = $controller('CryptoListCtrl', { $scope: $scope });
      expect(cryptoListCtrl).toBeDefined();
    }));
	
	it('should provide a non empty list of coins', inject(function($controller) {
      //spec body
	  var $scope = {};
	  var $rootScope = {};
      var cryptoListCtrl = $controller('CryptoListCtrl', { $scope: $scope, $rootScope:$rootScope});
      expect(cryptoListCtrl).toBeDefined();
	  expect($scope.coins).toBeDefined();
	  expect($scope.coins.length).toBe(3);
    }));

  });
});
