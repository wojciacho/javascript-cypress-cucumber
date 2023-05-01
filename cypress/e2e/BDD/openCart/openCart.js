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

Then("Click on desktops and verify", () => {
  openCart.allDesktopsEl().click({force: true});
  cy.url().should("include", "/category&language=en-gb&path=20");
  cy.get("#content > h2").should("be.visible").and("contain", "Desktops");
  cy.get("#product-list").should("be.visible");
  cy.get(
    "div:nth-child(1) > form > div > div.content > div.description > h4 > a"
  )
    .should("be.visible")
    .and("contain", "Apple Cinema 30");
  cy.get(
    "div:nth-child(2) > form > div > div.content > div.description > h4 > a"
  )
    .should("be.visible")
    .and("contain", "Canon EOS 5D");
  cy.get(
    "div:nth-child(3) > form > div > div.content > div.description > h4 > a"
  )
    .should("be.visible")
    .and("contain", "HP LP3065");
});
