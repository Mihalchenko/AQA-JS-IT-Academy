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

  isArraySorted(sortBy) {
    let prev;
    let result = true;

    this.itemsListPrices.each((el) => {
      let currentEl = parseFloat(el[0].innerText.replace(/[\s,]/g, m => (m == ',') ? '.' : ''));
      
      if (sortBy === "min") {
        if(currentEl < prev) {
          result = false;
        }
      } else if (sortBy === "max") {
        if(currentEl > prev) {
          result = false;
        }
      }
      prev = currentEl;
    });

    cy.then(() => {
      expect(result).to.be.true;
    });
  };
}

export default new CatalogItemsPage();