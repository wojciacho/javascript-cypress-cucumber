class openMrs {
  navigate() {
    return cy.visit("https://demo.openmrs.org/openmrs/login.htm");
  }
}

export default new openMrs();
