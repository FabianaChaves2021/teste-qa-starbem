/// <reference types= "cypress" />

describe('home', () => {
  it('acessando a pagina principal', () => {
    cy.visit('https://bugbank.netlify.app/')
    
    cy.title().should('eq', 'BugBank | O banco com bugs e falhas do seu jeito')
  })
})