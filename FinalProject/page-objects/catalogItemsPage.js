import { Base } from './base.js';

class CatalogItemsPage extends Base {
  constructor() {
    super()
  }

  openFirstItemPage() {
    cy.get('a.js-product-title-link').first().click();
  }

}

export default new CatalogItemsPage();