import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  };

  get apiPageButton() {
    return $(`//nav//div[contains(@class,"navbar__items")][position() = 1]//a[contains(@href,"docs/api")]`);
  };

  get colorModeButton() {
    return $('.colorModeToggle_DEke');
  };

  get langDropdownMenu() {
    return $('.navbar__item.dropdown a.navbar__link');
  };

  async goToApiPage() {
    await this.apiPageButton.waitForClickable();
    await this.apiPageButton.click();
  }

  async switchColorTheme() {
    await this.colorModeButton.waitForClickable();
    await this.colorModeButton.click();
  };

  async changeWebsiteLang(lang) {
    await this.langDropdownMenu.waitForClickable();
    await this.langDropdownMenu.click();
    let langButton = await $(`.dropdown__menu a[lang="${lang}"]`);
    await langButton.waitForClickable();
    await langButton.click();
  };

};

export default new HeaderComponent();