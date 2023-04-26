class healthCare {
  navigate() {
    return cy.visit("https://katalon-demo-cura.herokuapp.com");
  }

  menuToggle() {
    return cy.get("#menu-toggle");
  }

  loginEl() {
    return cy.get(".sidebar-nav > li:nth-child(4)");
  }

  usernameEl() {
    return cy.get("#txt-username");
  }

  passwordEl() {
    return cy.get("#txt-password");
  }

  loginButton() {
    return cy.get("#btn-login");
  }

  logoutEl() {
    return cy.get(".sidebar-nav > li:nth-child(6)");
  }

  historyEl() {
    return cy.get("#sidebar-wrapper > ul > li:nth-child(4) > a");
  }

  appointmentButton() {
    return cy.get("#btn-make-appointment");
  }
}

export default new healthCare();
