import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';

describe('Onliner website catalog items testing', () => {

  it('Sort catalog items by price increase should work', () => {
    const sortBy = 'min';
    homePage.navigate('https://catalog.onliner.by/notebook');
    const startItemList = catalogItemsPage.itemsList();
    catalogItemsPage.sortItemsBy(sortBy);
    cy.log('test', startItemList);
  });

});