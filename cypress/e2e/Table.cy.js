describe("Check UI Elements", ()=> {

    //beforeEach is a hook doing login before each it function
    beforeEach('Login', () => {

        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();
        //Customers --> Customers
        cy.get('.btn-close').click();
        cy.get(".parent[href='#collapse-5']").click(); //customer main menu #menu-customer>a
        // customers sub/child #menu-customer>ul>li:first-child
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click(); 

    })

        it.skip('Check Number Rows & Columns', () => {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
            cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');

        })

        it.skip('Check cell data from specific row &  column', () => {
            // 5th row 3rd column 
            cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("princytrainings4@gmail.com");
            
        })


        it.skip('Read all the rows & columns data in the first page', () => {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each( ($row, index, $rows) => {

                cy.wrap($row).within( () => {

                    cy.get("td").each( ($col, index, $cols) => {

                        cy.log($col.text());
                
                    } )

                } )

            } )            
            
        })

        it.only('Pagination navigate to every page and get the data', () => {

            //find total number of pages
            let totalPages2;
            cy.get(".col-sm-6.text-end").then( (e) => {

                let myText = e.text(); // Showing 1 to 10 of 11680 (1168 Pages)
                totalPages2 = myText.substring( myText.indexOf("(") + 1, myText.indexOf("Pages") - 1 );
                cy.log("Total number of pages in a table =============> " + totalPages2);

            } )

            // get data from the table

            let totalPages = 5;
            for(let p=1; p<=5; p++) 
            {
                if(totalPages>1)
                {
                    cy.log("Active page is ====> " +p);
                    cy.get("ul[class='pagination']>li:nth-child("+ p +")").click()
                    cy.wait(3000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each( ($row, index, $rows) => {

                        cy.wrap($row).within( () => {

                            cy.get("td:nth-child(3)").then( (e) => {

                                cy.log(e.text()); // capture email - 3rd column

                            

                    } )
                })
            })
            
        }

    }

})

})
