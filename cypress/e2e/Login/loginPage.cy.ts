describe('Login page', () => {
  beforeEach(() => {
    cy.homePage();
  });

  it('Log in as a standard user', () => {
    cy.login('username_standard', 'password');
    cy.get('[data-test="product_sort_container"]').should('exist');
  });

  it('Log in as a locked out user', () => {
    cy.login('username_locked_out', 'password');
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

  it('Log in as a problem user', () => {
    cy.login('username_problem', 'password');
    cy.get('[data-test="product_sort_container"]').should('exist');
  });

  it('Log in as a performance glitch user', () => {
    cy.login('username_performance_glitch', 'password');
    cy.get('[data-test="product_sort_container"]').should('be.visible');
  });
});
