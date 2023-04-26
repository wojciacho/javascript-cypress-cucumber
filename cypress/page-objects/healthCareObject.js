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

  facilityEl() {
    return cy.get("#combo_facility");
  }

  readmissionCheckboxEl() {
    return cy.get("#chk_hospotal_readmission");
  }

  healthcareProgramEl() {
    return cy.get("#radio_program_medicaid");
  }

  visitDateEl() {
    return cy.get("#txt_visit_date");
  }

  commentEl() {
    return cy.get("#txt_comment");
  }

  bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }

  homepageButton() {
    return cy.get(".btn-default");
  }
}

export default new healthCare();
