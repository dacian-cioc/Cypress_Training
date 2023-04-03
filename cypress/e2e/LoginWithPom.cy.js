import Login from "../PageObjects/LoginPage2.js" // extension is optional

// .js is optional

describe ('pom', () => {

    it('LoginTest', () => {

            //General approach
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');

    })

        //using POM

        it("LoginTestPOM", ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            // import page object class: Static method => with class name
            const ln = new Login();
            ln.setUserName("Admin");
            ln.setPassword("admin123");
            ln.clickSubmit();
            ln.verifyLogin();
        })
    
        // using Page Object Model with fixture
     it.only("LoginTestPOMFixture", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        // import page object class: Static method => with class name
        cy.fixture('orangehrm.json').then( (data)=>{
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })

    })


})