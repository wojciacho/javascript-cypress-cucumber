class globalSqa {
  navigate() {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  }

  customerLoginEl() {
    return cy.get("div.borderM.box.padT20 > div:nth-child(1) > button");
  }

  bankManagerLoginEl() {
    return cy.get("div.borderM.box.padT20 > div:nth-child(3) > button");
  }

  firstNameEl() {
    return cy.get("form > div:nth-child(1) > input");
  }

  lastNameEl() {
    return cy.get("form > div:nth-child(2) > input");
  }

  postCodeEl() {
    return cy.get("form > div:nth-child(3) > input");
  }

  confirmButton() {
    return cy.get("form > button");
  }

  addCustomerButton() {
    return cy.get('[ng-class="btnClass1"]');
  }

  customersButton() {
    return cy.get('[ng-class="btnClass3"]');
  }
}

export default new globalSqa();
