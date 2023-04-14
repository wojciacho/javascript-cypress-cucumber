import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import automationExercise from "../../../page-objects/automationExerciseObject";

Given("Open automationExercise page", () => {
  automationExercise.navigate();
  cy.url().should("include", "automationexercise.com");
});

When("Verify home page", () => {
  cy.get(".logo").should("be.visible");
  cy.get("#header").should("be.visible");
  cy.get(".features_items").should("be.visible");
  cy.get(".left-sidebar").should("be.visible");
});

When("Register user", () => {
  automationExercise.signUpEl().click();
  cy.get(".signup-form > h2").should("be.visible");
  automationExercise.signUpNameEl().type("Wojciech");
  automationExercise.signUpEmailEl().type("wojciech@wojciech.com");
  automationExercise.signUpButton().click();
  cy.get("#uniform-id_gender1").click();
  cy.get(
    "#form >.container > .row > .col-sm-4 > .login-form > .title > b"
  ).should("be.visible");
  cy.signUpDetails(
    "WOJTAS12345!",
    "Wojciech",
    "Wojciechowski",
    "Apple",
    "Main Street",
    "California",
    "Los Angeles",
    "00-001",
    "123 456 789"
  );
  cy.get("#newsletter").click();
  cy.get("#optin").click();
  automationExercise.createAccountButton().click();
  cy.get("#form > div > div > div > h2 > b")
    .should("be.visible")
    .and("contain", "Account Created!");
  automationExercise.continueButton().click();
  cy.get("ul > li:nth-child(10) > a").should("be.visible");
});

Then("Register user with existing email", () => {
  automationExercise.signUpEl().click();
  cy.get(".signup-form > h2").should("be.visible");
  automationExercise.signUpNameEl().type("Wojciech");
  automationExercise.signUpEmailEl().type("example@example1.com");
  automationExercise.signUpButton().click();
  cy.get("div:nth-child(3) > div > form > p")
    .should("be.visible")
    .and("contain", "Email Address already exist!");
});

Then("Validate contact us form", () => {
  automationExercise.contactUsEl().click();
  cy.get(".contact-form > h2").should("be.visible");
  automationExercise.contactUsName().type("Wojciech");
  automationExercise.contactUsEmail().type("example@example1.com");
  automationExercise.contactUsSubject().type("test");
  automationExercise.contactUsMessage().type("test 123");
  automationExercise.contactUsSubmitButton().click();
  cy.get(".contact-form > .alert-success").should("be.visible");
  cy.get(".btn-success").click();
  cy.url().should("include", "automationexercise.com");
});

Then("Validate test cases page", () => {
  cy.get("div.col-sm-8 > div > ul > li:nth-child(5) > a").click();
  cy.url().should("include", "/test_cases");
});

When("Validate all products page", () => {
  automationExercise.productsEl().click();
  cy.url().should("include", "/products");
  cy.get(".features_items").should("be.visible");
});

Then("Verify product detail page", () => {
  cy.get(
    "div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a"
  ).click();
  cy.url().should("include", "/product_details/");
  cy.get(".product-information > h2").should("be.visible");
  cy.get("div.product-details > div.col-sm-7 > div > p:nth-child(3)").should(
    "be.visible"
  );
  cy.get("div.product-details > div.col-sm-7 > div > span > span").should(
    "be.visible"
  );
  cy.get("div.product-details > div.col-sm-7 > div > p:nth-child(6)").should(
    "be.visible"
  );
  cy.get("div.product-details > div.col-sm-7 > div > p:nth-child(7)").should(
    "be.visible"
  );
  cy.get("div.product-details > div.col-sm-7 > div > p:nth-child(8)").should(
    "be.visible"
  );
});

Then("Validate and subscribe newsletter in cart", () => {
  automationExercise.cartEl().click();
  cy.url().should("contain", "/view_cart");
  cy.get(".single-widget > h2")
    .should("be.visible")
    .and("contain", "Subscription");
  cy.get("#susbscribe_email").type("example1@example.com");
  cy.get("#subscribe").click({force: true});
  cy.get("#success-subscribe > .alert-success")
    .should("be.visible")
    .and("contain", "You have been successfully subscribed!");
});

Then("Validate and subscribe newsletter", () => {
  cy.get(".single-widget > h2")
    .should("be.visible")
    .and("contain", "Subscription");
  cy.get("#susbscribe_email").type("example1@example.com");
  cy.get("#subscribe").click();
  cy.get("#success-subscribe > .alert-success")
    .should("be.visible")
    .and("contain", "You have been successfully subscribed!");
});

