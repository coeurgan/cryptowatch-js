'use strict';

describe('myApp.cryptoDetail module', function() {

  beforeEach(module('myApp.cryptoDetail'));

  describe('CryptoDetailCtrl controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
		var $scope = {};
		var $rootScope = {};
		$rootScope.coins = [];
      var view2Ctrl = $controller('CryptoDetailCtrl', { $scope: $scope, $rootScope:$rootScope });
      expect(view2Ctrl).toBeDefined();
    }));

  });
});