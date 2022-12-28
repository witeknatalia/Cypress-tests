declare global {
  namespace Cypress {
    interface Chainable {
      homePage: typeof homePage;
    }
  }
}

export const homePage = () => {
  caches
    .keys()
    .then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))));
  cy.visit('/');
  cy.get('[data-test="login-button"]').should('be.visible');
};
