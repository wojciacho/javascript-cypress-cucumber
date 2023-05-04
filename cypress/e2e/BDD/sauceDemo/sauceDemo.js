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

Then("Add two products to cart", () => {
  cy.get("#add-to-cart-sauce-labs-backpack").click();
  cy.get("#add-to-cart-sauce-labs-bike-light").click();
});

Then("Remove products from cart with assertion", () => {
  sauceDemo.cartButton().click();
  cy.url().should("include", "cart.html");
  cy.get("div:nth-child(3) > div.cart_item_label").should(
    "contain",
    "Sauce Labs Backpack"
  );
  cy.get("div:nth-child(4) > div.cart_item_label").should(
    "contain",
    "Sauce Labs Bike Light"
  );
  cy.get("#remove-sauce-labs-backpack").click();
  cy.get("#remove-sauce-labs-bike-light").click();
  cy.get(".cart_list").should("not.contain", "Sauce Labs Backpack");
  cy.get(".cart_list").should("not.contain", "Sauce Labs Bike Light");
});

Then("Remove products from home page with assertion", () => {
  cy.get(".shopping_cart_badge").should("have.text", "2");
  cy.get("#remove-sauce-labs-backpack").click();
  cy.get("#remove-sauce-labs-bike-light").click();
  sauceDemo.cartButton().click();
  cy.url().should("include", "cart.html");
  cy.get(".cart_list").should("not.contain", "Sauce Labs Backpack");
  cy.get(".cart_list").should("not.contain", "Sauce Labs Bike Light");
});

Then("Select price low to high and assert", () => {
  sauceDemo.filterButton().select("lohi");
  cy.get(".active_option").should("have.text", "Price (low to high)");
  cy.get(
    "div:nth-child(1) > div.inventory_item_description > div.inventory_item_label"
  ).should("contain", "Sauce Labs Onesie");
  cy.get(
    "div:nth-child(1) > div.inventory_item_description > div.pricebar > div"
  ).should("contain", "$7.99");
  cy.get(
    "div:nth-child(2) > div.inventory_item_description > div.inventory_item_label"
  ).should("contain", "Sauce Labs Bike Light");
  cy.get(
    "div:nth-child(2) > div.inventory_item_description > div.pricebar > div"
  ).should("contain", "$9.99");
});

Then("Select price high to low and assert", () => {
  sauceDemo.filterButton().select("hilo");
  cy.get(".active_option").should("have.text", "Price (high to low)");
  cy.get(
    "div:nth-child(1) > div.inventory_item_description > div.inventory_item_label"
  ).should("contain", "Sauce Labs Fleece Jacket");
  cy.get(
    "div:nth-child(1) > div.inventory_item_description > div.pricebar > div"
  ).should("contain", "$49.99");
  cy.get(
    "div:nth-child(2) > div.inventory_item_description > div.inventory_item_label"
  ).should("contain", "Sauce Labs Backpack");
  cy.get(
    "div:nth-child(2) > div.inventory_item_description > div.pricebar > div"
  ).should("contain", "$29.99");
});

When("Login user incorrectly", () => {
  cy.sauceDemoLogin("Wojciacho", "wojtas");
});

Then("Verify error message", () => {
  cy.get(".error-message-container")
    .should("be.visible")
    .and(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    );
  cy.get(".input_error").should("have.css", "border-bottom-color");
});
