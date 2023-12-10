import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  };

  get apiPageButton() {
    return $('.navbar__items a[href="/docs/api"]');
  };

  get colorModeButton() {
    return $('.colorModeToggle_DEke');
  };

  async goToApiPage() {
    await this.apiPageButton.waitForClickable();
    await this.apiPageButton.click();
  }

  async switchTheme() {
    await this.colorModeButton.waitForClickable();
    await this.colorModeButton.click();
  };

}

export default new HeaderComponent();