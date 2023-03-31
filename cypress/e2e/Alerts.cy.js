describe("Alerts", () => {

// 1) JavaScript Alert

it.skip('JS alert', () => {

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.get("button[onclick='jsAlert()']").click();

  //validate text from alert window - alert window automatically closed by cypress
cy.on('window:alert', (t) => {
    expect(t).to.contains('I am a JS Alert');

})

//after closing the alert we validate the result
  
cy.get('#result').should('have.text', 'You successfully clicked an alert')
   
  })

// 2) JavaScript Confirm Alert

it.skip('JS confirmation - OK', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (t) => {
        expect(t).to.contains('I am a JS Confirm');
    
    })

    //cypress automatically closed alert window by using ok button-default
    cy.get('#result').should('have.text','You clicked: Ok')
       
      })

      //closing alert using cancel button

 it.skip('JS confirmation - CANCEL', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click()
    
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        
        })
    
        cy.on('window:confirm', () => false); // cypress closes alert window using cancel button
        cy.get('#result').should('have.text','You clicked: Cancel')
           
          })

// 3) JavaScript Prompt Alert

it.skip('JS Prompt alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('welcome');

    })
    
    cy.get("button[onclick='jsPrompt()']").click()

    //cypress automatically closed alert window by using ok button-default

    // cy.on('window:prompt', () => false);(doesn't work for cancel) // cypress closes alert window using cancel button

    cy.get('#result').should('have.text','You entered: welcome')
       
      })

// 4) Authenticated Alert

it.only('Authenticator alert', () => {

    // approach 1

// cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: 
// {
//     username: "admin",
//     password: "admin"
// } 

// });

// cy.get("div[class='example'] p").should('have.contain', "Congratulations")

// approach 2
cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

cy.get("div[class='example'] p").should('have.contain', "Congratulations")

})

})