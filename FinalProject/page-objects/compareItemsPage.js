import { Base } from './base.js';

class CompareItemsPage extends Base {
  constructor() {
    super()
  }

  get pageMainTitle() {
    return cy.get('h1.b-offers-title');
  }
}

export default new CompareItemsPage();