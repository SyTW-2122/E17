describe('Home Page', () => {
  it('Load Page', () => {
    cy.wait(500)
    cy.visit('http://localhost:8080/')
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
    it('Button "Todas las Catgorias"', () => {
      cy.contains('Todas las Categorias')
    })

    it('Button "Ofertas del Dia"', () => {
      cy.contains('Ofertas del Dia')
    })

    it('Product "AMD Radeon RX 6800XT"',() => {
      cy.contains('AMD Radeon RX 6800XT')
    })
  })

  describe('Footer', () => {
    it('Right', () => {
      cy.contains('StackParts 2021')
    })
  })
})