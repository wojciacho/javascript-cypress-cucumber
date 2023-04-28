class globalSqa {
  navigate() {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  }

  customerLoginEl() {
    return cy.get("div.borderM.box.padT20 > div:nth-child(1) > button");
  }
}

export default new globalSqa