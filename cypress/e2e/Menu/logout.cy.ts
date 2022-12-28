import '@testing-library/cypress/add-commands';

describe('About page', () => {
  beforeEach(() => {
    cy.homePage();
  });

  it('Go to about page as a problem user', () => {
    Cypress.on('uncaught:exception', (err) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });
    cy.login('username_problem', 'password');
    cy.findByRole('button', { name: /Open Menu/i }).click();
    cy.findByRole('link', { name: /LOGOUT/i })
      .should('exist')
      .click();
    cy.findByRole('button', { name: /Login/i }).should('be.visible');
  });
});
