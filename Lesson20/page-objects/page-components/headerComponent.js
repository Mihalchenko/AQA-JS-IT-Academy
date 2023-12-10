import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  }

  get apiButton() {
    return $('.navbar__items a[href="/docs/api"]');
  }

  get colorModeButton() {
    return $('.colorModeToggle_DEke');
  }

  async switchTheme() {
    await this.colorModeButton.click();
  };

}

export default new HeaderComponent();