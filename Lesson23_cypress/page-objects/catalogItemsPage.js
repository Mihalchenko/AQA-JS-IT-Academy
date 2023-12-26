import { Base } from './base.js';

class CatalogItemsPage extends Base {
  constructor() {
    super()
  }

  get firstCatalogItemLink() {
    return cy.get('a.js-product-title-link').first();
  }

  openFirstItemPage() {
    this.firstCatalogItemLink.click();
  }

}

export default new CatalogItemsPage();