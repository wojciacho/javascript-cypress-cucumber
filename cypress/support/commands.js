// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("iteratingPhones", (name) => {
  cy.get(".card-title").each(($element, index) => {
    const value = $element.text().includes(name);
    if (value) {
      cy.get(".btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("pickLocation", (country) => {
  cy.get(".suggestions > ul > li > a").each(($element) => {
    if ($element.text() === country) {
      cy.wrap($element).click();
    }
  });
});

Cypress.Commands.add("sauceDemoLogin", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#user-name").should("have.value", username);
  cy.get("#password").should("have.value", password);
  cy.get("#login-button").click();
});

Cypress.Commands.add("placingAnOrder", (name, lastname, zipcode) => {
  cy.get("#checkout").click();
  cy.get("#first-name").type(name);
  cy.get("#last-name").type(lastname);
  cy.get("#postal-code").type(zipcode);
  cy.get("#continue").click();
  cy.url().should("include", "checkout-step-two.html");
  cy.get("#finish").click();
  cy.url().should("include", "checkout-complete.html");
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
