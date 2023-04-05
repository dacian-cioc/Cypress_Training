describe("intercept with cypress examples", () => {

    it("test api with simple intercept stubbing", () => {
  
    cy.visit('https://jsonplaceholder.typicode.com/')

    cy.intercept({
      path: '/posts'

    }).as('posts')

    cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
    cy.wait('@posts').then((res) => {
      cy.log(JSON.stringify(res))
      console.log(JSON.stringify(res))
      expect(res.response.body).to.have.length(100)

    })
  })

  it("mocking with intercept test with static response", () => {
  
    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.intercept('GET', '/posts', {totalpost: 5, name: 'dacian' }).as('posts')
    cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
    cy.wait('@posts')


})

it.only("mocking with intercept test with dynamic fixture", () => {
  
  cy.visit('https://jsonplaceholder.typicode.com/')
  cy.intercept('GET', '/posts', {fixture: 'createuser.json' }).as('posts')
  cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
  cy.wait('@posts')


})

})