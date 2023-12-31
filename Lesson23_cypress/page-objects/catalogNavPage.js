import { Base } from './base.js';

class CatalogNavPage extends Base {
  constructor() {
    super()
  }

  get electronicsBlockButton() {
    return cy.get('li.catalog-navigation-classifier__item[data-id="1"]');
  }

  get mobilesBlockButton() {
    return cy.get('div.catalog-navigation-list__category[data-id="1"] div.catalog-navigation-list__aside-item').first();
  }

  get smartphonesButton() {
    return cy.get('div.catalog-navigation-list__category[data-id="1"] div.catalog-navigation-list__aside-item a').first();
  }

  goToSmartphones() {
    this.electronicsBlockButton.click();
    this.mobilesBlockButton.click();
    this.smartphonesButton.click();
  }
}

export default new CatalogNavPage();