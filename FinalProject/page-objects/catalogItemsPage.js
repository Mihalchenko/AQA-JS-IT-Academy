import { Base } from './base.js';

class CatalogItemsPage extends Base {
  constructor() {
    super()
  };

  openFirstItemPage() {
    cy.get('a.js-product-title-link').first().click();
  };

  get mainTitle() {
    return cy.get('h1.schema-header__title');
  };

  get newItemsListPrices() {
    return cy.xpath('//a[contains(@class, "schema-product__price-value") and not(contains(@class, "schema-product__price-value_secondary"))]//span[last()]');
  };

  get usedItemsListPrices() {
    return cy.get('a.schema-product__button');
  }

  openUsedItemsList() {
    cy.xpath('//div[@class="schema-filter__group"]//span[text()="Объявления"]').click();
  }

  get usedItemsList() {
    return cy.get('div#schema-second-offers');
  }

  get sortButton() {
    return cy.get('div#schema-order');
  };

  sortItemsBy(sortBy) {
    this.sortButton.click();

    if (sortBy === "asc") {
      cy.xpath('//div[@id="schema-order"]//span[text()="Дешевые"]').click();
    } else if (sortBy === "desc") {
      cy.xpath('//div[@id="schema-order"]//span[text()="Дорогие"]').click();
    };
  };
  
  waitForListItemsUpdate(sortBy, condition) {
    cy.intercept({
      method: 'GET',
      url: `https://catalog.onliner.by/sdapi/catalog.api/search/notebook${condition == "used" && '/second-offers?segment=second&' || condition == "new" && '?'}order=price:${sortBy}`,
    }).as('apiCheck');
    cy.wait('@apiCheck');
  };

  isItemsSorted(sortBy, condition) {
    this.waitForListItemsUpdate(sortBy, condition);

    let prev;
    let result = true;

    (condition == "new" && this.newItemsListPrices || condition == "used" && this.usedItemsListPrices).each((el) => {
      let currentEl = parseFloat(el[0].innerText.replace(/[\s,]/g, m => (m == ',') ? '.' : ''));
      
      if (sortBy === "asc") {
        if(currentEl < prev) {
          result = false;
        }
      } else if (sortBy === "desc") {
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