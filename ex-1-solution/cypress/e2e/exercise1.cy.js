describe('Step 1', () => {
  it('has a text element with "Hello World!" text on the page', () => {
    cy.visit('/')
    cy.get('span').should('have.text', 'Hello World!')
  })
})

describe('Step 2', () => {
  it('has an input that displays the input text in another span', () => {
    const typed_text = 'Luke Skywalker'
    cy.visit('/')
    cy.get('input')
      .type(typed_text)
    cy.get('span').last().should('have.text', typed_text)
  })
})

describe('Step 3', () => {
  it('asserts that all <span> elements with text use Arial font and are dark-blue', () => {
    cy.visit('/')

    // Find all <span> elements that contain text.
    cy.get('span').each(($span) => {
      // Only proceed if the span contains text.
      if ($span.text().trim().length > 0) {
        // Assert that the font-family for each <span> includes Arial.
        cy.wrap($span)
          .should('have.css', 'font-family')
          .and('match', /Arial/)

        // Assert that the color for each <span> is dark-blue.
        // Here, I'm using 'rgb(0, 0, 139)' as an example; adjust as necessary for your specific shade of dark-blue.
        cy.wrap($span)
          .should('have.css', 'color', 'rgb(0, 0, 139)')
      }
    })
  })
})


describe('Step 4:', () => {
  it('has a button that shows an alert', () => {
    cy.visit('/')
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('button').first()
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Greetings earthling! We come in peace')
      })
  })
})

describe('Step 5:', () => {
  it('displays the input value character count as an element', () => {
    cy.visit('/')
    const testString = 'Test and test again'
    cy.get('input')
      .type(testString)
    cy.get('.char-count') // Adjust selector for character count display
      .should('have.text', `Character count: ${testString.length}`)
  })
})

describe('Step 6', () => {
  it('has a button that adds "An Item" to an unnumbered list', () => {
    cy.visit('/'); // Visit the base URL of the Vue app

    // Click the button that adds "An Item" to the list
    // Replace 'Add Item Button' with the actual text or identifier of the button
    cy.get('button').contains('Add Item Button').click()

    // Verify that "An Item" is added to the unnumbered list
    // This assumes that "An Item" is unique enough to not be confused with other list items
    cy.get('ul').should('contain', 'An Item')

    // Verify that "An Item" is specifically a list item within the <ul>
    cy.get('ul>li').contains('An Item').should('exist')
  })
})

describe('Step 7:', () => {
  it('toggles the <div> element between being part of the DOM and removing it from the DOM when the button is clicked.', () => {
    cy.visit('/');
    // Ensure the <div> element is not in the DOM initially
    cy.get('.toggle-div').should('not.exist');
    // Click the button to add the <div> element to the DOM
    cy.get('.toggle-button').click();
    // Now, the <div> element should be present in the DOM
    cy.get('.toggle-div').should('exist').and('contain', 'Present in the DOM');
    // Click the button again to remove the <div> element from the DOM
    cy.get('.toggle-button').click();
    // The <div> element should not be in the DOM anymore
    cy.get('.toggle-div').should('not.exist');
  })
})
