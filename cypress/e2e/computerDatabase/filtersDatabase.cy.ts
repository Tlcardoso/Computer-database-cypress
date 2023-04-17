import { baseURL } from "cypress/utils/baseURL";
import { searchData } from "cypress/utils/formData";


describe('Computer Database Filters Test', () => {
    
    beforeEach(() => {
      cy.visit(`${baseURL}/computers`);
    });
  
    it('Check if the page is being loaded correctly', () => {
      cy.url()
        .should('eq', `${baseURL}/computers`);
    });

    it('Check if clicking on "Computer name" changes the filter to descending order.', () => {
        cy.get('.computers thead tr th:first-child a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=name&d=desc');
        });
    })

    it('Check if when clicking on "Introduced", the filter toggles between ascending and descending.', () => {
        cy.get('.computers thead tr th:nth-child(2) a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=introduced&d=asc');
        })

        cy.get('.computers thead tr th:nth-child(2) a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=introduced&d=desc');
        })
    })

    it('Check if when clicking on "Discontinued", the filter toggles between ascending and descending.', () => {
        cy.get('.computers thead tr th:nth-child(3) a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=discontinued&d=asc');
        })

        cy.get('.computers thead tr th:nth-child(3) a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=discontinued&d=desc');
        })
    })

    it('Check if when clicking on "Company", the filter toggles between ascending and descending.', () => {
        cy.get('.computers thead tr th:nth-child(4) a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=companyName&d=asc');
        })

        cy.get('.computers thead tr th:nth-child(4) a')
          .click()
          .then(() => {
            cy.url().should('contain', '?p=0&s=companyName&d=desc');
        })
    })

    it('Check if Computer Database have a filter input and a button "Filter by name"', () => {
        cy.get('#searchbox').should('exist').and('have.attr', 'placeholder', 'Filter by computer name...');
        cy.get('#searchsubmit').should('exist').and('have.value', 'Filter by name');
    });

    it('Should not be possible to filter when the input value is empty.', () => {
        cy.get('#searchsubmit').click();

        cy.get('#searchbox').should('have.attr', 'required');
    
        cy.get('#main > h1').should('have.text', '574 computers found');
    });

    it('It should be possible to filter when the input value exists.', () => {
        cy.get('#searchbox').type(searchData.correctSearch);
        cy.get('#searchsubmit').click().then(() => {
            cy.url().should('contain', `computers?f=${searchData.correctSearch}`);
    
            cy.get('#main > h1').should('have.text', 'One computer found');

            cy.get('.computers').contains('td', searchData.correctSearch).should('exist');
        })
    });

    it('Verify if a warning message is displayed when the searched value is not found.', () => {
      cy.get('#searchbox').type('Nothing Computer');
      cy.get('#searchsubmit').click().then(() => {
          cy.url().should('contain', `computers?f=${searchData.incorrectSearch}`);
  
          cy.get('.well').should('exist').should('have.text', 'Nothing to display');
      })
  });

    it('Verify if the next and previous button is navigating.', () => {
        cy.get('.next a').click().then(() => {
            cy.url().should('contain', `?p=1`);

            cy.get('.current').should('contain', 'Displaying 11 to 20');

            cy.get('.prev a').click().then(() => {
                cy.url().should('contain', `?p=0`);

                cy.get('.current').should('contain', 'Displaying 1 to 10');
            })
        })
    });

    it('Check if the prev button starts disabled.', () => {
        cy.get('.prev').should('have.class', 'disabled');
    });
  
});