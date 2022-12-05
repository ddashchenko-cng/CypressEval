/// <reference types="cypress"/>

it ('Google Search', () => {

    cy.visit('https://www.google.com')

    cy.get('.gLFyf').type('Automation Step By Step{Enter}')

    // cy.contains('Google Search').click()

    cy.wait(2000)
    cy.contains('Videos').click()

})