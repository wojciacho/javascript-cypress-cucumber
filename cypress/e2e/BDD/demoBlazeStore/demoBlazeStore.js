import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import demoBlazeStore from "../../../page-objects/demoBlazeStoreObject";

Given("Open demoBlaze page", () => {
  demoBlazeStore.navigate();
  cy.url().should("include", "demoblaze");
});

When("Verify home page", () => {
  cy.get("#nava").should("be.visible");
  cy.get("#cat").should("be.visible");
  cy.get("#navbarExample").should("be.visible");
  cy.get("#tbodyid").should("be.visible");
});

When("Go to phones category and verify", () => {
  demoBlazeStore.phonesEl().click();
  cy.get("#tbodyid > div:nth-child(1) > div > div > h4 > a").should(
    "contain",
    "Samsung galaxy s6"
  );
  cy.get("#tbodyid > div:nth-child(2) > div > div > h4 > a").should(
    "contain",
    "Nokia lumia 1520"
  );
  cy.get("#tbodyid > div:nth-child(3) > div > div > h4 > a").should(
    "contain",
    "Nexus 6"
  );
  cy.get("#tbodyid > div:nth-child(4) > div > div > h4 > a").should(
    "contain",
    "Samsung galaxy s7"
  );
  cy.get("#tbodyid > div:nth-child(5) > div > div > h4 > a").should(
    "contain",
    "Iphone 6 32gb"
  );
  cy.get("#tbodyid > div:nth-child(6) > div > div > h4 > a").should(
    "contain",
    "Sony xperia z5"
  );
  cy.get("#tbodyid > div:nth-child(7) > div > div > h4 > a").should(
    "contain",
    "HTC One M9"
  );
});

Then("Click on Nexus 6 phone and verify", () => {
  demoBlazeStore.nexusPhoneEl().click();
  cy.url().should("contain", "/prod.html?idp_=3");
  cy.get(".name").should("be.visible").and("contain", "Nexus 6");
  cy.get(".price-container").should("be.visible").and("contain", "$650");
});

When("Go to laptops category and verify", () => {
  demoBlazeStore.laptopsEl().click();
  cy.get("#tbodyid > div:nth-child(1) > div > div > h4 > a").should(
    "contain",
    "Sony vaio i5"
  );
  cy.get("#tbodyid > div:nth-child(2) > div > div > h4 > a").should(
    "contain",
    "Sony vaio i7"
  );
  cy.get("#tbodyid > div:nth-child(3) > div > div > h4 > a").should(
    "contain",
    "MacBook air"
  );
  cy.get("#tbodyid > div:nth-child(4) > div > div > h4 > a").should(
    "contain",
    "Dell i7 8gb"
  );
  cy.get("#tbodyid > div:nth-child(5) > div > div > h4 > a").should(
    "contain",
    "2017 Dell 15.6 Inch"
  );
  cy.get("#tbodyid > div:nth-child(6) > div > div > h4 > a").should(
    "contain",
    "MacBook Pro"
  );
});

Then("Click on MacBook Pro and verify", () => {
  demoBlazeStore.macBookProEl().click();
  cy.url().should("contain", "/prod.html?idp_=15");
  cy.get(".name").should("be.visible").and("contain", "MacBook Pro");
  cy.get(".price-container").should("be.visible").and("contain", "$1100");
});

When("Click on contact us link and verify", () => {
  demoBlazeStore.contactUsEl().click();
  cy.get("#exampleModal > div > div").should("be.visible");
});

Then("Fill details and send message", () => {
  demoBlazeStore.contactUsEmailEl().type("example@wojciacho.com");
  demoBlazeStore.contactUsNameEl().type("Wojciech");
  demoBlazeStore.contactUsMessageEl().type("test");
  demoBlazeStore.contactUsSendButton().click();
  cy.on("window:alert", (message) => {
    expect(message).to.eql("Thanks for the message!!");
  });
});

When("Click on sign up link and verify", () => {
  demoBlazeStore.signUpEl().click();
  cy.get("#signInModal").should("be.visible");
});

Then("Fill details and sign up", () => {
  demoBlazeStore.signUpName().type("Wojciacho");
  demoBlazeStore.signUpPassword().type("WOJTAS12345!");
  demoBlazeStore.signUpButton().click();
  cy.on("window:alert", (message) => {
    expect(message).to.eql("This user already exist.");
  });
});

When("Click on log in link and verify", () => {
  demoBlazeStore.loginEl().click();
  cy.get("#logInModal").should("be.visible");
});

