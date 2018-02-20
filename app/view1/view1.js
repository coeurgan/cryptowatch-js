'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $scope.sortType     = 'quantity'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.coins = [ 
		{ code : "XRB", quantity : "10", target : "10000" }, 
		{ code : "XBY", quantity : "100", target : "5000" },
		{ code : "ETH", quantity : "1", target : "200000" }
		];
   $scope.cmcinfos = [];
   //var hashCoins = {};
   var codes = "";
  for (let i = 0; i < $scope.coins.length; i++) {
     var coin = $scope.coins[i]
     coin.index = i
     //hashCoins[coin.code] = coin;
     codes = codes + coin.code + ",";
  }
  var data;
  var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
  console.log(url);
     $http.get(url)
      .then(function(response) {
        data = response.data;
	console.log(data);
	//coin.price = data.USD;
	for (let i = 0; i < $scope.coins.length; i++) {
		var coin = $scope.coins[i];
		coin.price = data.RAW[coin.code].USD.PRICE;
		coin.marketcap = data.RAW[coin.code].USD.MKTCAP;
		coin.target_price = coin.price * coin.target * 1000000 / coin.marketcap;
		coin.total_value=coin.price*coin.quantity;
		coin.target_total_value=coin.target_price*coin.quantity;
		//hashCoins[coin.code] = coin;
	}
    });
})

.filter('millionDollarsFilter', function() {
    return function(x) {
        return x/1000000;
    };
});
