
describe("Assertions demo", () => {

it("Implicit assertions", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // implicit assertions: should and 

    // cy.url().should('include', 'orangehrmlive.com')
    // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain', 'orangehrm')

    // cy.url().should('include', 'orangehrmlive.com')
    // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // .should('contain', 'orangehrm')

    cy.url().should('include', 'orangehrmlive.com')
    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrm')
    .and('not.contain', 'greenhrm')

    cy.title().should('include', 'Orange')
    .and('eq', "OrangeHRM")
    .and('contain', 'HRM')

    cy.get('.orangehrm-login-branding').should('be.visible') //logo visible
    .and('be.exist') //logo exist
    
    cy.xpath("//a").should('have.length', 5)  // no. of links

    cy.get("input[placeholder='Username']").type("Admin") //provide a value into inputbox
    cy.get("input[placeholder='Username']").should('have.value','Admin') //value checker

    

})

it("explicit assertions", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // explicit assertion: expect assert

    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    //expect assertion
    let expName="Paul Collings";
    cy.get(".oxd-userdropdown-name").then( (x) => {
       let actName=x.text()

       // BDD style
       expect(actName).to.equal(expName)
       expect(actName).to.not.equal(expName)

       //TDD style
       assert.equal(actName,expName)
       assert.notEqual(actName,expName)

    })
    





})

})
