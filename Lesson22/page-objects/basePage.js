class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }

    get pageMainTitle() {  // главный тайтл присутствует на всех страницах, поэтому в base
      return this.page.locator('main h1');
    }

    async getMainTitleText() {
      await this.pageMainTitle.waitFor({state: "visible", timeout: 5000});
      const text = await this.pageMainTitle.textContent();
      return text;
    }

    async getCurrentColorTheme() { // цвет темы присутствует на всех страницах, поэтому в base
      const html = await this.page.locator('html[data-theme]');
      const currentTheme = await html.getAttribute('data-theme');
      return currentTheme;
    }
  }
  
module.exports = BasePage;