Then("Search product", () => {
  automationExercise.searchBoxEl().type("Blue Top");
  cy.get("#submit_search").click();
  cy.get(".features_items > h2").should("be.visible");
  cy.get(".single-products").should("be.visible");
});

Then("Login user correctly", () => {
  automationExercise.signUpEl().click();
  cy.get(".login-form > h2").should("be.visible");
  automationExercise.loginEmailEl().type("example@example1.com");
  automationExercise.loginPasswordEl().type("wojtas");
  automationExercise.loginButton().click();
  cy.get("ul > li:nth-child(10) > a").should("be.visible");
  cy.url().should("include", "automationexercise.com");
});

Then("Login user incorrectly", () => {
  automationExercise.signUpEl().click();
  cy.get(".login-form > h2").should("be.visible");
  automationExercise.loginEmailEl().type("example@example2.com");
  automationExercise.loginPasswordEl().type("wojtas2");
  automationExercise.loginButton().click();
  cy.get("div.col-sm-4.col-sm-offset-1 > div > form > p")
    .should("be.visible")
    .and("contain", "Your email or password is incorrect!");
});

Then("Logout user", () => {
  automationExercise.logoutButton().click();
  cy.url().should("include", "login");
  cy.get(".login-form").should("be.visible");
  cy.get(".signup-form").should("be.visible");
});

Then("Delete user", () => {
  automationExercise.deleteAccountEl().click();
  cy.get("#form > div > div > div > h2 > b")
    .should("be.visible")
    .and("contain", "Account Deleted!");
  automationExercise.continueButton().click();
});

Then("Add products to cart and verify", () => {
  automationExercise.productsEl().click();
  cy.get(
    "div:nth-child(3) > div > div.single-products > div.product-overlay > div > a"
  ).click({force: true});
  automationExercise.closeModalEl().click();
  cy.get(
    "div:nth-child(4) > div > div.single-products > div.product-overlay > div > a"
  ).click({force: true});
  automationExercise.modalViewCartEl().click();
  cy.get("#cart_info_table > tbody").should("have.length", "1");
  cy.get("#product-1 > td.cart_description > h4 > a")
    .should("be.visible")
    .and("contain", "Blue Top");
  cy.get("#product-2 > td.cart_description > h4 > a")
    .should("be.visible")
    .and("contain", "Men Tshirt");
  cy.get("#product-1 > td.cart_total > p").should("contain", "Rs. 500");
  cy.get("#product-2 > td.cart_total > p").should("contain", "Rs. 400");
  cy.get("#product-1 >.cart_delete >  .cart_quantity_delete").click();
  cy.get("#product-2 >.cart_delete >  .cart_quantity_delete").click();
  cy.clearLocalStorage();
});

When("Increase any product quantity to 4 and add to cart", () => {
  cy.get(
    " div.features_items > div:nth-child(3) > div > div.choose > ul > li > a"
  ).click();
  cy.get("#quantity").clear();
  cy.get("#quantity").type("4");
  cy.get(".col-sm-7 > .product-information > span > button").click();
});

Then("Verify that product is displayed correctly", () => {
  automationExercise.modalViewCartEl().click();
  cy.get(".disabled").should("contain", "4");
  cy.get("#product-1 >.cart_delete >  .cart_quantity_delete").click();
});

When("Add product to cart", () => {
  cy.get(
    "div.features_items > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a"
  ).click({force: true});
  automationExercise.modalViewCartEl().click();
  cy.url().should("include", "/view_cart");
  cy.get("#product-1").should("be.visible");
  automationExercise.checkoutButton().click();
});

When("Register and click cart", () => {
  automationExercise.modalRegisterLoginEl().click();
  cy.get(".signup-form > h2").should("be.visible");
  automationExercise.signUpNameEl().type("Wojciech");
  automationExercise.signUpEmailEl().type("wojciech@wojciech3.com");
  automationExercise.signUpButton().click();
  cy.get("#uniform-id_gender1").click();
  cy.get(
    "#form >.container > .row > .col-sm-4 > .login-form > .title > b"
  ).should("be.visible");
  cy.signUpDetails(
    "WOJTAS12345!",
    "Wojciech",
    "Wojciechowski",
    "Apple",
    "Main Street",
    "California",
    "Los Angeles",
    "00-001",
    "123 456 789"
  );
  cy.get("#newsletter").click();
  cy.get("#optin").click();
  automationExercise.createAccountButton().click();
  cy.get("#form > div > div > div > h2 > b")
    .should("be.visible")
    .and("contain", "Account Created!");
  automationExercise.continueButton().click();
  cy.get("ul > li:nth-child(10) > a").should("be.visible");
});

