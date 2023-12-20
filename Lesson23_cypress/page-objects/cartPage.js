import { Base } from './base.js';

class CartPage extends Base {
  constructor() {
    super()
  }

  get cartItemsList() {
    return cy.get('.cart-form__offers');
  }

  get catalogButton() {
    return cy.get(`.cart-message__description a[href='https://catalog.onliner.by']`);
  }

  goToCatalog() {
    this.catalogButton.click();
  }
}

export default new CartPage();