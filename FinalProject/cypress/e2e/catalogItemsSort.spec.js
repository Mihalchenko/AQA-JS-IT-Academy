import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';

describe('Onliner website catalog items sort testing', () => {

  it('Sort catalog items(new) by price increase should return items sorted by price increase', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    const sortBy = 'asc';
    catalogItemsPage.sortItemsByPrice(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "new");
  });

  it('Sort catalog items(new) by price decrease should return items sorted by price decrease', () => {
    const sortBy = 'desc';
    catalogItemsPage.sortItemsByPrice(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "new");
  });

  it('Click on "Объявления" should open item list with used items', () => {
    catalogItemsPage.openUsedItemsList();
    catalogItemsPage.usedItemsList.should('be.visible');
  })

  it('Sort catalog items(used) by price increase should return items sorted by price increase', () => {
    const sortBy = 'asc';
    catalogItemsPage.sortItemsByPrice(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "used");
  });

  it('Sort catalog items(used) by price decrease should return items sorted by price decrease', () => {
    const sortBy = 'desc';
    catalogItemsPage.sortItemsByPrice(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "used");
  });

  it('Filter by name should return items filtered by name', () => {
    const productName = 'Xiaomi';
    catalogItemsPage.filterItemsByName(productName);
    catalogItemsPage.isItemsFiltered(productName);
  });
});