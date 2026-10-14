 # Sauce Demo — E2E Tests (Cypress + TypeScript)

  End-to-end test suite for the [Sauce Demo](https://www.saucedemo.com/) web shop, written in
  Cypress and TypeScript with Testing Library selectors and reusable custom commands.

  ## What is covered

  | Area | Scenarios |
  |------|-----------|
  | Login | Standard, locked-out, problem and performance-glitch users; validation errors for empty or wrong credentials |
  | Cart | Adding and removing products for different user types |
  | Checkout | Full order flow from cart to order confirmation |
  | Menu | About page, logout, reset app state |
  | Products | Sorting the product list by name |

  ## Tech stack

  - **Cypress 12** with **TypeScript**
  - **Testing Library for Cypress**: user-centric selectors (`findByRole`, `findByText`)
  - **Custom commands**: `login`, `homePage` and `addToCart`, which keep the specs short and readable
  - **GitHub Actions**: workflow with credentials injected from repository secrets

  ## Project structure

  ```
  cypress/
    e2e/
      Cart/       add to cart, checkout
      Login/      login per user type, error messages
      Menu/       about, logout, reset app state
      Products/   sorting
    support/
      commands/   custom commands (login, homePage, addToCart)
  ```

  ## Running locally

  ```bash
  git clone https://github.com/witeknatalia/Cypress-tests.git
  cd Cypress-tests
  npm install
  ```

  Create `cypress.env.json` in the project root with the Sauce Demo test users:

  ```json
  {
    "username_standard": "standard_user",
    "username_locked_out": "locked_out_user",
    "username_problem": "problem_user",
    "username_performance_glitch": "performance_glitch_user",
    "password": "secret_sauce"
  }
  ```

  Then run:

  ```bash
  npx cypress run     # headless
  npm run tests       # interactive runner
  ```
