import 'cypress-mochawesome-reporter/register';

describe('My First Test', () => {

    it('verify title-positive', () => {
      cy.visit("https://google.ro")
      cy.title().should('eq', 'Google')
        })

    it('verify title-negative', () => {
        cy.visit("https://google.ro")
        cy.title().should('eq', 'Google123')
          })
  
    
  })

  