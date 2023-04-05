const dataJson = require('../../fixtures/createuser')

describe('post user request', () => {
 let accessToken = '9ebdf7f380aa4122cda068a75549d4beeaa4aabc2871b712a35c9f994c462a8d'
let randomText = ""
let testEmail = ""


    it.only('create user test', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'
            
            //1. create user (POST)
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name":"Test Automation Cypress",
                    "gender":"male",
                    "email": "cypress16@gmail.com",
                    "status":"active"
                  }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email', 'cypress16@gmail.com')
                expect(res.body).has.property('name','Test Automation Cypress')
                expect(res.body).has.property('status','active')
                expect(res.body).has.property('gender','male')
           
                   const userId = res.body.id 
                   const newName1 = res.body.name 
                   const newEmail1 = res.body.email 
                   const newStatus1 = res.body.status

                    cy.log("user id is: " + userId)
                    cy.log("new email address is: " + newEmail1)
                    cy.log("new name is: " + newName1)
                    cy.log("new status is: " + newStatus1)

                    //2. update user (PUT)
                    cy.request({
                        method: 'PUT',
                        url: 'https://gorest.co.in/public/v2/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        },
                        body: {
                            "name":"Test Automation Cypress Updated",
                            "gender":"male",
                            "email": "cypressupdated16@gmail.com",
                            "status":"inactive"
                          }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body).has.property('email', 'cypressupdated16@gmail.com')
                        expect(res.body).has.property('name','Test Automation Cypress Updated')
                        expect(res.body).has.property('status','inactive')
                        expect(res.body).has.property('gender','male')

                   const newName = res.body.name 
                   const newEmail = res.body.email 
                   const newStatus = res.body.status

                    cy.log("new email address is: " + newEmail)
                    cy.log("new name is: " + newName)
                    cy.log("new status is: " + newStatus)


                    })

                    // 3 get user call (GET)
              cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                  'authorization': 'Bearer ' + accessToken,
                },
              }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', userId)
                expect(res.body).has.property('email', 'cypressupdated16@gmail.com')
                expect(res.body).has.property('name', 'Test Automation Cypress Updated')
                expect(res.body).has.property('status', 'inactive')
            })
            
        })
        
        
    })
})