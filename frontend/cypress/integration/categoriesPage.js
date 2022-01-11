describe('Categories Page', () => {
  it('Load Page', () => {
    cy.wait(500)
    cy.visit('http://localhost:8080/')
  })

  it('Jump Categories', () => {
    cy.get('.gradiant-a').click()
  })
  
  describe('Header', () => {
    it('Title Header', () => {
      cy.contains('StackParts')
    })
  
    it('Button Login', () => {
      cy.contains('Iniciar Sesion')
    })
  
    it('Button Register', () => {
      cy.contains('Registrarse')
    })
  })

  describe('Body', () => {
    it('Category',() => {
      cy.contains('GRAFICA')
    })
  })

  describe('Footer', () => {
    it('Right', () => {
      cy.contains('StackParts ' + new Date().getFullYear())
    })
  })
})