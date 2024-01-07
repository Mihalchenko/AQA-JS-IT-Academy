import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import compareItemsPage from '../../page-objects/compareItemsPage.js';

describe('Onliner compare catalog items tests', () => {

  before(() => {
    cy.clearCookie("compare");
  });
  let numberForCompare = 4;

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
    compareItemsPage.deleteOneItemFromCompare();
    compareItemsPage.itemsInCompare.should('have.lengthOf', numberForCompare-1);
  });

  it(`Deleting all exept one of items from compare should exclude delete item button`, () => {
    compareItemsPage.leaveOneItemInCompare();
    compareItemsPage.deleteItemsFromCompareButtons.should('not.exist');
  });
});