/// <reference types="Cypress" />

import eCommerce from "../page-objects/eCommerceObject";

describe("eCommerce", () => {
  before(() => {
    cy.fixture("eCommerceData").then((data) => {
      globalThis.data = data;
    });
  });

  it("Should visit url", () => {
    eCommerce.navigate();
    cy.url().should("include", "/angularpractice/");
  });

  it("Should fill fields", () => {
    eCommerce.nameBox().type(globalThis.data.name);
    eCommerce.nameBox().should("have.value", "Wojciech");
    eCommerce.nameBox().should("have.attr", "minlength", "2");
    eCommerce.genderBox().select(globalThis.data.gender);
    eCommerce.genderBox().should("have.value", "Male");
    eCommerce.nameBoxAssert().should("have.value", "Wojciech");
  });

  it("Should check disabled radio input", () => {
    eCommerce.radioInput().should("be.disabled");
  });

  it("Should go to the shop", () => {
    eCommerce.shopURL().click();
    cy.url().should("include", "/angularpractice/shop");
  });

  it("Should iterate over phones", () => {
    globalThis.data.phones.forEach((element) => {
      cy.iteratingPhones(element);
    });
  });

  it("Should click on checkout button", () => {
    eCommerce.checkoutButton().click();
    cy.url().should("include", "/angularpractice/shop");

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
  });

  it("Should click on checkout button in cart", () => {
    eCommerce.cartButton().click();
  });

  it("Should choose location from dynamic dropdown", () => {
    cy.get("#country").type("Pol");
    Cypress.config("defaultCommandTimeout", 6500);
    cy.pickLocation("Poland");
    cy.get("#country").should("have.value", "Poland");
  });

  it("Should click on purchase button", () => {
    cy.get("#checkbox2").click({force: true});
    eCommerce.purchaseButton().click();
    cy.get(".alert").then((element) => {
      const alertText = element.text();
      expect(alertText.includes("Success")).to.be.true;
    });
  });
});
