// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { addToCart } from './commands/addToCart';
import { homePage } from './commands/homePage';
import { login } from './commands/login';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login', login);
Cypress.Commands.add('homePage', homePage);
Cypress.Commands.add('addToCart', addToCart);
