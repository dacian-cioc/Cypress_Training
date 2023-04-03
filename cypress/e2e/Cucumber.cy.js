describe('Web search engine', () => {
    context('Given I access the search engine page', () => {
      beforeEach(() => {
        cy.visit('https://duckduckgo.com')
      })
  
      context('When I type a term and click on the magnifying glass', () => {
        beforeEach(() => {
          cy.get('#search_form_input_homepage')
            .type('cypress')
          cy.get('#search_button_homepage')
            .click()
        })
  
        it('Then I see a list of results about the term I was looking for', () => {
          cy.get('.results .result')
            .should('have.length', 11)
        })
      })
  
      context('When I type a term and press ENTER', () => {
        beforeEach(() => {
          cy.get('#search_form_input_homepage')
            .type('cypress{enter}')
        })
  
        it('Then I see a list of results about the term I was looking for', () => {
          cy.get('.results .result')
            .should('have.length', 11)
        })
      })
    })
  })