Then("Fill details and log in verify and log out", () => {
  demoBlazeStore.loginNameEl().type("WOJTAS1");
  demoBlazeStore.loginPasswordEl().type("12345");
  demoBlazeStore.loginButton().click();
  cy.get("#nameofuser").should("be.visible").and("contain", "Welcome WOJTAS1");
  demoBlazeStore.logoutEl().click();
  demoBlazeStore.loginEl().should("be.visible").and("contain", "Log in");
});

Then("Fill details and try to log in", () => {
  demoBlazeStore.loginNameEl().type("Wojciacho");
  demoBlazeStore.loginPasswordEl().type("12345");
  demoBlazeStore.loginButton().click();
  cy.on("window:alert", (message) => {
    expect(message).to.eql("Wrong password.");
  });
});

When("Pick nexus 6 phone and verify", () => {
  demoBlazeStore.nexusPhoneEl().click();
  cy.url().should("contain", "/prod.html?idp_=3");
  cy.get(".name").should("be.visible").and("contain", "Nexus 6");
  cy.get(".price-container").should("be.visible").and("contain", "$650");
});

When("Add product to cart and verify", () => {
  demoBlazeStore.successButton().click();
  cy.on("window:alert", (message) => {
    expect(message).to.contain("Product added");
  });
  demoBlazeStore.cartEl().click();
  cy.url().should("include", "/cart.html");
  cy.get("#totalp").should("be.visible").and("contain", "650");
  cy.get("#tbodyid").should("have.length", "1");
  cy.get("#tbodyid > tr > td:nth-child(2)")
    .should("be.visible")
    .and("contain", "Nexus 6");
});

Then("Place order", () => {
  demoBlazeStore.successButton().click();
  cy.get("#orderModal").should("be.visible");
  cy.get("#totalm").should("be.visible");
  demoBlazeStore.placeOrderNameEl().type("Wojciech");
  demoBlazeStore.placeOrderCountryEl().type("Poland");
  demoBlazeStore.placeOrderCityEl().type("Warsaw");
  demoBlazeStore.placeOrderCardEl().type("12345");
  demoBlazeStore.placeOrderMonthEl().type("06");
  demoBlazeStore.placeOrderYearEl().type("23");
  demoBlazeStore.purchaseButton().click();
  cy.get(".sweet-alert").should("be.visible");
  cy.get(".sweet-alert > h2")
    .should("be.visible")
    .and("contain", "Thank you for your purchase!");
  cy.get(".confirm").click();
  cy.url().should("include", "/index.html");
});

When("Login correctly", () => {
  demoBlazeStore.loginNameEl().type("WOJTAS1");
  demoBlazeStore.loginPasswordEl().type("12345");
  demoBlazeStore.loginButton().click();
  cy.get("#nameofuser").should("be.visible").and("contain", "Welcome WOJTAS1");
});

Then("Logout user", () => {
  demoBlazeStore.logoutEl().click();
  demoBlazeStore.loginEl().should("be.visible").and("contain", "Log in");
});

Then("Delete product from cart", () => {
  cy.get("#tbodyid > tr > td:nth-child(4) > a").click();
  cy.get("#totalp").should("not.be.visible");
});

When("Go to monitors category and verify", () => {
  demoBlazeStore.monitorsEl().click();
  cy.get("#tbodyid > div:nth-child(1) > div > div > h4 > a").should(
    "contain",
    "Apple monitor 24"
  );
  cy.get("#tbodyid > div:nth-child(2) > div > div > h4 > a").should(
    "contain",
    "ASUS Full HD"
  );
});

Then("Click on Apple monitor and verify", () => {
  demoBlazeStore.appleMonitorEl().click();
  cy.url().should("contain", "/prod.html?idp_=10");
  cy.get(".name").should("be.visible").and("contain", "Apple monitor 24");
  cy.get(".price-container").should("be.visible").and("contain", "$400");
});

Then("Verify footer", () => {
  cy.get("#footc").should("be.visible");
  cy.get("#fotcont > div:nth-child(1) > div > div > h4 > b")
    .should("be.visible")
    .and("contain", "About Us");
  cy.get("#fotcont > div:nth-child(2) > div > div > h4 > b")
    .should("be.visible")
    .and("contain", "Get in Touch");
  cy.get(
    "#fotcont > div.col-sm-3.col-lg-3.col-md-3 > div > div > p:nth-child(4)"
  )
    .should("be.visible")
    .and("contain", "Email: demo@blazemeter.com");
  cy.get(".m-0")
    .should("be.visible")
    .and("contain", "Copyright © Product Store 2017");
});

Then("Verify Nexus 6 description", () => {
  cy.get("#more-information > p")
    .should("be.visible")
    .and(
      "contain",
      "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM."
    );
});

Then("Verify MacBook Pro description", () => {
  cy.get("#more-information > p")
    .should("be.visible")
    .and(
      "contain",
      "Apple has introduced three new versions of its MacBook Pro line"
    );
});
