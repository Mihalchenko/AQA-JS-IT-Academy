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
  
  waitForListItemsUpdate() {
    cy.wait(1200); // пробовал по разному дожидаться с плагином waitUntil для cypress, но не сработало
  };

  isItemsSorted(sortBy, condition) {
    this.waitForListItemsUpdate();

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