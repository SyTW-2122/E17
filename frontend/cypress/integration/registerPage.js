describe('Register Page', () => {
  it('Load Page', () => {
    cy.visit('http://localhost:8080/register')
  })

  describe('Header', () => {
    it('Title Header', () => {
      cy.contains('StackParts')
    })
  })

  describe('Body', () => {
    it('Correct Register', () => {
      cy.get('#registerForm > :nth-child(1) > :nth-child(1) > .input_form > input').type('FakeName')
      cy.get(':nth-child(1) > :nth-child(2) > .input_form > input').type('FakeSurName')
      cy.get('.date > .campo > .input_form > input').type('2000-08-12')
      cy.get(':nth-child(2) > :nth-child(2) > .input_form > input').type('fake@email.com')
      cy.get(':nth-child(3) > :nth-child(1) > .input_form > input').type('fakepass')
      cy.get(':nth-child(3) > :nth-child(2) > .input_form > input').type('fakepass')
      cy.get(':nth-child(1) > input').click()
      cy.get('.signup').click()
      cy.contains('Mi Perfil')
    })
  })
})