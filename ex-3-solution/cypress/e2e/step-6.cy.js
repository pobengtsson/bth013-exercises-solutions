describe('Emitting Events in ContactCard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should remove the contact from the list when the delete button is clicked', () => {
    cy.get('[data-cy=contact-card]').then((initialList) => {
      const initialCount = initialList.length
      cy.get('[data-cy=delete-contact]').first().click()
      cy.get('[data-cy=contact-card]').should('have.length', initialCount - 1)
    })
  })
})
