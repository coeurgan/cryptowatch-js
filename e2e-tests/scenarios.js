'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /crypto-list when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/crypto-list");
  });


  describe('crypto-list', function() {

    beforeEach(function() {
      browser.get('index.html#!/crypto-list');
    });


    it('should render crypto-list when user navigates to /crypto-list', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch("Your cryptocurrencies");
    });

  });

  describe('crypto-detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/crypto-detail/XRB');
    });


    it('should render crypto-detail when user navigates to /crypto-detail', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch("Details XRB");
    });

  });

});
