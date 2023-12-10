import { Base } from '../base.js';
import { $ } from '@wdio/globals';

class SearchComponent extends Base {
  constructor() {
    super()
  }

  get searchButton() {
    return $('.DocSearch.DocSearch-Button');
  }

  get searchField() {
    return $('input.DocSearch-Input');
  }

  get searchResultFirstLink() {
    return $('li#docsearch-item-0 a');
  }

  async searchByText(searchText) {
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(searchText);
    await this.searchResultFirstLink.waitForDisplayed();
    await this.searchResultFirstLink.click();
  }


}

export default new SearchComponent();