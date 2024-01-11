import homePage from '../../page-objects/homePage.js';
import headerComponent from '../../page-objects/components/headerComponent.js';
import catalogNavPage from '../../page-objects/catalogNavPage.js'
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';
import { nav } from '../../helpers/constans.js';

describe('Onliner website catalog navigation testing', () => {

  it('Catalog page should be opened with "Каталог" title', () => {
    homePage.navigate('https://www.onliner.by/');
    headerComponent.click(headerComponent.catalogPageLink);
    catalogNavPage.catalogNavTitle.should('contain', 'Каталог');
  });

  it('Click on any category should open navigation list', () => {
    catalogNavPage.click(catalogNavPage.getNavBlockCategoryButton("Электроника"));
    catalogNavPage.catalogNavList.should('exist');
  });

  it('Alternative nav menu should bot be visible while navigation list is opened', () => {
    catalogNavPage.alternativeNavMenu.should('not.be.visible');
  });

  it('Click on opened category should close navigation list', () => {
    catalogNavPage.click(catalogNavPage.getNavBlockCategoryButton("Электроника"));
    catalogNavPage.catalogNavList.should('not.exist');
  });

  it('Alternative nav menu should be visible when navigation list is closed', () => {
    catalogNavPage.alternativeNavMenu.should('be.visible');
  });

  it('Click on mobile phones should return page with title "Мобильные телефоны"', () => {
    catalogNavPage.goToItemsList(nav.category.electronics, nav.subCategory.mobiles, nav.product.smartphones);
    catalogItemsPage.mainTitle.should('contain', "Мобильные телефоны");
  });
});