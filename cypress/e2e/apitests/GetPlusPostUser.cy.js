const dataJson = require('../../fixtures/createuser.json')

describe('post api user tests', () => {

    let accessToken = 'd859f7250d863a211269bfc14354f16241674287620fb0dad46ad149287865fc'
    let randomText = ""
    let testEmail = ""

    it('create user', () => {

        var random = "ABCDEFGFIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"
        for (var i = 0; i < 10; i++) 
           randomText += random.charAt(Math.floor(Math.random() * random.length))
           testEmail = randomText + '@gmail.com'

           cy.fixture('createuser').then((payload) => {

           // 1st create user (POST)     
           cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
              'authorization': 'Bearer ' + accessToken,
            },
            body: {
              name: payload.name,
              email: testEmail,
              gender: payload.gender,
              status: payload.status,
            },
          })
            .then((res) => {
              cy.log(JSON.stringify(res))
              expect(res.status).to.eq(201)
              expect(res.body).has.property('email', testEmail)
              expect(res.body).has.property('name', payload.name)
              expect(res.body).has.property('gender', payload.gender)
              expect(res.body).has.property('status', payload.status)
          
              const userId = res.body.id
              cy.log('user id is ' + userId)
          
              // 2 get user call (GET)
              cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                  'authorization': 'Bearer ' + accessToken,
                },
              }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', userId)
                expect(res.body).has.property('email', testEmail)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('gender', payload.gender)
                expect(res.body).has.property('status', payload.status)
              })
            })


        })

    })

})

