import { Base } from './base.js';

class ProductPage extends Base {
  constructor() {
    super()
  }

  addProductToCart() {
    cy.get('a.product-aside__button_cart').first().click();
  }
  
  get cartSidebarHeader() {
    return cy.get('div.product-recommended__subheader').first();
  }

  goToCartFromSidebar() {
    cy.get('div.product-recommended__control_checkout a[href="https://cart.onliner.by"]').click();
  }

}

export default new ProductPage();