import { baseURL } from "cypress/utils/baseURL";
import { formData, formFields } from "cypress/utils/formData";

describe('Add a new computer Test', () => {

    beforeEach(() => {
      cy.visit(`${baseURL}/computers/new`);
    });
  
    it('Check if the page is being loaded correctly', () => {
        cy.visit(`${baseURL}/computers/new`);
      
        cy.url().should('eq', `${baseURL}/computers/new`);
      
        cy.get('#name, #introduced, #discontinued, #company').should('exist');
        cy.get('input[type="submit"]').should('exist').and('have.value', 'Create this computer');
        cy.get('.actions > .btn').should('have.text', 'Cancel');
    });

    it('Check if all inputs are editable and visible.', () => {
      
        cy.get(formFields.join(',')).each(($input) => {
          expect($input).to.not.have.attr('readonly');
          expect($input).to.be.visible;
        });
      
        cy.get('#company').should('not.be.disabled');
    });

    it('Check if the "name" input is required.', () => {
        cy.get('.primary').click();

        cy.get('.error')
          .should('exist')
          .within(() => {
            cy.get('label, .help-inline')
              .should('have.css', 'color', 'rgb(157, 38, 29)');
        });
    });

    it('Should display an error message when entering an incorrect value in the "introduced" field', () => {
      
        cy.get('#name').type(formData.computerName);
        cy.get('#introduced')
            .type(`${formData.introduced.year}/${formData.introduced.month}/${formData.introduced.day}`);
      
        cy.get('.primary').click();
      
        cy.get('.error')
          .should('exist')
          .within(() => {
            cy.get('label, .help-inline')
              .should('have.css', 'color', 'rgb(157, 38, 29)');
        });
    });

    it('Should display an error message when entering an incorrect value in the "discontinued" field', () => {
      
        cy.get('#name').type(formData.computerName);
        cy.get('#discontinued')
            .type(`${formData.discontinued.year}/${formData.discontinued.month}/${formData.discontinued.day}`);
      
        cy.get('.primary').click();
      
        cy.get('.error')
            .should('exist')
            .within(() => {
                cy.get('label, .help-inline')
                    .should('have.css', 'color', 'rgb(157, 38, 29)');
            });
    });

    it('Check if it is adding a new computer successfully.', () => {
        cy.fillForm(formData)
      
        cy.get('.primary').click().then(() => {
          cy.url().should('eq', `${baseURL}/computers`);
      
          cy.get('.alert-message')
            .should('exist')
            .and('contain', formData.computerName);
        });
    });
   
    it('Clicking on the "cancel" button should navigate to the database.', () => {
        cy.contains('Cancel').click();
        cy.url().should('eq', `${baseURL}/computers`);
    });
});