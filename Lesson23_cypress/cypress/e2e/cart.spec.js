import homePage from '../../page-objects/homePage.js';
import headerComponent from '../../page-objects/components/headerComponent.js';
import cartPage from '../../page-objects/cartPage.js';

describe('Onliner website cart testing', () => {

  it('Empty cart should be opened without items list', () => {
    homePage.navigate('https://www.onliner.by/');
    headerComponent.goToCartPage();
    cartPage.cartItemsList.should('not.exist');
  });

  it('Add items to cart', () => {
    cartPage.navigate('https://catalog.onliner.by/notebook/honor/5301afvl');
    cy.get('.product-aside__button_cart').first().click();
  });

  it('Open chart', () => {
    cy.get(`div.product-recommended__sidebar-overflow a[href="https://cart.onliner.by"]`).click();
  });

});