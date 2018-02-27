'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cryptowatch', function() {

    
    describe('Add view', function() {

        beforeEach(function() {
          browser.get('index.html#!/crypto-add');
        });


        it('should render the form to add a coin when user navigates to /crypto-add', function() {
          expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch("Add a coin");
        });

    });


});
