describe('get api user tests', () => {

    let accessToken = 'd859f7250d863a211269bfc14354f16241674287620fb0dad46ad149287865fc'

    it('get users', () => {

        cy.request({

            method : 'GET',
            url: 'https://gorest.co.in/public-api/users',
            headers : {
                'authorization' : "Bearer " + accessToken
            }


        }).then((res) => {

            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)

        })

    })

    it('get users by id', () => {

        cy.request({

            method : 'GET',
            url: 'https://gorest.co.in/public-api/users/726372',
            headers : {
                'authorization' : "Bearer " + accessToken
            }


        }).then((res) => {

            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Aamod Kaniyar')

        })

    })

})