import 'cypress-iframe'

describe('handling Frames', () => {

it('approach 1', () => {

cy.visit('https://the-internet.herokuapp.com/iframe');

const iframe = cy.get('#mce_0_ifr')
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap);

iframe.clear().type("Welcome {selectall}")

cy.get("button[title='Bold']").click();

})



// use custom command from commands file - made by us

it ('approach 2 - by using custom command', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.getIframe('#mce_0_ifr').clear().type("Welcome {selectall}")

    cy.get("button[title='Bold']").click();

})

it ('approach 3 - cypress plugin', () => { //https://gitlab.com/kgroat/cypress-iframe

    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.frameLoaded('#mce_0_ifr'); // this will load the frame

    cy.iframe('#mce_0_ifr').clear().type("Welcome {selectall}");

    cy.get("button[title='Bold']").click();


})

})