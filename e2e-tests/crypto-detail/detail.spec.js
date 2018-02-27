'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cryptowatch', function() {




    describe('Detail view', function() {

        beforeEach(function() {
          browser.get('index.html#!/crypto-detail/XRB');
        });


        it('should render the details of a coin when user navigates to /crypto-detail', function() {
          expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch("Details XRB");
        });

    });
    



});