Then("Place order", () => {
  automationExercise.cartEl().click();
  automationExercise.checkoutButton().click();
  cy.get("#address_delivery > li:nth-child(2)").should(
    "contain",
    "Mr. Wojciech Wojciechowski"
  );
  cy.get("#address_delivery > li:nth-child(3)").should("contain", "Apple");
  cy.get("#address_delivery > li:nth-child(3)").should("contain", "Apple");
  cy.get("#address_delivery > li:nth-child(4)").should(
    "contain",
    "Main Street"
  );
  cy.get("#address_delivery > .address_city").should("contain", "Los Angeles");
  cy.get("#address_delivery > li:nth-child(7)").should(
    "contain",
    "United States"
  );
  cy.get("#address_delivery > li:nth-child(8)").should(
    "contain",
    "123 456 789"
  );
  cy.get("div > .check_out").click();
  cy.get('input[name="name_on_card"]').type("Wojciech");
  cy.get('input[name="card_number"]').type("123456");
  cy.get('input[name="cvc"]').type("123");
  cy.get('input[name="expiry_month"]').type("06");
  cy.get('input[name="expiry_year"]').type("2023");
  cy.get("#submit").click();
  cy.get("#form > div > div > div > p")
    .should("be.visible")
    .and("contain", "Congratulations! Your order has been confirmed!");
  cy.get("#form > div > div > div > p")
    .should("be.visible")
    .and("contain", "Congratulations! Your order has been confirmed!");
});

When("Login user", () => {
  automationExercise.signUpEl().click();
  cy.get(".login-form > h2").should("be.visible");
  automationExercise.loginEmailEl().type("example@example2.com");
  automationExercise.loginPasswordEl().type("WOJTAS12345!");
  automationExercise.loginButton().click();
  cy.get("ul > li:nth-child(10) > a").should("be.visible");
  cy.url().should("include", "automationexercise.com");
});

Then("Add product and remove from cart", () => {
  cy.get(
    "div.features_items > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a"
  ).click({force: true});
  automationExercise.modalViewCartEl().click();
  cy.url().should("include", "/view_cart");
  cy.get("#product-1").should("be.visible");
  cy.get(".cart_quantity_delete").click();
  cy.get("#empty_cart > p").should(
    "contain",
    "Cart is empty! Click here to buy products."
  );
});

When("Verify categories on left side bar", () => {
  cy.get(".left-sidebar").should("be.visible");
  cy.get(".category-products").should("be.visible");
});

When("Click on women dress category and verify", () => {
  automationExercise.womenEl().click();
  automationExercise.womanDressEl().click();
  cy.get(".features_items > h2")
    .should("be.visible")
    .and("contain", "Women - Dress Products");
  cy.url().should("include", "/category_products/1");
});

When("Click on men jeans category and verify", () => {
  automationExercise.menEl().click();
  automationExercise.menJeansEl().click();
  cy.get(".features_items > h2")
    .should("be.visible")
    .and("contain", "Men - Jeans Products");
  cy.url().should("include", "/category_products/6");
});

When("Verify brands on left side bar and click on polo brand", () => {
  cy.get(".brands_products").should("be.visible");
  automationExercise.poloBrandEl().click();
  cy.get(".features_items > h2")
    .should("be.visible")
    .and("contain", "Brand - Polo Products");
  cy.url().should("include", "/brand_products/Polo");
});

Then("Click on other brand and verify", () => {
  automationExercise.hmBrandEl().click();
  cy.get(".features_items > h2")
    .should("be.visible")
    .and("contain", "Brand - H&M Products");
  cy.url().should("include", "/brand_products/H&M");
});

When("Click on products and verify", () => {
  automationExercise.productsEl().click();
  cy.url().should("include", "/products");
});

When("Add searched product to cart", () => {
  cy.get("div.single-products > div.product-overlay > div > a").click({
    force: true,
  });
  automationExercise.modalViewCartEl().click();
  cy.get("#cart_info_table > tbody").should("have.length", "1");
  cy.get("#product-1 > td.cart_description > h4 > a")
    .should("be.visible")
    .and("contain", "Blue Top");
});

Then("Go to cart page and verify", () => {
  automationExercise.cartEl().click();
  cy.get("#cart_info_table > tbody").should("have.length", "1");
  cy.get("#product-1 > td.cart_description > h4 > a")
    .should("be.visible")
    .and("contain", "Blue Top");
  cy.get(".cart_quantity_delete > .fa").click();
});
