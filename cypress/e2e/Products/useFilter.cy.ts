import '@testing-library/cypress/add-commands';

describe('Try to filter products', () => {
  beforeEach(() => {
    cy.homePage();
  });

  it('Filter product by name as a performance glitch user', () => {
    cy.login('username_performance_glitch', 'password');
    cy.get('.inventory_list > :nth-child(1)').should(
      'contain',
      'Sauce Labs Backpack'
    );
    cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
    cy.get('.inventory_list > :nth-child(1)').should(
      'contain',
      'Test.allTheThings() T-Shirt (Red)'
    );
  });
});
