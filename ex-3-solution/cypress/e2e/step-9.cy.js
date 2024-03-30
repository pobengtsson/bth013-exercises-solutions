describe('Advanced Reactivity in ContactList', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should update the contacts count reactively as contacts are added or removed', () => {
    cy.get('[data-cy=contact-list]').find('[data-cy=contact-card]').should('have.length.at.least', 1)

    cy.get('[data-cy=contacts-count]').invoke('text').then((initialCountText) => {
      cy.log(initialCountText)
      const initialCount = parseInt(initialCountText, 10)
      // Perform the action that changes the count
      cy.get('[data-cy=delete-contact]').first().click()

      // Wait for the count to change and then verify it
      cy.get('[data-cy=contacts-count]')
        .invoke('text')
        .should((newCountText) => {
          const newCount = parseInt(newCountText, 10)
          expect(newCount).to.eq(initialCount - 1)
        })
    })
  })

})
