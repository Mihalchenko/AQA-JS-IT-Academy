import { Base } from './base.js';

class CartPage extends Base {
  constructor() {
    super()
  }

  get cartItemsList() {
    return cy.get('div.cart-form__offers');
  }

  get cartPageDeleteItemButton() {
    return cy.get('a.cart-form__button_remove');
  }

  get cartPageClostItemButton() {
    return cy.xpath('//a[contains(@class, "cart-form__link_other") and text()="Закрыть"]');
  }

  get catalogPageLink() {
    return cy.get(`.cart-message__description a[href='https://catalog.onliner.by']`);
  }

  removeItemFromCart() {
    this.cartPageDeleteItemButton.realHover('mouse');
    this.click(this.cartPageDeleteItemButton);
    this.click(this.cartPageClostItemButton);
  }
}

export default new CartPage();