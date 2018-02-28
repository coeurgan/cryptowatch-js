var ListPage = function() {
    
    this.title = element.all(by.css('[ng-view] h1')).getText();
    this.linkAdd = element(by.id('link-add'));
    
    this.tickerHeader = element(by.id('ticker-header'));
    this.tickerCaretDown = element(by.id('ticker-caret-down'));
    this.tickerCaretUp = element(by.id('ticker-caret-up'));
    
    this.totalValueHeader = element(by.id('totalvalue-header'));
    this.totalValueCaretDown = element(by.id('totalvalue-caret-down'));
    this.totalValueCaretUp = element(by.id('totalvalue-caret-up'));
    
    this.marketCapHeader = element(by.id('marketcap-header'));
    this.marketCapCaretDown = element(by.id('marketcap-caret-down'));
    this.marketCapCaretUp = element(by.id('marketcap-caret-up'));
    
    this.targetPriceHeader = element(by.id('target-price-header'));
    this.targetPriceCaretDown = element(by.id('target-price-caret-down'));
    this.targetPriceCaretUp = element(by.id('target-price-caret-up'));
    
    this.targetTotalValueHeader = element(by.id('target-totalvalue-header'));
    this.targetTotalValuCaretDown = element(by.id('target-price-caret-down'));
    this.targetTotalValuCaretUp = element(by.id('target-price-caret-up'));

    this.goAdd = function() {
        this.linkAdd.click();
    };
    this.goToRowDetail = function(line) {
        element.all(by.css('tr')).get(line).click();
    };
    
    this.sortByTicker = function() {
        this.tickerHeader.click();
    }
    
    this.sortByTotalValue = function() {
        this.totalValueHeader.click();
    }
    
    this.sortByMarketCap = function() {
        this.marketCapHeader.click();
    }
    
    this.sortByTargetPrice = function() {
        this.targetPriceHeader.click();
    }
    
    this.sortByTargetTotalValue = function() {
        this.targetTotalValueHeader.click();
    }
    
    this.getTicker = function(line)
    {
        return element.all(by.css('tr')).get(line).all(by.css('td')).first().getText();
    }
    
    this.getTotalValue = function(line)
    {
        return element.all(by.css('tr')).get(line).all(by.css('td')).get(3).getText();
    }
};
module.exports = ListPage;