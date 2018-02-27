'use strict';

describe('myApp.cryptoDetail module', function() {
	var coinListServiceMock;
	beforeEach(module('myApp.cryptoDetail'));
	beforeEach(function() {
		coinListServiceMock = {
			getCoins : function() {
				return [ 			
					{ code : "XRB", quantity : "10", target : "10000" }, 
					{ code : "XBY", quantity : "100", target : "5000" },
					{ code : "ETH", quantity : "1", target : "200000" }
			]	;
			},
		};
	});

  describe('CryptoDetailCtrl controller', function(){
<<<<<<< HEAD

	it('should be defined', inject(function($controller) {
=======
/*
    it('should be defined', inject(function($controller) {
      //spec body
>>>>>>> 644b5c2cd8e394ab495260795b5cb6cd16310f1a
		var $scope = {};
		var $rootScope = {};
		var $routeParams = {};
		$routeParams.code = 'XRB';
		var view2Ctrl = $controller('CryptoDetailCtrl', { $scope: $scope, $rootScope:$rootScope, $routeParams:$routeParams,coinListService:coinListServiceMock });
		expect(view2Ctrl).toBeDefined();
		expect($scope.isEdit).toBeDefined();
		expect($scope.isEdit).toBe(false);
	}));

	it('should provide the selected coin', inject(function($controller) {
		var $scope = {};
		var $rootScope = {};
		var $routeParams = {};
		$routeParams.code = 'XBY';
<<<<<<< HEAD

		var view2Ctrl = $controller('CryptoDetailCtrl', { $scope: $scope, $rootScope:$rootScope, $routeParams:$routeParams ,coinListService:coinListServiceMock});
		expect(view2Ctrl).toBeDefined();
		expect($scope.coin.code).toBe("XBY");
		expect($scope.coin.quantity).toBe("100");
		expect($scope.coin.target).toBe("5000");
	}));
	
	it('should make the editable fields visible', inject(function($controller) {
		var $scope = {};
		var $rootScope = {};
		var $routeParams = {};
		$routeParams.code = 'XBY';

		var view2Ctrl = $controller('CryptoDetailCtrl', { $scope: $scope, $rootScope:$rootScope, $routeParams:$routeParams ,coinListService:coinListServiceMock});
		expect(view2Ctrl).toBeDefined();

		$scope .edit();
		expect($scope.isEdit).toBe(true);
	}));


=======
		$rootScope.coins = [		
			{ code : "XRB", quantity : "10", target : "10000" }, 
			{ code : "XBY", quantity : "100", target : "5000" },
			{ code : "ETH", quantity : "1", target : "200000" }
		];
      var view2Ctrl = $controller('CryptoDetailCtrl', { $scope: $scope, $rootScope:$rootScope, $routeParams:$routeParams });
      expect(view2Ctrl).toBeDefined();
	  expect($scope.coin.code).toBe("XBY");
	  expect($scope.coin.quantity).toBe("100");
	  expect($scope.coin.target).toBe("5000");
    }));
*/
>>>>>>> 644b5c2cd8e394ab495260795b5cb6cd16310f1a
  });
});