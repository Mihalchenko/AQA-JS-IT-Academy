import homePage from '../../page-objects/homePage.js';
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import compareItemsPage from '../../page-objects/compareItemsPage.js';
import { numberOfItemsForCompare } from '../../helpers/constans.js';

describe('Onliner compare catalog items tests', () => {

  before(() => {
    cy.clearCookie("compare");
  });

  it('Add items to compare should show compare button', () => {
    homePage.navigate('https://catalog.onliner.by/notebook');
    catalogItemsPage.addItemsToCompare(numberOfItemsForCompare);
    catalogItemsPage.compareButton.should('exist');
  });

  it('Click on compare button should open compare page with "Cравнение товаров" title', () => {
    catalogItemsPage.click(catalogItemsPage.compareButton);
    compareItemsPage.pageMainTitle.should('contain', 'Сравнение товаров');
  });

  it(`Deleting one of items from compare should return ${numberOfItemsForCompare-1} items`, () => {
    compareItemsPage.deleteOneItemFromCompare();
    compareItemsPage.itemsInCompare.should('have.lengthOf', numberOfItemsForCompare-1);
  });

  it(`Deleting all exept one of items from compare should exclude delete item button`, () => {
    compareItemsPage.leaveOneItemInCompare();
    compareItemsPage.deleteItemsFromCompareButtons.should('not.exist');
  });

  it('Click on "Очистить сравнение" button should redirect to catalog main page', () => {
    compareItemsPage.click(compareItemsPage.clearCompareButton);
    cy.url().should('be.equal', 'https://catalog.onliner.by/');
  });
});