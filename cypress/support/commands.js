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

Cypress.Commands.add("signUpDetails", (password, firstName, lastName, company, address, state, city, zipCode, number) => {
  cy.get("#password").type(password)
  cy.get("#days").select("6")
  cy.get("#months").select("6")
  cy.get("#years").select("2000")
  cy.get("#first_name").type(firstName)
  cy.get("#last_name").type(lastName)
  cy.get("#company").type(company)
  cy.get("#address1").type(address)
  cy.get("#country").select("United States")
  cy.get("#state").type(state)
  cy.get("#city").type(city)
  cy.get("#zipcode").type(zipCode)
  cy.get("#mobile_number").type(number)
})

Cypress.Commands.add("facilityAssertion", (facility) => {
  cy.get("#facility").should("contain", facility);
});

Cypress.Commands.add("programAssertion", (program) => {
  cy.get("#program").should("contain", program);
});

Cypress.Commands.add("dateAssertion", (date) => {
  cy.get("#visit_date").should("contain", date);
});

Cypress.Commands.add("commentAssertion", (comment) => {
  cy.get("#comment").should("contain", comment);
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
