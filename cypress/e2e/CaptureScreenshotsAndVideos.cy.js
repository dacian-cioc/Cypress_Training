describe('mysuite', ()=>{
    it('Capture Screenshots & Videos', ()=>{
        cy.visit("https://demo.opencart.com/");
        // cy.screenshot("homepage");
        // cy.wait(5000);
        // cy.get("img[title='Your Store']").screenshot("logo"); // specific element 

        //Automatically capture screenshot & video on failure - only when is executed via terminal  
        cy.get("li:nth-child(7) a:nth-child(1)").click(); // Cameras
        //failing intentionally here not given Cameras, but Tablets to check
        cy.get("div[id='content'] h2").should('have.text', "Tablets");  
        // in command prompt: npx cypress run --spec cypress/e2e/CaptureScreenshotsAndVideos.cy.js
        // screenshots folder and videos folder
    })
})