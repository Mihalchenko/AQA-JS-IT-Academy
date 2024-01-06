import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';

describe('Onliner website catalog items sort testing', () => {

  it('Sort catalog items(new) by price increase should work', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    const sortBy = 'asc';
    catalogItemsPage.sortItemsBy(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "new");
  });

  it('Sort catalog items(new) by price decrease should work', () => {
    const sortBy = 'desc';
    catalogItemsPage.sortItemsBy(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "new");
  });

  it('Click on "Объявления" should open item list with used items', () => {
    catalogItemsPage.openUsedItemsList();
    catalogItemsPage.usedItemsList.should('be.visible');
  })

  it('Sort catalog items(used) by price increase should work', () => {
    const sortBy = 'asc';
    catalogItemsPage.sortItemsBy(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "used");
  });

  it('Sort catalog items(used) by price decrease should work', () => {
    const sortBy = 'desc';
    catalogItemsPage.sortItemsBy(sortBy);
    catalogItemsPage.isItemsSorted(sortBy, "used");
  });
});