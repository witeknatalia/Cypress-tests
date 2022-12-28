# Set up:

1. Paste to your terminal: `git clone git@github.com:witeknatalia/Cypress-tests.git`
2. Go to the catalog with the project `cd Cypress-tests`
3. Paste `npm i` to install dependencies
4. Create file `Cypress.env.json` with credentials
5. To run tests without preview `npx cypress run`
6. To run tests with preview `npm run tests`

## Remarks:
Additionally, GitHub Actions is set up. It will be run after the open or reopen pull request. One of the tests is failing because I've checked if it works correctly.
