import '@testing-library/cypress/add-commands';

describe('Order something', () => {
  beforeEach(() => {
    cy.homePage();
  });

  it('Add to cart as a standard user', () => {
    cy.login('username_standard', 'password');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.findByText('1').click();
    cy.findByRole('button', { name: /CHECKOUT/i })
      .should('exist')
      .click();
    cy.findAllByPlaceholderText('First Name').type('Natalia');
    cy.findAllByPlaceholderText('Last Name').type('Witek');
    cy.findAllByPlaceholderText('Zip/Postal Code').type('12345');
    cy.findByRole('button', { name: /Continue/i }).click();
    cy.findByRole('button', { name: /FINISH/i }).click();
    cy.findByRole('heading').should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});
