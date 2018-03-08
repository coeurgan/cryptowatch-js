'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cryptowatch', function() {
    var ListPage = require('./list.page');
    var mockHttp;
    describe('List view', function() {
        beforeEach(module('myApp.cryptoList', function ($provide) {
            
            //$provide.value("$http", mockHttp);
        }));

        beforeEach(inject(function ($injector) {
            browser.get('index.html#!/crypto-list');
            mockHttp = $injector.get('$httpBackend');
        }));
        
        it('should render crypto-list when user navigates to /crypto-list', function() {
            var listPage = new ListPage();
            expect(listPage.title).toMatch("Your cryptocurrencies");
        });
        
        it('should get to the Add page if user click on Add link', function() {
            var listPage = new ListPage();
            listPage.goAdd();
            expect(browser.getLocationAbsUrl()).toMatch("/crypto-add");
        });
        
        it('should get to the Detail page if user click on a table row', function() {
            var listPage = new ListPage();
            listPage.goToRowDetail(1);
            expect(browser.getLocationAbsUrl()).toMatch("/crypto-detail/ETH");
        });
        
        it('should get to the Detail page if user click on a table row', function() {
            var listPage = new ListPage();
            listPage.goToRowDetail(2);
            expect(browser.getLocationAbsUrl()).toMatch("/crypto-detail/XBY");
        });
        
        it('should get to the Detail page if user click on a table row', function() {
            var listPage = new ListPage();
            listPage.goToRowDetail(3);
            expect(browser.getLocationAbsUrl()).toMatch("/crypto-detail/XRB");
        });
        
        it('should get sort coins by ticker when user click on the ticker header', function() {
            var listPage = new ListPage();
            expect(listPage.tickerCaretUp.isDisplayed()).toBeTruthy();
            expect(listPage.tickerCaretDown.isDisplayed()).toBeFalsy();
            expect(listPage.getTicker(1)).toBe("ETH");
            listPage.sortByTicker();
            expect(listPage.tickerCaretUp.isDisplayed()).toBeFalsy();
            expect(listPage.tickerCaretDown.isDisplayed()).toBeTruthy();
            expect(listPage.getTicker(1)).toBe("XRB");
        });
        
        it('should get sort coins by total value when user click on the total value header', function() {
            var listPage = new ListPage();
            expect(listPage.totalValueCaretUp.isDisplayed()).toBeFalsy();
            expect(listPage.totalValueCaretDown.isDisplayed()).toBeFalsy();
            listPage.sortByTotalValue();
            expect(listPage.totalValueCaretUp.isDisplayed()).toBeTruthy();
            expect(listPage.totalValueCaretDown.isDisplayed()).toBeFalsy();
            listPage.sortByTotalValue();
            expect(listPage.totalValueCaretUp.isDisplayed()).toBeFalsy();
            expect(listPage.totalValueCaretDown.isDisplayed()).toBeTruthy();
        });
    });
});
