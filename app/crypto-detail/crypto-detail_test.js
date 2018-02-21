'use strict';

describe('myApp.cryptoDetail module', function() {

  beforeEach(module('myApp.cryptoDetail'));

  describe('CryptoDetailCtrl controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
		var $scope = {};
      var view2Ctrl = $controller('CryptoDetailCtrl', { $scope: $scope });
      expect(view2Ctrl).toBeDefined();
    }));

  });
});