import { formDataProps } from "cypress/interface/formData";

Cypress.Commands.add('fillForm', (formData: formDataProps) => {
    const introducedDate = `${formData.introduced.year}-${formData.introduced.month}-${formData.introduced.day}`
    const discontinuedDate = `${formData.discontinued.year}-${formData.discontinued.month}-${formData.discontinued.day}`

    cy.get('#name').type(formData.computerName);
    cy.get('#introduced').type(introducedDate);
    cy.get('#discontinued').type(discontinuedDate);
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