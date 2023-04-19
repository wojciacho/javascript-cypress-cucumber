class demoBlazeStore {
  navigate() {
    return cy.visit("https://www.demoblaze.com");
  }

  phonesEl() {
    return cy.get("#itemc").contains("Phones");
  }

  nexusPhone() {
    return cy.get("#tbodyid > div:nth-child(3) > div > div > h4 > a");
  }
}

export default new demoBlazeStore();
