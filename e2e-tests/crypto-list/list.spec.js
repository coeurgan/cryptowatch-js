'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cryptowatch', function() {
    var ListPage = require('./list.page');
    describe('List view', function() {

        beforeEach(function() {
          browser.get('index.html#!/crypto-list');
        });


        it('should render crypto-list when user navigates to /crypto-list', function() {
            var listPage = new ListPage();
            expect(listPage.title).toMatch("Your cryptocurrencies");
        });
        
        it('should get to the Add page if user click on Add link', function() {
            var listPage = new ListPage();
            listPage.goAdd();
            expect(browser.getLocationAbsUrl()).toMatch("/crypto-add");
        });
    });
});
