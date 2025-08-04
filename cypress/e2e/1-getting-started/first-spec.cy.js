/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://www.automationexercise.com/')
  })
  it('Navigate to login page', () => {
    cy.get('a[href="/login"]').should('be.visible').click()
    cy.url().should('contain', 'login')
    cy.get('[data-qa="login-email"]')
      .should('be.visible')
      .and('not.be.disabled')
    cy.get('[data-qa="login-password"]')
      .should('be.visible')
      .and('not.be.disabled')
    cy.get('[data-qa="signup-name"]')
      .should('be.visible')
      .and('not.be.disabled')
    cy.get('[data-qa="signup-email"]')
      .should('be.visible')
      .and('not.be.disabled')
  })
})
