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
      const text = await this.pageMainTitle.getText();
      return text;
    }
  }
  
module.exports = BasePage;