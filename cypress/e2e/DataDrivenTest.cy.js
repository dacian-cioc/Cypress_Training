describe(' Data Driven Test', () => {

    it('DataDrivenTest', () => {

    cy.fixture("orangehrm2").then((data) => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        data.forEach((userdata) => {
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();

            if (userdata.username == "Admin" && userdata.password == "admin123") 
            {
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text', userdata.expected); // dashboard validation

                 cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); // logout
                 cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); //logout

            }
            else
            {
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text") // invalid credentials
                .should('have.text', userdata.expected);
            }
            
        })

    }) 


    })
        
})