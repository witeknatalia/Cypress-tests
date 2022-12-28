import '@testing-library/cypress/add-commands';

describe('Add something to cart and remove from cart', () => {
  beforeEach(() => {
    cy.homePage();
  });

  it('Add to cart as a standard user', () => {
    cy.login('username_standard', 'password');
    cy.addToCart();
  });

  it('Add to cart as a problem user', () => {
    cy.login('username_problem', 'password');
    cy.addToCart();
  });

  it('Add to cart as a performance glitch user', () => {
    cy.login('username_performance_glitch', 'password');
    cy.addToCart();
  });
});
