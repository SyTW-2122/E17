describe('Details Page', () => {
  it('Load Page', () => {
    cy.wait(500)
    cy.visit('http://localhost:8080/')
  })

  it('Jump Details', () => {
    cy.get('.products > :nth-child(1)').click()
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

    it('Product price',() => {
      cy.contains('1449.83 €')
    })
    
    it('Product Espec',() => {
      cy.contains('Especificaciones')
    })
  })

  describe('Footer', () => {
    it('Right', () => {
      cy.contains('StackParts ' + new Date().getFullYear())
    })
  })
})