import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  }

  get cartPageButton() {
    return cy.get('a.auth-bar__item--cart');
  }

  goToCartPage() {
    this.cartPageButton.click();
  }
}

export default new HeaderComponent();