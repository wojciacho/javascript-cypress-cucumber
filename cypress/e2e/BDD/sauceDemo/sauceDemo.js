import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import sauceDemo from "../../../page-objects/sauceDemoObject";

Given("Opening saucedemo page", () => {
  sauceDemo.navigate();
  cy.url().should("include", "https://www.saucedemo.com");
});

When("Filling login details", () => {
  cy.sauceDemoLogin("standard_user", "secret_sauce");
});

When("Go to the store and assert products visibility", () => {
  cy.url().should("include", "https://www.saucedemo.com/inventory.html");
  cy.get("#item_4_title_link").should("be.visible");
  cy.get("#item_1_title_link").should("be.visible");
  cy.get("#item_0_title_link").should("be.visible");
});

Then("Logout and assert home page", () => {
  sauceDemo.burgerMenu().click();
  sauceDemo.logoutButton().click({force: true});
  cy.url().should("include", "https://www.saucedemo.com");
  cy.get(".login-box").should("be.visible");
});

Then("Select backpack and complete a purchase", () => {
  cy.get("#item_4_title_link").click();
  cy.url().should("include", "inventory-item.html?id=4");
  sauceDemo.priceBox().contains("$29.99");
  sauceDemo.addBackPackToCart().click();
  sauceDemo.cartButton().click();
  cy.url().should("include", "cart.html");
  cy.get(".inventory_item_name").contains("Sauce Labs Backpack");
  cy.placingAnOrder("Wojciech", "Wojciechowski", "12345");
});

Then("Select jacket and complete a purchase", () => {
  cy.get("#item_5_title_link").click();
  cy.url().should("include", "inventory-item.html?id=5");
  sauceDemo.priceBox().contains("$49.99");
  sauceDemo.addJacketToCart().click();
  sauceDemo.cartButton().click();
  cy.url().should("include", "cart.html");
  cy.get(".inventory_item_name").contains("Sauce Labs Fleece Jacket");
  cy.placingAnOrder("Wojciech", "Wojciechowski", "12345");
});
