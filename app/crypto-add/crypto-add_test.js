'use strict';

describe('myApp.cryptoAdd module', function() {


    beforeEach(module('myApp.cryptoAdd'));

    describe('CryptoAddCtrl controller', function() {

        it('should be defined', inject(function($controller) {
            var $scope = {};
            var coinListService = {};
            var $location = {};
            
            var ctrl = $controller("CryptoAddCtrl", { $scope: $scope,  coinListService:coinListService, $location : $location});
            expect(ctrl).toBeDefined();
        }));
    });
});