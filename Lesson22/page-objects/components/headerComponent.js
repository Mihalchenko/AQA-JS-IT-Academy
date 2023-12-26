const BasePage = require('../basePage');

class HeaderComponent extends BasePage {
    constructor(page) {
        super(page);
    }

    get apiPageButton() {
        return this.page.locator(`div.navbar__items a[href="/docs/api/class-playwright"]`);
      }
    
      get colorModeButton() {
        return this.page.locator('.colorModeToggle_DEke');
      }
    
      async goToApiPage() {
        await this.apiPageButton.click();
      }
    
      async switchColorTheme() {
        await this.colorModeButton.click();
      }
    
}

module.exports = HeaderComponent;