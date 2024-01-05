import { Base } from './base.js';

class CatalogItemsPage extends Base {
  constructor() {
    super()
  }

  openFirstItemPage() {
    cy.get('a.js-product-title-link').first().click();
  }

  get mainTitle() {
    return cy.get('h1.schema-header__title');
  }

}

export default new CatalogItemsPage();