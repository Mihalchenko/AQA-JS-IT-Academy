import { Base } from './base.js';

class CatalogItemsPage extends Base {
  constructor() {
    super()
  }

  get mainTitle() {
    return cy.get('h1.schema-header__title');
  }

  get newItemsListPrices() {
    return cy.xpath('//a[contains(@class, "schema-product__price-value") and not(contains(@class, "schema-product__price-value_secondary"))]//span[last()]');
  }

  get usedItemsListPrices() {
    return cy.get('a.schema-product__button');
  }

  get itemListNames() {
    return cy.get('div.schema-product__title');
  }

  get usedItemsList() {
    return cy.get('div#schema-second-offers');
  }

  get sortButton() {
    return cy.get('div#schema-order');
  }

  get compareButton() {
    return cy.get('div.compare-button_visible div.compare-button__inner');
  }

  get firstItemPageLink() {
    return cy.get('a.js-product-title-link').first();
  }

  get usedItemListPageLink() {
    return cy.xpath('//div[@class="schema-filter__group"]//span[text()="Объявления"]');
  }

  get allItemsListNamesFilter() {
    return cy.xpath('//div[@class="schema-filter__label"]//span[text()="Производитель"]/ancestor::div[@class="schema-filter__fieldset"]//div[@class="schema-filter-control__item"]');
  }

  get addItemToCompareButtons() {
    return cy.get('label.schema-product__control');
  }

  getItemNameInFilter(name) {
    return cy.xpath(`//div[@class="schema-filter__label"]//span[text()="Производитель"]/ancestor::div[@class="schema-filter__fieldset"]//div[@class="schema-filter-popover__inner"]//input[@value="${name}"]/ancestor::label`);
  }

  getSortItemsByLink(sortBy) {
    return cy.xpath(`//div[@id="schema-order"]//span[text()="${sortBy === "asc" && "Дешевые" || sortBy === "desc" && "Дорогие"}"]`);
  }

  sortItemsBy(sortBy) {
    this.click(this.sortButton);
    this.click(this.getSortItemsByLink(sortBy));
  }
  
  waitForListItemsUpdate(sortBy, condition, type) {
    if (type === "sort") {
      cy.intercept({
        method: 'GET',
        url: `https://catalog.onliner.by/sdapi/catalog.api/search/notebook${condition === "used" && '/second-offers?segment=second&' || condition === "new" && '?'}order=price:${sortBy}`,
      }).as('apiSortCheck');
      cy.wait('@apiSortCheck');
    } else if (type === "filter") {
      cy.intercept({
        method: 'GET',
        url: `https://catalog.onliner.by/sdapi/catalog.api/search/notebook/second-offers?mfr[0]=${sortBy.toLowerCase()}&segment=second&order=price:desc`,
      }).as('apiFilterCheck');
      cy.wait('@apiFilterCheck');
    }
  }

  checkItemsSorted(sortBy, condition) {
    this.waitForListItemsUpdate(sortBy, condition, "sort");

    let prev;
    let result = true;

    (condition === "new" && this.newItemsListPrices || condition === "used" && this.usedItemsListPrices).each((el) => {
      let currentEl = parseFloat(el[0].innerText.replace(/[\s,]/g, m => (m === ',') ? '.' : ''));
      
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
  }

  filterItemsByName(name) {
    this.click(this.allItemsListNamesFilter);
    this.click(this.getItemNameInFilter(name.toLowerCase()));
  }

  checkItemsFiltered(name) {
    this.waitForListItemsUpdate(name, null, "filter");

    let result = true;

    this.itemListNames.each((el) => {
      if((el[0].innerText.toLowerCase()).includes(name.toLowerCase()) === false) {
        result = false;
      }
    });

    cy.then(() => {
      expect(result).to.be.true;
    });
  }

  addItemsToCompare(amount) {
    this.addItemToCompareButtons.each((el, index) => {
      if(index < amount) {
        this.click(el[0]);
      }
    });
  }
}

export default new CatalogItemsPage();