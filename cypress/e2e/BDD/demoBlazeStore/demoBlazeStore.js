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
