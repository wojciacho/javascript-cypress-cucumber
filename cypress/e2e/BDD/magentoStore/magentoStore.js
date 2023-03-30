import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import magentoStore from "../../../page-objects/magentoStoreObject";

Given("Opening magentoSoftware page", () => {
  magentoStore.navigate();
  cy.url().should("include", "magento.softwaretestingboard.com");
});

When("Page loads check navbar", () => {
  cy.get("#ui-id-3 > span").should("be.visible");
  cy.get("#ui-id-4 > span:nth-child(2)").should("be.visible");
  cy.get("#ui-id-5 > span:nth-child(2)").should("be.visible");
  cy.get("#ui-id-6 > span:nth-child(2)").should("be.visible");
  cy.get("#ui-id-7 > span:nth-child(2)").should("be.visible");
  cy.get("#ui-id-8 > span").should("be.visible");
});

When("Check women page", () => {
  cy.get("#ui-id-4 > span:nth-child(2)").click();
  cy.url().should("include", "/women.html");
  cy.get("#page-title-heading > span").should("contain", "Women");
});

When("Go to women page and assert", () => {
  cy.get("#ui-id-4 > span:nth-child(2)").click();
  cy.get("#page-title-heading > span").should("contain", "Women");
  cy.get(".sidebar.sidebar-main").should("be.visible");
  cy.get("div > ol > li:nth-child(1) > div > div > strong").should(
    "contain",
    "Radiant Tee"
  );
  cy.get("div > ol > li:nth-child(2) > div > div > strong").should(
    "contain",
    "Breathe-Easy Tank"
  );
  cy.get("div > ol > li:nth-child(3) > div > div > strong").should(
    "contain",
    "Selene Yoga Hoodie"
  );
  cy.get("div > ol > li:nth-child(4) > div > div > strong").should(
    "contain",
    "Deirdre Relaxed-Fit Capri"
  );
});

Then("Go to home page", () => {
  cy.get(".logo").click();
  cy.url().should("contain", "magento.softwaretestingboard.com");
});
