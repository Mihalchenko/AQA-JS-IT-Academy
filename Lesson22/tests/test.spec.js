const { test, expect } = require('@playwright/test');
const BasePage = require('../page-objects/basePage');
const HeaderComponent = require('../page-objects/components/headerComponent');
const SearchComponent = require('../page-objects/components/searchComponent');

test.describe('Playwright website testing', function () {
  let basePage;
  let headerComponent;
  let searchComponent;
  test.beforeEach(async ({page}) => {
    basePage = new BasePage(page);
    headerComponent = new HeaderComponent(page);
    searchComponent = new SearchComponent(page);
  })

  test('Title on page API should be "Introduction"', async ({page}) => {
    await basePage.navigate('https://playwright.dev/');
    await headerComponent.goToApiPage();
    expect(await basePage.getMainTitleText()).toEqual('Playwright Library');
  })

  test('Search by word "Reporter" should return "Reporters" page', async ({page}) => {
    await basePage.navigate('https://playwright.dev/');
    await searchComponent.searchByText('reporter');
    expect(await basePage.getMainTitleText()).toEqual('Reporters');
  })

  test('Switch to dark theme should switch html data-theme to "dark"', async () => {
    await basePage.navigate('https://playwright.dev/');
    await headerComponent.switchColorTheme();
    expect(await basePage.getCurrentColorTheme()).toEqual('dark');
  });
})