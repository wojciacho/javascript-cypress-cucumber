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
