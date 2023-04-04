import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import automationExercise from "../../../page-objects/automationExerciseObject";

Given("Open automationExercise page", () => {
  automationExercise.navigate();
  cy.url().should("include", "automationexercise.com");
});

When("Verify home page", () => {
  cy.get(".logo").should("be.visible");
  cy.get("#header").should("be.visible");
  cy.get(".features_items").should("be.visible");
  cy.get(".left-sidebar").should("be.visible");
});

When("Register user", () => {
  automationExercise.signUpEl().click();
  cy.get(".signup-form > h2").should("be.visible");
  automationExercise.signUpNameEl().type("Wojciech");
  automationExercise.signUpEmailEl().type("wojciech@wojciech.com");
  automationExercise.signUpButton().click();
  cy.get("#uniform-id_gender1").click();
  cy.get(
    "#form >.container > .row > .col-sm-4 > .login-form > .title > b"
  ).should("be.visible");
  cy.signUpDetails(
    "WOJTAS12345!",
    "Wojciech",
    "Wojciechowski",
    "Apple",
    "Main Street",
    "California",
    "Los Angeles",
    "00-001",
    "123 456 789"
  );
  cy.get("#newsletter").click();
  cy.get("#optin").click();
  automationExercise.createAccountButton().click();
  cy.get("#form > div > div > div > h2 > b")
    .should("be.visible")
    .and("contain", "Account Created!");
  automationExercise.continueButton().click();
  cy.get("ul > li:nth-child(10) > a").should("be.visible");
});

Then("Login user correctly", () => {
  automationExercise.signUpEl().click();
  cy.get(".login-form > h2").should("be.visible");
  automationExercise.loginEmailEl().type("example@example1.com");
  automationExercise.loginPasswordEl().type("wojtas");
  automationExercise.loginButton().click();
  cy.get("ul > li:nth-child(10) > a").should("be.visible");
  cy.url().should("include", "automationexercise.com");
});

Then("Delete user", () => {
  automationExercise.deleteAccountEl().click();
  cy.get("#form > div > div > div > h2 > b")
    .should("be.visible")
    .and("contain", "Account Deleted!");
  automationExercise.continueButton().click();
});
