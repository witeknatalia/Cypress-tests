declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}

export const login = (username: string, password: string) => {
  cy.get('[data-test="username"]').type(Cypress.env(`${username}`), {
    log: false
  });
  cy.get('[data-test="password"]').type(Cypress.env(`${password}`), {
    log: false
  });
  cy.get('[data-test="login-button"]').click();
};
