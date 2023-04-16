describe('Exemplo de teste do Cypress', () => {
    it('Visita o site do Cypress', () => {
      cy.visit('https://www.cypress.io')
      cy.contains('Teste agora').click()
      cy.url().should('include', '/dashboard/')
    })
  })