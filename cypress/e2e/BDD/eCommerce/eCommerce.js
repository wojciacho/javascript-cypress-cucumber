import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import eCommerce from "../../../page-objects/eCommerceObject";

const url = "https://rahulshettyacademy.com/angularpractice";

Given("Opening eCommerce Page", () => {
  cy.visit(url);
});

When("Fill few fields and assert", () => {
  eCommerce.nameBox().type(globalThis.data.name);
  eCommerce.nameBox().should("have.value", "Wojciech");
  eCommerce.nameBox().should("have.attr", "minlength", "2");
  eCommerce.genderBox().select(globalThis.data.gender);
  eCommerce.genderBox().should("have.value", "Male");
  eCommerce.nameBoxAssert().should("have.value", "Wojciech");
  eCommerce.radioInput().should("be.disabled");
});

When("Go to store and add items to cart", () => {
  eCommerce.shopURL().click();
  cy.url().should("include", "/angularpractice/shop");
  cy.url().should("include", "/angularpractice/shop");
  globalThis.data.phones.forEach((element) => {
    cy.iteratingPhones(element);
  });
  eCommerce.checkoutButton().click();
  cy.url().should("include", "/angularpractice/shop");
});

When("Validate total prices in cart", () => {
  let result = 0;
  cy.get("td:nth-child(4) > strong")
    .each(($element) => {
      const price = $element.text();
      let newPrice = price.split(" ");
      newPrice = newPrice[1].trim();
      result = +result + +newPrice;
    })
    .then(() => {});
  cy.get("h3 > strong").then((element) => {
    const total = element.text();
    let newTotal = total.split(" ");
    newTotal = newTotal[1].trim();
    expect(+newTotal).to.equal(result);
  });
  eCommerce.cartButton().click();
});

Then("Select the country, submit and verify alert message", () => {
  cy.get("#country").type("Pol");
  Cypress.config("defaultCommandTimeout", 6500);
  cy.pickLocation("Poland");
  cy.get("#country").should("have.value", "Poland");
  cy.get("#checkbox2").click({force: true});
  eCommerce.purchaseButton().click();
  cy.get(".alert").then((element) => {
    const alertText = element.text();
    expect(alertText.includes("Success")).to.be.true;
  });
});
