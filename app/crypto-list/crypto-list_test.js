'use strict';

describe('myApp.cryptoList module', function() {

  beforeEach(module('myApp.cryptoList'));

  describe('CryptoListCtrl controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
		var $scope = {};
      var ctrl = $controller('CryptoListCtrl', { $scope: $scope });
      //expect(cryptoListCtrl).toBeDefined();
    }));

  });
});