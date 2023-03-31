describe('XPath Locators', () => {

    it('find no of products', () => {
      cy.visit('https://www.fashiondays.ro/g/femei-/imbracaminte-costume_de_baie')
        cy.xpath("//ul[@id='products-listing-list']/li").should('have.length', 91)
        })
    
        it('chained xpath', () => {
          cy.visit('https://www.fashiondays.ro/g/femei-/imbracaminte-costume_de_baie')
            cy.xpath("//ul[@id='products-listing-list']").xpath("./li").should('have.length', 91)
    
            })
    

    })

    