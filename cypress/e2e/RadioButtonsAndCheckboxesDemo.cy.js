

describe("Check UI Elements", ()=> {

   /* it("Checking Radio Buttons", ()=> {

        //visibility of radio buttons

        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input#male").should('be.visible');
        cy.get("input#female").should('be.visible');

        // selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

     

    })
   
*/

    it("Checking Radio Buttons", ()=> {


        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
       
       /* //visibility of element
        cy.get("input#monday").should('be.visible');
        cy.get("input#tuesday").should('be.visible');
        cy.get("input#wednesday").should('be.visible');
        cy.get("input#thursday").should('be.visible');
        cy.get("input#friday").should('be.visible');
        cy.get("input#saturday").should('be.visible');
        cy.get("input#sunday").should('be.visible');

        //  check the checkbox and verify that it is checked
        cy.get("input#monday").check().should('be.checked');
        cy.get("input#tuesday").check().should('be.checked');
        cy.get("input#wednesday").check().should('be.checked');
        cy.get("input#thursday").check().should('be.checked');
        cy.get("input#friday").check().should('be.checked');
        cy.get("input#saturday").check().should('be.checked');
        cy.get("input#sunday").check().should('be.checked');

        //  check the checkbox to uncheck and verify that it is not checked
                
        cy.get("input#monday").uncheck().should('not.be.checked');
        cy.get("input#tuesday").uncheck().should('not.be.checked');
        cy.get("input#wednesday").uncheck().should('not.be.checked');
        cy.get("input#thursday").uncheck().should('not.be.checked');
        cy.get("input#friday").uncheck().should('not.be.checked');
        cy.get("input#saturday").uncheck().should('not.be.checked');
        cy.get("input#sunday").uncheck().should('not.be.checked');

        // select and unselect all checkboxes

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');
  
    */   

        // select first or last 

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');



    })




})