describe('handle dropdowns', ()=>{

    it.skip('Dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/people/free-demo.html");

        cy.get('#zcf_address_country')
        .select('Germany')
        .should('have.value','Germany')

    })

    // bootstrap dropdown with type in and use ENTER key

    it.skip('Dropdown without select', ()=>{


        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')

    })

    it.skip('Dropdown without select', ()=>{


        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')

    })

    // Auto suggested dropdown - number results and select one 

    it.skip('Auto suggest dropdown', ()=>{

    cy.visit("https://www.wikipedia.org/");
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delfin').click()

    })

// Dynamic dropdown - jquery function https://docs.cypress.io/api/commands/each

it('Dynamic dropdown', ()=>{

    cy.visit("https://www.google.com/");

    cy.get('#L2AGLb > .QS5gu').click()

    cy.get("input[name='q']").type('cypress automation')

    cy.wait(3000)

    cy.get('div.wM6W7d>span').should('have.length', 12)

    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
        if($el.text() == 'cypress automation framework')
        {
            cy.wrap($el).click()
        }
        
    })
         cy.get("input[name='q']").should('have.value','cypress automation framework')


    })


    })

