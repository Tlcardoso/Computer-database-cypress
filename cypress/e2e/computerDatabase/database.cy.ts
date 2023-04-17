import { baseURL } from "cypress/utils/baseURL";



describe('Computer Database Page Test', () => {
    
    beforeEach(() => {
      cy.visit(`${baseURL}/computers`);
    });
  
    it('Check if the page is being loaded correctly', () => {
      cy.url()
        .should('eq', `${baseURL}/computers`);
    });
  
    it('When the user clicks on the "Add a new computer" button, they should navigate to the new computer form.', () => {
        cy.get('#add').click();
    
        cy.url()
          .should('eq', `${baseURL}/computers/new`);
    
        cy.get('#main > h1')
          .should('have.text', 'Add a computer');
    });

    beforeEach(() => {
        cy.visit(`${baseURL}/computers`);
      });

    it('When the user clicks on the computer name, it should navigate to the edit form.', () => {
        cy.get('.computers tbody tr:first-child td:first-child a')
          .click()
          .then(() => {
            cy.get('.danger').should('have.value', 'Delete this computer');
        });
    });
});