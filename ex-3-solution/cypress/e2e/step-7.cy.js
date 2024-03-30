describe('Managing Contacts with Reactive State', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should add a new contact to the list when the form is submitted', () => {
    cy.get('[data-cy=contact-form]').within(() => {
      cy.get('input[name="name"]').type('New Contact')
      cy.get('input[name="email"]').type('new.contact@example.com')
      cy.get('input[name="phone"]').type('123456789')
      cy.root().submit()
    })
    cy.get('[data-cy=contact-card]').contains('New Contact').should('exist')
  })
})
