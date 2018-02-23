angular.module('myApp.cryptoList')

.factory('coinListService', ['$rootScope','$http', function($rootScope,$http) {
	var service = {};
    service.getCoins = function(coins) {
		var codes = "";
		for (let i = 0; i < coins.length; i++) {
			 var coin = coins[i]
			 coin.index = i
			 codes = codes + coin.code + ",";
		}
	    var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
		console.log(url);
		$http.get(url).then(function(response) {
		var data = response.data;
		console.log(data);
		for (let i = 0; i < $rootScope.coins.length; i++) {
			var coin = $rootScope.coins[i];
			coin.price = data.RAW[coin.code].USD.PRICE;
			coin.marketcap = data.RAW[coin.code].USD.MKTCAP;
			coin.target_price = coin.price * coin.target * 1000000 / coin.marketcap;
			coin.total_value=coin.price*coin.quantity;
			coin.target_total_value=coin.target_price*coin.quantity;
		}
    });

   };
   return service;
 }]);