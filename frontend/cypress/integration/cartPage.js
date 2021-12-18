describe('Cart Page', () => {
  it('Load Page', () => {
    cy.visit('http://localhost:8080/')
  })

  describe('Details Page', () => {
    it('Jump Details',() => {
      cy.get('.products > :nth-child(1)').click()
    })
    
    it('Add Cart', () => {
      cy.login()
      cy.reload()
      cy.get('.addCart').click()
      cy.wait(1500)
    })
  })

  describe('Cart Page', () => {
    it('Cart Jump', () => {
      cy.get('.gradient-a').click()
    })

    it('Exist "Realizar Compra"',() => {
      cy.get('.checkBuy').should('have.value','Realizar Compra')
    })

    it('Product "AMD Radeon RX 6800XT"',() => {
      cy.contains('AMD Radeon RX 6800XT')
    })

    it('Increase the amount', () => {
      cy.get('[value="+"]').click()
      cy.contains('2899.66 €')
    })

    it('Decrease the amount', () => {
      cy.get('[value="-"]').click()
      cy.get('.totalP').contains('1449.83 €')
    })

    it('Check buy',() => {
      cy.get('.checkBuy').click()
      cy.get('.swal2-confirm').click()
    })

  })
})