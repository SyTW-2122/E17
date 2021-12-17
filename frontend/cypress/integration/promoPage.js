describe('Promo Page', () => {
  it('Load Page', () => {
    cy.wait(500)
    cy.visit('http://localhost:8080/')
  })

  it('Jump Promociones', () => {
    cy.get('.gradiant-b').click()
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