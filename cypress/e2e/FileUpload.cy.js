import 'cypress-file-upload';

describe('handle dropdowns', ()=>{

it('Single File Upload', () => {

cy.visit('https://the-internet.herokuapp.com/upload');
cy.get('#file-upload').attachFile('1.jpg');
cy.get('#file-submit').click();
cy.wait(2000);
cy.get('h3').should('have.text', 'File Uploaded!');


})

it('File upload - rename', () => {

    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({filePath:'1.jpg', fileName: 'upload1.jpg'});
    cy.get('#file-submit').click();
    cy.wait(2000);
    cy.get('h3').should('have.text', 'File Uploaded!');
    
})

it('File upload - drag and drop', () => {

    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile("1.jpg", {subjectType: 'drag-n-drop'});
    cy.wait(3000);
    cy.get('#drag-drop-upload > :nth-child(1) > .dz-details > .dz-filename').contains("1.jpg");
    
})

it('Multiple files upload', () => {

  
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
      //Approach 1 - using cypress select file
    // cy.get('#filesToUpload')
    // .selectFile([
    //     {
    //       contents: 'cypress/fixtures/1.jpg',
    //     },
    //     {
    //       contents: 'cypress/fixtures/2.jpg',
    //     },
    //       ])
    //       cy.wait(3000);
      // Approach 2 - using file upload plugin
      cy.get('#filesToUpload').attachFile(["1.jpg", "2.jpg"]);
      cy.wait(3000);
      cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected');

    })

    it.only('File upload - Shadow Dom', () => {   //DOM contains another DOM 

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("1.jpg");
        cy.wait(3000);
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('1.jpg');
    
        
    })
    
    
    })