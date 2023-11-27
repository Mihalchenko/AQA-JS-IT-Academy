const { Builder, By, until, Key } = require('selenium-webdriver');
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
        
        if (browserSize.width < 1234 && browserSize.width >= 768) {
            const moreMenuButton = await driver.findElement(By.css('nav#WDxLfe li[more-menu-item]'));
            await moreMenuButton.click();
            const extensionButton = await driver.findElement(By.css('nav#WDxLfe li[more-menu-item] a[data-url="/extensions"]'));
            await extensionButton.click();
        } else if (browserSize.width < 768) {
            const moreMenuButton = await driver.findElement(By.css('header#atIdViewHeader > div > div[role="button"]'));
            await moreMenuButton.click();
            const extensionButton = await driver.findElement(By.css('header#atIdViewHeader nav[jsname="ihoMLd"] a[data-url="/extensions"]'));
            await driver.wait(until.elementIsVisible(extensionButton), 1000);
            await extensionButton.click();
        } else {
            const extensionButton = await driver.findElement(By.css(`nav#WDxLfe li[data-nav-level="1"] > div > div a[data-url="/extensions"]`));
            await extensionButton.click();
        }

        const mainTitle = await driver.findElement(By.css(`div[role="main"] h1 span`));
        await driver.executeScript("arguments[0].style.backgroundColor='red'", mainTitle);

        expect(await mainTitle.getText()).to.equal('Chrome Extensions');
    });

    it(`Search by word 'driver' should return pages contains 'driver'`, async() => {
        const searchButton = await driver.findElement(By.css('div[jsname="h04Zod"] > div[role="button"]'));
        await searchButton.click();
        const inputBlock = await driver.findElement(By.css('input[type="search"]'));
        await driver.wait(until.elementIsVisible(inputBlock), 1000);
        await inputBlock.sendKeys("driver");
        await inputBlock.sendKeys(Key.ENTER);

        // await driver.wait(until.elementIsVisible(By.css('div.lZsZxe')), 1000);
        // const linksBlock = await driver.findElement(By.css('div.lZsZxe'));
        // console.log(linksBlock);
        // const firstLinkDescription = await driver.findElements(By.css('div.yDWqEe'))[0];
        // console.log(firstLinkDescription.getText())
    });
});