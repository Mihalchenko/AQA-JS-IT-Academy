const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Chromdriver website tests', () => {
    let driver;

    before(async () => {
        driver = new Builder().forBrowser('chrome').build();

        await driver.get('https://chromedriver.chromium.org/home');
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it(`Main page title should be "ChromeDriver"`, async() => {
        const mainTitle = await driver.findElement(By.css(`div[role="main"] h1 span`));

        expect(await mainTitle.getText()).to.equal('ChromeDriver');
    });

    it(`Title on page "Extensions" should be "Chrome Extensions"`, async() => {
        const extensionButton = await driver.findElement(By.css(`nav#WDxLfe a[data-url="/extensions"]`));
    });
});