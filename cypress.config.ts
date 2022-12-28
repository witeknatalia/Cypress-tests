import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    env: {
      username: process.env.USERNAME_STANDARD,
      password: process.env.PASSWORD
    }
  },
  video: false
});
