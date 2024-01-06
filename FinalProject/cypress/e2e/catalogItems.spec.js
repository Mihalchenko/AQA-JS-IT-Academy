import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';

describe('Onliner website catalog items testing', () => {

  it('Sort catalog items by price increase should work', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    const sortBy = 'min';
    catalogItemsPage.sortItemsBy(sortBy);
    catalogItemsPage.isItemsSorted(sortBy);
  });

  it('Sort catalog items by price decrease should work', () => {
    const sortBy = 'max';
    catalogItemsPage.sortItemsBy(sortBy);
    catalogItemsPage.isItemsSorted(sortBy);
  });
});