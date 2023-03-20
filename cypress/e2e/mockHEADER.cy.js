/// <reference types="Cypress" />

describe("Mock HTTP", () => {
  it("Should mock header", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=test";
        req.continue((res) => {
          expect(res.statusCode).to.equal(200);
        });
      }
    ).as("header");
    cy.get(".btn-primary").click();
    cy.wait("@header");
  });
});
