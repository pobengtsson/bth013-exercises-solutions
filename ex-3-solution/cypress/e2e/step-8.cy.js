describe('Composition API Lifecycle Hooks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should log a message to the console on contacts list change', () => {
    // Note: Cypress cannot directly assert console.log output. This is a conceptual test case.
    // You would need to spy on console.log before the application loads, or check for effects of the list change.
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
      cy.get('[data-cy=delete-contact]').first().click()
      cy.get('@consoleLog').should('be.calledWith', 'Contacts list updated')
    })
  })
})
