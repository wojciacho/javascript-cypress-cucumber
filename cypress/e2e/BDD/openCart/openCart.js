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

Then("Login user incorrectly", () => {
  openCart.myAccountEl().click();
  openCart.loginEl().click();
  cy.url().should("include", "/login&language=en-gb");
  cy.get("#form-login > h2")
    .should("be.visible")
    .and("contain", "Returning Customer");
  openCart.emailLoginInput().should("be.visible");
  openCart.emailLoginInput().type("test@test.com");
  openCart.passwordLoginInput().should("be.visible");
  openCart.passwordLoginInput().type("WOJTAS");
  openCart.loginButton().click();
  cy.url().should("include", "/login&language=en-gb");
  cy.get("#logo").click();
});

Then("Change currency to euro and verify", () => {
  openCart.currencyEl().click();
  cy.get("#form-currency > div > ul > li:nth-child(1) > a").click();
  cy.get("#form-currency > div > a > strong")
    .should("be.visible")
    .and("contain", "€");
});

Then("Change currency to pound and verify", () => {
  openCart.currencyEl().click();
  cy.get("#form-currency > div > ul > li:nth-child(2) > a").click();
  cy.get("#form-currency > div > a > strong")
    .should("be.visible")
    .and("contain", "£");
});

Then("Change currency to us dollar and verify", () => {
  openCart.currencyEl().click();
  cy.get("#form-currency > div > ul > li:nth-child(3) > a").click();
  cy.get("#form-currency > div > a > strong")
    .should("be.visible")
    .and("contain", "$");
});

Then("Add HP laptop to cart", () => {
  cy.get(
    "#product-list > div:nth-child(3) > form > div > div.content > div.description > h4 > a"
  )
    .should("be.visible")
    .and("contain", "HP LP3065");
  cy.get(
    "#product-list > div:nth-child(3) > form > div > div.content > div.description > div > span.price-new"
  )
    .should("be.visible")
    .and("contain", "$122.00");
  cy.get(
    "#product-list > div:nth-child(3) > form > div > div.content > div.button-group > button:nth-child(1)"
  ).click();
  cy.url().should("include", "/product&language=en-gb&product_id=47");
});

Then("Check HP laptop details", () => {
  cy.get("h1").should("be.visible").and("contain", "HP LP3065");
  cy.get("h2 > .price-new").should("be.visible").and("contain", "$122.00");
  cy.get("#input-quantity").clear().type("2");
});

Then("Add to cart and verify alert", () => {
  cy.get("#button-cart").click();
  cy.get(".alert-success")
    .should("be.visible")
    .and("contain", "Success: You have added");
});

Then("Register account", () => {
  openCart.myAccountEl().click();
  openCart.registerEl().click();
  cy.url().should("include", "/register&language=en-gb");
  cy.get("#content > h1")
    .should("be.visible")
    .and("contain", "Register Account");
  openCart.registerFirstNameEl().type("Wojciech");
  openCart.registerLastNameEl().type("Wojciechowski");
  openCart.registerEmailEl().type("test123@test.com");
  openCart.registerPasswordEl().type("WOJTAS12345");
  cy.get('input[name="agree"]').click();
  cy.get('button[type="submit"]').click();
});

Then("Click on tablets category and verify", () => {
  openCart.tabletsEl().click();
  cy.url().should("include", "/category&language=en-gb&path=57");
  cy.get("#content > h2").should("be.visible").and("contain", "Tablets");
  cy.get(".product-thumb").should("be.visible");
  cy.get(
    "#product-list > div > form > div > div.content > div.description > h4 > a"
  )
    .should("be.visible")
    .and("contain", "Samsung Galaxy Tab 10.1");
  cy.get(
    "#product-list > div > form > div > div.content > div.description > div > span.price-new"
  )
    .should("be.visible")
    .and("contain", "$241.99");
});
