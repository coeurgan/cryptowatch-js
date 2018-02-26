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
        var url = this.getUrl(coins);
        //console.log(url);
		$http.get(url).then(function(response) {
			var data = response.data;
			for (let i = 0; i < coins.length; i++) {
				var coin = coins[i];
				coin.price = Number(data.RAW[coin.code].USD.PRICE);
				coin.marketcap = Number(data.RAW[coin.code].USD.MKTCAP);
				coin.target_price = coin.price * coin.target * 1000000 / coin.marketcap;
				coin.total_value=coin.price*coin.quantity;
				coin.target_total_value=coin.target_price*coin.quantity;
			}
            
		});
        //console.log(coins);
		return coins;
   };
    service.getUrl = function(coins) {
        if (!coins || coins.length == 0)
        {
            throw new Error("No coins.");
        }
        var codes = "";
        for (let i = 0; i < coins.length; i++) {
             var coin = coins[i]
             coin.index = i
             codes = codes + coin.code + ",";
        }
        return "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
    }
   return service;
 }]);