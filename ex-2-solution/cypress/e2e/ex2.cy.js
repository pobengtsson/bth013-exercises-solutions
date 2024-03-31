describe('Input Field Display', () => {
  it('should correctly display text entered by the user', () => {
    cy.visit('/')
    cy.get('input').first().type('Hello World')
    // Verify the exact text is displayed in an element on the page
    cy.get('div[data-test-id="echoInput"]').then(($div) => {
      expect($div.text().trim()).to.equal('Hello World')
    })
  })
})

describe('TO UPPERCASE Button', () => {
  it('should transform the displayed text to uppercase', () => {
    cy.visit('/')
    cy.get('input[placeholder="Enter text here"]').type('Hello');
    cy.contains('button', 'TO UPPERCASE').click()
    cy.get('div[data-test-id="echoInput"]').then(($div) => {
      expect($div.text().trim()).to.equal('HELLO')
    })
  })
})

describe('Font Style of Text Element', () => {
  it('should display the text in Times New Roman font', () => {
    cy.visit('/')
    cy.contains('This text should be in Times New Roman')
      .should('have.css', 'font-family')
      .and('match', /Times New Roman/)
  })
})

describe('Addition to List', () => {
  it('should add each input value to the list without duplicates', () => {
    cy.visit('/')
    const value = 'Test Value'
    // Assuming the input for adding to the list is differentiated by a placeholder or class
    cy.get('input[placeholder="Enter text here"]').type(value)
    cy.contains('button', 'ADD').click()
    // Try adding the same value again
    cy.contains('button', 'ADD').click()
    // Now, specifically target the list and verify the value is added once
    cy.get('ul li').then(listItems => {
      // Filter list items that match the value
      const matchingItems = listItems.filter((i, el) => {
        return Cypress.$(el).text() === value
      })
      expect(matchingItems).to.have.length(1)
    })
  })
})

describe('Sum of Numbers', () => {
  it('should correctly calculate and display the sum of all entered digits', () => {
    cy.visit('/')
    // Enter a sequence of digits
    cy.get('input[placeholder="Enter number here"]').type('123')
    // Verify the sum is displayed as expected
    cy.get('div[data-test-id="sum"]').then(($div) => {
      expect($div.text().trim()).to.equal('Sum of digits: 6')
    })
  })
})
