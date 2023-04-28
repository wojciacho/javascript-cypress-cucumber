import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import globalSqaBank from "../../../page-objects/globalSqaBankObject";

Given("Open globalSqa Bank page", () => {
  globalSqaBank.navigate();
  cy.url().should("include", "/angularJs-protractor/BankingProject/#/login");
});

When("Verify home page", () => {
  cy.get(".mainHeading").should("be.visible").and("contain", "XYZ Bank");
  cy.get("div.borderM.box.padT20 > div:nth-child(1) > button").should(
    "be.visible"
  );
  cy.get("div.borderM.box.padT20 > div:nth-child(3) > button").should(
    "be.visible"
  );
  cy.get(".home").should("be.visible");
});

Then("Click customer login and verify", () => {
  globalSqaBank.customerLoginEl().click();
  cy.url().should("include", "/#/customer");
  cy.get(".form-group > label").should("be.visible");
  cy.get("#userSelect").should("be.visible");
});
