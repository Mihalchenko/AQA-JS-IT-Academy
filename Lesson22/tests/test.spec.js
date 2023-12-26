const { test, expect } = require('@playwright/test');
const BasePage = require('../page-objects/basePage');
const HeaderComponent = require('../page-objects/components/headerComponent');

test.describe('Playwright website testing', function () {
  let basePage;
  let headerComponent;
  test.beforeEach(async ({page}) => {
    basePage = new BasePage(page);
    headerComponent = new HeaderComponent(page);
  })

  test('Title on page API should be "Introduction"', async ({page}) => {
    await basePage.navigate('https://playwright.dev/');
    await headerComponent.goToApiPage();
    expect(await basePage.getMainTitleText()).toEqual('Playwright Library');
  })
})