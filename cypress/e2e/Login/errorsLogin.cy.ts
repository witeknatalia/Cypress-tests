describe('Errors displaying', () => {
  beforeEach(() => {
    cy.homePage();
  });

  it('Information about blank password input', () => {
    cy.get('[data-test="username"]').type(Cypress.env('username_standard'), {
      log: false
    });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Password is required'
    );
  });

  it('Information about blank username input', () => {
    cy.get('[data-test="password"]').type(Cypress.env('password'), {
      log: false
    });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Username is required'
    );
  });

  it('Wrong password or username', () => {
    cy.get('[data-test="username"]').type('test');
    cy.get('[data-test="password"]').type(Cypress.env('password'), {
      log: false
    });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
