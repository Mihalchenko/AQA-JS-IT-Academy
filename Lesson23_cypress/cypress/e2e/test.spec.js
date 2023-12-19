import homePage from '../../page-objects/homePage.js';

describe('5element website testing', () => {
  it('Should be opened', () => {
    homePage.navigate('https://5element.by/');
  })
})