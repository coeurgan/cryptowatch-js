'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cryptowatch', function() {


    it('should automatically redirect to /crypto-list when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/crypto-list");
    });

});
