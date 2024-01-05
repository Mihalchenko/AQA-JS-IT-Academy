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

  get removeItemFromCartButton() {
    return cy.get('a.cart-form__button_remove');
  }

  get closeRemovedItemButton() {
    return cy.get('a.cart-form__link_other').eq(1);
  }

  removeItemFromCart() {
    this.removeItemFromCartButton.realHover('mouse').click();
    this.closeRemovedItemButton.click();
  }

  goToCatalog() {
    this.catalogButton.click();
  }
}

export default new CartPage();