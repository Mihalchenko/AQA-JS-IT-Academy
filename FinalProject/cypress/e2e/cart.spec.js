import homePage from '../../page-objects/homePage.js';
import headerComponent from '../../page-objects/components/headerComponent.js';
import cartPage from '../../page-objects/cartPage.js';
import catalogNavPage from '../../page-objects/catalogNavPage.js'
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import productPage from '../../page-objects/productPage.js';

describe('Onliner website cart testing', () => {

  it('Empty cart should be opened without items list', () => {
    homePage.navigate('https://www.onliner.by/');
    headerComponent.click(headerComponent.cartPageIcon);
    cartPage.cartItemsList.should('not.exist');
  });

  it('Add product to cart from product page should show sidebar with text "Товар добавлен в корзину"', () => {
    homePage.navigate('https://catalog.onliner.by/mobile')
    catalogItemsPage.click(catalogItemsPage.firstItemPageLink);
    productPage.click(productPage.addProductToCartButton);
    productPage.cartSidebarHeader.should('contain', 'Товар добавлен в корзину');
  });

  it('Cart page should be opened with item list after adding items to cart', () => {
    productPage.click(productPage.goToCartSidebarButton);
    cartPage.cartItemsList.should('exist');
  });

  it('Deleting items from cart should return cart page without item list', () => {
    cartPage.removeItemFromCart();
    cartPage.cartItemsList.should('not.exist');
  });

  it('Click on catalog button on cart page should open catalog page with "Каталог" title', () => {
    cartPage.click(cartPage.catalogPageLink);
    catalogNavPage.catalogNavTitle.should('contain', 'Каталог');
  });

});