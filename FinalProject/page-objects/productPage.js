import { Base } from './base.js';

class ProductPage extends Base {
  constructor() {
    super()
  }

  get addProductToCartButton() {
    return cy.get('a.product-aside__button_cart').first();
  }
  
  get cartSidebarHeader() {
    return cy.get('div.product-recommended__subheader').first();
  }

  get goToCartSidebarButton() {
    return cy.get('div.product-recommended__control_checkout a[href="https://cart.onliner.by"]');
  }

}

export default new ProductPage();