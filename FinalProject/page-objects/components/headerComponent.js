import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  }

  goToCartPage() {
    cy.get('a.auth-bar__item--cart').click();
  }

  goToCatalogPage() {
    cy.get('ul.b-main-navigation a[href="https://catalog.onliner.by"]').click();
  }
}

export default new HeaderComponent();