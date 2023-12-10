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

  async getCurrentTheme() { // тоже есть на всех страницах
    const htmlEl = await $('html[data-theme]');
    const currentTheme = await htmlEl.getAttribute('data-theme');
    return currentTheme;
  };
};

export { Base };
