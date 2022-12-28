declare global {
  namespace Cypress {
    interface Chainable {
      addToCart: typeof addToCart;
    }
  }
}

export const addToCart = () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.findByText('1').should('exist').click();
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  cy.findByText('1').should('not.exist');
};
