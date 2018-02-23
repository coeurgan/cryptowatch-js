angular.module('myApp.cryptoList')

.factory('coinListService', ['$rootScope','$http', function($rootScope,$http) {
	var service = {};
	var coins;

    service.getCoins = function() {
		if (!coins) {
			coins = [ 
				{ code : "XRB", quantity : "10", target : "10000" }, 
				{ code : "XBY", quantity : "100", target : "5000" },
				{ code : "ETH", quantity : "1", target : "200000" }
				];
		}
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
			for (let i = 0; i < coins.length; i++) {
				var coin = coins[i];
				coin.price = data.RAW[coin.code].USD.PRICE;
				coin.marketcap = data.RAW[coin.code].USD.MKTCAP;
				coin.target_price = coin.price * coin.target * 1000000 / coin.marketcap;
				coin.total_value=coin.price*coin.quantity;
				coin.target_total_value=coin.target_price*coin.quantity;
			}
		});
		return coins;
   };
   return service;
 }]);