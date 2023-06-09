describe('Oauth feature apis', ()=>{
    let access_token = '';
    let userId = ''
    
        beforeEach('generate token', ()=>{
            //to get the token id(access token)
            cy.request({
                method: 'POST',
                url: 'http://coop.apps.symfonycasts.com/token',
                form: true,
                body:{
                    "client_id" : "CypressAppD",
                    "client_secret" : "fd2d1b51ca73fe8a650d1b7ba43aaccc",
                    "grant_type" : "client_credentials"
                }
        }).then(response=>{
               cy.log(JSON.stringify(response));
               cy.log(response.body.access_token);
               access_token = response.body.access_token;
    
               //get the user id
                cy.request({
                    method: 'GET',
                    url: 'http://coop.apps.symfonycasts.com/api/me',
                    headers: {
                        'Authorization' : 'Bearer ' + access_token
                    }
                }).then(response=>{
                    userId = response.body.id;
                    cy.log("user id " + userId);
                })
            })
        })
            it('Unlock the Barn Test', ()=>{
                            cy.request({
                                method: 'POST',
                                url: 'http://coop.apps.symfonycasts.com/api/'+userId+'/barn-unlock',
                                headers: {
                                    'Authorization' : 'Bearer ' + access_token
                                }
                            }).then(response=>{
                                cy.log(JSON.stringify(response));
                                expect(response.status).to.equal(200);
                            })
            })
            
    
            it('Put the Toilet Seat Down Test', ()=>{
                cy.request({
                    method: 'POST',
                    url: 'http://coop.apps.symfonycasts.com/api/'+userId+'/toiletseat-down',
                    headers: {
                        'Authorization' : 'Bearer ' + access_token
                    }
                }).then(response=>{
                    cy.log(JSON.stringify(response));
                    expect(response.status).to.equal(200);
                })
            })
    
            it('Chicken Feed Test', ()=>{
                cy.request({
                    method: 'POST',
                    url: 'http://coop.apps.symfonycasts.com/api/'+userId+'/chickens-feed',
                    headers: {
                        'Authorization' : 'Bearer ' + access_token
                    }
                }).then(response=>{
                    cy.log(JSON.stringify(response));
                    expect(response.status).to.equal(200);
                })
            
        })
    
})
    