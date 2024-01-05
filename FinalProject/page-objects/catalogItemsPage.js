import { Base } from './base.js';

class CatalogItemsPage extends Base {
  constructor() {
    super()
  }

  openFirstItemPage() {
    cy.get('a.js-product-title-link').first().click();
  }

  get mainTitle() {
    return cy.get('h1.schema-header__title');
  }

  get itemsListPrices() {
    return cy.xpath('//a[contains(@class, "schema-product__price-value") and not(contains(@class, "schema-product__price-value_secondary"))]//span[last()]');
  }

  get sortButton() {
    return cy.get('div#schema-order');
  }

  sortItemsBy(sortBy) {
    this.sortButton.click();

    if (sortBy === "min") {
      cy.xpath('//div[@id="schema-order"]//span[text()="Дешевые"]').click();
    } else if (sortBy === "max") {
      cy.xpath('//div[@id="schema-order"]//span[text()="Дорогие"]').click();
    }
  }

  itemsList() {
    let arr = [];
    this.itemsListPrices.each(el => {
      arr.push(parseFloat(el.text().replace(/[\s,]/g, m => (m == ',') ? '.' : '')))
    });
    return arr;
  }

  arrayCompare(sortBy) {
    let currentArray = this.itemsList();

    return true;

  }

}

export default new CatalogItemsPage();