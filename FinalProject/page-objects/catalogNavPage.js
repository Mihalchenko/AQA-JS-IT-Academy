import { Base } from './base.js';

class CatalogNavPage extends Base {
  constructor() {
    super()
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

  getNavBlockCategoryButton(category) {
    return cy.xpath(`//li[contains(@class,"catalog-navigation-classifier__item")]//span[contains(text(), "${category}")]`);
  }

  getNavBlockSubCategoryButton(subCategory) {
    return cy.xpath(`//div[contains(@class,"catalog-navigation-list__aside-item")]//div[contains(text(),"${subCategory}")]`);
  }

  getItemLinkInNavSubCategory(product) {
    return cy.xpath(`//div[contains(@class,"catalog-navigation-list__aside-item_active")]//span[contains(text(),"${product}")]`)
  }

  goToItemsList(category, subCategory, product) {
    this.click(this.getNavBlockCategoryButton(category));
    this.click(this.getNavBlockSubCategoryButton(subCategory));
    this.click(this.getItemLinkInNavSubCategory(product));
  }
}

export default new CatalogNavPage();

//a[contains(@class,"catalog-navigation-list__dropdown-item")]//span[contains(text(),"Смартфоны")]