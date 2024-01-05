import { Base } from './base.js';

class CartPage extends Base {
  constructor() {
    super()
  }

  get cartItemsList() {
    return cy.get('.cart-form__offers');
  }

  removeItemFromCart() {
    cy.get('a.cart-form__button_remove').realHover('mouse').click();
    cy.get('a.cart-form__link_other').eq(1).click();
  }

  goToCatalogPage() {
    cy.get(`.cart-message__description a[href='https://catalog.onliner.by']`).click();
  }
}

export default new CartPage();