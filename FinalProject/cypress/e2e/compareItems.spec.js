import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import compareItemsPage from '../../page-objects/compareItemsPage.js';

describe('Onliner compare catalog items tests', () => {

  before(() => {
    cy.clearCookie("compare");
  });
  let numberForCompare = 3;

  it('Add items to compare should show compare button', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    catalogItemsPage.addItemsToCompare(numberForCompare);
    catalogItemsPage.compareButton.should('exist');
  });

  it('Click on compare button should open compare page with "Cравнение товаров" title', () => {
    catalogItemsPage.compareButton.click();
    compareItemsPage.pageMainTitle.should('contain', 'Сравнение товаров');
  });

  it(`Deleting one of items from compare should return ${numberForCompare-1} items`, () => {
    compareItemsPage.deleteItemsFromCompareButtons.first().click();
    compareItemsPage.itemsInCompare.should('have.lengthOf', numberForCompare-1);
  });
});