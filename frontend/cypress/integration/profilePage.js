describe('Home Page | Profile', () => {
  it('Load Page', () => {
    cy.visit('http://localhost:8080/')
    window.localStorage.setItem('token', Cypress.env('token'))
  })

  it('Open Profile', () => {
    cy.contains('Mi Perfil')
    window.localStorage.setItem('token', Cypress.env('token'))
    cy.get('.gradient-b').click()
    cy.contains('admin@test.com')
    cy.contains('Admin')
    cy.contains('Test')
  })
  
})