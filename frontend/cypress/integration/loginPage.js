describe('Login Page', () => {
  it('Load Page', () => {
    cy.visit('http://localhost:8080/login')
  })

  describe('Header', () => {
    it('Title Header', () => {
      cy.contains('StackParts')
    })
  })

  describe('Body', () => {
    it('Correct Login', () => {
      cy.get(':nth-child(1) > .input_form > input').type('fake@email.com')
      cy.get(':nth-child(2) > .input_form > input').type('fakepass')
      cy.get('.signin').click()
      cy.contains('Mi Perfil')
    })
  })
})