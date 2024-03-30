describe('Vue.js Project Initialization', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render the ContactList component', () => {
    cy.get('[data-cy=contact-list]').should('exist')
  })

  it('should render ContactCard components within ContactList', () => {
    cy.get('[data-cy=contact-list]').find('[data-cy=contact-card]').should('have.length.at.least', 1)
  })
})
