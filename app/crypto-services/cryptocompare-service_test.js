'use strict';

describe('coinListService service', function() {

    var service, mockHttp;
    beforeEach(module('myApp.cryptoList', function ($provide) {
        
        //$provide.value("$http", mockHttp);
    }));
    
    beforeEach(inject(function (_coinListService_, $injector) {
        service = _coinListService_;
        mockHttp = $injector.get('$httpBackend');
    }));
    

    
    it("should throw an exception", function () {
        
        var coins = [];
        expect( function(){ service.getUrl(coins) } ).toThrowError(Error, "No coins.");
    });
    
    it("should use a correct URL with only one coin", function () {
        var coins = [{ code : "XRB"}];
        expect(service.getUrl(coins)).toBe("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRB,&tsyms=USD");
    });
    
    it("should use a correct URL with multiple coin", function () {
        var coins = [{ code : "XRB"},{ code : "BTC"},{ code : "LTC"}];
        expect(service.getUrl(coins)).toBe("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRB,BTC,LTC,&tsyms=USD");
    });
    
    it("should get a completed list of coins", function () {
        mockHttp.expectGET('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRB,XBY,ETH,&tsyms=USD').respond(200, {"RAW":{"XRB":{"USD":{"PRICE":"13.05204","MKTCAP":1739161997.95956}},"XBY":{"USD":{"PRICE":"0.1621","MKTCAP":105365000}},"ETH":{"USD":{"PRICE":871.88,"MKTCAP":85316267033.09781}}}});
        var coins = service.getCoins();
        mockHttp.flush();
        expect(coins.length).toBe(3);
        for (let i = 0; i < coins.length; i++) {
            var coin = coins[i];
            if (coin.code == "XRB")
            {
                expect(coin.price).toBe(13.05204);
                expect(coin.marketcap).toBe(1739161997.95956);
                expect(coin.total_value).toBe(130.5204);
                expect(coin.target_price).toBe(75.0478679692465);
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