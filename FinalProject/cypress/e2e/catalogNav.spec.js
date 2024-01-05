import homePage from '../../page-objects/homePage.js';
import headerComponent from '../../page-objects/components/headerComponent.js';
import catalogNavPage from '../../page-objects/catalogNavPage.js'
import catalogItemsPage from '../../page-objects/catalogItemsPage.js';

describe('Onliner website catalog navigation testing', () => {

  it('Catalog page should be opened with "Каталог" title', () => {
    homePage.navigate('https://www.onliner.by/');
    headerComponent.goToCatalogPage();
    catalogNavPage.catalogNavTitle.should('contain', 'Каталог');
  });

  it('Click on any category should open navigation list', () => {
    catalogNavPage.electronicsBlockButton.click();
    catalogNavPage.catalogNavList.should('exist');
  });

  it('Click on opened category should close navigation list', () => {
    catalogNavPage.electronicsBlockButton.click();
    catalogNavPage.catalogNavList.should('not.exist');
  });

  it('Click on mobile phones should return page with title "Мобильные телефоны"', () => {
    catalogNavPage.goToSmartphones();
    catalogItemsPage.mainTitle.should('contain', "Мобильные телефоны");
  });
});