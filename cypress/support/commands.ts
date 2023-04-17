import { formDataProps } from "cypress/interface/formData";

Cypress.Commands.add('fillForm', (formData: formDataProps) => {
    cy.get('#name').type(formData.computerName);
    cy.get('#introduced').type(formData.introduced);
    cy.get('#discontinued').type(formData.discontinued);
    cy.get('#company').selectOptionByLabel(formData.company.label);
});


Cypress.Commands.add('selectOptionByLabel', (label: string) => {
    cy.get('select')
      .find('option')
      .contains(label)
      .then((option: JQuery<HTMLOptionElement>) => {
        cy.get('select').select(option.val()!);
    });
});