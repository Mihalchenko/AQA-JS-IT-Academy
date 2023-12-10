import { expect } from 'chai';
import homePage from '../page-objects/homePage.js';
import headerComponent from '../page-objects/page-components/headerComponent.js';
import searchComponent from '../page-objects/page-components/searchComponent.js';

describe('wdio website testing', () => {
  it('Title on page API should be "Introduction"', async () => {
    await homePage.navigate('https://webdriver.io/');
    await headerComponent.goToApiPage();
    expect(await homePage.getMainTitleText()).to.equal('Introduction');
  });

  it('Search by "allure" should return "Allure reporter" page', async () => {
    await searchComponent.searchByText('allure');
    expect(await homePage.getMainTitleText()).to.equal('Allure Reporter');
  });

  it('Switch to dark theme should switch html data-theme to "dark"', async () => {
    await headerComponent.switchColorTheme();
    expect(await homePage.getCurrentColorTheme()).to.equal('dark');
  });

  it('Changing language to "Deutch" should return "de" in html lang', async () => {
    await headerComponent.changeWebsiteLang('de');
    expect(await homePage.getCurrentLang()).to.equal('de');
  });

  it('Title on page API with Deutch lang should be "Einleitung"', async () => {
    await headerComponent.goToApiPage();
    const mainTitle = await $('main h1');
    await browser.waitUntil(async () => (await mainTitle.getText()) !== 'Allure Reporter', {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s',
    });
    expect(await homePage.getMainTitleText()).to.equal('Einleitung');
  });
});
