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

Then("Go to home page", () => {
  cy.get(".topbar > h1 > a").click();
  cy.get("#main > h1")
    .should("be.visible")
    .and("contain", "574 computers found");
});
