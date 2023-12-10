class Base {
  async navigate(url) {
    await browser.url(url);
  };

  get pageMainTitle() { // такой тайтл есть на всех страницах, поэтому выведен в base
    return $('main h1');
  };

  async getMainTitleText() {
    await this.pageMainTitle.waitForDisplayed();
    const text = await this.pageMainTitle.getText();
    return text;
  };

  async getCurrentColorTheme() { // тоже есть на всех страницах
    const html = await $('html[data-theme]');
    const currentTheme = await html.getAttribute('data-theme');
    return currentTheme;
  };

  async getCurrentLang() {
    const html = await $('html[lang]');
    const currentLang = await html.getAttribute('lang');
    return currentLang;
  };
};

export { Base };
