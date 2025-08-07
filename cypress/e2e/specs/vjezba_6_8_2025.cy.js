/// <reference types="cypress" />

describe('Vjezba_06_08_2025', () => {})
beforeEach('Visit page', () => {
  cy.visit('https://www.automationexercise.com/')
})

it('Navigate to Contact us form', () => {
  //When
  cy.get('.navbar-nav')
    .contains('Contact us', { matchCase: false })
    .should('be.visible')
  cy.get('a[href*="contact_us"]').should('be.visible').click()

  //Then
  cy.url().should('contain', 'contact_us')
  //cy.get('#contact-page').contains('COntact', { matchCase: false })
  cy.get('#contact-page').contains('Contact', { matchCase: false })
  cy.contains('div.bg', 'contact us', { matchCase: false }).should('be.visible')
})
it('Send message througt contact us form', () => {
  //When
  cy.get('a[href*="contact_us"]').should('be.visible').click()
  cy.url().should('contain', 'contact_us')

  //Then
  cy.get('[data-qa="name"]').should('be.visible').clear().type('Muhamed')
  cy.get('[data-qa="email"]')
    .should('be.visible')
    .clear()
    .type('muhamedkljajic@example.com')
  cy.get('[data-qa="subject"]').should('be.visible').clear().type('Predmet')
  cy.get('[data-qa="message"]').should('be.visible').clear().type('Poruka')

  //And
  cy.get('input[type="file"]').selectFile('cypress/fixtures/transflex_7.jpg')
  cy.get('[data-qa="submit-button"]').should('be.enabled').click()

  //Then
  cy.get('.alert-success').should('be.visible')
  cy.get('.alert-success').contains('Success', { matchCase: false })
})

it.only('Catch email validation message', () => {
  //When
  cy.get('a[href*="contact_us"]').should('be.visible').click()
  cy.url().should('contain', 'contact_us')

  //Then
  cy.get('[data-qa="name"]').should('be.visible').clear().type('Muhamed')
  cy.get('[data-qa="subject"]').should('be.visible').clear().type('Predmet')
  cy.get('[data-qa="message"]').should('be.visible').clear().type('Poruka')

  //And
  cy.get('[data-qa="submit-button"]').should('be.enabled').click()

  //Then
  cy.get('[data-qa="email"]')
    .invoke('prop', 'validationMessage')
    .should('eq', 'Please fill out this field.')
})
