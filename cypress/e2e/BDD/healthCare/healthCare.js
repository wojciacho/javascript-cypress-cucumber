import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import healthCare from "../../../page-objects/healthCareObject";
healthCare;

Given("Open healthCare page", () => {
  healthCare.navigate();
  cy.url().should("include", "katalon-demo-cura");
});

When("Verify home page", () => {
  cy.get("#top > .text-vertical-center > h1")
    .should("be.visible")
    .and("contain", "CURA Healthcare Service");
  cy.get("#top > .text-vertical-center > h3")
    .should("be.visible")
    .and("contain", "We Care About Your Health");
  cy.get("#btn-make-appointment").should("be.visible");
  cy.get("body > footer > div > div > div > h4 > strong")
    .should("be.visible")
    .and("contain", "CURA Healthcare Service");
});

Then("Go to login page and verify", () => {
  healthCare.menuToggle().click();
  healthCare.loginEl().click();
  cy.url().should("include", "/profile.php#login");
  healthCare.usernameEl().should("be.visible");
  healthCare.passwordEl().should("be.visible");
  cy.get(".col-sm-12 > h2").should("be.visible").and("contain", "Login");
  cy.get("form > div.alert.alert-info > div:nth-child(1) > div > div > input")
    .should("be.visible")
    .and("have.value", "John Doe");
  cy.get("form > div.alert.alert-info > div:nth-child(2) > div > div > input")
    .should("be.visible")
    .and("have.value", "ThisIsNotAPassword");
});

Then("Login user correctly", () => {
  healthCare.usernameEl().type("John Doe");
  healthCare.passwordEl().type("ThisIsNotAPassword");
  healthCare.loginButton().click();
  cy.url().should("include", "/#appointment");
  cy.get("#appointment > div > div > div > h2")
    .should("be.visible")
    .and("contain", "Make Appointment");
  cy.get(".form-horizontal").should("be.visible");
});

Then("Logout user", () => {
  healthCare.menuToggle().click();
  healthCare.logoutEl().click();
});

Then("Login user incorrectly", () => {
  healthCare.usernameEl().type("John Doe");
  healthCare.passwordEl().type("ThisIsNotAPassword1");
  healthCare.loginButton().click();
  cy.get(".text-danger")
    .should("be.visible")
    .and(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
});
