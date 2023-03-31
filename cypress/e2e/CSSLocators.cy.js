
describe('CSSLocators', () => {

    it('csslocators', () => {
      
        cy.visit("https://www.fashiondays.ro/")
        cy.get('.text-placeholder').click()
        cy.get("#search-input").type("T-Shirts")
        cy.get('#search-submit').click()
        cy.get('.search-results-title').contains('T-Shirts')

        


        })
    
    })

    