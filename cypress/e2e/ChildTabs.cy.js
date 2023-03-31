describe("Child tabs", () => {

    //approach 1

    it.skip('Approach 1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

        cy.get('.example >a').invoke('removeAttr', 'target').click(); //clicking on link removing target

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') 

        cy.wait(2000)
        //operations
        cy.go('back'); // back to parent tab

    })

    it('Approach 2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

        cy.get('.example >a').then((e) => {

            let url = e.prop('href');

            cy.visit(url);

        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') 

        cy.wait(2000)
        //operations
        cy.go('back'); // back to parent tab

    })

})