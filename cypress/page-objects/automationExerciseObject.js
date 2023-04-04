class automationExercise {
  navigate() {
    return cy.visit("https://automationexercise.com/");
  }

  signUpEl() {
    return cy.get("div.col-sm-8 > div > ul > li:nth-child(4) > a");
  }

  signUpNameEl() {
    return cy.get("input[type=text]:nth-child(2)");
  }

  signUpEmailEl() {
    return cy.get("input[type=email]:nth-child(3)");
  }

  signUpButton() {
    return cy.get("button[type=submit]:nth-child(5)");
  }

  createAccountButton() {
    return cy.get("#form > div > div > div > div > form > button");
  }

  continueButton() {
    return cy.get("#form > div > div > div > div > a");
  }

  deleteAccountEl() {
    return cy.get(" div.col-sm-8 > div > ul > li:nth-child(5) > a");
  }
}

export default new automationExercise();
