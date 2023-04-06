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

Then("Register user with existing email", () => {
  automationExercise.signUpEl().click();
  cy.get(".signup-form > h2").should("be.visible");
  automationExercise.signUpNameEl().type("Wojciech");
  automationExercise.signUpEmailEl().type("example@example1.com");
  automationExercise.signUpButton().click();
  cy.get("div:nth-child(3) > div > form > p")
    .should("be.visible")
    .and("contain", "Email Address already exist!");
});

Then("Validate contact us form", () => {
  automationExercise.contactUsEl().click();
  cy.get(".contact-form > h2").should("be.visible");
  automationExercise.contactUsName().type("Wojciech");
  automationExercise.contactUsEmail().type("example@example1.com");
  automationExercise.contactUsSubject().type("test");
  automationExercise.contactUsMessage().type("test 123");
  automationExercise.contactUsSubmitButton().click();
  cy.get(".contact-form > .alert-success").should("be.visible");
  cy.get(".btn-success").click();
  cy.url().should("include", "automationexercise.com");
});

Then("Validate test cases page", () => {
  cy.get("div.col-sm-8 > div > ul > li:nth-child(5) > a").click();
  cy.url().should("include", "/test_cases");
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

Then("Login user incorrectly", () => {
  automationExercise.signUpEl().click();
  cy.get(".login-form > h2").should("be.visible");
  automationExercise.loginEmailEl().type("example@example2.com");
  automationExercise.loginPasswordEl().type("wojtas2");
  automationExercise.loginButton().click();
  cy.get("div.col-sm-4.col-sm-offset-1 > div > form > p")
    .should("be.visible")
    .and("contain", "Your email or password is incorrect!");
});

Then("Logout user", () => {
  automationExercise.logoutButton().click();
  cy.url().should("include", "login");
  cy.get(".login-form").should("be.visible");
  cy.get(".signup-form").should("be.visible");
});

Then("Delete user", () => {
  automationExercise.deleteAccountEl().click();
  cy.get("#form > div > div > div > h2 > b")
    .should("be.visible")
    .and("contain", "Account Deleted!");
  automationExercise.continueButton().click();
});
