describe('Home Page | Profile', () => {
  it('Load Page', () => {
    cy.wait(500)
    cy.visit('http://localhost:8080/')
  })

  it('Open Profile', () => {
    cy.login()
    cy.reload()
    cy.contains('Mi Perfil')
    cy.get('.gradient-b').click()
    cy.contains('admin@test.com')
    cy.contains('Admin')
    cy.contains('Test')
  })
  
})