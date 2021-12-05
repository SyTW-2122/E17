describe('Header Complex', () => {
  it('Load Header Complex', () => {
    cy.visit('http://localhost:8080')
    cy.contains('StackParts')
  })
})