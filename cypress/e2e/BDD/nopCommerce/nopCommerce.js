import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import nopCommerce from "../../../page-objects/nopCommerceObject";

Given("Opening nopCommerce page", () => {
  cy.viewport(1001, 600);
  nopCommerce.navigate();
  cy.url().should("include", "https://demo.nopcommerce.com");
});

When("Check navbar when page loads", () => {
  nopCommerce.computerMenu().should("be.visible").and("contain", "Computers");
  nopCommerce
    .electronicsMenu()
    .should("be.visible")
    .and("contain", "Electronics");
  nopCommerce.apparelMenu().should("be.visible").and("contain", "Apparel");
  nopCommerce
    .downloadsMenu()
    .should("be.visible")
    .and("contain", "Digital downloads");
  nopCommerce.booksMenu().should("be.visible").and("contain", "Books");
  nopCommerce.jewelryMenu().should("be.visible").and("contain", "Jewelry");
  nopCommerce.giftCardsMenu().should("be.visible").and("contain", "Gift Cards");
});

When("Go to computers page and assert", () => {
  nopCommerce.computerMenu().click();
  cy.url().should("include", "/computers");
});

When("Go to gift cards page and assert", () => {
  nopCommerce.giftCardsMenu().click();
  cy.url().should("include", "/gift-cards");
  cy.get(".item-grid > div:nth-child(1)")
    .should("be.visible")
    .and("contain", "$25 Virtual Gift Card");
  cy.get(".item-grid > div:nth-child(2)")
    .should("be.visible")
    .and("contain", "$50 Physical Gift Card");
  cy.get(".item-grid > div:nth-child(3)")
    .should("be.visible")
    .and("contain", "$100 Physical Gift Card");
});

Then("Go to home page", () => {
  nopCommerce.logoElement().click();
  cy.url().should("include", "https://demo.nopcommerce.com");
});
