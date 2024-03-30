describe('Slots in ContactCard for Customization', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render custom slot content in at least one ContactCard', () => {
    cy.get('[data-cy=toggle-details]').first().click()
    cy.get('[data-cy=contact-card]').find('[data-cy=slot-custom]').should('have.length.at.least', 1)
  })
})
