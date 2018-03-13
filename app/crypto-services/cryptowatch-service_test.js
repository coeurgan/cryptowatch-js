'use strict';

describe('Cryptocompare service', function() {

    var service, mockHttp;
    beforeEach(module('myApp.cryptoList', function ($provide) {
        
        //$provide.value("$http", mockHttp);
    }));
    
    beforeEach(inject(function (_coinListService_, $injector) {
        service = _coinListService_;
        mockHttp = $injector.get('$httpBackend');
    }));
    

    it("should get a completed list of coins", function () {
        mockHttp.expectGET('http://localhost:3000/cryptos').respond(200, '[{"code":"XRB","quantity":12,"target":10000,"price":12.34,"marketcap":123456789}]');

        var coins = service.getCoins(function(coins){
            mockHttp.flush();
        expect(coins.length).toBe(3);
        for (let i = 0; i < coins.length; i++) {
            var coin = coins[i];
            if (coin.code == "XRB")
            {
                expect(coin.quantity).toBe(12);
                expect(coin.target).toBe(10000);
                expect(coin.price).toBe(12.34);
                expect(coin.marketcap).toBe(1234567890);
                expect(coin.total_value).toBe(148.08);
                expect(coin.target_price).toBe(99.9540009096);
            }
            if (coin.code == "XBY")
            {
                expect(coin.price).toBe(0.1621);
                expect(coin.marketcap).toBe(105365000);
                expect(coin.total_value).toBe(16.21);
                expect(coin.target_price).toBe(7.6923076923076925);
            }
            if (coin.code == "ETH")
            {
                expect(coin.price).toBe(871.88);
                expect(coin.marketcap).toBe(85316267033.09781);
                expect(coin.total_value).toBe(871.88);
                expect(coin.target_price).toBe(2043.8775167267004);
            }
        }
        });
        
    });


});