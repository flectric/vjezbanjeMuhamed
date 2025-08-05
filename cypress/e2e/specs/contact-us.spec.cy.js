/// <reference types="cypress" />

describe('Contact us tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://www.automationexercise.com/')
  })
  it('Navigate to contact us form', () => {
    //When
    cy.get('a[href="/contact_us"]').should('be.visible').click()

    //Then
    cy.url().should('contain', 'contact_us')
    cy.get('#contact-page').contains('Contact').should('be.visible')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('div').find('h2').contains('Contact us', { matchCase: false })
    cy.get('h2').first().should('be.visible') // Contact us element
    cy.get('h2').eq(1).should('be.visible') // get in touch element
  })
  it('Send message througt contact us form', () => {
    //When
    cy.get('a[href="/contact_us"]').should('be.visible').click()

    //Then
    cy.url().should('contain', 'contact_us')

    //When
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Muhamed')
    cy.get('[data-qa="email"]')
      .should('be.visible')
      .clear()
      .type('muhamedkljajic@example.com')
    cy.get('[data-qa="subject"]').should('be.visible').clear().type('Mail')
    cy.get('[data-qa="message"]')
      .should('be.visible')
      .clear()
      .type('Danas je lijep i sunčan dan!')

    //And
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()

    //Then
    cy.get('.alert-success').contains(
      'Success! Your details have been submitted successfully.',
      { matchCase: false }
    )
  })
})
