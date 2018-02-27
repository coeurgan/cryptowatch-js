angular.module('myApp.cryptoList')

.filter('millionDollarsFilter', function() {
    return function(x) {
        
        if (!x || isNaN(x)) {
            return 0;
        }
        return x/1000000;
    };
});