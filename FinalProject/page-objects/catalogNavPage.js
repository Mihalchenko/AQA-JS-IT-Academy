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

  get catalogNavTitle() {
    return cy.get('div.catalog-navigation > div.catalog-navigation__title');
  }

  get catalogNavList() {
    return cy.get('div.catalog-navigation-list_opened');
  }

  get alternativeNavMenu() {
    return cy.get('ul.catalog-bar__list');
  }

  goToSmartphones() {
    this.electronicsBlockButton.click();
    this.mobilesBlockButton.click();
    this.smartphonesButton.click();
  }
}

export default new CatalogNavPage();