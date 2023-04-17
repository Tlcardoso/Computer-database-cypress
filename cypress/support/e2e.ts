import { formDataProps } from 'cypress/interface/formData';
import './commands'

declare global {

}

declare global {
    namespace Cypress {
      interface Chainable {
        selectOptionByLabel(label: string): Chainable<Element>;
      }
    }

    namespace Cypress {
        interface Chainable {
          fillForm(formData: formDataProps): void;
        }
    }
}