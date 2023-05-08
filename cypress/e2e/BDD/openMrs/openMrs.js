import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import openMrs from "../../../page-objects/openMrsObject";
openMrs;

Given("Open openMrs page", () => {
  openMrs.navigate();
  cy.url().should("include", "/openmrs/login.htm");
});

Then("Verify home page", () => {
  cy.get(".logo").should("be.visible");
  cy.get("#username").should("be.visible");
  cy.get("#password").should("be.visible");
  cy.get("#sessionLocation").should("be.visible");
  cy.get("#sessionLocation > li:nth-child(1)")
    .should("be.visible")
    .and("contain", "Inpatient Ward");
  cy.get("#sessionLocation > li:nth-child(2)")
    .should("be.visible")
    .and("contain", "Isolation Ward");
  cy.get("#Laboratory").should("be.visible");
  cy.get("#sessionLocation > li:nth-child(4)")
    .should("be.visible")
    .and("contain", "Outpatient Clinic");
  cy.get("#Pharmacy").should("be.visible");
  cy.get("#sessionLocation > li:nth-child(6)")
    .should("be.visible")
    .and("contain", "Registration Desk");
  cy.get("#loginButton").should("be.visible");
});
