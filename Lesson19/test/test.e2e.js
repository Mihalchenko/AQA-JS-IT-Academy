import {expect} from 'chai';

describe('wdio website testing', () => {
    it('Title on page API should be "Introduction"', async () => {
        await browser.url('https://webdriver.io/');
        const apiHeaderButton = await $('.navbar__items a[href="/docs/api"]');
        await apiHeaderButton.click();
        expect(await $('main h1').getText()).to.equal('Introduction');
    });

    it('Search by "allure" should return "Allure reporter" page', async () => {
        const searchButton = await $('.DocSearch.DocSearch-Button');
        await searchButton.click();
        const searchInput = await $('input.DocSearch-Input');
        await searchInput.setValue('allure');
        const searchResultFirstLink = await $('li#docsearch-item-0 a');
        await searchResultFirstLink.click();
        expect(await $('main h1').getText()).to.equal('Allure Reporter');
    });

    it('Switch to dark theme should switch html data-theme to "dark"', async () => {
        const switchThemeButton = await $('.colorModeToggle_DEke');
        await switchThemeButton.click();
        expect(await $('html[data-theme]').getAttribute('data-theme')).to.equal('dark');
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
        expect(await $('main h1').getText()).to.equal('Einleitung');
    });
});