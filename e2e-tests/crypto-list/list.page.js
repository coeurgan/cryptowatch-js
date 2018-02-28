var ListPage = function() {
    
    this.title = element.all(by.css('[ng-view] h1')).getText();
    this.linkAdd = element(by.id('link-add'));
    this.firstRow = element.all(by.css('tr')).get(1);

    
    this.goAdd = function() {
        this.linkAdd.click();
    };
    this.goToFirstRowDetail = function(line) {
        this.firstRow.click();
    };
};
module.exports = ListPage;