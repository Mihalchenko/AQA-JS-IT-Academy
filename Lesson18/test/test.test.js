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
        let browserSize = await driver.manage().window().getSize();
        if (browserSize.width < 1234) {
            const moreMenuButton = await driver.findElement(By.css('nav#WDxLfe li[more-menu-item]'));
            await moreMenuButton.click();
            const extensionButton = await driver.findElement(By.css('nav#WDxLfe li[more-menu-item] a[data-url="/extensions"]'));
            await extensionButton.click();
        } else {
            const extensionButton = await driver.findElement(By.css(`nav#WDxLfe li[data-nav-level="1"] > div > div a[data-url="/extensions"]`));
            await extensionButton.click();
        }

        const mainTitle = await driver.findElement(By.css(`div[role="main"] h1 span`));
        await driver.executeScript("arguments[0].style.backgroundColor='red'", mainTitle);

        expect(await mainTitle.getText()).to.equal('Chrome Extensions');
    });
});