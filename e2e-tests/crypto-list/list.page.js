var ListPage = function() {
    
    this.title = element.all(by.css('[ng-view] h1')).first().getText();
    this.linkAdd = element(by.id('link-add'));
    this.rows = element(by.css('tr'));
    
    this.goAdd = function() {
        this.linkAdd.click();
    };
    this.goToDetail();
};
module.exports = ListPage;