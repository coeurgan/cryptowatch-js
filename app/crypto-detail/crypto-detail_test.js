'use strict';

describe('myApp.cryptoDetail module', function() {

    var service, mockHttp;
    beforeEach(module('myApp.cryptoList'));
    beforeEach(module('myApp.cryptoDetail'));
    
    beforeEach(inject(function (_coinListService_, $injector) {
        service = _coinListService_;
        mockHttp = $injector.get('$httpBackend');
    }));
    

  describe('CryptoDetailCtrl controller', function(){

    it('should be defined', inject(function($controller) {
        //spec body
        var $scope = {};
        var $routeParams = {};
        $routeParams.code = 'XRB';
        var view2Ctrl = $controller('CryptoDetailCtrl', 
                            { $scope: $scope, $routeParams:$routeParams, coinListService:service});
        expect(view2Ctrl).toBeDefined();
    }));
    it('should provide the selected coin', inject(function($controller) {
        //spec body
        var $scope = {};
        var $routeParams = {};
        $routeParams.code = 'XBY';
        $scope.coins = [		
            { code : "XRB", quantity : "10", target : "10000" }, 
            { code : "XBY", quantity : "100", target : "5000" },
            { code : "ETH", quantity : "1", target : "200000" }
        ];
        var view2Ctrl = $controller('CryptoDetailCtrl', 
                            { $scope: $scope, $routeParams:$routeParams, coinListService:service});
        expect(view2Ctrl).toBeDefined();
        expect($scope.coin.code).toBe("XBY");
        expect($scope.coin.quantity).toBe("100");
        expect($scope.coin.target).toBe("5000");
    }));
    it('should make the editable fields visible', inject(function($controller) {
		var $scope = {};
		var $routeParams = {};
		$routeParams.code = 'XBY';
        $scope.coins = [		
            { code : "XRB", quantity : "10", target : "10000" }, 
            { code : "XBY", quantity : "100", target : "5000" },
            { code : "ETH", quantity : "1", target : "200000" }
        ];
        var view2Ctrl = $controller('CryptoDetailCtrl', 
                            { $scope: $scope, $routeParams:$routeParams, coinListService:service});
        expect(view2Ctrl).toBeDefined();

		$scope .edit();
		expect($scope.isEdit).toBe(true);
	}));
  });
});