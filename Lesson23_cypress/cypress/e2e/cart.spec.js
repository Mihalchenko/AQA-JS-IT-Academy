import homePage from '../../page-objects/homePage.js';
import headerComponent from '../../page-objects/components/headerComponent.js';

describe('Onliner website cart testing', () => {

  it('Should be opened', () => {
    homePage.navigate('https://www.onliner.by/');
    headerComponent.goToCartPage();
  });

});