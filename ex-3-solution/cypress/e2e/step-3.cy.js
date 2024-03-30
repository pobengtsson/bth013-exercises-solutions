describe('ContactCard Prop Validation and Default Values', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display a default phone number if none is provided', () => {
    // Assuming default phone is 'N/A'
    cy.get('[data-cy=contact-card]').first().find('[data-cy=contact-phone]').should('contain', 'N/A')
  })

  it('should include "@" in all displayed emails', () => {
    cy.get('[data-cy=contact-email]').each(($el) => {
      expect($el.text()).to.include('@')
    })
  })
})
