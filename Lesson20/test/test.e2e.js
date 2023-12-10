import { expect } from 'chai';
import homePage from '../page-objects/homePage.js';
import headerComponent from '../page-objects/page-components/headerComponent.js';
import searchComponent from '../page-objects/page-components/searchComponent.js';

describe('wdio website testing', () => {
  it('Title on page API should be "Introduction"', async () => {
    await homePage.navigate('https://webdriver.io/');
    await headerComponent.apiButton.click();
    expect(await homePage.pageMainTitle.getText()).to.equal('Introduction');
  });

  it('Search by "allure" should return "Allure reporter" page', async () => {
    await searchComponent.searchByText('allure');
    expect(await homePage.pageMainTitle.getText()).to.equal('Allure Reporter');
  });

  it('Switch to dark theme should switch html data-theme to "dark"', async () => {
    await headerComponent.switchTheme();
    expect(await homePage.getCurrentTheme()).to.equal('dark');
  });

  it('Changing language to "Deutch" should return "Deutch"', async () => {
    const langDropdownMenu = await $('.navbar__item.dropdown');
    await langDropdownMenu.click();
    const deLangButton = await $('.dropdown__menu a[lang="de"]');
    await deLangButton.click();
    expect(await $('.navbar__item.dropdown a.navbar__link').getText()).to.equal('Deutsch');
  });

  it('Title on page API with Deutch lang should be "Einleitung"', async () => {
    const apiHeaderButton = await $('.navbar__items a[href="/de/docs/api"]');
    await apiHeaderButton.click();
    const mainTitle = await $('main h1');
    await browser.waitUntil(async () => (await mainTitle.getText()) !== 'Allure Reporter', {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s',
    });
    expect(await $('main h1').getText()).to.equal('Einleitung');
  });
});
