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

When("Page loads check hot sellers section", () => {
  cy.get("div > div > ol > li:nth-child(1) > div").should("be.visible");
  cy.get("div > div > ol > li:nth-child(2) > div").should("be.visible");
  cy.get("div > div > ol > li:nth-child(3) > div").should("be.visible");
  cy.get("div > div > ol > li:nth-child(4) > div").should("be.visible");
  cy.get("div > div > ol > li:nth-child(5) > div").should("be.visible");
});

When("Add procuct to cart and check summary", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  cy.clearLocalStorage();
  cy.get("div > div > ol > li:nth-child(2) > div > div > strong > a")
    .should("contain", "Breathe-Easy Tank")
    .click();
  cy.url().should("include", "/breathe-easy-tank.html");
  cy.get("#product-price-1812 > .price").should("contain", "$34.00");
  cy.get("#option-label-size-143-item-167").click();
  cy.get("#option-label-color-93-item-59").click();
  magentoStore.qtyEl().clear();
  magentoStore.qtyEl().type("2");
  magentoStore.addToCartButton().click();
  cy.get(
    "#maincontent > div.page.messages > div:nth-child(2) > div > div > div"
  ).should("contain", "You added Breathe-Easy Tank to your shopping cart.");
  magentoStore.cartEl().click();
  cy.get("#ui-id-1").should("be.visible");
  cy.get(
    "#minicart-content-wrapper > div.block-content > div:nth-child(7) > div > a > span"
  ).click();
  cy.url().should("include", "checkout/cart/");
  cy.get("#shopping-cart-table").should("be.visible");
  cy.get('label > input[type="number"]').should("have.value", "2");
  cy.get(".action-delete").click();
});

When("Login into store and check error message", () => {
  magentoStore.loginEl().click();
  cy.url().should("include", "/customer/account/login");
  magentoStore.emailEl().type("asd@asd.com");
  magentoStore.passwordEl().type("WOJTAS12345!");
  magentoStore.loginButton().click();
  cy.get(
    "#maincontent > div.page.messages > div:nth-child(2) > div > div > div"
  ).should(
    "contain",
    "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
  );
});

When("Check footer links", () => {
  cy.get(".page-footer");
  cy.get("div.links > div > ul > li:nth-child(1) > a").should(
    "contain",
    "About us"
  );
  cy.get("div.links > div > ul > li:nth-child(2) > a").should(
    "contain",
    "Customer Service"
  );
  cy.get("footer > div > ul > li:nth-child(1) > a").should(
    "contain",
    "Search Terms"
  );
  cy.get("footer > div > ul > li:nth-child(2) > a").should(
    "contain",
    "Privacy and Cookie Policy"
  );
  cy.get("footer > div > ul > li:nth-child(3) > a").should(
    "contain",
    "Advanced Search"
  );
  cy.get("footer > div > ul > li:nth-child(4) > a").should(
    "contain",
    "Orders and Returns"
  );
  cy.get("footer > div > ul > li:nth-child(5) > a").should(
    "contain",
    "Contact Us"
  );
});

When("Click Tops category and assert", () => {
  magentoStore.menEl().click();
  cy.url().should("include", "/men.html");
  cy.get("#narrow-by-list2 > dd > ol > li:nth-child(1) > a")
    .should("be.visible")
    .and("contain", "Tops");
  cy.get("#narrow-by-list2 > dd > ol > li:nth-child(1) > a").click();
  cy.url().should("contain", "/men/tops-men.html");
  cy.get("#page-title-heading > span").should("contain", "Tops");
});

When("Click Bottoms category and assert", () => {
  magentoStore.menEl().click();
  cy.url().should("include", "/men.html");
  cy.get("#narrow-by-list2 > dd > ol > li:nth-child(2) > a")
    .should("be.visible")
    .and("contain", "Bottoms");
  cy.get("#narrow-by-list2 > dd > ol > li:nth-child(2) > a").click();
  cy.url().should("contain", "/men/bottoms-men.html");
  cy.get("#page-title-heading > span").should("contain", "Bottoms");
});

Then("Go to home page", () => {
  cy.get(".logo").click();
  cy.url().should("contain", "magento.softwaretestingboard.com");
});
