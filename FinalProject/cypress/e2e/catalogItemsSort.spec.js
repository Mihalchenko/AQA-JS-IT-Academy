import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import { sortBy, condition } from '../../helpers/constans.js';

describe('Onliner website catalog items sort testing', () => {

  it('Sort catalog items(new) by price increase should return items sorted by price increase', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    catalogItemsPage.sortItemsBy(sortBy.priceAsc);
    catalogItemsPage.checkItemsSorted(sortBy.priceAsc, condition.new);
  });

  it('Sort catalog items(new) by price decrease should return items sorted by price decrease', () => {
    catalogItemsPage.sortItemsBy(sortBy.priceDesc);
    catalogItemsPage.checkItemsSorted(sortBy.priceDesc, condition.new);
  });

  it('Click on "Объявления" should open item list with used items', () => {
    catalogItemsPage.click(catalogItemsPage.usedItemListPageLink);
    catalogItemsPage.usedItemsList.should('be.visible');
  })

  it('Sort catalog items(used) by price increase should return items sorted by price increase', () => {
    catalogItemsPage.sortItemsBy(sortBy.priceAsc);
    catalogItemsPage.checkItemsSorted(sortBy.priceAsc, condition.used);
  });

  it('Sort catalog items(used) by price decrease should return items sorted by price decrease', () => {
    catalogItemsPage.sortItemsBy(sortBy.priceDesc);
    catalogItemsPage.checkItemsSorted(sortBy.priceDesc, condition.used);
  });

  it('Filter by name should return items filtered by name', () => {
    const productName = 'Xiaomi';
    catalogItemsPage.filterItemsByName(productName);
    catalogItemsPage.checkItemsFiltered(productName);
  });
});