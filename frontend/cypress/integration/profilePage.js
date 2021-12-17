describe('Home Page | Profile', () => {
  it('Load Page', () => {
    cy.wait(500)
    cy.visit('http://localhost:8080/')
    window.localStorage.setItem('token', Cypress.env('token'))
    cy.wait(5000)
  })

  it('Open Profile', () => {
    cy.contains('Mi Perfil')
    cy.get('.gradient-b').click()
    cy.contains('admin@test.com')
    cy.contains('Admin')
    cy.contains('Test')
  })
  
})