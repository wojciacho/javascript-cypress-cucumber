class openMrs {
  navigate() {
    return cy.visit("https://demo.openmrs.org/openmrs/login.htm");
  }

  usernameEl() {
    return cy.get("#username");
  }

  passwordEl() {
    return cy.get("#password");
  }

  loginButton() {
    return cy.get("#loginButton");
  }
}

export default new openMrs();
