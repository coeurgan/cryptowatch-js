'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cryptowatch', function() {



    describe('List view', function() {

        beforeEach(function() {
          browser.get('index.html#!/crypto-list');
        });


        it('should render crypto-list when user navigates to /crypto-list', function() {
          expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch("Your cryptocurrencies");
        });

    });




});
