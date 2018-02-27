describe('Million dollar filter', function() {

  var filter;
      beforeEach(module('myApp.cryptoList', function ($provide) {
        
        //$provide.value("$http", mockHttp);
    }));
  beforeEach(inject(function($filter){
    filter = $filter('millionDollarsFilter');
  }));

    it('returns 0 when given null', function() {
        expect(filter(null)).toEqual(0);
    });

    it('returns 1 when given a million', function() {
        expect(filter(1000000)).toEqual(1);
    });
    
    it('returns 0 when given a string', function() {
        expect(filter('abc')).toEqual(0);
    });

    it('returns 2.523698 when given 2523698', function() {
        expect(filter(2523698)).toEqual(2.523698);
    });

});