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

  loginEmailEl() {
    return cy.get(
      "div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)"
    );
  }

  loginPasswordEl() {
    return cy.get("input[type=password]:nth-child(3)");
  }

  loginButton() {
    return cy.get("button[type=submit]:nth-child(4)");
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

  logoutButton() {
    return cy.get("div.col-sm-8 > div > ul > li:nth-child(4) > a");
  }

  contactUsEl() {
    return cy.get("div.col-sm-8 > div > ul > li:nth-child(8) > a")
  }

  contactUsName() {
    return cy.get("#contact-us-form > div:nth-child(2) > input")
  }

  contactUsEmail() {
    return cy.get("#contact-us-form > div:nth-child(3) > input")
  }

  contactUsSubject() {
    return cy.get("#contact-us-form > div:nth-child(4) > input")
  }

  contactUsMessage() {
    return cy.get("#message")
  }

  contactUsSubmitButton() {
    return cy.get("#contact-us-form > div:nth-child(7) > input")
  }
}

export default new automationExercise();
