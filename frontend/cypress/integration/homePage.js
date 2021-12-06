describe('Home Page', () => {
  it('Load Page', () => {
    cy.request('POST', 'http://tecnored.xyz:4000/testing/reset')
    cy.visit('http://localhost:8080/')
  })

  describe('Header', () => {
    it('Title Header', () => {
      cy.contains('StackParts')
    })
  
    it('Buttom Login', () => {
      cy.contains('Iniciar Sesion')
    })
  
    it('Buttom Register', () => {
      cy.contains('Registrarse')
    })
  })

  describe('Body', () => {
    it('Buttom "Todas las Catgorias"', () => {
      cy.contains('Todas las Categorias')
    })

    it('Buttom "Ofertas del Dia"', () => {
      cy.contains('Ofertas del Dia')
    })
  })

  describe('Footer', () => {
    it('Right', () => {
      cy.contains('StackParts 2021')
    })
  })
})