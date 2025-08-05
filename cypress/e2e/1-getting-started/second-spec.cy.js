/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://www.automationexercise.com/')
  })
  it('Navigate to contact us page', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.get('#contact-page').contains('Contact').should('be.visible')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('div').find('h2').contains('Contact us', { matchCase: false })
    cy.get('h2').first().should('be.visible') // Contact us element
    cy.get('h2').eq(1).should('be.visible') // get in touch element
  })
})
