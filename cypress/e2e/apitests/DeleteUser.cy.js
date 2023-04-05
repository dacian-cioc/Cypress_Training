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
                    "email": "cypress19@gmail.com",
                    "status":"active"
                  }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email', 'cypress19@gmail.com')
                expect(res.body).has.property('name','Test Automation Cypress')
                expect(res.body).has.property('status','active')
                expect(res.body).has.property('gender','male')

                const userId = res.body.id 

                // DELETE
                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v2/users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                    
                }).then((res)=>{
                    expect(res.status).to.eq(204)
                   

                })
            })
        })
    })