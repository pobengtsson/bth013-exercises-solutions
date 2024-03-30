describe('Display Static Contacts', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display each contact\'s name, email, and phone in ContactCard components', () => {
    cy.get('[data-cy=contact-card]').first().within(() => {
      cy.get('[data-cy=contact-name]').should('not.be.empty')
      cy.get('[data-cy=contact-email]').should('not.be.empty')
      cy.get('[data-cy=contact-phone]').should('not.be.empty')
    })
  })
})
