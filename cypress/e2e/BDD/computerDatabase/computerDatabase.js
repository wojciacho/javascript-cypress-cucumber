import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import computerDatabase from "../../../page-objects/computerDatabase";

Given("Opening computerDatabase page", () => {
  computerDatabase.navigate();
  cy.url().should("include", "/computers");
});

When("Page loads check assets when page loads", () => {
  computerDatabase.submitButton().should("be.visible");
  computerDatabase.searchBox().should("be.visible");
  cy.get(".computers").should("be.visible");
  cy.get("#main > h1")
    .should("be.visible")
    .and("contain", "574 computers found");
});

When("Type Ace and filter", () => {
  computerDatabase.searchBox().type("ACE");
  computerDatabase.submitButton().click();
  cy.get(" tr:nth-child(1) > td:nth-child(1)").should("contain", "ACE");
  cy.get(" tr:nth-child(2) > td:nth-child(1)").should(
    "contain",
    "Acer Extensa"
  );
  cy.get(" tr:nth-child(3) > td:nth-child(1)").should(
    "contain",
    "Acer Extensa 5220"
  );
  cy.get(" tr:nth-child(4) > td:nth-child(1)").should("contain", "Acer Iconia");
  cy.get(" tr:nth-child(5) > td:nth-child(1)").should(
    "contain",
    "Meiko Computing Surface"
  );
  cy.get(" tr:nth-child(6) > td:nth-child(1)").should("contain", "Pilot ACE");
});

When("Click ACE computer and change computer name", () => {
  cy.get("tbody > tr:nth-child(1) > td:nth-child(1) > a").click();
  cy.url().should("contain", "/computers/381");
  computerDatabase.nameEl().clear();
  computerDatabase.nameEl().type("Computer #1");
  computerDatabase.saveButton().click();
  cy.url().should("contain", "/computers");
  computerDatabase
    .warningMessage()
    .should("contain", "Done !  Computer Computer #1 has been updated");
});

When("Click ACE computer and add date", () => {
  cy.get("tbody > tr:nth-child(1) > td:nth-child(1) > a").click();
  cy.url().should("contain", "/computers/381");
  computerDatabase.introducedEl().type("1999-01-01");
  computerDatabase.discontinuedEl().type("2006-01-01");
  computerDatabase.saveButton().click();
  cy.url().should("contain", "/computers");
  computerDatabase
    .warningMessage()
    .should("contain", "Done !  Computer ACE has been updated");
});

When("Click ACE computer and add apple company, date", () => {
  cy.get("tbody > tr:nth-child(1) > td:nth-child(1) > a").click();
  cy.url().should("contain", "/computers/381");
  computerDatabase.introducedEl().type("1999-01-01");
  computerDatabase.discontinuedEl().type("2006-01-01");
  computerDatabase.companyEl().select("Apple Inc.");
  computerDatabase.saveButton().click();
  computerDatabase
    .warningMessage()
    .should("contain", "Done !  Computer ACE has been updated");
});

When("Add new computer to base", () => {
  cy.get("#add").click();
  cy.url().should("include", "/computers/new");
  computerDatabase.nameEl().type("Phoenix");
  computerDatabase.introducedEl().type("2022-03-30");
  computerDatabase.discontinuedEl().type("2023-06-06");
  computerDatabase.companyEl().select("Sony");
  computerDatabase.saveButton().click();
  computerDatabase
    .warningMessage()
    .should("contain", "Done !  Computer Phoenix has been created");
});

When("Add new computer to base with invalid date", () => {
  cy.get("#add").click();
  cy.url().should("include", "/computers/new");
  computerDatabase.nameEl().type("Phoenix");
  computerDatabase.introducedEl().type("1");
  computerDatabase.discontinuedEl().type("1");
  computerDatabase.companyEl().select("Sony");
  computerDatabase.saveButton().click();
  cy.get("div:nth-child(2) > div > span").should(
    "contain",
    "Failed to decode date"
  );
  cy.get("div:nth-child(3) > div > span").should(
    "contain",
    "Failed to decode date"
  );
});

When("Add new computer to base without name", () => {
  cy.get("#add").click();
  cy.url().should("include", "/computers/new");
  computerDatabase.introducedEl().type("2022-03-30");
  computerDatabase.discontinuedEl().type("2023-06-06");
  computerDatabase.companyEl().select("Sony");
  computerDatabase.saveButton().click();
  cy.get("div:nth-child(1) > div > span").should(
    "contain",
    "Failed to refine type"
  );
});

Then("Go to home page", () => {
  cy.get(".topbar > h1 > a").click();
  cy.get("#main > h1")
    .should("be.visible")
    .and("contain", "574 computers found");
});

Then("Click ACE computer and delete", () => {
  cy.get(
    "#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a"
  ).click();
  cy.url().should("contain", "/computers/381");
  cy.get(".btn.danger").click({force:true});
  cy.get(".alert-message")
    .should("be.visible")
    .and("contain", "Computer ACE has been deleted");
});
