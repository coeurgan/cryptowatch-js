angular.module('myApp.cryptoList')

.factory('coinListService', ['$rootScope','$http', function($rootScope, $http) {
	var service = {};
   
    service.getCoins = function(success) {
        //coins = [{code:"BTC"}];
        //success(coins);
        
        var url = "http://localhost:3000/cryptos";
        console.log("<" + url + ">");
        $http.get(url).then(function(response) {
            var coins = response.data;
            for (let i = 0; i < coins.length; i++) {
                var coin = coins[i];
                coin.target_price = coin.price * coin.target * 1000000 / coin.marketcap;
                coin.total_value = coin.price * coin.quantity;
                coin.target_total_value = coin.target_price * coin.quantity;
            }
            success(coins);
        });
   };
    
    service.add = function(coin, success) {
        var url = "http://localhost:3000/cryptos";
        $http.post(url, {code : coin.code, quantity : coin.quantity, target : coin.target})
        .then(
            function(response) {
                success();
            }, 
            function(response) {
                console.log("ERREUR AJOUT "+coin.code);
            }     
        );
    }
    
    service.delete = function(coin, success) {
        var url = "http://localhost:3000/cryptos/"+coin.code;
        $http.delete(url)
        .then(
            function(response) {
                success();
            }, 
            function(response) {
                console.log("ERREUR SUPRESSION "+coin.code);
            }     
        );
    }
    
   return service;
 }]);