import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  }

  get cartPageIcon() {
    return cy.get('a.auth-bar__item--cart');
  }

  get catalogPageLink() {
    return cy.get('ul.b-main-navigation a[href="https://catalog.onliner.by"]');
  }

}

export default new HeaderComponent();