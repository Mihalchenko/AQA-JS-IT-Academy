import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import compareItemsPage from '../../page-objects/compareItemsPage.js';

describe('Onliner compare catalog items tests', () => {

  before(() => {
    cy.clearCookie("compare");
  });

  it('Add items to compare should show compare button', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    catalogItemsPage.addItemsToCompare(3);
    catalogItemsPage.compareButton.should('exist');
  });

  it('Click on compare button should open compare page with "Cравнение товаров" title', () => {
    catalogItemsPage.compareButton.click();
    compareItemsPage.pageMainTitle.should('contain', 'Сравнение товаров');
  });
});