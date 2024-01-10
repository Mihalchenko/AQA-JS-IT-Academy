import { BaseElements } from "../helpers/base-elements";

class Base extends BaseElements {
    navigate(url) {
      cy.visit(url);
    }

  }
  
export { Base };