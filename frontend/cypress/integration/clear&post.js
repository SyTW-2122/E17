describe('Start',() => {
  it('Restart DB', () => {
    cy.wait(500)
    cy.request('POST', 'http://localhost:4000/testing/reset')
  })
  it('POST UserAdmin', () => {
    const adminUserOptions = {
      method:'POST', 
      url:'http://localhost:4000/auth/signup',
      body: {
        "email": "admin@test.com",
        "password": "test12345",
        "name": "Admin",
        "surname": "Test",
        "role": "admin"
      }
    }
    cy.wait(500)
    cy.request(adminUserOptions)
      .as('registerResponse')
      .then((response) => {
        Cypress.env('token', response.body.token); // either this or some global var but remember that this will only work in one test case
        return response;
      })
      .its('status')
      .should('eq', 201);
  })

  it('POST Product', () => {
    const token = Cypress.env('token')

    const productOptions = {
      method: 'POST',
      url: `http://localhost:4000/product`,
      headers: {
        'x-access-token': `${ token }`
      },
      body: {
        "name": "AMD Radeon RX 6800XT",
        "price": 1449.83,
        "espec": [
          "Memoria video: 16GB GDDR6",
          "Dimensión: 135mm (W) x62mm (H) x320mm (D)",
          "Entrada de poder: 2x8-pin",
          "Máxima resolución: 7680 x 4320 Pixeles"
        ],
        "category": "grafica",
        "imgURL": "https://thumb.pccomponentes.com/w-530-530/articles/33/336339/1314-powercolor-amd-radeon-rx-6800xt-red-devil-16gb-gddr6.jpg",
        "discount": true
      }
    }
    cy.wait(500)
    cy.request(productOptions)
      .its('status')
      .should('eq', 201);
  })

  it('POST Category', () => {
    const token = Cypress.env('token')

    const productOptions = {
      method: 'POST',
      url: `http://localhost:4000/category`,
      headers: {
        'x-access-token': `${ token }`
      },
      body: {
        "name": "Grafica",
        "imgURL": "https://tecnored.xyz/SyTW/categories/grafica.jpg"
      }
    }
    cy.wait(500)
    cy.request(productOptions)
      .its('status')
      .should('eq', 201);
  })
})