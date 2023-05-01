import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import openCart from "../../../page-objects/openCartObject";

Given("Open openCart page", () => {
  openCart.navigate();
  cy.url().should("include", "/home&language=en-gb");
});

When("Verify home page", () => {
  cy.get("#logo").should("be.visible");
  cy.get("#top").should("be.visible");
  cy.get("h3").should("be.visible").and("contain", "Featured");
});

Then("Click shopping cart and verify", () => {
  openCart.shoppingCartEl().click();
  cy.url().should("include", "/cart&language=en-gb");
  cy.get("#error-not-found > ul > li:nth-child(2) > a")
    .should("be.visible")
    .and("contain", "Shopping Cart");
  cy.get("#content > h1").should("be.visible").and("contain", "Shopping Cart");
  cy.get("#content > p")
    .should("be.visible")
    .and("contain", "Your shopping cart is empty!");
});

Then("Check footer on home page", () => {
  cy.get("footer > .container").should("be.visible");
  cy.get(".col-sm-3:nth-child(1) > h5")
    .should("be.visible")
    .and("contain", "Information");
  cy.get(".col-sm-3:nth-child(2) > h5")
    .should("be.visible")
    .and("contain", "Customer Service");
  cy.get(".col-sm-3:nth-child(3) > h5")
    .should("be.visible")
    .and("contain", "Extras");
  cy.get(".col-sm-3:nth-child(4) > h5")
    .should("be.visible")
    .and("contain", "My Account");
  cy.get("footer > div > p")
    .should("be.visible")
    .and("contain", "Powered By OpenCart");
});
