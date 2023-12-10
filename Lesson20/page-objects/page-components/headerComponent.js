import { Base } from '../base.js';

class HeaderComponent extends Base {
  constructor() {
    super()
  }

  get apiButton() {
    return $('.navbar__items a[href="/docs/api"]');
  }


}

export default new HeaderComponent();