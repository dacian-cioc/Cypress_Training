describe('Hooks and tags', () => {

    //before, after, beforeEach, afterEach

    before(() => {

        cy.log("****** launch app *******")

    })

    after (() => {

        cy.log("****** close app *******")


    })

    beforeEach (()=>{

        cy.log("*********** before each function running ********")

    })

    afterEach (()=>{

        cy.log("*********** after each function running ********")

    })

    it('search', () => {

        cy.log("*********** searching ***********")

    })

    it('advanced search', () => {

        cy.log("*********** advanced searching ***********")
        
    })
    
    it('listing products', () => {

        cy.log("*********** Listing products ***********")
        
    })

    
})
