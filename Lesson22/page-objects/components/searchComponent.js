const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    constructor(page) {
        super(page);
    }

    get searchButton() {
        return this.page.locator('.DocSearch.DocSearch-Button');
      }
    
      get searchField() {
        return this.page.locator('input.DocSearch-Input');
      }
    
      get searchResultFirstLink() {
        return this.page.locator('li#docsearch-item-0 a');
      }
    
      async searchByText(searchText) {
        await this.searchButton.click();
        await this.searchField.fill(searchText);
        await this.searchResultFirstLink.click();
      }
    
    
}

module.exports = SearchComponent;