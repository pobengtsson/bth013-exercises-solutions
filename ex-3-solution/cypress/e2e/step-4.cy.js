describe('Reactive Properties and Composition API in ContactCard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should toggle the visibility of contact details on button click', () => {
    cy.get('[data-cy=toggle-details]').first().click()
    cy.get('[data-cy=contact-details]').first().should('be.visible')
    cy.get('[data-cy=toggle-details]').first().click()
    cy.get('[data-cy=contact-details]').should('not.exist')
  })
})
