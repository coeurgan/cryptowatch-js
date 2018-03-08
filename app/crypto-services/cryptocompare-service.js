angular.module('myApp.cryptoList')

.factory('coinListService', ['$rootScope','$http', function($rootScope,$http) {
	var service = {};
	var coins;

    service.getServerCoins = function() {

        
        coins = [];
        //console.log(url);

        console.log("retour getServerCoins");
        return coins;
    };
    
    service.getCoins = function(success) {
		if (!coins) {
            //coins = [{code:"BTC"}];
            //success(coins);
            
            var url = "http://localhost:3000/cryptos";
            $http.get(url).then(function(response) {
                coins = response.data;
                for (let i = 0; i < coins.length; i++) {
                    var coin = coins[i];
                    coin.target_price = coin.price * coin.target * 1000000 / coin.marketcap;
                    coin.total_value=coin.price*coin.quantity;
                    coin.target_total_value=coin.target_price*coin.quantity;
                }
                success(coins);
            }.bind(this));
            
		}
        /*
        var url = this.getUrl(coins);
        //console.log(url);
		$http.get(url).then(function(response) {
			var data = response.data;

            
		});
        */
        //console.log(coins);

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
    
    service.add = function(coin) {
        coins.push(coin);
    }
    
   return service;
 }]);