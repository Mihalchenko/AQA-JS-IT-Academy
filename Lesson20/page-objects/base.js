import { browser, $ } from '@wdio/globals';

class Base {
  async navigate(url) {
    await browser.url(url);
  }

  get pageMainTitle() {  // главный тайтл присутствует на всех страницах, поэтому в base
    return $('main h1');
  }

  async getMainTitleText() {
    await this.pageMainTitle.waitForDisplayed();
    const text = await this.pageMainTitle.getText();
    return text;
  }

  async waitForTitleChange(text) {
    await browser.waitUntil(async () => (await this.getMainTitleText()) !== text, {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s',
    });
  }

  async getCurrentColorTheme() { // цвет темы присутствует на всех страницах, поэтому в base
    const html = await $('html[data-theme]');
    const currentTheme = await html.getAttribute('data-theme');
    return currentTheme;
  }

  async getCurrentLang() { // язык присутствует на всех страницах, поэтому в base
    const html = await $('html[lang]');
    const currentLang = await html.getAttribute('lang');
    return currentLang;
  }
}

export { Base };
