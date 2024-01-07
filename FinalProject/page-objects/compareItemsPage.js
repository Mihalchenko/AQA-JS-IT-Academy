import { Base } from './base.js';

class CompareItemsPage extends Base {
  constructor() {
    super()
  }

  get pageMainTitle() {
    return cy.get('h1.b-offers-title');
  }

  get itemsInCompare() {
    return cy.get('tr.product-table__row_top div.product-summary');
  }

  get deleteItemsFromCompareButtons() {
    return cy.get('tr.product-table__row_top a.product-icon_trash');
  }

  deleteOneItemFromCompare() {
    this.deleteItemsFromCompareButtons.first().click();
  }

  leaveOneItemInCompare() {
    this.itemsInCompare.then((arr) => {
        let leng = arr.length;
        while (leng !== 1) {
            this.deleteOneItemFromCompare();
            leng-=1;
        }
    });
  }
}

export default new CompareItemsPage();